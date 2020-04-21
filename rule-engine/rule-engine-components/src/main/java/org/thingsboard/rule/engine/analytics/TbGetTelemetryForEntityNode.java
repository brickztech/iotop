package org.thingsboard.rule.engine.analytics;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.google.common.util.concurrent.ListenableFuture;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.thingsboard.common.util.DonAsynchron;
import org.thingsboard.rule.engine.api.*;
import org.thingsboard.rule.engine.api.util.TbNodeUtils;
import org.thingsboard.rule.engine.data.DeviceRelationsQuery;
import org.thingsboard.server.common.data.Device;
import org.thingsboard.server.common.data.device.DeviceSearchQuery;
import org.thingsboard.server.common.data.id.EntityId;
import org.thingsboard.server.common.data.kv.Aggregation;
import org.thingsboard.server.common.data.kv.BaseReadTsKvQuery;
import org.thingsboard.server.common.data.kv.ReadTsKvQuery;
import org.thingsboard.server.common.data.kv.TsKvEntry;
import org.thingsboard.server.common.data.plugin.ComponentType;
import org.thingsboard.server.common.data.relation.EntityRelation;
import org.thingsboard.server.common.data.relation.EntitySearchDirection;
import org.thingsboard.server.common.data.relation.RelationsSearchParameters;
import org.thingsboard.server.common.msg.TbMsg;
import org.thingsboard.server.dao.device.DeviceService;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

import static org.thingsboard.rule.engine.api.TbRelationTypes.SUCCESS;
import static org.thingsboard.server.common.data.kv.Aggregation.NONE;

@Slf4j
@RuleNode(type = ComponentType.ENRICHMENT,
        name = "originator telemetry and sum",
        configClazz = TbGetTelemetryForEntityNodeConfiguration.class,
        nodeDescription = "Get Entity Telemetry for selected time range, aggregate it and add it to Message Data\n",
        nodeDetails = "Test node stuff",
        uiResources = {"static/rulenode/custom-nodes-config.js"},
        configDirective = "tbEnrichmentNodeGetTelemetryAndSumConfig")
public class TbGetTelemetryForEntityNode implements TbNode {

    private static final String ASC_ORDER = "ASC";

    private TbGetTelemetryForEntityNodeConfiguration config;
    private String inputKey;
    private ObjectMapper mapper;
    private String outputKey;
    private int limit;
    private Aggregation aggregation;

    @Override
    public void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException {
        this.config = TbNodeUtils.convert(configuration, TbGetTelemetryForEntityNodeConfiguration.class);
        inputKey = config.getInputKey();
        limit = 10000;
        mapper = new ObjectMapper();
        mapper.configure(JsonGenerator.Feature.QUOTE_FIELD_NAMES, false);
        mapper.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);
        outputKey = config.getOutputKey();
        aggregation = config.getAggregation();

    }

    @Override
    public void onMsg(TbContext ctx, TbMsg msg) throws ExecutionException, InterruptedException, TbNodeException {
        if (inputKey.equals("") || outputKey.equals("")) {
            ctx.tellFailure(msg, new IllegalStateException("Telemetry is not selected!"));
        } else {
            DeviceRelationsQuery deviceRelationsQuery = new DeviceRelationsQuery();
            deviceRelationsQuery.setDirection(EntitySearchDirection.FROM);
            deviceRelationsQuery.setMaxLevel(2);
            deviceRelationsQuery.setRelationType(EntityRelation.CONTAINS_TYPE);
            deviceRelationsQuery.setDeviceTypes(Collections.singletonList("villanyóra"));
            try {
                DeviceService deviceService = ctx.getDeviceService();
                DeviceSearchQuery query = buildQuery(msg.getOriginator(), deviceRelationsQuery);

                ListenableFuture<List<Device>> devices = deviceService.findDevicesByQuery(ctx.getTenantId(), query);
                DonAsynchron.withCallback(devices, deviceList -> {
                    List<TsKvEntry> telemetryData = Collections.synchronizedList(new ArrayList<>());
                    for (Device device: deviceList) {
                        ListenableFuture<List<TsKvEntry>> list = ctx.getTimeseriesService().findAll(ctx.getTenantId(), device.getId(), Collections.singletonList(buildQueries(msg)));
                        DonAsynchron.withCallback(list, telemetry -> {
                            synchronized (telemetryData) {
                                telemetryData.addAll(telemetry);
                            }
                        }, error -> ctx.tellFailure(msg, error), ctx.getDbCallbackExecutor());
                    }
                    double result = process(telemetryData);
                    TbMsg newMsg = null;
                    try {
                        newMsg = ctx.newMsg(msg.getType(), msg.getOriginator(), msg.getMetaData(), mapper.writeValueAsString(mapper.createObjectNode().put(outputKey, result)));
                    } catch (JsonProcessingException e) {
                        ctx.tellFailure(msg, e);
                    }
                    ctx.tellNext(newMsg, SUCCESS);
                }, error -> ctx.tellFailure(msg, error), ctx.getDbCallbackExecutor());
            } catch (Exception e) {
                ctx.tellFailure(msg, e);
            }
        }

    }

    @Override
    public void destroy() {

    }

    private ReadTsKvQuery buildQueries(TbMsg msg) {
        return new BaseReadTsKvQuery(inputKey, getInterval(msg).getStartTs(), getInterval(msg).getEndTs(), 1, limit, NONE, ASC_ORDER);
    }

    private double process(List<TsKvEntry> entries) {
        ObjectNode resultNode = mapper.createObjectNode();
        entries.forEach(entry -> processArray(resultNode, entry));
        Map<String, JsonNode> data = new ConcurrentHashMap<>();

        if (resultNode.has(inputKey)) {
            data.put(inputKey, resultNode.get(inputKey));
        }


        double sum = 0;
        double min = data.get(inputKey).get(0).get("value").asDouble();
        double max = data.get(inputKey).get(0).get("value").asDouble();
        for (JsonNode field : data.get(inputKey)) {
            if (!field.get("value").isNull()) {
                double element = field.get("value").asDouble();
                sum += element;
                if (element > max) {
                    max = element;
                } else if (element < min) {
                    min = element;
                }
            }
        }
        switch (aggregation) {
            case AVG:
                return sum / data.get(inputKey).size();
            case MIN:
                return min;
            case MAX:
                return max;
            case SUM:
                return sum;
            case COUNT:
                return data.get(inputKey).size();
            default:
                throw new NoSuchElementException("There is no such aggregation option");
        }
    }

    private void processArray(ObjectNode node, TsKvEntry entry) {
        if (node.has(entry.getKey())) {
            ArrayNode arrayNode = (ArrayNode) node.get(entry.getKey());
            arrayNode.add(buildNode(entry));
        } else {
            ArrayNode arrayNode = mapper.createArrayNode();
            arrayNode.add(buildNode(entry));
            node.set(entry.getKey(), arrayNode);
        }
    }

    private ObjectNode buildNode(TsKvEntry entry) {
        ObjectNode obj = mapper.createObjectNode()
                .put("ts", entry.getTs());
        switch (entry.getDataType()) {
            case STRING:
                obj.put("value", entry.getValueAsString());
                break;
            case LONG:
                obj.put("value", entry.getLongValue().get());
                break;
            case BOOLEAN:
                obj.put("value", entry.getBooleanValue().get());
                break;
            case DOUBLE:
                obj.put("value", entry.getDoubleValue().get());
                break;
        }
        return obj;
    }

    private TbGetTelemetryForEntityNode.Interval getInterval(TbMsg msg) {
        TbGetTelemetryForEntityNode.Interval interval = new TbGetTelemetryForEntityNode.Interval();
        long ts = System.currentTimeMillis();
        interval.setStartTs(ts-TimeUnit.valueOf("SECONDS").toMillis(Integer.parseInt(msg.getMetaData().getValue("interval"))));
        interval.setEndTs(ts);
        return interval;
    }

    private DeviceSearchQuery buildQuery(EntityId originator, DeviceRelationsQuery deviceRelationsQuery) {
        DeviceSearchQuery query = new DeviceSearchQuery();
        RelationsSearchParameters parameters = new RelationsSearchParameters(originator,
                deviceRelationsQuery.getDirection(), deviceRelationsQuery.getMaxLevel(), deviceRelationsQuery.isFetchLastLevelOnly());
        query.setParameters(parameters);
        query.setRelationType(deviceRelationsQuery.getRelationType());
        query.setDeviceTypes(deviceRelationsQuery.getDeviceTypes());
        return query;
    }

    @Data
    @NoArgsConstructor
    private static class Interval {
        private Long startTs;
        private Long endTs;
    }
}

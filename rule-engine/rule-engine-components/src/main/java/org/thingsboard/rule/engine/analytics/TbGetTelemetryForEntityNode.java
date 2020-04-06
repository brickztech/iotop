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
import org.thingsboard.server.common.data.kv.BaseReadTsKvQuery;
import org.thingsboard.server.common.data.kv.ReadTsKvQuery;
import org.thingsboard.server.common.data.kv.TsKvEntry;
import org.thingsboard.server.common.data.plugin.ComponentType;
import org.thingsboard.server.common.msg.TbMsg;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

import static org.thingsboard.rule.engine.api.TbRelationTypes.SUCCESS;
import static org.thingsboard.rule.engine.analytics.TbGetTelemetryForEntityNodeConfiguration.*;
import static org.thingsboard.server.common.data.kv.Aggregation.NONE;

@Slf4j
@RuleNode(type = ComponentType.ENRICHMENT,
        name = "originator telemetry and sum",
        configClazz = TbGetTelemetryForEntityNodeConfiguration.class,
        nodeDescription = "Get Selected Entity Telemetry for selected time range, sum it and add it to Message Data\n",
        nodeDetails = "Test node stuff",
        uiResources = {"static/rulenode/sum-node-config.js"},
        configDirective = "tbEnrichmentNodeGetTelemetryAndSum")
public class TbGetTelemetryForEntityNode implements TbNode {

    private static final String ASC_ORDER = "ASC";

    private TbGetTelemetryForEntityNodeConfiguration config;
    private String tsKeyName;
    private int limit;
    private ObjectMapper mapper;
    private String outputKey;

    @Override
    public void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException {
        this.config = TbNodeUtils.convert(configuration, TbGetTelemetryForEntityNodeConfiguration.class);
        //tsKeyName = config.getLatestTsKeyName();
        //limit = validateLimit(config.getLimit());
        mapper = new ObjectMapper();
        mapper.configure(JsonGenerator.Feature.QUOTE_FIELD_NAMES, false);
        mapper.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);
        outputKey = config.getOutputKey();
    }

    @Override
    public void onMsg(TbContext ctx, TbMsg msg) throws ExecutionException, InterruptedException, TbNodeException {
        if (tsKeyName.equals("")) {
            ctx.tellFailure(msg, new IllegalStateException("Telemetry is not selected!"));
        } else {
            try {
                ListenableFuture<List<TsKvEntry>> list = ctx.getTimeseriesService().findAll(ctx.getTenantId(), msg.getOriginator(), Collections.singletonList(buildQueries(msg)));
                DonAsynchron.withCallback(list, data -> {
                    double sum = process(data, msg);
                    TbMsg newMsg = null;
                    try {
                        newMsg = ctx.newMsg(msg.getType(), msg.getOriginator(), msg.getMetaData(), mapper.writeValueAsString(mapper.createObjectNode().put(outputKey, sum)));
                    } catch (JsonProcessingException e) {
                        ctx.tellFailure(msg, e);
                    }
                    // TbMsg newMsg = ctx.transformMsg(msg, msg.getType(), msg.getOriginator(), msg.getMetaData(), msg.getData());
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
        return new BaseReadTsKvQuery(tsKeyName, getInterval(msg).getStartTs(), getInterval(msg).getEndTs(), 1, limit, NONE, ASC_ORDER);
    }

    private double process(List<TsKvEntry> entries, TbMsg msg) {
        ObjectNode resultNode = mapper.createObjectNode();
        entries.forEach(entry -> processArray(resultNode, entry));
        Map<String, JsonNode> data = new ConcurrentHashMap<>();

        if (resultNode.has(tsKeyName)) {
            data.put(tsKeyName, resultNode.get(tsKeyName));
        }

        double sum = 0;
        for (Map.Entry<String, JsonNode> field : data.entrySet()) {
            if (!field.getValue().isNull()) {
                sum += field.getValue().asDouble();
            }
        }
        return sum;
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
        /*interval.setStartTs(ts - TimeUnit.valueOf(config.getStartIntervalTimeUnit()).toMillis(config.getStartInterval()));
        interval.setEndTs(ts - TimeUnit.valueOf(config.getEndIntervalTimeUnit()).toMillis(config.getEndInterval()));*/
        return interval;
    }

    private int validateLimit(int limit) {
        if (limit != 0) {
            return limit;
        } else {
            return /*MAX_FETCH_SIZE*/ 1000;
        }
    }

    @Data
    @NoArgsConstructor
    private static class Interval {
        private Long startTs;
        private Long endTs;
    }
}

package org.thingsboard.rule.engine.analytics;

import com.datastax.driver.core.utils.UUIDs;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.google.common.util.concurrent.Futures;
import com.google.common.util.concurrent.ListenableFuture;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.thingsboard.common.util.DonAsynchron;
import org.thingsboard.rule.engine.api.*;
import org.thingsboard.rule.engine.api.util.TbNodeUtils;
import org.thingsboard.rule.engine.data.DeviceRelationsQuery;
import org.thingsboard.server.common.data.Device;
import org.thingsboard.server.common.data.device.DeviceSearchQuery;
import org.thingsboard.server.common.data.id.DeviceId;
import org.thingsboard.server.common.data.id.EntityId;
import org.thingsboard.server.common.data.kv.*;
import org.thingsboard.server.common.data.plugin.ComponentType;
import org.thingsboard.server.common.data.relation.RelationsSearchParameters;
import org.thingsboard.server.common.msg.TbMsg;
import org.thingsboard.server.common.msg.TbMsgDataType;
import org.thingsboard.server.common.msg.TbMsgMetaData;
import org.thingsboard.server.common.msg.session.SessionMsgType;
import org.thingsboard.server.dao.device.DeviceService;

import java.util.*;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.stream.DoubleStream;

import static org.thingsboard.common.util.DonAsynchron.withCallback;
import static org.thingsboard.rule.engine.api.TbRelationTypes.SUCCESS;

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
    private ObjectMapper mapper;

    @Override
    public void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException {
        this.config = TbNodeUtils.convert(configuration, TbGetTelemetryForEntityNodeConfiguration.class);
        mapper = new ObjectMapper();
    }

    private Aggregation getAggregation() {
        if (StringUtils.isNotBlank(config.getAggregateFunction()))
            return Aggregation.valueOf(config.getAggregateFunction());
        return Aggregation.SUM;
    }

    @Override
    public void onMsg(TbContext ctx, TbMsg msg) {
        if (StringUtils.isBlank(config.getInputKey()) || StringUtils.isBlank(config.getOutputKey())) {
            ctx.tellFailure(msg, new IllegalStateException("Telemetry is not selected!"));
        } else {
            DeviceService deviceService = ctx.getDeviceService();
            DeviceSearchQuery query = buildQuery(msg.getOriginator(), config.getDeviceRelationsQuery());

            ListenableFuture<List<Device>> devices = deviceService.findDevicesByQuery(ctx.getTenantId(), query);
            withCallback(devices, deviceList -> {
                try {
                    List<TsKvEntry> telemetryData = Collections.synchronizedList(new ArrayList<>());
                    for (Device device: deviceList) {
                        ListenableFuture<List<TsKvEntry>> list = ctx.getTimeseriesService().findAll(ctx.getTenantId(), device.getId(), Collections.singletonList(buildQueries(msg)));
                        telemetryData.addAll(list.get());
                    }
                    Double aggregatedValue = aggregateTelemetry(telemetryData);
                    TbMsgMetaData metaData = new TbMsgMetaData();
                    String data = mapper.writeValueAsString(mapper.createObjectNode().put(config.getOutputKey(), aggregatedValue));
                    TbMsg newMsg = ctx.newMsg(msg.getType(), msg.getOriginator(), metaData, data);
                    ctx.tellNext(newMsg, SUCCESS);
                } catch (InterruptedException | ExecutionException | JsonProcessingException e) {
                    log.error("Could not send message", e);
                    ctx.tellFailure(msg, e);
                }
            }, error -> ctx.tellFailure(msg, error), ctx.getDbCallbackExecutor());
        }
    }

    @Override
    public void destroy() {

    }

    private ReadTsKvQuery buildQueries(TbMsg msg) {
        Interval interval = getInterval(msg);
        return new BaseReadTsKvQuery(config.getInputKey(), interval.getStartTs(), interval.getEndTs(), interval.getEndTs() - interval.getStartTs(), 1, getAggregation(), ASC_ORDER);
    }

    private double aggregateTelemetry(List<TsKvEntry> entries) {
        DoubleStream stream = entries.stream().mapToDouble(this::getDoubleValueFromEntity);
        switch (getAggregation()) {
            case AVG: return stream.average().getAsDouble();
            case MIN: return stream.min().getAsDouble();
            case MAX: return stream.max().getAsDouble();
            case SUM: return stream.sum();
        }
        throw new IllegalArgumentException("Invalid aggregation [" + getAggregation() + "]");
    }

    private Double getDoubleValueFromEntity(TsKvEntry entry) {
        switch (entry.getDataType()) {
            case DOUBLE: return entry.getDoubleValue().get();
            case LONG: return entry.getLongValue().get().doubleValue();
        }
        throw new IllegalArgumentException("Invalid data type [" + entry.getDataType() + "] for aggregation");
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

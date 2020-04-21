package org.thingsboard.rule.engine.analytics;

import lombok.Data;
import org.thingsboard.rule.engine.api.NodeConfiguration;
import org.thingsboard.server.common.data.kv.Aggregation;

@Data
public class TbGetTelemetryForEntityNodeConfiguration implements NodeConfiguration<TbGetTelemetryForEntityNodeConfiguration> {

    private String aggregateFunction;
    private String inputKey;
    private String outputKey;

    @Override
    public TbGetTelemetryForEntityNodeConfiguration defaultConfiguration() {
        TbGetTelemetryForEntityNodeConfiguration configuration = new TbGetTelemetryForEntityNodeConfiguration();
        configuration.setAggregateFunction(Aggregation.SUM.toString());
        configuration.setInputKey("power");
        configuration.setOutputKey("PowerSum");
        return configuration;
    }

    public Aggregation getAggregation() {
        if (aggregateFunction != null)
            return Aggregation.valueOf(aggregateFunction);
        return Aggregation.SUM;
    }
}

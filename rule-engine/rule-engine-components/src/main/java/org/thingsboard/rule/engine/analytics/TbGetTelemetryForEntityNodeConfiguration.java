package org.thingsboard.rule.engine.analytics;

import lombok.Data;
import org.thingsboard.rule.engine.api.NodeConfiguration;
import org.thingsboard.server.common.data.kv.Aggregation;

@Data
public class TbGetTelemetryForEntityNodeConfiguration implements NodeConfiguration<TbGetTelemetryForEntityNodeConfiguration> {

    private String inputKey;
    private String outputKey;
    private Aggregation aggregation;

    @Override
    public TbGetTelemetryForEntityNodeConfiguration defaultConfiguration() {
        TbGetTelemetryForEntityNodeConfiguration configuration = new TbGetTelemetryForEntityNodeConfiguration();
        configuration.setAggregation(Aggregation.SUM);
        configuration.setInputKey("power");
        configuration.setOutputKey("PowerSum");
        return configuration;
    }
}

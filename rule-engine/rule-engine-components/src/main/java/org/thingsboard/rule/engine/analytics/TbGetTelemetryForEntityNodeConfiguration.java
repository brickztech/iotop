package org.thingsboard.rule.engine.analytics;

import lombok.Data;
import org.thingsboard.rule.engine.api.NodeConfiguration;

@Data
public class TbGetTelemetryForEntityNodeConfiguration implements NodeConfiguration<TbGetTelemetryForEntityNodeConfiguration> {

    private String inputKey;
    private String outputKey;
    private Aggregations aggregation;
    public enum Aggregations {
        AVG,
        MAX,
        MIN,
        SUM
    };

    @Override
    public TbGetTelemetryForEntityNodeConfiguration defaultConfiguration() {
        TbGetTelemetryForEntityNodeConfiguration configuration = new TbGetTelemetryForEntityNodeConfiguration();
        configuration.setAggregation(Aggregations.SUM);
        configuration.setInputKey("power");
        configuration.setOutputKey("PowerSum");
        return configuration;
    }
}

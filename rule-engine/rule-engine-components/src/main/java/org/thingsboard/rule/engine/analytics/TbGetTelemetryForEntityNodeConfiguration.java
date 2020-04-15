package org.thingsboard.rule.engine.analytics;

import lombok.Data;
import org.thingsboard.rule.engine.api.NodeConfiguration;

import java.util.concurrent.TimeUnit;

@Data
public class TbGetTelemetryForEntityNodeConfiguration implements NodeConfiguration<TbGetTelemetryForEntityNodeConfiguration> {

    /*public static final int MAX_FETCH_SIZE = 1000;
    private int startInterval;
    private int endInterval;

    private String startIntervalTimeUnit;
    private String endIntervalTimeUnit;
    private int limit;*/

    private String inputKey;
    private String outputKey;

    @Override
    public TbGetTelemetryForEntityNodeConfiguration defaultConfiguration() {
        TbGetTelemetryForEntityNodeConfiguration configuration = new TbGetTelemetryForEntityNodeConfiguration();
        //configuration.setLatestTsKeyName("");
        /*configuration.setStartIntervalTimeUnit(TimeUnit.MINUTES.name());
        configuration.setStartInterval(2);
        configuration.setEndIntervalTimeUnit(TimeUnit.MINUTES.name());
        configuration.setEndInterval(1);
        configuration.setLimit(MAX_FETCH_SIZE);*/
        configuration.setInputKey("power");
        configuration.setOutputKey("PowerSum");
        return configuration;
    }
}

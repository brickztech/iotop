package org.thingsboard.rule.engine.transform;

import lombok.Data;
import org.thingsboard.rule.engine.api.NodeConfiguration;


@Data
public class TbCalculateSumNodeConfiguration implements NodeConfiguration<TbCalculateSumNodeConfiguration> {

    private String inputKey;
    private String outputKey;

    @Override
    public TbCalculateSumNodeConfiguration defaultConfiguration() {
        TbCalculateSumNodeConfiguration configuration = new TbCalculateSumNodeConfiguration();
        configuration.setInputKey("temperature");
        configuration.setOutputKey("TemperatureSum");
        return configuration;
    }

}

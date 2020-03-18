package org.thingsboard.rule.engine.metadata;

import lombok.Data;
import org.thingsboard.rule.engine.api.NodeConfiguration;

/**
 * Created by mshvayka on 10.08.18.
 */
@Data
public class TbGetSumIntoMetadataConfiguration implements NodeConfiguration<TbGetSumIntoMetadataConfiguration> {

    private String inputKey;
    private String outputKey;


    @Override
    public TbGetSumIntoMetadataConfiguration defaultConfiguration() {
        TbGetSumIntoMetadataConfiguration configuration = new TbGetSumIntoMetadataConfiguration();
        configuration.setInputKey("temperature");
        configuration.setOutputKey("TemperatureSum");
        return configuration;
    }
}
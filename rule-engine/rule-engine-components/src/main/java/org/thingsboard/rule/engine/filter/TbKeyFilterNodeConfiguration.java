package org.thingsboard.rule.engine.filter;

import lombok.Data;
import org.thingsboard.rule.engine.api.NodeConfiguration;

@Data
public class TbKeyFilterNodeConfiguration implements NodeConfiguration<TbKeyFilterNodeConfiguration> {

    private String key;

    @Override
    public TbKeyFilterNodeConfiguration defaultConfiguration() {
        TbKeyFilterNodeConfiguration configuration = new TbKeyFilterNodeConfiguration();
        configuration.setKey(null);
        return configuration;
    }
}
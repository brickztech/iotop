package org.thingsboard.rule.engine.metadata;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.thingsboard.rule.engine.api.*;
import org.thingsboard.rule.engine.api.util.TbNodeUtils;
import org.thingsboard.server.common.data.plugin.ComponentType;
import org.thingsboard.server.common.msg.TbMsg;

import java.io.IOException;
import java.util.Iterator;
import java.util.concurrent.ExecutionException;

import static org.thingsboard.rule.engine.api.TbRelationTypes.FAILURE;
import static org.thingsboard.rule.engine.api.TbRelationTypes.SUCCESS;

/**
 * Created by mshvayka on 10.08.18.
 */
@RuleNode(
        type = ComponentType.ENRICHMENT,
        name = "get sum into metadata",
        configClazz = TbGetSumIntoMetadataConfiguration.class,
        nodeDescription = "Calculate Sum of the telemetry data, which fields begin with the specified prefix and add the result into Message Metadata ",
        nodeDetails = "If fields in Message payload start with the <code>Input Key</code>, Sum of this fields added into metadata.",
        uiResources = {"static/rulenode/custom-nodes-config.js"},
        configDirective = "tbEnrichmentNodeSumIntoMetadataConfig")
public class TbGetSumIntoMetadata implements TbNode {

    private static final ObjectMapper mapper = new ObjectMapper();

    private TbGetSumIntoMetadataConfiguration config;
    private String inputKey;
    private String outputKey;

    @Override
    public void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException {
        this.config = TbNodeUtils.convert(configuration, TbGetSumIntoMetadataConfiguration.class);
        inputKey = config.getInputKey();
        outputKey = config.getOutputKey();
    }


    @Override
    public void onMsg(TbContext ctx, TbMsg msg) throws ExecutionException, InterruptedException, TbNodeException {
        double sum = 0;
        boolean hasRecords = false;
        try {
            JsonNode jsonNode = mapper.readTree(msg.getData());
            Iterator<String> iterator = jsonNode.fieldNames();
            while (iterator.hasNext()) {
                String field = iterator.next();
                if (field.startsWith(inputKey)) {
                    sum += jsonNode.get(field).asDouble();
                    hasRecords = true;
                }
            }
            if (hasRecords) {
                msg.getMetaData().putValue(outputKey, Double.toString(sum));
                msg = ctx.newMsg(msg.getType(), msg.getOriginator(), msg.getMetaData(), msg.getData());
                ctx.tellNext(msg, SUCCESS);
            } else {
                ctx.tellNext(msg, FAILURE, new Exception("Message doesn't contains the Input Key: " + inputKey));
            }
        } catch (IOException e) {
            ctx.tellFailure(msg, e);
        }
    }

    @Override
    public void destroy() {

    }
}
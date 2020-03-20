package org.thingsboard.rule.engine.transform;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.thingsboard.rule.engine.api.*;
import org.thingsboard.rule.engine.api.util.TbNodeUtils;
import org.thingsboard.server.common.data.plugin.ComponentType;
import org.thingsboard.server.common.msg.TbMsg;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.ExecutionException;

import static org.thingsboard.rule.engine.api.TbRelationTypes.FAILURE;
import static org.thingsboard.rule.engine.api.TbRelationTypes.SUCCESS;

@Slf4j
@RuleNode(
        type = ComponentType.TRANSFORMATION,
        name = "calculate sum",
        configClazz = TbCalculateSumNodeConfiguration.class,
        nodeDescription = "Calculates Sum of the telemetry data, which fields begin with the specified prefix. ",
        nodeDetails = "If fields in Message payload start with the <code>Input Key</code>, the Sum of these fields is added to the new Message payload.",
        uiResources = {"static/rulenode/custom-nodes-config.js"},
        configDirective = "tbTransformationNodeSumConfig")
public class TbCalculateSumNode implements TbNode {

    private static final ObjectMapper mapper = new ObjectMapper();

    private TbCalculateSumNodeConfiguration config;
    private String inputKey;
    private String outputKey;

    @Override
    public void init(TbContext ctx, TbNodeConfiguration configuration) throws TbNodeException {
        this.config = TbNodeUtils.convert(configuration, TbCalculateSumNodeConfiguration.class);
        inputKey = config.getInputKey();
        outputKey = config.getOutputKey();
    }

    @Override
    public void onMsg(TbContext ctx, TbMsg msg) throws ExecutionException, InterruptedException, TbNodeException {
        double sum = 0;
        boolean hasRecords = false;
        try {
            JsonNode jsonNode = mapper.readTree(msg.getMetaData().getValue(inputKey));
            Iterator<JsonNode> iterator = jsonNode.elements();
            while (iterator.hasNext()) {
                JsonNode field = iterator.next();
                if (field.has("value")) {
                    hasRecords = true;
                    sum += field.get("value").asDouble();
                }
            }
            if (hasRecords) {
                TbMsg newMsg = ctx.newMsg(msg.getType(), msg.getOriginator(), msg.getMetaData(), mapper.writeValueAsString(mapper.createObjectNode().put(outputKey, sum)));
                ctx.tellNext(newMsg, SUCCESS);
            } else {
                ctx.tellNext(msg, FAILURE, new Exception("Message doesn't contains the key: " + inputKey));
            }
        } catch (IOException e) {
            ctx.tellFailure(msg, e);
        }
    }

    @Override
    public void destroy() {
    }
}
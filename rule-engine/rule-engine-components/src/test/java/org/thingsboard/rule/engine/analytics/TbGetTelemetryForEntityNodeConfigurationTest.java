package org.thingsboard.rule.engine.analytics;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;
import org.thingsboard.server.common.data.kv.Aggregation;

import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.*;

@RunWith(MockitoJUnitRunner.class)
public class TbGetTelemetryForEntityNodeConfigurationTest {

    @Test
    public void testAggregationToString() {
        assertEquals("AVG", Aggregation.AVG.toString());
        assertNotEquals("avg", Aggregation.AVG.toString());
    }

    @Test
    public void testHashMapToJson() throws JsonProcessingException {
        Map<String, Double> data = new HashMap<>();
        String powerSum = "PowerSum";
        data.put(powerSum, 42.0);
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(data);
        assertEquals("{\"PowerSum\":42.0}", json);
    }

    @Test
    public void testObjectNodePut() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        String outputKey = "PowerSum";
        double aggregatedValue = 42.0;
        String json = mapper.writeValueAsString(mapper.createObjectNode().put(outputKey, aggregatedValue));
        assertEquals("{\"PowerSum\":42.0}", json);
        System.out.println(json);
    }

}
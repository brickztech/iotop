package org.thingsboard.rule.engine.analytics;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;
import org.thingsboard.server.common.data.kv.Aggregation;

import static org.junit.Assert.*;

@RunWith(MockitoJUnitRunner.class)
public class TbGetTelemetryForEntityNodeConfigurationTest {

    @Test
    public void testAggregationToString() {
        assertEquals("AVG", Aggregation.AVG.toString());
        assertNotEquals("avg", Aggregation.AVG.toString());
    }

}
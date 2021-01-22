package org.thingsboard.server;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonPrimitive;
import org.junit.Test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class GsonTest {

    @Test
    public void testParse() {
        String json = "{'power_a':4.05,'voltage_a':232,'current_a':15.5, 'text': 'hello'}";
        JsonObject jo = new Gson().fromJson(json, JsonObject.class);
        JsonPrimitive jp = jo.get("power_a").getAsJsonPrimitive();
        assertTrue(jp.isNumber());
        assertFalse(jp.isString());
        System.out.println(jp.getAsNumber().longValue());
        System.out.println(jp.getAsNumber().doubleValue());

        jp = jo.get("voltage_a").getAsJsonPrimitive();
        System.out.println(jp.getAsNumber().getClass().getName());
        assertTrue(jp.getAsNumber().doubleValue() == jp.getAsNumber().longValue());
    }
}

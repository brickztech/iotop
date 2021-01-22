package org.thingsboard.server.dao.util;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonPrimitive;
import org.thingsboard.server.common.data.kv.BasicTsKvEntry;
import org.thingsboard.server.common.data.kv.JsonDataEntry;
import org.thingsboard.server.common.data.kv.TsKvEntry;
import org.thingsboard.server.dao.model.sql.AbstractTsKvEntity;
import org.thingsboard.server.dao.model.sqlts.ts.TsKvEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class JsonUtil {

    public static TsKvEntry collapseEntry(List<TsKvEntry> entries) {
        Map<String, Object> jsonMap = entries.stream().collect(Collectors.toMap(TsKvEntry::getKey, TsKvEntry::getValue));
        String jsonStr = new Gson().toJson(jsonMap);
        JsonDataEntry jde = new JsonDataEntry(TsKvEntity.JSON_DATA_KEY, jsonStr);
        BasicTsKvEntry entry = new BasicTsKvEntry(entries.get(0).getTs(), jde);
        return entry;
    }

    public static <T extends AbstractTsKvEntity> List<T> expandEntity(AbstractTsKvEntity entity, Class<T> typeClass) {
        List<T> entities = new ArrayList<>();
        JsonObject json = new Gson().fromJson(entity.getJsonValue(), JsonObject.class);
        for (Map.Entry<String, JsonElement> entry: json.entrySet()) {
            try {
                T newEntity = typeClass.newInstance();
                newEntity.setEntityId(entity.getEntityId());
                newEntity.setTs(entity.getTs());
                newEntity.setStrKey(entry.getKey());
                JsonUtil.setValueFromJsonElement(entry.getValue(), newEntity);
                entities.add(newEntity);
            } catch (InstantiationException | IllegalAccessException e) {
                throw new RuntimeException(e);
            }
        }
        return entities;
    }

    public static <T extends AbstractTsKvEntity> void setValueFromJsonElement(JsonElement element, T newEntity) {
        if (element.isJsonPrimitive()) {
            JsonPrimitive jsonPrimitive = element.getAsJsonPrimitive();
            if (jsonPrimitive.isBoolean()) {
                newEntity.setBooleanValue(jsonPrimitive.getAsBoolean());
            } else if (jsonPrimitive.isNumber()) {
                long longValue = jsonPrimitive.getAsLong();
                double doubleValue = jsonPrimitive.getAsDouble();
                if (longValue == doubleValue) {
                    newEntity.setLongValue(longValue);
                } else {
                    newEntity.setDoubleValue(doubleValue);
                }
            } else {
                newEntity.setStrValue(jsonPrimitive.getAsString());
            }
        } else {
            newEntity.setJsonValue(element.getAsString());
        }
    }

}

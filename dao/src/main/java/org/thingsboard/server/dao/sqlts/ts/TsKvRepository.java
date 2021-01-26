/**
 * Copyright © 2016-2020 The Thingsboard Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.thingsboard.server.dao.sqlts.ts;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.scheduling.annotation.Async;
import org.springframework.transaction.annotation.Transactional;
import org.thingsboard.server.dao.model.sqlts.ts.TsKvCompositeKey;
import org.thingsboard.server.dao.model.sqlts.ts.TsKvEntity;
import org.thingsboard.server.dao.util.SqlDao;

import java.util.List;
import java.util.UUID;
import java.util.concurrent.CompletableFuture;

@SqlDao
public interface TsKvRepository extends CrudRepository<TsKvEntity, TsKvCompositeKey> {

    @Query("SELECT tskv FROM TsKvEntity tskv WHERE tskv.entityId = :entityId " +
            "AND tskv.key = :entityKey AND tskv.ts > :startTs AND tskv.ts <= :endTs")
    List<TsKvEntity> findAllWithLimit(@Param("entityId") UUID entityId,
                                      @Param("entityKey") int key,
                                      @Param("startTs") long startTs,
                                      @Param("endTs") long endTs,
                                      Pageable pageable);

    @Transactional
    @Modifying
    @Query("DELETE FROM TsKvEntity tskv WHERE tskv.entityId = :entityId " +
            "AND tskv.key = :entityKey AND tskv.ts > :startTs AND tskv.ts <= :endTs")
    void delete(@Param("entityId") UUID entityId,
                @Param("entityKey") int key,
                @Param("startTs") long startTs,
                @Param("endTs") long endTs);

    @Async
    @Query(value = "SELECT :entityId as entity_id, :entityKey as key, :startTs as ts, t.str_v, " +
                   "       null as long_v, null as dbl_v, null as json_v, null as bool_v " +
                   "  FROM (select max(json_v ->> :keyStr) as str_v from ts_kv " +
                   "         where entity_id = :entityId AND key = :entityKey AND ts > :startTs AND ts <= :endTs " +
                   "           and json_typeof(json_v -> :keyStr) = 'string') t ",
            nativeQuery = true)
    CompletableFuture<TsKvEntity> findStringMax(@Param("entityId") UUID entityId,
                                                @Param("entityKey") int entityKey,
                                                @Param("keyStr") String keyStr,
                                                @Param("startTs") long startTs,
                                                @Param("endTs") long endTs);

    @Async
    @Query(value = "SELECT :entityId as entity_id, :entityKey as key, :startTs as ts, t.dbl_v, " +
                   "       null as long_v, null as str_v, null as json_v, null as bool_v " +
                   "  FROM (select max(cast(json_v ->> :keyStr as double precision)) as dbl_v from ts_kv " +
                   "         where entity_id = :entityId AND key = :entityKey AND ts > :startTs AND ts <= :endTs " +
                   "           and json_typeof(json_v -> :keyStr) = 'number') t ",
            nativeQuery = true)
    CompletableFuture<TsKvEntity> findNumericMax(@Param("entityId") UUID entityId,
                                          @Param("entityKey") int entityKey,
                                          @Param("keyStr") String keyStr,
                                          @Param("startTs") long startTs,
                                          @Param("endTs") long endTs);


    @Async
    @Query(value = "SELECT :entityId as entity_id, :entityKey as key, :startTs as ts, t.str_v, " +
                   "       null as long_v, null as dbl_v, null as json_v, null as bool_v " +
                   "  FROM (select min(json_v ->> :keyStr) as str_v from ts_kv " +
                   "         where entity_id = :entityId AND key = :entityKey AND ts > :startTs AND ts <= :endTs " +
                   "           and json_typeof(json_v -> :keyStr) = 'string') t ",
            nativeQuery = true)
    CompletableFuture<TsKvEntity> findStringMin(@Param("entityId") UUID entityId,
                                          @Param("entityKey") int entityKey,
                                          @Param("keyStr") String keyStr,
                                          @Param("startTs") long startTs,
                                          @Param("endTs") long endTs);

    @Async
    @Query(value = "SELECT :entityId as entity_id, :entityKey as key, :startTs as ts, t.dbl_v, " +
                   "       null as long_v, null as str_v, null as json_v, null as bool_v " +
                   "  FROM (select min(cast(json_v ->> :keyStr as double precision)) as dbl_v from ts_kv " +
                   "         where entity_id = :entityId AND key = :entityKey AND ts > :startTs AND ts <= :endTs " +
                   "           and json_typeof(json_v -> :keyStr) = 'number') t ",
            nativeQuery = true)
    CompletableFuture<TsKvEntity> findNumericMin(
                                          @Param("entityId") UUID entityId,
                                          @Param("entityKey") int entityKey,
                                          @Param("keyStr") String keyStr,
                                          @Param("startTs") long startTs,
                                          @Param("endTs") long endTs);

    @Async
    @Query(value = "SELECT :entityId as entity_id, :entityKey as key, :startTs as ts, t.long_v, " +
                   "       null as dbl_v, null as str_v, null as json_v, null as bool_v " +
                   "  FROM (select sum(case when json_v -> :keyStr is null then 0 else 1 end) as long_v from ts_kv " +
                   "         where entity_id = :entityId AND key = :entityKey AND ts > :startTs AND ts <= :endTs) t ",
            nativeQuery = true)
    CompletableFuture<TsKvEntity> findCount(@Param("entityId") UUID entityId,
                                            @Param("entityKey") int entityKey,
                                            @Param("keyStr") String keyStr,
                                            @Param("startTs") long startTs,
                                            @Param("endTs") long endTs);

    @Async
    @Query(value = "SELECT :entityId as entity_id, :entityKey as key, :startTs as ts, t.dbl_v, " +
                   "       null as long_v, null as str_v, null as json_v, null as bool_v " +
                   "  FROM (select avg(cast(json_v ->> :keyStr as double precision)) as dbl_v from ts_kv " +
                   "         where entity_id = :entityId AND key = :entityKey AND ts > :startTs AND ts <= :endTs " +
                   "           and json_typeof(json_v -> :keyStr) = 'number') t ",
           nativeQuery = true)
    CompletableFuture<TsKvEntity> findAvg(@Param("entityId") UUID entityId,
                                          @Param("entityKey") int entityKey,
                                          @Param("keyStr") String keyStr,
                                          @Param("startTs") long startTs,
                                          @Param("endTs") long endTs);

    @Async
    @Query(value = "SELECT :entityId as entity_id, :entityKey as key, :startTs as ts, t.dbl_v, " +
                   "       null as long_v, null as str_v, null as json_v, null as bool_v " +
                   "  FROM (select sum(cast(json_v ->> :keyStr as double precision)) as dbl_v from ts_kv " +
                   "         where entity_id = :entityId AND key = :entityKey AND ts > :startTs AND ts <= :endTs " +
                   "           and json_typeof(json_v -> :keyStr) = 'number') t ",
            nativeQuery = true)
    CompletableFuture<TsKvEntity> findSum(@Param("entityId") UUID entityId,
                                          @Param("entityKey") int entityKey,
                                          @Param("keyStr") String keyStr,
                                          @Param("startTs") long startTs,
                                          @Param("endTs") long endTs);

}

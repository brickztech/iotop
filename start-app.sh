#!/bin/bash

# export DATABASE_TS_TYPE=cassandra
# export DATABASE_ENTITIES_TYPE=cassandra
# export CASSANDRA_URL=localhost:9042

java -jar -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 -Dlogging.config=logback.xml ./application/target/thingsboard-2.5.5-boot.jar
# java -jar -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 ./application/target/thingsboard-2.5.5-boot.jar

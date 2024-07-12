#!/bin/bash

# nvm use v12.22.8
export JAVA_HOME=/usr/lib/jvm/java-1.11.0-openjdk-amd64/

cd common/dao-api
mvn clean install -DskipTests -Dlicense.skip=true

cd ../../dao
mvn clean install -DskipTests -Dlicense.skip=true

cd ../application
mvn clean install -P develop,packaging


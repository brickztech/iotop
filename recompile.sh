#!/bin/bash

cd common/dao-api
mvn clean install -DskipTests -Dlicense.skip=true

cd ../../dao
mvn clean install -DskipTests -Dlicense.skip=true

cd ../application
mvn clean install -P develop,packaging


#!/bin/bash

start-db.sh

psql -U postgres -d postgres -f /data/dump/thingsboard -L /data/dump/thingsboard-restore.log

stop-db.sh

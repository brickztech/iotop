# backup db
docker exec mytb mkdir /data/dump
docker exec mytb pg_dump -U postgres -d thingsboard --clean --create -f /data/dump/thingsboard

# restore db
docker exec -ti -v mytb_data:/data brickztech/iotop-postgres:2.4.3 /bin/bash
sudo chown -R postgres:postgres /data/dump
start.db.sh
psql -U postgres -d postgres -f /data/dump/thingsboard -L /data/dump/restore.log
stop-db.sh
ctrl+d
docker stop mytb

# upgrade postgres 9.6 to 11
docker pull brickztech/iotop-postgres-11:2.4.3
docker run -ti -p 9090:9090 -p 1883:1883 -p 5683:5683/udp -v mytb_data_11:/data -v mytb_logs_11:/var/log/thingsboard --name mytb_11 brickztech/iotop-postgres-11:2.4.3
# open new terminal
docker exec mytb_11 mkdir /data/dump
docker cp thingsboard mytb_11:/data/dump
docker exec mytb_11 chown -R /data/dump
docker stop mytb_11
docker run -ti -v mytb_data_11:/data --rm brickztech/iotop-postgres-11:2.4.3 upgrade-tb.sh

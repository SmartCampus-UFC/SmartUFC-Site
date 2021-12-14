#!/bin/bash
#
#  curl commands to reload the data from the previous tutorial
#
#

set -e

printf "Provisioning IoT devices "


#
# Create a service groups for all UltraLight IoT devices
#


curl -s -o /dev/null -X POST \
  "http://iot-agent:$IOTA_NORTH_PORT/iot/services" \
  -H 'Content-Type: application/json' \
  -H 'fiware-service: smartufc' \
  -H 'fiware-servicepath: /campuspici/building/bloco942a' \
  -d '{
 "services": [
   {
     "apikey":      "scggokgpepnvsb2uv4s40d59oo",
     "cbroker":     "'"http://orion:$ORION_PORT"'",
     "entity_type": "Thing",
     "timezone":    "America/Fortaleza",
     "resource":    ""
   }
 ]
}'

curl -s -o /dev/null -X POST \
  "http://iot-agent:$IOTA_NORTH_PORT/iot/devices" \
  -H 'Content-Type: application/json' \
  -H 'fiware-service: smartufc' \
  -H 'fiware-servicepath: /campuspici/building/bloco942a' \
  -d '{
 "devices": [
   {
     "device_id":   "temperatureSensor001001001",
     "entity_name": "urn:ngsi-ld:TemperatureSensor:001001001",
     "entity_type": "TemperatureSensor",
     "protocol":    "PDI-IoTA-UltraLight",
     "transport":   "MQTT",
     "timezone":    "America/Fortaleza",
     "attributes": [
       { "object_id": "t", "name": "temperature", "type": "Float"},
       { "object_id": "h", "name": "humidity", "type": "Float"}
     ],
     "static_attributes": [
       { "name":"refRoom", "type": "Relationship", "value": "urn:ngsi-ld:Room:001"}
     ]
   }
 ]
}
'

echo -e " \033[1;32mdone\033[0m"
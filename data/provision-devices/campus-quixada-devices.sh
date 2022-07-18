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
  -H 'fiware-servicepath: /campusquixada' \
  -d '{
 "services": [
   {
     "apikey":"scggokgpepnvsb2uv4s40d59o1",
     "cbroker":"'"http://orion:$ORION_PORT"'",
     "entity_type":"TemperatureSensor",
     "timezone":"America/Fortaleza",
     "resource":"",
     "attributes": [
          { "object_id": "t", "name": "temperature", "type": "Number"},
          { "object_id": "h", "name": "humidity", "type": "Number"}
     ],
     "static_attributes": [
          {"name": "category", "type":"Text", "value": ["sensor"]},
          {"name": "controlledProperty", "type": "Text", "value": "temperature"},
          {"name": "function", "type": "Text", "value":["sensing"]},
          {"name": "supportedProtocol", "type": "Text", "value": ["ul20"]}
     ]
   },
   {
     "apikey":"scggokgpepnvsb2uv4s40d59o2",
     "cbroker":"'"http://orion:$ORION_PORT"'",
     "entity_type":"AirConditioner",
     "timezone":"America/Fortaleza",
     "resource":"",
     "attributes":[
       { "object_id": "s", "name": "state", "type": "Text"}
     ],
     "commands": [
        { "name": "on", "type": "command" },
        { "name": "off", "type": "command" }
     ],
     "static_attributes": [
          {"name": "category", "type":"Text", "value": ["actuator"]},
          {"name": "controlledProperty", "type": "Text", "value": "state"},
          {"name": "function", "type": "Text", "value":["onOff"]},
          {"name": "supportedProtocol", "type": "Text", "value": ["ul20"]}
     ]
   },
   {
     "apikey":"scggokgpepnvsb2uv4s40d59o3",
     "cbroker":"'"http://orion:$ORION_PORT"'",
     "entity_type":"Lamp",
     "timezone":"America/Fortaleza",
     "resource":"",
     "attributes":[
       { "object_id": "s", "name": "state", "type": "Text"}
     ],
     "commands": [
        { "name": "on", "type": "command" },    
        { "name": "off", "type": "command" }
     ],
     "static_attributes": [
          {"name": "category", "type":"Text", "value": ["actuator"]},
          {"name": "controlledProperty", "type": "Text", "value": "state"},
          {"name": "function", "type": "Text", "value":["onOff"]},
          {"name": "supportedProtocol", "type": "Text", "value": ["ul20"]}
     ]
   },
   {
     "apikey":"scggokgpepnvsb2uv4s40d59o4",
     "cbroker":"'"http://orion:$ORION_PORT"'",
     "entity_type":"Door",
     "timezone":"America/Fortaleza",
     "resource":"",
     "commands": [ 
        {"name": "unlock","type": "command"},
        {"name": "lock","type": "command"}
      ],
     "attributes": [
        {"object_id": "s", "name": "state", "type":"Text"}
      ],
     "static_attributes": [
          {"name": "category", "type":"Text", "value": ["actuator"]},
          {"name": "controlledProperty", "type": "Text", "value": "state"},
          {"name": "function", "type": "Text", "value":["openClose"]},
          {"name": "supportedProtocol", "type": "Text", "value": ["ul20"]}
      ]
   }
 ]
}'

####################################################
#
# Provision sensors for Store 001
#

curl -s -o /dev/null -X POST \
  "http://iot-agent:$IOTA_NORTH_PORT/iot/devices" \
  -H 'Content-Type: application/json' \
  -H 'fiware-service: smartufc' \
  -H 'fiware-servicepath: /campusquixada' \
  -d '{
 "devices": [
   {
     "device_id":"temperatureSensor001001001",
     "entity_name":"TemperatureSensor:001001001",
     "entity_type":"TemperatureSensor",
     "protocol":"PDI-IoTA-UltraLight",
     "transport":"MQTT",
     "timezone":"America/Fortaleza",
     "static_attributes": [
       {"name":"refRoom", "type": "Relationship", "value": "urn:ngsi-ld:Room:001"},
       {"name": "floor", "type": "Text", "value":"1"},
       {"name": "room", "type": "Text", "value":"Sala 1"},
       {"name": "building", "type": "Text", "value":"Bloco 1"},
       {"name":"location", "type":"geo:json", "value": {
            "coordinates": [-4.97959,-39.05621],
            "type": "Point"
          }
       }
     ]
   },
   {
     "device_id":"temperatureSensor001002001",
     "entity_name":"TemperatureSensor:001002001",
     "entity_type":"TemperatureSensor",
     "protocol":"PDI-IoTA-UltraLight",
     "transport":"MQTT",
     "timezone":"America/Fortaleza",
     "static_attributes": [
       {"name":"refRoom", "type": "Relationship", "value": "urn:ngsi-ld:Room:002"},
       {"name": "floor", "type": "Text", "value":"1"},
       {"name": "room", "type": "Text", "value":"Sala 2"},
       {"name": "building", "type": "Text", "value":"Bloco 1"},
       {"name":"location", "type":"geo:json", "value": {
            "coordinates": [-4.97956,-39.05620],
            "type": "Point"
          }
       }
     ]
   },
   {
     "device_id":"airConditioner001001001",
     "entity_name":"AirConditioner:001001001",
     "entity_type":"AirConditioner",
     "protocol":"PDI-IoTA-UltraLight",
     "transport":"MQTT",
     "timezone":"America/Fortaleza",
     "static_attributes": [
       {"name":"refRoom", "type": "Relationship", "value": "urn:ngsi-ld:Room:001"},
       {"name": "floor", "type": "Text", "value":"1"},
       {"name": "room", "type": "Text", "value":"Sala 1"},
       {"name": "building", "type": "Text", "value":"Bloco 1"},
       {"name":"location", "type":"geo:json", "value": {
            "coordinates": [-4.97959,-39.05621],
            "type": "Point"
          }
       }
     ]
   },
   {
     "device_id":"airConditioner001002001",
     "entity_name":"AirConditioner:001002001",
     "entity_type":"AirConditioner",
     "protocol":"PDI-IoTA-UltraLight",
     "transport":"MQTT",
     "timezone":"America/Fortaleza",
     "static_attributes": [
       {"name":"refRoom", "type": "Relationship", "value": "urn:ngsi-ld:Room:002"},
       {"name": "floor", "type": "Text", "value":"1"},
       {"name": "room", "type": "Text", "value":"Sala 2"},
       {"name": "building", "type": "Text", "value":"Bloco 1"},
       {"name":"location", "type":"geo:json", "value": {
            "coordinates": [-4.97956,-39.05620],
            "type": "Point"
          }
       }
     ]
   },
   {
     "device_id":"lamp001001001",
     "entity_name":"Lamp:001001001",
     "entity_type":"Lamp",
     "protocol":"PDI-IoTA-UltraLight",
     "transport":"MQTT",
     "timezone":"America/Fortaleza",
     "static_attributes": [
       {"name":"refRoom", "type": "Relationship", "value": "urn:ngsi-ld:Room:001"},
       {"name": "floor", "type": "Text", "value":"1"},
       {"name": "room", "type": "Text", "value":"Sala 1"},
       {"name": "building", "type": "Text", "value":"Bloco 1"},
       {"name":"location", "type":"geo:json", "value": {
            "coordinates": [-4.97959,-39.05621],
            "type": "Point"
          }
       }
     ]
   },
   {
     "device_id":"lamp001001002",
     "entity_name":"Lamp:001001002",
     "entity_type":"Lamp",
     "protocol":"PDI-IoTA-UltraLight",
     "transport":"MQTT",
     "timezone":"America/Fortaleza",
     "static_attributes": [
       {"name":"refRoom", "type": "Relationship", "value": "urn:ngsi-ld:Room:001"},
       {"name": "floor", "type": "Text", "value":"1"},
       {"name": "room", "type": "Text", "value":"Sala 1"},
       {"name": "building", "type": "Text", "value":"Bloco 1"},
       {"name":"location", "type":"geo:json", "value": {
            "coordinates": [-4.97959,-39.05621],
            "type": "Point"
          }
       }
     ]
   },
   {
     "device_id":"lamp001002001",
     "entity_name":"Lamp:001002001",
     "entity_type":"Lamp",
     "protocol":"PDI-IoTA-UltraLight",
     "transport":"MQTT",
     "timezone":"America/Fortaleza",
     "static_attributes": [
       {"name":"refRoom", "type": "Relationship", "value": "urn:ngsi-ld:Room:002"},
       {"name": "floor", "type": "Text", "value":"1"},
       {"name": "room", "type": "Text", "value":"Sala 2"},
       {"name": "building", "type": "Text", "value":"Bloco 1"},
       {"name":"location", "type":"geo:json", "value": {
            "coordinates": [-4.97956,-39.05620],
            "type": "Point"
          }
       }
     ]
   },
   {
     "device_id":"lamp001002002",
     "entity_name":"Lamp:001002002",
     "entity_type":"Lamp",
     "protocol":"PDI-IoTA-UltraLight",
     "transport":"MQTT",
     "timezone":"America/Fortaleza",
     "static_attributes": [
       {"name":"refRoom", "type": "Relationship", "value": "urn:ngsi-ld:Room:002"},
       {"name": "floor", "type": "Text", "value":"1"},
       {"name": "room", "type": "Text", "value":"Sala 2"},
       {"name": "building", "type": "Text", "value":"Bloco 1"},
       {"name":"location", "type":"geo:json", "value": {
            "coordinates": [-4.97956,-39.05620],
            "type": "Point"
          }
       }
     ]
   },
   {
     "device_id":"door001001001",
     "entity_name":"Door:001001001",
     "entity_type":"Door",
     "protocol":"PDI-IoTA-UltraLight",
     "transport":"MQTT",
     "timezone":"America/Fortaleza",
     "static_attributes": [
       {"name":"refRoom", "type": "Relationship", "value": "urn:ngsi-ld:Room:001"},
       {"name": "floor", "type": "Text", "value":"1"},
       {"name": "room", "type": "Text", "value":"Sala 1"},
       {"name": "building", "type": "Text", "value":"Bloco 1"},
       {"name":"location", "type":"geo:json", "value": {
            "coordinates": [-4.97959,-39.05621],
            "type": "Point"
          }
       }
     ]
   },
   {
     "device_id":"door001002001",
     "entity_name":"Door:001002001",
     "entity_type":"Door",
     "protocol":"PDI-IoTA-UltraLight",
     "transport":"MQTT",
     "timezone":"America/Fortaleza",
     "static_attributes": [
       {"name":"refRoom", "type": "Relationship", "value": "urn:ngsi-ld:Room:002"},
       {"name": "floor", "type": "Text", "value":"1"},
       {"name": "room", "type": "Text", "value":"Sala 2"},
       {"name": "building", "type": "Text", "value":"Bloco 1"},
       {"name":"location", "type":"geo:json", "value": {
            "coordinates": [-4.97956,-39.05620],
            "type": "Point"
          }
       }
     ]
   }
  ]
}'

curl -s -o /dev/null -X POST \
  'http://orion:1026/v2/subscriptions/' \
  -H 'Content-Type: application/json' \
  -H 'fiware-service: smartufc' \
  -H 'fiware-servicepath: /campusquixada' \
  -d '{
  "description": "Notify QuantumLeap of temperature and humidity changes of any UHT Sensor",
  "subject": {
    "entities": [
      {
        "idPattern": "TemperatureSensor.*"
      }
    ],
    "condition": {
      "attrs": [
        "temperature","humidity","location","floor","room","building"
      ]
    }
  },
  "notification": {
    "http": {
      "url": "http://quantumleap:8668/v2/notify"
    },
    "attrs": [
      "temperature","humidity","location","floor","room","building"
    ],
    "metadata": ["dateCreated", "dateModified"]
  },
  "throttling": 1
}'

curl -s -o /dev/null -X POST \
  'http://orion:1026/v2/subscriptions/' \
  -H 'Content-Type: application/json' \
  -H 'fiware-service: smartufc' \
  -H 'fiware-servicepath: /campusquixada' \
  -d '{
  "description": "Notify QuantumLeap of state changes of any arconditioner actuator",
  "subject": {
    "entities": [
      {
        "idPattern": "AirConditioner.*"
      }
    ],
    "condition": {
      "attrs": [
        "state","location","floor","room","building"
      ]
    }
  },
  "notification": {
    "http": {
      "url": "http://quantumleap:8668/v2/notify"
    },
    "attrs": [
      "state","location","floor","room","building"
    ],
    "metadata": ["dateCreated", "dateModified"]
  },
  "throttling": 1
}'

curl -s -o /dev/null -X POST \
  'http://orion:1026/v2/subscriptions/' \
  -H 'Content-Type: application/json' \
  -H 'fiware-service: smartufc' \
  -H 'fiware-servicepath: /campusquixada' \
  -d '{
  "description": "Notify QuantumLeap of state changes of any lamp actuator",
  "subject": {
    "entities": [
      {
        "idPattern": "Lamp.*"
      }
    ],
    "condition": {
      "attrs": [
        "state","location","floor","room","building"
      ]
    }
  },
  "notification": {
    "http": {
      "url": "http://quantumleap:8668/v2/notify"
    },
    "attrs": [
      "state","location","floor","room","building"
    ],
    "metadata": ["dateCreated", "dateModified"]
  },
  "throttling": 1
}'

curl -s -o /dev/null -X POST \
  'http://orion:1026/v2/subscriptions/' \
  -H 'Content-Type: application/json' \
  -H 'fiware-service: smartufc' \
  -H 'fiware-servicepath: /campusquixada' \
  -d '{
  "description": "Notify QuantumLeap of state changes of any door actuator",
  "subject": {
    "entities": [
      {
        "idPattern": "Door.*"
      }
    ],
    "condition": {
      "attrs": [
        "state","location","floor","room","building"
      ]
    }
  },
  "notification": {
    "http": {
      "url": "http://quantumleap:8668/v2/notify"
    },
    "attrs": [
      "state","location","floor","room","building"
    ],
    "metadata": ["dateCreated", "dateModified"]
  },
  "throttling": 1
}'

echo -e " \033[1;32mdone\033[0m"


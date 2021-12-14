#!/bin/bash
#
#  curl commands to reload the data from the previous tutorial
#
#

set -e

printf "Loading Campus context data "

#
# Create Campus Entities
#
curl -s -o /dev/null -X POST \
  'http://orion:1026/v2/op/update' \
  -H 'Content-Type: application/json' \
  -g -d '{
  "actionType": "append",
  "entities": [
      {
  		"id":"urn:ngsi-ld:Campus:001",
            "type":"Campus",
            "name":{"type":"Text","value":"UFC - Campus do Pici"},
            "description":{"type":"Text","value":"Universidade Federal do Ceara - Campus do Pici"},
  		"address":{"type":"PostalAddress","value":{"streetAddress":"Av. Mister Hull, s/n","addressRegion":"Fortaleza","addressLocality":"Pici","postalCode":"60455-76"}},
  		"location":{"type":"geo:json","value":{"type":"Point","coordinates":[-3.74574,-38.57404]}}  		
  	},
  	{
            "id":"urn:ngsi-ld:Campus:002",
            "type":"Campus",
            "name":{"type":"Text","value":"UFC - Campus Quixada"},
            "description":{"type":"Text","value":"Universidade Federal do Ceara - Campus de Quixada"},
  		"address":{"type":"PostalAddress","value":{"streetAddress":"Av. Jose de Freitas Queiroz, 5003","addressRegion":"Quixada","addressLocality":"Cedro","postalCode":"63902-580"}},
  		"location":{"type":"geo:json","value":{"type":"Point","coordinates":[-4.97847,-39.05645]}}  		
  	}
   ]
}'

#
# Create a series of Building Entities and place the in each Campus.
# Each Building is designed to hold one Campus.
#
curl -s -o /dev/null -X POST \
  'http://orion:1026/v2/op/update' \
  -H 'Content-Type: application/json' \
  -g -d '{
  "actionType": "append",
  "entities": [
	{
  		"id":"urn:ngsi-ld:Building:001","type":"Building",
  		"name":{"type":"Text","value":"Bloco 942-A"},
            "description":{"type":"Text","value":"Bloco do GREat (Group of Computer Networks, Software Engineering and Systems)"},            
            "category": ["classroom", "laboratory", "kitchen", "bathroom", "hall", "projectRoom", "meetingRoom", "telecommunicationsRoom", "facultyRoom"],
            "location":{"type":"geo:json","value":{"type":"Point","coordinates":[-3.746446746415589, -38.57807075126021]}}, 
            "totalFloors":{"type":"Integer","value":2},  		
  		"refCampus":{"type":"Relationship","value":"urn:ngsi-ld:Campus:001"}
  	},
      {
  		"id":"urn:ngsi-ld:Building:002","type":"Building",
  		"name":{"type":"Text","value":"Bloco 1"},            
            "description":{"type":"Text","value":"Bloco 1 da UFC - Campus Quixada"},
            "category": ["classroom", "laboratory", "kitchen", "bathroom", "hall", "projectRoom", "meetingRoom", "telecommunicationsRoom", "facultyRoom"],
            "location":{"type":"geo:json","value":{"type":"Point","coordinates":[-4.979450344624724, -39.05625162484692]}}, 
            "totalFloors":{"type":"Integer","value":2},  		
  		"refCampus":{"type":"Relationship","value":"urn:ngsi-ld:Campus:002"}
  	}	
   ]
}'

#
# Create a series of Building Entities and place the in each Campus.
# Each Building is designed to hold one Campus.
#
curl -s -o /dev/null -X POST \
  'http://orion:1026/v2/op/update' \
  -H 'Content-Type: application/json' \
  -g -d '{
  "actionType": "append",
  "entities": [
	{
  		"id":"urn:ngsi-ld:Room:001","type":"Room",
  		"name":{"type":"Text","value":"Sala de Telematica"},            
            "description":{"type":"Text","value":"Sala de Telemática do GREat"},
            "category": ["telecommunicationsRoom"],
            "floor":{"type":"Integer","value":1},  		
  		"refBuilding":{"type":"Relationship","value":"urn:ngsi-ld:Building:001"}
  	},	
	{
  		"id":"urn:ngsi-ld:Room:002","type":"Room",
  		"name":{"type":"Text","value":"Sala 1"},
            "description":{"type":"Text","value":"Sala 1 do Bloco 1 da UFC - Campus Quixada"},            
            "category": ["classroom"],
            "floor":{"type":"Integer","value":1},  		
  		"refBuilding":{"type":"Relationship","value":"urn:ngsi-ld:Building:002"}
  	},
      {
  		"id":"urn:ngsi-ld:Room:002","type":"Room",
  		"name":{"type":"Text","value":"Sala 2"},
            "description":{"type":"Text","value":"Sala 2 do Bloco 1 da UFC - Campus Quixada"},            
            "category": ["classroom"],
            "floor":{"type":"Integer","value":1},  		
  		"refBuilding":{"type":"Relationship","value":"urn:ngsi-ld:Building:002"}
  	}
   ]
}'

echo -e " \033[1;32mdone\033[0m"
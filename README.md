# Setup
Before attempting to run this application, install [Node.js](https://nodejs.org/en/).

# Dependencies
To download the needed dependencies, open up the application's root directory in a terminal and run:
`npm i`

# Develop
To run the application with quick-reloading for development, run:
`npm start`

# Release
To build and start the application for production use, run:
`npm run release`

# Usage
## Get all items:
```
GET http://<hostname>:3000/items
```
### Example response:

```json
[
	{
		"_id": "5aac5b34ee08060c60c583ec",
		"description": "This is my first item",
		"price": 222.22,
		"category": "categoryOne",
		"contact": {
            "name": "Sara",
            "phone": 123456789
        },
		"location": "Mars"
	},
	{
		"_id": "5aac61a14ae92b0ec5d75b3c",
		"description": "This is my second item",
		"price": 33.33,
		"category": "categoryTwo",
		"contact": {
            "name": "John Doe",
            "phone": 234456678
        },
		"location": "Earth"
	}
]
```
## Create new item:
```
POST http://<hostname>:3000/items

{
    "description": String ("My description"),
    "category": String ("Category1"),
    "contact": {
        "name": String ("Joe Dirt"),
        "phone": Number (1233456789)
    },
    "location": String ("Earth"),
    "price": Number (12.99)
}
```
### Example response:

```json
{
	"_id": "5aac62484ae92b0ec5d75b3d",
	"description": "My description",
	"price": 12.99,
	"category": "Category1",
	"contact": {
        "name": "John Doe",
        "phone": 234456678
    },
	"location": "Earth"
}
```
## Get specified item (by id):
```
GET http://<hostname>:3000/items/<id>
```
### Example response:

```json
{
    "_id": "5aac61a14ae92b0ec5d75b3c",
    "description": "This is my second item",
    "price": 33.33,
    "category": "categoryTwo",
    "contact": {
        "name": "John Doe",
        "phone": 234456678
    },
    "location": "Earth"
}
```
## Update specified item:
```
PUT http://<hostname>:3000/items/<id>

{
  "description": String ("My new description")
  "price": Number (99.99)
}
```
### Example response:

```json
{
    "_id": "5aac61a14ae92b0ec5d75b3c",
    "description": "My new description",
    "price": 99.99,
    "category": "updatedCategory",
    "contact": {
        "name": "John Doe",
        "phone": 234456678
    },
    "location": "Earth"
}
```
## Delete specified item:
```
DELETE http://<hostname>:3000/items/<id>
```
### Example response:

```json
{
	"message": "Item successfully deleted"
}
```
## Get items by location:
```
GET http://<hostname>:3000/items/location/<location>
```
### Example response:

```json
[{
    "_id": "5aac61a14ae92b0ec5d75b3c",
    "description": "This is my second item",
    "price": 33.33,
    "category": "categoryTwo",
    "contact": {
        "name": "John Doe",
        "phone": 234456678
    },
    "location": "Earth"
},
{
    "_id": "4aac61a14ae92b0ec3d75b35",
    "description": "This is my first item",
    "price": 23.32,
    "category": "category1",
    "contact": {
        "name": "Sara Marshall",
        "phone": 123345567
    },
    "location": "Earth"
}]
```
## Get items by category:
```
GET http://<hostname>:3000/items/category/<category>
```
### Example response:

```json
[{
    "_id": "5aac61a14ae92b0ec5d75b3c",
    "description": "This is my second item",
    "price": 33.33,
    "category": "myCategory",
    "contact": {
        "name": "John Doe",
        "phone": 234456678
    },
    "location": "Earth"
},
{
    "_id": "4aac61a14ae92b0ec3d75b35",
    "description": "This is my first item",
    "price": 23.32,
    "category": "myCategory",
    "contact": {
        "name": "Sara Marshall",
        "phone": 123345567
    },
    "location": "Earth"
}]
```
## Get items by location and category:
```
GET http://<hostname>:3000/items/location/<location>/category/<category>
```
### Example response:

```json
[{
    "_id": "4aac61a14ae92b0ec5d75b36",
    "description": "This is an item",
    "price": 33.33,
    "category": "myCategory",
    "contact": {
        "name": "John Doe",
        "phone": 234456678
    },
    "location": "Mars"
},
{
    "_id": "3aac61a14ae92b0ec3d75b37",
    "description": "This is my item",
    "price": 23.32,
    "category": "myCategory",
    "contact": {
        "name": "Sara Marshall",
        "phone": 123345567
    },
    "location": "Mars"
}]
```
## Delete items by category:
```
DELETE http://<hostname>:3000/items/category/<category>
```
### Example response:

```json
{
	"message": "Items successfully deleted"
}
```
## Delete items by location:
```
DELETE http://<hostname>:3000/items/location/<location>
```
### Example response:

```json
{
	"message": "Items successfully deleted"
}
```
## Delete items by location and category:
```
DELETE http://<hostname>:3000/items/location/<location>/category/<category>
```
### Example response:

```json
{
	"message": "Items successfully deleted"
}
```
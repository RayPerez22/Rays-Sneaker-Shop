
![Logo](https://i.imgur.com/Q1S8PM0.png)


## Demo

https://www.youtube.com/watch?v=mcX-JER45LY

# Rays-Sneaker-Shop

An online shop that sells sneakers.

   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | / | home page |
GET | /Kicks/ | index of sneakers |
GET | /Kicks/:id | show page for selected sneakers |
GET | /Kicks/new | page to add sneakers |
POST | /Kicks/ | add a sneakers |
GET | /Kicks/:id/edit | page to edit a sneakers |
PUT | /Kicks/:id | edit/update a sneakers |
PUT | /Kicks/:id/buy | buy a sneakers/decrements stock |
DELETE | /Kicks/:id | delete a sneakers |


### Development Process
   DATE 		 | 		  PROGRESS     |     BLOCKS 		 |  	 GOALS     |
------------ | ----------------- | --------------- | ------------- |
08/07/2022 | Folder structure created. Functional CRUD. | None | Implement Users and Auth |
08/10/2022 | Functioning CRUD on User. User model linked with Kicks. Seed file created. most of CSS done. | None | Create complete routes. |
08/16/2022 | All of CSS finished. Added a buy/decrement button. | None | Finish theCSS styling and add buy and fix  some button placement. |

## Deployment

To deploy this project run

```bash
  npm install
```


## Models
***

```
const mongoose = require('mongoose')

const kicksSchema = new mongoose.Schema({
    name: { type: String, required: true},
    img: { type: String, required: true},
    stock: { type: Number, required: true},
    price: { type: String, required: true},
    description: { type: String, required: true}
})

const Kicks = mongoose.model('Kicks', kicksSchema)


module.exports = Kicks
```
## Tech Stack

**Client:** React, CSS, JavaScript

**Server:** Node, Express


## Resources
***

- https://express.adobe.com/
- https://colorhunt.co/
- https://trianglify.io/
## Stretch Goals
***
1. Add to cart functionality.
2. More advanced CSS techniques.
## Author

- [Raymond Perez](https://github.com/RayPerez22)


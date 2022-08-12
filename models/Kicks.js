const mongoose = require('mongoose')

const kicksSchema = new mongoose.Schema({
    name: { type: String, required: true},
    img: { type: String, required: true},
    stock: { type: Number, required: true},
    price: { type: String, required: true}
})

const Kicks = mongoose.model('Kicks', kicksSchema)


module.exports = Kicks
const mongoose = require('mongoose');

const createSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    director: {
        type: String
    },
    year: {
        type: Number
    },
    imageUrl: {
        type: String
    },
    rating: {
        type: Number
    }
})

let Create = mongoose.model('Create', createSchema);

module.exports = Create;
const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
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
    },
    cast: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cast'
    }],
    creatorId: {
        type: String,
        required: true
    }
})

let Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;
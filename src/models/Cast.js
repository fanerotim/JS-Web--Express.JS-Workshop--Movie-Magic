const mongoose = require('mongoose');

const castSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    born: {
        type: String,
        required: true
    },
    nameInMovie: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    movie: {
        type: mongoose.Types.ObjectId,
        ref: 'Movies'
    }
})

let Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;
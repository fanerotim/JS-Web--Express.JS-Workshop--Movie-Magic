const express = require('express')
const router = express.Router();

const Movies = require('../models/Movies');
const Cast = require('../models/Cast');
const { urlencoded } = require('express');

router.get('/attach/cast/:castId', async (req, res) => {
    let castId = req.params.castId;
    let movie = await Movies.findById(castId).lean();
    let cast = await Cast.find().lean();

    res.render('cast-attach', {movie, cast})
})

router.post('/attach/cast/:castId', express.urlencoded({extended: false}), async (req, res) => {
    let castId = req.params.castId;
    const castName = req.body.cast;

    let castInfo = await Cast.find({name: castName});
    let castObjectId = castInfo[0]._id;
    let movie = await Movies.findById(castId);
    movie.cast.push(castObjectId);
    movie.save();

    res.redirect(`/attach/cast/${castId}`);
})

module.exports = router;
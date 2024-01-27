const router = require('express').Router();

const Movies = require('../models/Movies');
const Cast = require('../models/Cast');

router.get('/attach/cast/:castId', async (req, res) => {
    let castId = req.params.castId;
    let movie = await Movies.findById(castId).lean();
    let cast = await Cast.find().lean();

    res.render('cast-attach', {layout: false, movie, cast})
})

module.exports = router;
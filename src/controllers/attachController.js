const router = require('express').Router();

const Movies = require('../models/Movies');

router.get('/attach/cast/:castId', async (req, res) => {
    let castId = req.params.castId;
    let movie = await Movies.findById(castId).lean();
    console.log(movie);
    res.render('cast-attach', {layout: false, movie})
})

module.exports = router;
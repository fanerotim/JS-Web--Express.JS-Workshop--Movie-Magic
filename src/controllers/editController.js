const router = require('express').Router();

const Movies = require('../models/Movies');

router.get('/edit/:movieId', async (req, res) => {
    let token = req.headers.cookie;
    let movieId = req.params.movieId;

    let movie = await Movies.findById(movieId).lean();

    res.render('edit', {movie, token})
})

module.exports = router;
const router = require('express').Router();

const Movies = require('../models/Movies');

router.get('/edit/:movieId', async (req, res) => {
    let movieId = req.params.movieId;

    let movie = await Movies.findById(movieId).lean();
    res.render('edit', {movie});
})

router.post('/edit/:movieId', async (req, res) => {
    let movieId = req.params.movieId;
    let updatedMovieInfo = req.body

    let movieInfo = await Movies.findByIdAndUpdate(movieId, updatedMovieInfo)
    res.redirect(`/details/${movieId}`);
})  

module.exports = router;
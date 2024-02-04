const router = require('express').Router();

const { urlencoded } = require('express');
const Movies = require('../models/Movies');

router.get('/edit/:movieId', async (req, res) => {
    let token = req.headers.cookie;
    let movieId = req.params.movieId;

    let movie = await Movies.findById(movieId).lean();
    res.render('edit', {movie, token})
})

router.post('/edit/:movieId', urlencoded({extended: false}), async (req, res) => {
    let updatedMovieInfo = req.body;

    let movieInfo = await Movies.find({title: updatedMovieInfo.title})
    let movieId = movieInfo[0]._id;
    
    let movie = await Movies.findByIdAndUpdate(movieId, updatedMovieInfo);
    res.redirect(`/details/${movieId}`);
})  

module.exports = router;
let router = require('express').Router();

let Movies = require('../models/Movies');

router.get('/search', async (req, res) => {
    let movies = await Movies.find().lean();
    res.render('search', {movies})
})

router.get('/search-result', async (req, res) => {
    let title = req.query.title;
    let genre = req.query.genre;
    let year = req.query.year;

    //I am repeating this request, but will leave it like so for now
    let movies = await Movies.find().lean();
    let result = movies.filter(movie => movie.title === title && title !== '' || movie.genre === genre && genre !== '' || movie.year === year && year !== '');
    
    res.render('search-result', {result})
})

module.exports = router;
let router = require('express').Router();

let Movies = require('../models/Movies');

router.get('/details/:movieId', async (req, res) => {
    let movieId = req.params.movieId;
    let movies = await Movies.findById(movieId).populate('cast').lean();
 
    let ratingArr = [];
    
    for (let i = 0; i < movies.rating; i++) {
        ratingArr.push(i);
    }

    let castInfo = await Movies.findById(movieId).populate('cast');

    res.render('details', {movies, ratingArr});
    
})

module.exports = router;
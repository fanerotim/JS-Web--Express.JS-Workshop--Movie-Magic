let router = require('express').Router();

let Movies = require('../models/Movies');

router.get('/details/:movieId', async (req, res) => {
    let movieId = req.params.movieId;
    let movies = await Movies.findById(movieId).lean();
    
    //I have to fix the rating (stars)
    let ratingArr = [];
    
    for (let i = 0; i < movies.rating; i++) {
        ratingArr.push(i);
    }
    movies['stars'] = ratingArr;
    res.render('details', {layout: false, movies, ratingArr});
    
})

module.exports = router;
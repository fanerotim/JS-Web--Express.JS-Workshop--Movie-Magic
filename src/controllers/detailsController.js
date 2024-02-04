let router = require('express').Router();

let Movies = require('../models/Movies');
const jwt = require('jsonwebtoken')


router.get('/details/:movieId', async (req, res) => {
    let movieId = req.params.movieId;
    let movies = await Movies.findById(movieId).populate('cast').lean();
    let token = req.headers.cookie;
 
    let ratingArr = [];
    
    for (let i = 0; i < movies.rating; i++) {
        ratingArr.push(i);
    }

    let castInfo = await Movies.findById(movieId).populate('cast');

    let creatorId = movies.creatorId;
    
    let cookie = req.headers.cookie.split('=');
    let userId = jwt.decode(cookie[1]).id;
    
    let authorized;

    if (creatorId === userId) {
        authorized = creatorId;
    }

    res.render('details', {movies, ratingArr, token, authorized});
    
})

module.exports = router;
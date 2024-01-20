let router = require('express').Router();
let database = require('../database');

router.get('/details/:movieId', (req, res) => {
    let movieId = Number(req.params.movieId);
    let movieInfo = database.filter(movie => movie.id === movieId);
    
    let ratingArr = [];

    for (let i = 0; i < movieInfo[0].rating; i++) {
        ratingArr.push(i);
    }
    movieInfo[0]['stars'] = ratingArr;
    res.render('details', {layout: false, movieInfo, ratingArr});
    
})

module.exports = router;
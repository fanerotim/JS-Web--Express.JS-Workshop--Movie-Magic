let router = require('express').Router();
let database = require('../database');

router.get('/:movieId', (req, res) => {
    let movieId = Number(req.params.movieId);
    let movieInfo = database.filter(movie => movie.id === movieId);

    res.render('details', {layout: false, movieInfo});
})

module.exports = router;
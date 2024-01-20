let router = require('express').Router();

let database = require('../database');

router.get('/search', (req, res) => {
    res.render('search', {layout: false, database})
})

router.get('/search-result', (req, res) => {
    let title = req.query.title;
    let genre = req.query.genre;
    let year = req.query.year;

    let result = database.filter(movie => movie.title === title && title !== '' || movie.genre === genre && genre !== '' || movie.year === year && year !== '');
    
    console.log(result);
    res.render('search-result', {layout: false, result})
})

module.exports = router;
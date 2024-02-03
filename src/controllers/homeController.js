const router = require('express').Router();

const Movies = require('../models/Movies');

router.get('/', async (req, res) => {
    
    const movies = await Movies.find().lean();
    let token = req.headers.cookie;
    res.render('home', {movies, token});
})

module.exports = router;
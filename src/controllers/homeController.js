const router = require('express').Router();

const Movies = require('../models/Movies');

router.get('/', async (req, res) => {
    
    const movies = await Movies.find().lean();
    res.render('home', {movies});
})

module.exports = router;
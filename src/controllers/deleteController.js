const router = require('express').Router();

const Movies = require('../models/Movies');

router.get('/delete/:movieId', async (req, res) => {
    let movieId = req.params.movieId;

    let movieToDelete = await Movies.findByIdAndDelete(movieId);
    
    res.redirect('/');
})

module.exports = router;
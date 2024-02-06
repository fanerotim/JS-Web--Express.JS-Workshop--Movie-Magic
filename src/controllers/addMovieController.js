let router = require('express').Router();
let jwt = require('jsonwebtoken');

const Movies = require('../models/Movies')
const {isAuthenticated} = require('../middlewares/authMiddleware');

router.get('/create', isAuthenticated, (req, res) => {
    res.render('create')
})

router.post('/create', (req, res) => {
    let newMovie = req.body;

    let cookie = req.headers.cookie.split('=');
    let decodedCookie = jwt.decode(cookie[1]);
    let id = decodedCookie.id;

    newMovie.creatorId = id;
    
    Movies.create(newMovie);
    res.redirect('/')
})

module.exports = router;
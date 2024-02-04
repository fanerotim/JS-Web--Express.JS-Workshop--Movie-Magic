let router = require('express').Router();
let express = require('express');
let jwt = require('jsonwebtoken');

const Movies = require('../models/Movies')

router.get('/create', (req, res) => {
    let token = req.headers.cookie;
    res.render('create', {token})
})

router.post('/create', express.urlencoded({extended: false}), (req, res) => {
    let newMovie = req.body;

    let cookie = req.headers.cookie.split('=');
    let decodedCookie = jwt.decode(cookie[1]);
    let id = decodedCookie.id;

    newMovie.creatorId = id;
    
    Movies.create(newMovie);
    res.redirect('/')
})

module.exports = router;
let router = require('express').Router();
let express = require('express');

const Movies = require('../models/Movies')

router.get('/create', (req, res) => {
    res.render('create', {layout: false})
})

router.post('/create', express.urlencoded({extended: false}), (req, res) => {
    let newMovie = req.body;
    
    Movies.create(newMovie);
    res.redirect('/')
})

module.exports = router;
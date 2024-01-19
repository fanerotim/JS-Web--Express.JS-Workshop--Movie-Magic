let router = require('express').Router();
let express = require('express');

let database = require('../database')

router.get('/create', (req, res) => {
    res.render('create', {layout: false})
})

router.post('/create', express.urlencoded({extended: false}), (req, res) => {
    let newMovie = req.body;
    newMovie.id = database.length;
    database.push(newMovie);
    res.redirect('/')
})

module.exports = router;
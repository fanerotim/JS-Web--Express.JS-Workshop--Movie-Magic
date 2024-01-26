let router = require('express').Router();
let express = require('express');

const Create = require('../models/Create')

router.get('/create', (req, res) => {
    res.render('create', {layout: false})
})

router.post('/create', express.urlencoded({extended: false}), (req, res) => {
    let newMovie = req.body;
    
    Create.create(newMovie);
    res.redirect('/')
})

module.exports = router;
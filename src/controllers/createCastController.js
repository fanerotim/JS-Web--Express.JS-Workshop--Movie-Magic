const express = require('express')
const router = express.Router();

const Cast = require('../models/Cast')

router.get('/create-cast', (req, res) => {
    let token = req.headers.cookie;
    res.render('cast-create', {token})
})

router.post('/create-cast', express.urlencoded({extended: false}), (req, res) => {
    let newCast = req.body;
    Cast.create(newCast);

    res.redirect('/')
})

module.exports = router;
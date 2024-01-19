const router = require('express').Router();

let database = require('../database');

router.get('/', (req, res) => {
    res.render('home', {layout: false, database});
})

module.exports = router;
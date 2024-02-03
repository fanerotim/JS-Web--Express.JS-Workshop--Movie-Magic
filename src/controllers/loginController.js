const express = require('express');
const router = express.Router();

router.get('/login', express.urlencoded({extended: false}), (req, res) => {
    res.render('login', {layout: false});
})

module.exports = router;
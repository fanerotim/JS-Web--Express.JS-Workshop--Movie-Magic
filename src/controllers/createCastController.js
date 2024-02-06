const express = require('express')
const router = express.Router();

const Cast = require('../models/Cast');
const {isAuthenticated } = require('../middlewares/authMiddleware');
 
router.get('/create-cast', isAuthenticated, (req, res) => {
    res.render('cast-create')
})

router.post('/create-cast', (req, res) => {
    let newCast = req.body;
    Cast.create(newCast);

    res.redirect('/')
})

module.exports = router;
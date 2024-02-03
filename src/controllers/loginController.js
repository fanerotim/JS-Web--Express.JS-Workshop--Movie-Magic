const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const User = require('../models/User');

let SECRET = 'mySecret'

router.get('/login', (req, res) => {
    res.render('login', { layout: false });
})

router.post('/login', express.urlencoded({ extended: false }), async (req, res) => {
    const { email, password } = req.body;

    let userInfo = await User.find({ email });

    if (userInfo.length === 0) {
        return res.send('Incorrect username or password. Please try again.')
    }

    let hashedPassword = userInfo[0].password;
    let result = await bcrypt.compare(password, hashedPassword);
    
    if (result) {
        let token = jwt.sign(email, SECRET);
        res.cookie('auth', token);
        res.redirect('/')
    } else {
        res.send('Incorrect email or password. Please try again')
    }
})

module.exports = router;
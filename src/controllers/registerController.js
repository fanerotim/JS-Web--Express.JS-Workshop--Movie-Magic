let express = require('express');
let router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

let SECRET = 'mySecret'

router.get('/register', (req, res) => {
    res.render('register');
})

router.post('/register', express.urlencoded({extended: false}), async (req, res) => {
    const {email, password, rePassword} = req.body;

    let user = await User.find({email});
    
    if (user.length > 0) {
        return res.send('This user already exists in the database. Please try again.')
    }

    if (password !== rePassword) {
        return res.send('Password mismatch. Please try again.')
    }

    let hashedPassword = await bcrypt.hash(password, 12);

    User.create({
        email,
        password: hashedPassword
    })

    const token = jwt.sign({email}, SECRET);
    res.cookie('auth', token)
    
    res.redirect('/');
})

module.exports = router;

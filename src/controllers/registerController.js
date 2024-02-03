let express = require('express');
let router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

let SECRET = 'mySecret'

router.get('/register', (req, res) => {
    res.render('register', {layout: false});
})

router.post('/register', express.urlencoded({extended: false}), (req, res) => {
    const {email, password, rePassword} = req.body;
    
    User.find({email})
        .then(result => {
            if (result.length === 0) {
                if (password === rePassword) {
                    let hash = bcrypt.hash(password, 12)
                        .then((hashedPassword) => {
                            User.create({
                                email,
                                password: hashedPassword
                            })

                            const payload = {
                                email,
                            }

                            let token = jwt.sign(payload, SECRET, {expiresIn: '2h'});
                            res.cookie('authorization', token);
                            res.redirect('/');
                        })
                }
            }
        });
})

module.exports = router;
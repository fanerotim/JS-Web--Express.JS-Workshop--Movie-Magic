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
                } else {
                    res.send('Password mismatch. Please go back to Register page and try again.')
                    
                }
            } else {
                res.send('This user already exists in the database. Please try again.')
            }
        });
})

module.exports = router;
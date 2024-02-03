let router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('register', {layout: false});
})

module.exports = router;
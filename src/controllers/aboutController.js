const router = require('express').Router();

router.get('/about', (req, res) => {
    let token = req.headers.cookie;
    res.render('about', {token});
})

module.exports = router;
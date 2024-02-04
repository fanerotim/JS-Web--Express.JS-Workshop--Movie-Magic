const router = require('express').Router();

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/')
})

module.exports = router;
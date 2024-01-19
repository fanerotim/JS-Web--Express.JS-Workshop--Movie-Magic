const router = require('express').Router();

router.get('/about', (req, res) => {
    res.render('about', {layout: false});
})

module.exports = router;
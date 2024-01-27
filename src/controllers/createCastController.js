const router = require('express').Router();

router.get('/create-cast', (req, res) => {
    res.render('cast-create', {layout: false})
})

module.exports = router;
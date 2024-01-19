const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World. This is my first Express.JS Workshop');
})


module.exports = router;
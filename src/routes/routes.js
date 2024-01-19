const router = require('express').Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const notFoundController = require('../controllers/404Controller');

router.use(homeController);
router.use(aboutController);
router.use(notFoundController);

module.exports = router;
const router = require('express').Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const addMovieController = require('../controllers/addMovieController');
const detailsController = require('../controllers/detailsController');

router.use(homeController);
router.use(aboutController);
router.use(addMovieController);
router.use(detailsController);

module.exports = router;
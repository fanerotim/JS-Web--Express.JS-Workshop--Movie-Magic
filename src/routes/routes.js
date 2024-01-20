const router = require('express').Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const addMovieController = require('../controllers/addMovieController');
const detailsController = require('../controllers/detailsController');
const searchController = require('../controllers/searchController');

router.use(homeController);
router.use(aboutController);
router.use(addMovieController);
router.use(detailsController);
router.use(searchController);

module.exports = router;
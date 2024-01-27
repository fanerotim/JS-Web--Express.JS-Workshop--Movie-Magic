const router = require('express').Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const addMovieController = require('../controllers/addMovieController');
const detailsController = require('../controllers/detailsController');
const searchController = require('../controllers/searchController');
const createCastController = require('../controllers/createCastController')

router.use(homeController);
router.use(aboutController);
router.use(addMovieController);
router.use(detailsController);
router.use(searchController);
router.use(createCastController);

module.exports = router;
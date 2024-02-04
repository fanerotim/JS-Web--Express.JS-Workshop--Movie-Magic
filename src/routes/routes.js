const router = require('express').Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const addMovieController = require('../controllers/addMovieController');
const detailsController = require('../controllers/detailsController');
const searchController = require('../controllers/searchController');
const createCastController = require('../controllers/createCastController');
const attachCastController = require('../controllers/attachController');
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const logoutController = require('../controllers/logoutController');
const editController = require('../controllers/editController');

router.use(homeController);
router.use(aboutController);
router.use(addMovieController);
router.use(detailsController);
router.use(searchController);
router.use(createCastController);
router.use(attachCastController);
router.use(registerController);
router.use(loginController);
router.use(logoutController);
router.use(editController);

module.exports = router;
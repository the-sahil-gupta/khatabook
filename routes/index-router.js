const express = require('express');
const router = express.Router();

const {
	indexPageController,
	registerPageController,
	registerController,
	loginController,
	logoutController,
	profilePageController,
} = require('../controllers/index-controller');

const {
	isLoggedIn,
	redirectIfLoggedIn,
} = require('../middlewares/auth-middleware');

router.get('/', redirectIfLoggedIn, indexPageController);
router.get('/register', registerPageController);
router.get('/logout', logoutController);

router.post('/register', registerController);
router.post('/login', loginController);

router.get('/profile', isLoggedIn, profilePageController);

module.exports = router;

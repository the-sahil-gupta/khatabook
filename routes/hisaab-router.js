const express = require('express');
const router = express.Router();

const {
	createHisaabController,
	hisaabPageController,
	viewHisaabController,
} = require('../controllers/hisaab-controller');

const {
	isLoggedIn,
	redirectIfLoggedIn,
} = require('../middlewares/auth-middleware');

router.get('/create', isLoggedIn, hisaabPageController);
router.post('/create', isLoggedIn, createHisaabController);
router.get('/view/:id', isLoggedIn, viewHisaabController);

module.exports = router;

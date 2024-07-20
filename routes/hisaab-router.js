const express = require('express');
const router = express.Router();

const {
	createHisaabController,
	hisaabPageController,
} = require('../controllers/hisaab-controller');

const {
	isLoggedIn,
	redirectIfLoggedIn,
} = require('../middlewares/auth-middleware');

router.get('/create', isLoggedIn, hisaabPageController);
router.post('/create', isLoggedIn, createHisaabController);

module.exports = router;

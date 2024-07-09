const express = require('express');
const router = express.Router();

const { indexPageController } = require('../controllers/index-controller');

router.get('/', indexPageController);
router.get('/register', (req, res) => {
	res.render('create');
});

module.exports = router;

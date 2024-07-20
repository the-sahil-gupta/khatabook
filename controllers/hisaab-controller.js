const userModel = require('../models/user-model');
const hisaabModel = require('../models/hisaab-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.hisaabPageController = async function (req, res) {
	res.render('create');
};

module.exports.createHisaabController = async function (req, res) {
	let { title, description, encrypted, passcode, shareable, editpermissions } =
		req.body;

	encrypted = encrypted === 'on' ? true : false;
	shareable = shareable === 'on' ? true : false;
	editpermissions = editpermissions === 'on' ? true : false;
	try {
		let hisaabCreated = await hisaabModel.create({
			title,
			description,
			user: req.user._id,
			encrypted,
			passcode,
			shareable,
			editpermissions,
		});

		let user = await userModel.findOne({ email: req.user.email });
		user.hisaab.push(hisaabCreated._id);
		await user.save();
	} catch (err) {
		res.send(err.message);
	}

	res.redirect('/profile');
};

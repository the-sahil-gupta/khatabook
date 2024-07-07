const userModel = require('../models/user-model');

module.exports.indexController = function (req, res) {
    res.render('index');
};

module.exports.createPageController = function (req, res) {
    res.render('register');
};

module.exports.createUserController = async function (req, res) {
    let { username, name, email, password } = req.body;

    const user = await userModel.create({
        username,
        name,
        email,
        password,
    });

    res.redirect('profile');
};

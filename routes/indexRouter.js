const express = require("express");
const router = express.Router();

const { indexController, createPageController, createUserController } = require("../controllers/index-controller");



router.get("/", indexController);
router.get("/register", createPageController);
router.post("/register", createUserController);

module.exports = router;
 
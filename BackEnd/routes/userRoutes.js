const { response } = require("express");
var express = require("express");
var userController = require("./../controller/userController.js");
var router = express.Router();

router.post("/authenticate", userController.findUserByUsername);

module.exports = router;
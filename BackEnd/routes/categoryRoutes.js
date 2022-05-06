const { response } = require('express');
var express = require('express');
var categoryController = require('./../controller/categoryController.js')
var router = express.Router();

router.get("/getCategory", categoryController.retrieveCategory);

module.exports = router;
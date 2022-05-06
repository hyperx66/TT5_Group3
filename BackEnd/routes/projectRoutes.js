const { response } = require('express');
var express = require('express');
var projectController = require('./../controller/projectController.js')
var router = express.Router();

router.get("/getProject", projectController.retrieveProject);

module.exports = router;
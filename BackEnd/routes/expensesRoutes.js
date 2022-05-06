const { response } = require("express");
var express = require("express");
var expensesController = require("./../controller/expensesController.js");
var router = express.Router();

router.get("/getExpenses", expensesController.getExpenses);
router.post("/newExpense", expensesController.newExpense);

module.exports = router;

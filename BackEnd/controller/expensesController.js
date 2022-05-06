const Expenses = require("./../models/expensesModel.js");

exports.getExpenses = (req, res) => {
  const projectID = req.query.projectID;
  Expenses.getExpenses(projectID, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message,
      });
    else res.status(200).json(data);
  });
};

exports.newExpense = (req, res) => {
  dataPool = req.body;
  Expenses.newExpense(dataPool, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message,
      });
    else res.status(200).json(data);
  });
};

var con = require("./../db.js");
const uuid = require('uuid');

var Expenses = function (expense) {
  this.expenseID = expense.expenseID;
};

Expenses.getExpenses = (projectID, result) => {
    con.query("SELECT expensesID, expenseTitle, expenseAmount, expenseDesc, categoryName, dateTimeCreated, dateTimeUpdated FROM expenses WHERE projectID = ? INNER JOIN category ON expenses.categoryID = category.categoryID", [projectID], (err, res)=>{
        if (err) {
            console.log("Error Message: ", err);
            result(err, null);
            return;
          } else {
            result(null, res);
          }
    })
}

Expenses.newExpense = (dataPool, result) =>{
  const dateNow = new Date();
  const dateConverted = dateNow.toISOString().split('T')[0] + ' ' + dateNow.toTimeString().split(' ')[0]
  con.query("INSERT INTO expenses VALUES(?,?,?,?,?,?,?,?)", [uuid.v4(), dataPool.expenseTitle, dataPool.expenseAmount, dataPool.expenseDesc, dataPool.categoryID, dataPool.projectID, dateNow, dateNow], (err, res)=>{
    if (err) {
      console.log("Error Message: ", err);
      result(err, null);
      return;
    } else {
      result(null, dateNow);
    }
  })
}

module.exports = Expenses

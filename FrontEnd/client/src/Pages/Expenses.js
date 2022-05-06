import ExpenseList from "../expenses/ExpenseList";
import Select from "react-select";
import { useState } from "react";
import classes from "./Expenses.module.css";

function ExpensesPage() {
  // const [filteredExpenses, setFilteredExpense] = useState([]);

  const Category = [{ label: "production" }, { label: "operating" }, { label: "financial" }, { label: "vendor" }, { label: "manpower" }, { label: "software" }, { label: "hardware" }];
  var DUMMY_DATA = [
    {
      id: "1",
      name: "lunch",
      amount: "10",
      category: "manpower",
    },
    {
      id: "2",
      name: "transport",
      amount: "123",
      category: "operating",
    },
  ];

  // setFilteredExpense(filteredExpenses);

  function newFilter(event) {
    console.log(event.label);
    DUMMY_DATA = DUMMY_DATA.concat({
      id: "3",
      name: "lunch",
      amount: "10",
      category: "vendor",
    });
    console.log(DUMMY_DATA);
  }

  return (
    <div>
      <div>
        <p>Category:</p>
        <Select options={Category} onChange={newFilter} />
        <button>Create New Expense</button>
      </div>
      <ExpenseList expenses={DUMMY_DATA} />
    </div>
  );
}

export default ExpensesPage;

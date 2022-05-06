import ExpenseList from "../expenses/ExpenseList";
import Select from "react-select";
import { useState } from "react";

function ExpensesPage() {
  const [filteredExpenses, setFilteredExpense] = useState([]);

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

  setFilteredExpense(filteredExpenses);

  function newInput(event) {
    console.log(event);
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
        <Select options={Category} onChange={newInput} />
      </div>
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
}

export default ExpensesPage;

import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  return (
    <ul>
      {props.expenses.map((expense) => (
        <ExpenseItem id={expense.id} expenseName={expense.name} category={expense.category} expenseAmount={expense.amount} />
      ))}
    </ul>
  );
}

export default ExpenseList;

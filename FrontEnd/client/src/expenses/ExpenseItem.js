import Card from "../components/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card>
        <p>{props.expenseName}</p>
        <p>{props.category}</p>
        <p>{props.expenseAmount}</p>
      </Card>
    </li>
  );
}

export default ExpenseItem;

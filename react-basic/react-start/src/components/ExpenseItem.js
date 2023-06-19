import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  console.log(expenseDate);

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div>
        <h2 className="expense-item__description">{expenseTitle}</h2>
        <div className="expense-item__price">{`$${expenseAmount}`}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

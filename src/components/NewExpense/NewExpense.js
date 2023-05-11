import "./NewExpense.css";
import ExpenseForm from "./Form";
import { useState } from "react";

function NewExpense(props) {
  const [isOpen, setIsOpen] = useState(false);
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsOpen(false);
  };

  const openClickHandler = () => {
    setIsOpen((open) => !open);
  };

  const button = <button onClick={openClickHandler}>Add new Expense</button>;

  const form = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={openClickHandler}
    />
  );

  return <div className="new-expense">{isOpen ? form : button}</div>;
}

export default NewExpense;

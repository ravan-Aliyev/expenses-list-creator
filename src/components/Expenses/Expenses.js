import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("0");
  const changeYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.data.filter((item) => {
    return selectedYear === "0"
      ? item
      : selectedYear === item.date.getFullYear().toString();
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYear={changeYearHandler}
        selected={selectedYear}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList data={filteredExpenses} />

      {/* <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      />
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      />
      <ExpenseItem
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;

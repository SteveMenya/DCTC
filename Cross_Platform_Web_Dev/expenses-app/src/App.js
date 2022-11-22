import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 1, 22),
  },
  {
    id: 2,
    title: "Book",
    amount: 2,
    date: new Date(2020, 7, 14),
  },
  {
    id: 3,
    title: "Pen",
    amount: 1,
    date: new Date(2019, 7, 14),
  },
  {
    id: 4,
    title: "Soda",
    amount: 5,
    date: new Date(2022, 5, 25),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

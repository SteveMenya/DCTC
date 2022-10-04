import "./App.css";
import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 2,
      title: "Car insuarance",
      amount: 100.2,
      date: new Date(2021, 7, 12),
    },
    {
      id: 3,
      title: "Home Mortgage",
      amount: 300.12,
      date: new Date(2022, 7, 15),
    },
  ];

  return (
    <div className="App">
      <ExpenseItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItems>

      <ExpenseItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItems>

      <ExpenseItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItems>
    </div>
  );
}

export default App;

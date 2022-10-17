import "./App.css";
import Expenses from "./components/Expenses/Expenses";

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
    {
      id: 4,
      title: "TV",
      amount: 800.12,
      date: new Date(2022, 10, 15),
    }
  ];

  return (
    <div className="App">
      <Expenses items={expenses}/>

    </div>
  );
}

export default App;

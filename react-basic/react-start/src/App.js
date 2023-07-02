import "./App.css";
import Expenses from "./components/expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 12.5,
      date: new Date(2022, 10, 15),
    },
    {
      id: "e2",
      title: "Soap",
      amount: 106.2,
      date: new Date(2022, 11, 25),
    },
    {
      id: "e3",
      title: "Carrot",
      amount: 34.55,
      date: new Date(2022, 11, 28),
    },
    {
      id: "e4",
      title: "Pencil",
      amount: 5.8,
      date: new Date(2023, 1, 5),
    },
  ];
  return (
    <div className="App-header">
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;

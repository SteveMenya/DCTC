import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import "../Expenses/ExpenseItems.css";
import Card from "../UI/Card";

function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('New Title!!!');
    console.log(title)
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Chage Title</button>
    </Card>
  );
}

export default ExpenseItems;

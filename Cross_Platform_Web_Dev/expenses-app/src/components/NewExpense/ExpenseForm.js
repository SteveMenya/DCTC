import "./ExpenseForm.css";
import {useState} from 'react'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enterdAmout, setEnteredAmount] = useState('');
  const [enteredDate, setEnterdDate] = useState('');


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value)
  }

  const submitHandler = (event)=> {
    event.preventDefault();

    const expenseDataInput = {
      title: enteredTitle,
      amount: enterdAmout,
      date: enteredDate

    }

   props.onSaveExpenseData(expenseDataInput);
   setEnteredTitle('');
   setEnteredAmount('');
   setEnterdDate('')

  //  console.log(expenseDataInput)
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={enteredTitle} onChange={titleChangeHandler} type="text"></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input value={enterdAmout} onChange={amountChangeHandler} type="number" min={0.01} step='0.01'></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={enteredDate} onChange={dateChangeHandler} type="date" min='2022-01-01' max='2022-12-31'></input>
        </div>
        <div className="new-expese__actions">
            <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

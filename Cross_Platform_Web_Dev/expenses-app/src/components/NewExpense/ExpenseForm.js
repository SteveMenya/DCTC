import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min={0.01} step='0.01'></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2022-01-01' max='2022-12-31'></input>
        </div>
        <div className="new-expese__actions">
            <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

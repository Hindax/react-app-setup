import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitel, setEnteredTitel] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
//   const [userInput, setUserInput] = useState({
//     enteredTitel: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const titelChangeHandler = (event) => {
    setEnteredTitel(event.target.value);
    // setUserInput ({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitel: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput ({
    //     ...userInput,
    //     enteredAmount: event.target.value,

    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //    setUserInput ({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });
  };

  return (
    <form className="">
      <div className="new-expense__controls">
        <div className="new-expense___control">
          <label>Title</label>
          <input type="text" onChange={titelChangeHandler} />
        </div>

        <div className="new-expense___control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense___control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

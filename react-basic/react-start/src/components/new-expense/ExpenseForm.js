import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(new Date());
  //   const [useInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({ ...useInput, title: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...useInput, amount: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...useInput, date: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    // 기본 요청이 보내지는 것을 막기 위해
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // initial state
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate(new Date());
  };

  return (
    <form className="new-expense__controls" onSubmit={submitHandler}>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min={0.01}
          step={0.01}
          onChange={amountChangeHandler}
          value={enteredAmount}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2023-07-02"
          onChange={dateChangeHandler}
          value={enteredDate}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

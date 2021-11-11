import React, { useState } from "react";
import NewExpenses from "./NewExpense"
import ExpenseList from "./ExpenseList";

export default function AppFunction() {
  //submit button
  const [allExpense, setAllExpense] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newExpense.title) return;
    setAllExpense((prev) => [newExpense, ...prev]);
    setNewExpense({});
  };
  //delete button
  const handleDelete = (taskIdToRemove) => {
    setAllExpense((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
  };
  //changes
  const [newExpense, setNewExpense] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewExpense((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  return (
    <main>
      <h1>Expenses </h1>
      <NewExpenses
        newExpense={newExpense}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ExpenseList allExpense={allExpense} handleDelete={handleDelete} />
    </main>
  );
}
import React, { useState } from "react";
import NewExpense from "./NewExpense";
import ExpenseList from "./ExpenseList";

export default function AppFunction() {
  const [newExpense, setNewExpense] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewExpense((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const [allTasks, setAllExpense] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newExpense.title) return;
    setAllTasks((prev) => [newExpense, ...prev]);
    setNewExpense({});
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewExpense
        newExpense={newExpense}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

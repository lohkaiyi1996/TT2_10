import React, { useState } from "react";
import NewExpense from "./NewExpense";
import ExpenseList from "./ExpenseList";

export default function AppFunction() {
  const [newExpense, setNewExpense] = useState({});
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

import React, { useState } from "react";
import NewExpense from "./NewExpense";
import ExpenseList from "./ExpenseList";

export default function AppFunction() {
  const [newExpense, setNewExpense] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newExpense.title) return;
    //setAllExpense((prev) => [newExpense, ...prev]);
    setNewExpense({});
  };

  return (
    <main>
      <h1>Expenses</h1>
      <NewExpense
        newExpense={newExpense}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
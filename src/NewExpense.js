import React from "react";

export default function NewExpense({ newExpense, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="New Expense"
        value={newExpense.title || ""}
        onChange={handleChange}
      />
      {!newExpense.title ? null : (
        <>
        <div>
          <textarea
            name="description"
            placeholder="Expense value"
            value={newExpense.description || ""}
            onChange={handleChange}
          />
        </div>
          <button type="submit">Add Expense</button>
          
        </>
      )}
    </form>
  );
}
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
          <textarea
            name="description"
            placeholder="Enter Value Here"
            value={newExpense.description || ""}
            onChange={handleChange}
          />
          <button type="submit">Add New Expense</button>
        </>
      )}
    </form>
  );
}
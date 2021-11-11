import React from "react";

export default function NewExpense({ newExpense, handleChange, handleSubmit }) {
  return (
    <form onSubmit= {handleSubmit}>
        <input name = "Expenses" 
        placeholder = "Add new Expenses here"
        value = {newExpense.title || ""}
        onChange = {handleChange}
        />
        {!newExpense.title ? null : (
        <>
            <textarea name = "description"
            placeholder = "Expenses Amount"
            value = {newExpense.description || ""}
            onChange = {handleChange}
        /> 
        <button type = "submit"> Add Expenses </button>

        </>
      )}
    </form>
  );
}
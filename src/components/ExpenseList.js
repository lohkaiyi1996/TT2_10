import React from "react";

export default function ExpenseList({ allExpense, handleDelete, editExpense }) {
  return (
    <ul>
      {allExpense.map(({ title, description, id }) => (
        <li key={id}>
          <div>
            {title}&nbsp;&nbsp;&nbsp;
            <input type="text" value={editExpense.title || ""}/>
            {!editExpense.title ? null : (
            <>
            <div>
            <textarea
            name="description"
            placeholder="Expense value"
            value={editExpense.description || ""}
            />
          </div>
          <button type="submit">Edit Expense</button>
        </>
      )}
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
          {!description ? null : <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
}

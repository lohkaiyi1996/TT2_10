import React from "react";

export default function ExpenseList({ allExpense, handleDelete }) {
  return (
    <ul>
      {allExpense.map(({ title, description, id }) => (
        <li key={id}>
          <div>
            {title}&nbsp;&nbsp;&nbsp;
            <button onClick={() => handleDelete(id)}>X</button>
          </div>
          {!description ? null : <p>{description}</p>}
        </li>
      ))}
    </ul>
  );
}

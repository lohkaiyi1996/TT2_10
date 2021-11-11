import './App.css';
import NewExpense from './NewExpense';
import React, {useState} from "react";

export default function App() {
  return (
    <main>
      <h1>Expenses</h1>
      <NewExpense
      />
    </main>
  );
}



import axios from 'axios';
import { useState } from 'react';
import ExpensesFunction from "./ExpensesFunction";
import BackButton from "./BackButton";

export default function showExpenses() {
  var data = require ('../data/expense.json');
  console.log(data);


  return (
      <div>
          <p>This is showExpenses component</p>
          <ul>
            {data.map(expense => 
              <li key={expense.id}>Name: {expense.name},&nbsp;&nbsp;&nbsp; Description: {expense.description},&nbsp;&nbsp;&nbsp; Amount: {expense.amount} &nbsp;&nbsp;&nbsp;
              <button >View Project</button>
              <button>dummy delete</button>
              </li>)} 
          </ul>
          
          <BackButton/>
      </div>
    )
  }
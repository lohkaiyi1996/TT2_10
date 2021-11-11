import axios from 'axios';
import { useState } from 'react';
import ExpensesFunction from "./ExpensesFunction";
import BackButton from "./BackButton";

export default function showExpenses() {
  var data = require ('../data/expense.json');
  console.log(data);

  axios.get('http://localhost:5001/expenses')
            .then((res) => {
                console.log(res.data);
                this.setState({data:res.data});
            })

  return (
      <div>
          <p>This is showExpenses component</p>
          <ul>
            {data.map(expense => 
              <li key={expense.id}>Name: {expense.name},&nbsp;&nbsp;&nbsp; Description: {expense.description},&nbsp;&nbsp;&nbsp; Amount: {expense.amount} &nbsp;&nbsp;&nbsp;
              <button >Edit</button>
              <button>Delete</button>
              </li>)} 
          </ul>
          
          <BackButton/>
      </div>
    )
  }
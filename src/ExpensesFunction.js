import React, { useState, Component } from "react";
import NewExpense from "./NewExpense"
import ExpenseList from "./ExpenseList";




export default class ExpenseClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newExpense: {},
      allExpense: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange({ target }){
    const { name, value } = target;
    this.setState((prevState) => ({
      ...prevState,
      newExpense: {
        ...prevState.newExpense,
        [name]: value,
        id: Date.now()
      }
    }));
  }

  handleSubmit(event){
    event.preventDefault();
    if (!this.state.newExpense.title) return;
    this.setState((prevState) => ({
      allExpense: [prevState.newExpense, ...prevState.allExpense],
      newExpense: {}
    }));
  }

  handleDelete(taskIdToRemove){
    this.setState((prevState) => ({
      ...prevState,
      allExpense: prevState.allExpense.filter((task) => task.id !== taskIdToRemove)
    }));
  }

  render() {
    return (
      <main>
        <h1>Tasks</h1>
        <NewExpense
          newExpense={this.state.newExpense}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ExpenseList
          allExpense={this.state.allExpense}
          handleDelete={this.handleDelete}
        />
      </main>
    );
  }
}
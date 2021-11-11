import axios from 'axios';
import Expenses from "../ExpensesFunction";

export default function Projects() {
  var data = require ('../data/project.json');
  console.log(data);
  
  return (
      <div>
          <p>This is project component</p>
          <ul>
            {data.map(project => 
              <li key={project.id}>Name: {project.name}, Description: {project.description}, Budget: {project.budget} 
              <button onClick = {Expenses}>dummy edit</button>
              <button>dummy delete</button>
              </li>)} 
          </ul>
          
      </div>
    )
  }
import axios from 'axios';
import { useState } from 'react';
import ExpensesFunction from "./ExpensesFunction";
import BackButton from "./BackButton";

export default function Projects() {
  var data = require ('../data/project.json');
  console.log(data);
  var [showDiv, setShowDiv] = useState(false);
  
  if(showDiv === true) {
    return <ExpensesFunction showDiv = {showDiv}/>
  }

  return (
      <div>
          <p>This is project component</p>
          <ul>
            {data.map(project => 
              <li key={project.id}>Name: {project.name}, Description: {project.description}, Budget: {project.budget} 
              <button onClick ={() => setShowDiv(showDiv = !showDiv)} >View Project</button>
              <button>dummy delete</button>
              </li>)} 
          </ul>
          
          <BackButton/>
      </div>
    )
  }
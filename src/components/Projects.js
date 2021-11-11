import axios from 'axios';
import { useState } from 'react';
import ExpensesFunction from "./ExpensesFunction";
import BackButton from "./BackButton";

export default function Projects() {
  var data = require ('../data/project.json');
  console.log(data);
  var [showDiv, setShowDiv] = useState(false);
  
  axios.get('http://localhost:5001/projects')
  .then((res) => {
      console.log(res.data);
      this.setState({data:res.data});
  })

  if(showDiv === true) {
    return <ExpensesFunction showDiv = {showDiv}/>
  }

  return (
      <div>
          <p>This is project component</p>
          <ul>
            {data.map(project => 
              <li key={project.id}>Name: {project.name},&nbsp;&nbsp;&nbsp; Description: {project.description},&nbsp;&nbsp;&nbsp; Budget: {project.budget} &nbsp;&nbsp;&nbsp;
              <button onClick ={() => setShowDiv(showDiv = !showDiv)} >View Project</button>
              
              </li>)} 
          </ul>
          
          <BackButton/>
      </div>
    )
  }
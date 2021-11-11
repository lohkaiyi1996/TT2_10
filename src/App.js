import './App.css';
import Login from './components/Login';
import Projects from './components/Projects';
import ShowExpenses from './components/showExpenses';
import Home from './components/Home';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();

  // Login menu will show if user is not logged in regardless of url path
  if (!token) {
    return <Login setToken={setToken} setUserId={setUserId}/>
  }

  return (
    <Router>
      <div className="App">
        <div class='nav-menu'>
        <Link to ="/home">
            <button type="button">Home</button>
        </Link>
        <Link to ="/projects">
            <button type="button">Projects</button>
        </Link>
        <Link to ="/expenses">
            <button type="button">All Expenses</button>
        </Link>
        </div>

        {/* Start of routes view */}
        <div class="content">
          <Routes>
          <Route path="/home" element={<Home />}/>
            <Route path="/projects" element={<Projects />}/> 
            <Route path="/expenses" element={<ShowExpenses />}/> 
            {/* <Route path="/dashboard" element={<Dashboard />}/>  */}

            {/* <Route path="/url_path_name" element={<COMPONENT_NAME />}/>  */}
          </Routes>
        </div>
        
      </div> {/*closing div*/}
    </Router>  
  )
}

export default App;

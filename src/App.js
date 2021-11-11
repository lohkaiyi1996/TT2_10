import './App.css';
import Login from './components/Login';
import Projects from './components/Projects';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [token, setToken] = useState();

  // Login menu will show if user is not logged in regardless of url path
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div className="App">
        <p>hello world</p>
        <div class='nav-menu'>
        <Link to ="/projects">
            <button type="button">products</button>
          </Link>
        </div>

        {/* Start of routes view */}
        <div class="content">
          <Routes>
            <Route path="/projects" element={<Projects />}/> 
            {/* <Route path="/dashboard" element={<Dashboard />}/>  */}

            {/* <Route path="/url_path_name" element={<COMPONENT_NAME />}/>  */}
          </Routes>
        </div>
      </div> {/*closing div*/}
    </Router>  
  )
}

export default App;

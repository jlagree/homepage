import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, List, Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';


function App() {
  const myStyle = {
    display: "inline",
    padding: "10px",
    width: "100%"
  }
  return (
    <Router>
      <div className="container">
        <nav style={myStyle}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/About" component={About}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;

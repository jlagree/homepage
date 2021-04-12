import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

function App() {
  const myStyle = {
    display: "inline",
    padding: "10px",
    width: "100%"
  }
  return (
    <div>
      <nav>
            <ul style={myStyle}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
      </nav>
      <Router>
          <Switch>
            <Route path="/About" component={About}/>
            <Route path="/" exact component={Home}/>
          </Switch>
      </Router>
    </div>
  );
}


export default App;

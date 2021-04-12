import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

function App() {
  const myStyle = {
    display: "inline",
    padding: "10px",
    width: "100%"
  }
  return (
    <div>
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

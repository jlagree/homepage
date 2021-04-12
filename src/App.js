import React, { Component } from 'react';
import {Route, Switch, List, BrowserRouter as Router} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/' exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;

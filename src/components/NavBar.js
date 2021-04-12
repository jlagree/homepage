import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ReactDOM from "react-dom"

function NavBar() {
  return (
    <Router>
      <h1>NavBar stuff</h1>
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
    <React.StrictMode>
        <NavBar/>
    </React.StrictMode>,
    document.getElementById('navbar')
);




import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, List} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    // <Router>
    //   <div className="container">
    //     <Switch>
    //       <Route path="/about" component={About}/>
    //       <Route path="/" exact component={Home}/>
    //     </Switch>
    //   </div>
    // </Router>
    <About />
  );
}


export default App;

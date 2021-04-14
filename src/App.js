import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Certifications from './components/Certifications';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavMenu/>
        <Route path='/' exact component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path="/certifications" component={Certifications}/>
        <Route path='/contact' component={Contact}/>
      </div>
    </Router>
  );
}


export default App;


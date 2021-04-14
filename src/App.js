import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Certifications from './components/Certifications';
import Home from './components/Home';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Banner/>
        <NavMenu/>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path="/certifications" component={Certifications}/>
        <Route path='/contact' component={Contact}/>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;


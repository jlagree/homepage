import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path='/' exact component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path="/about" component={About}/>
        
        <Header/>
        <NavMenu/>
        <Footer/>
      </div>
    </Router>
  );
}


export default App;


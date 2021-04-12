import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const myStyle = {
    display: "inline",
    padding: "10px",
    width: "100%"
  }
  return (
    <div>
      <Router>
        <Container>
        <nav>
              <ul style={myStyle}>
                <Row>
                  <Col><li>
                    <Link to="/">Home</Link>
                  </li></Col>
                  <Col><li>
                    <Link to="/About">About</Link>
                  </li></Col>
                </Row>
              </ul>
        </nav>
        </Container>
        <Switch>
          <Route path="/About" component={About}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;

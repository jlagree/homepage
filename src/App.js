import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  const myStyle = {
    display: "inline",
    padding: "10px",
    width: "100%"
  }
  return (
    <div>
      <Router>
        {/* <Container>
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
        </Container> */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href={Home}>Home</Nav.Link>
        <Nav.Link href={About}>About</Nav.Link>
        </Nav>
      </Navbar>

        <Switch>
          <Route path="/About" component={About}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;


<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
</Navbar>
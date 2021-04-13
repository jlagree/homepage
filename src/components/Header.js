import React from 'react'
import headerImage from './header.jpeg';
import '../App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <img src={headerImage}/> <br/>
                <h1>Messing with React!</h1>
            </Container>
        </Jumbotron>       
    )
}

export default Header

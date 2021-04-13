import React from 'react'
import headerImage from './header.jpeg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Jumbotron>
            <Container>
                <h1>Welcome to React Testing</h1>
            </Container>
        </Jumbotron>       
    )
}

export default Header

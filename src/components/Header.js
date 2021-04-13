import React from 'react'
import headerImage from './spaceHeader.jpeg';
import '../App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = () => {
    return (
        <Jumbotron style="height:200px">
            <img src={headerImage}/> <br/>
            <h1>Messing with React!</h1>
        </Jumbotron>       
    )
}

export default Header

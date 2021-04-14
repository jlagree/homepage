import React from 'react'
import headerImage from './img/header.jpeg';
import '../App.css';

const Banner = () => {
    return (
        <div className="bannerDiv">
            <img src={headerImage} alt="Header-image"/>
            <div className="imageText"><h1>My React Website</h1></div>
        </div>       
    )
}

export default Banner;

import React from 'react'
import headerImage from './img/header.jpeg';
import '../App.css';

const Banner = () => {
    return (
        <div className="bannerDiv">
            <img src={headerImage} alt="Header-image"/>
            <div className="imageText">My React Website</div>
        </div>       
    )
}

export default Banner;

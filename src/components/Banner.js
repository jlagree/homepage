import React from 'react'
import headerImage from './header.jpeg';
import '../App.css';

const Banner = () => {
    return (
        <div className="bannerDiv">
            <img src={headerImage} alt="Header-image"/>
        </div>       
    )
}

export default Banner;

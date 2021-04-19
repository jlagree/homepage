import React from 'react'
import headerImage from './img/header.jpeg';
import '../App.css';

const Banner = () => {
    return (
        <div className="bannerDiv">
            <img src={headerImage} alt="Header-image"/>
            <div className="imageText">
                <b>Jeremy LaGree</b><br/>
            </div>
        </div>       
    )
}

export default Banner;

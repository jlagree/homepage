import React from 'react'
import headerImage from './spaceHeader.jpeg';
import '../App.css';

const Header = () => {
    return (
        <div className="headerWithImage">
            <img src={headerImage}/> <br/>
        </div>        
    )
}

export default Header

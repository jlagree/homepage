import React from 'react'
import headerImage from './spaceHeader.jpeg';

const Header = () => {
    const imgStyle = {
        top: "2px",
        left: "2px",
        right: "2px",
        bottom: "2px",
        width: "100%",
        height: "10%"
    }
    return (
        <div className="headerWithImage">
            <img src={headerImage} style={imgStyle}/> <br/>
        </div>        
    )
}

export default Header

import React from 'react'
import headerImage from './spaceHeader.jpeg';

const Header = () => {
    const imgStyle = {
        position: "absolute",
        top: "2px",
        left: "2px",
        right: "2px",
        bottom: "2px"
    }
    return (
        <div className="headerWithImage">
            <img src={headerImage} style={imgStyle}/> <br/>
            <h1>My Website Header!</h1>
        </div>        
    )
}

export default Header

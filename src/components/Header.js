import React from 'react'
import headerImage from './spaceHeader.jpeg';

const Header = () => {
    const imgStyle = {
        position: "absolute",
        top: "5px",
        left: "10px",
        height: "75px"
    }
    return (
        <div className="image">
            <img src={headerImage} height="15px" />
            <h1>My Website Header!</h1>
        </div>        
    )
}

export default Header

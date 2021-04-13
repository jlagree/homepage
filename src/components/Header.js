import React from 'react'
import headerImage from './woodimage.jpg';

const Header = () => {
    const imgStyle = {
        position: "absolute",
        height: "100px",
        width: "100%"
    }
    return (
        <div className="image">
            <img src={headerImage} style={imgStyle}/> <br/>
            <h1>My Website Header!</h1>
        </div>        
    )
}

export default Header

import React from 'react'
import headerImage from './spaceHeader.jpeg';

const Header = () => {
    return (
        <div className="image">
            <span><img src={headerImage} height="15px" /></span>
            <h1>My Website Header!</h1>
        </div>        
    )
}

export default Header

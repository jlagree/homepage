import React from 'react'
import headerImage from './spaceHeader.jpeg';

const Header = () => {
    return (
        <div>
            <span><img src={headerImage} /></span>
            <h1>My Website Header!</h1>
        </div>        
    )
}

export default Header

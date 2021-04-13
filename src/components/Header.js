import React from 'react'
import headerImage from './spaceHeader.jpeg';

const Header = () => {
    return (
        <div>
            <img src={headerImage} height={10} width={100}/>
            <h1>My Website Header!</h1>
        </div>        
    )
}

export default Header

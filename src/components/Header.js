import React from 'react'
import headerImage from './header.jpeg';

const Header = () => {
    return (
        <div>
            <img src={headerImage} alt="Header image"/>
        </div>       
    )
}

ReactDOM.render(
    <Header />,
    document.getElementById('header')
);

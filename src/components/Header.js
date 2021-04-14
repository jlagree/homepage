import React from 'react'
import ReactDOM from 'react-dom';
import headerImage from './header.jpeg';

const Banner = () => {
    return (
        <div>
            <img src={headerImage} alt="Header-image"/>
        </div>       
    )
}

ReactDOM.render(
    <Banner />,
    document.getElementById('header')
);

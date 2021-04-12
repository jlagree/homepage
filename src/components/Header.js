import React from 'react'
import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <header>
            <h1>My Website Header!</h1>
        </header>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>,
    document.getElementById('header')
);

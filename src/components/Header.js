import React from 'react'
import ReactDOM from 'react-dom';

const header = () => {
    return (
        <header>
            <img src={pic}></img>
            <h1>My Website Header!</h1>
        </header>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>,
    document.getElementById('header')
);

import React from 'react'
import ReactDOM from 'react-dom';

const HeaderFunc = () => {
    return (
        <header>
            <h1>My Website Header!</h1>
        </header>
    )
}

ReactDOM.render(
    <HeaderFunc />, document.getElementById('myHeader')
);

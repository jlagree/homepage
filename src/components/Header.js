import React from 'react'
import ReactDOM from 'react-dom';

const HeaderFunc = () => {
    return (
        <div>
             <h1>My Website Header!</h1>
        </div>        
    )
}

ReactDOM.render(
    <React.StrictMode>
        <HeaderFunc />
    </React.StrictMode>, 
    document.getElementById('myHeader')
);

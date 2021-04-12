import React from 'react'
import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <div>
            <h1>My Website Header!</h1>
        </div>        
    )
}
//export default Header

ReactDOM.render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>, 
    document.getElementById('myHeader')
);

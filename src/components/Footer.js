import React from 'react'
import ReactDOM from 'react-dom';

const FooterFunc = () => {
    return (
        <div>
            <h1>This will be my footer!</h1>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <FooterFunc />
    </React.StrictMode>, 
    document.getElementById('myFooter')
);

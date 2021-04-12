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
    <FooterFunc />, document.getElementById('myFooter')
);

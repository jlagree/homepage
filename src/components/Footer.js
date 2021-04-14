import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

const Footer = () => {
    return (
        <div className="footer">
            <h3>Created by Jeremy LaGree</h3>
        </div>
    )
}

ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
);
import React from 'react'
import '../App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const NavMenu = () => {
    const navstyle = {
        color: 'white'
    }
    return (
        <div>
            <nav>
                <Router>
                <ul className="nav-links">
                    <Link style={navstyle} to='/homepage'>
                        <li>Home</li>
                    </Link>
                    <Link style={navstyle} to='/certifications'>
                        <li>Certifications</li>
                    </Link>
                    <Link style={navstyle} to='/contact'>
                        <li>Contact</li>
                    </Link>
                </ul>
                </Router>
            </nav>
        </div>
    )
}

export default NavMenu

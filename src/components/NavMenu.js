import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';

const NavMenu = () => {
    const navstyle = {
        color: 'white'
    }
    return (
        <nav>
            <ul className="nav-links">
                <Link style={navstyle} to='/home'>
                    <li>Home</li>
                </Link>
                <Link style={navstyle} to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavMenu

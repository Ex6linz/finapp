import './Navbar.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

function Navbar() {
    return (
        <nav className="container-fluid">
            <ul>
                <li><strong>Fin-App</strong></li>
            </ul>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#" role="button">Contact</a></li>
                <li><a href="login" role="button">Login</a> </li>
                <li><a href="register" role="button">Register</a> </li>
            </ul>
        </nav>
    );
}

export default Navbar;
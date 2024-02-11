import './Navbar.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar-container">
            <strong className="navbar-brand">Fin-App</strong>
            <ul className="navbar-nav">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#" role="button">Contact</a></li>
                <li><a href="login" role="button">Login</a></li>
                <li><a href="register" role="button">Register</a></li>
            </ul>
            {/* Optional: Add a button for the navbar-toggle here */}
        </nav>
    );
}

export default Navbar;
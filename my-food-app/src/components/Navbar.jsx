import React from 'react';
//import './App.css'; // Upewnij się, że importujesz App.css, jeśli tu są twoje style
import logo from '../assets/logo.png'; // Ścieżka do obrazu logo
import './Navbar.css'; // Zaimportuj styl specyficzny dla navbara

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="nav-links">
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
                <a href="/about">O nas</a>
                <a href="/contact">Kontakt</a>
                <a href="/featured">Polecane</a>
            </div>
        </nav>
    );
}

export default Navbar;
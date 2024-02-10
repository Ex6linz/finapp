import React from 'react';
import logo from '../assets/logo_1.jpg'; // Ścieżka do obrazu logo
import './Navbar.css';
import {Link} from "react-router-dom"; // Zaimportuj styl specyficzny dla navbara


function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="nav-links">
                { /*<a href="/login">Login</a> */}
                <Link to="/login">Login</Link>
                <a href="/signup">Sign Up</a>
                <a href="/about">O nas</a>
                <a href="/contact">Kontakt</a>
                <a href="/featured">Polecane</a>
            </div>
        </nav>
    );
}

export default Navbar;
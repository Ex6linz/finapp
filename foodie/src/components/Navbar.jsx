
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="/about">O nas</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Rejestracja</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
import { Link, useLocation } from 'react-router-dom';
import '../style/Style.css';

function Navbar() {
    const location = useLocation(); // Current route detect karega

    // Active class check karne ke liye function
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <h2>Shopify Pro</h2>
                </div>

                <ul className="nav-menu">
                    <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className={`nav-item ${isActive('/products') ? 'active' : ''}`}>
                        <Link to="/products" className="nav-link">Products</Link>
                    </li>
                    <li className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>

                <div className="nav-actions">
                    <div className="action-buttons">
                        <button className="wishlist-btn">♥ 3</button>
                        <button className="cart-btn">🛒 5</button>
                        <button className="toggle-btn"></button>
                        <button className="account-btn">Account</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
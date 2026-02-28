import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Landmark } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo-container">
                    <Landmark className="logo-icon" size={24} />
                    <span className="logo-text">JHANSI <span className="logo-accent">ASSOCIATES</span></span>
                </Link>

                <nav className="main-nav">
                    <ul className="nav-links">
                        <li><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
                        <li><Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link></li>
                        <li><Link to="/resources" className={`nav-link ${isActive('/resources')}`}>Resources</Link></li>
                        <li><Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link></li>
                        <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <a href="#" className="pay-online">Pay Online</a>
                    <button className="btn-primary login-btn">Client Login</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

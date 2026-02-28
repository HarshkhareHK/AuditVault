import { useState, useEffect } from 'react';
import { Landmark } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo-container">
                    <Landmark className="logo-icon" size={24} />
                    <span className="logo-text">JHANSI <span className="logo-accent">ASSOCIATES</span></span>
                </div>

                <nav className="main-nav">
                    <ul className="nav-links">
                        <li><a href="#" className="nav-link active">Home</a></li>
                        <li><a href="#" className="nav-link">Services</a></li>
                        <li><a href="#" className="nav-link">Resources</a></li>
                        <li><a href="#" className="nav-link">About</a></li>
                        <li><a href="#" className="nav-link">Contact</a></li>
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

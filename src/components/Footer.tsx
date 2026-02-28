
import { Landmark, Globe, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="logo-container">
                    <Landmark className="logo-icon" size={24} />
                    <span className="logo-text">JHANSI <span className="logo-accent">ASSOCIATES</span></span>
                </div>

                <div className="footer-copyright">
                    © {new Date().getFullYear()} JHANSI ASSOCIATES. LICENSED CHARTERED ACCOUNTANTS. ALL RIGHTS RESERVED.
                </div>

                <div className="footer-links">
                    <a href="#" className="footer-icon" aria-label="Website"><Globe size={18} /></a>
                    <a href="#" className="footer-icon" aria-label="Email"><Mail size={18} /></a>
                    <a href="#" className="footer-icon" aria-label="Phone"><Phone size={18} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

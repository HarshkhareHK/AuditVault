
import { ArrowRight, BarChart3, Banknote, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <div className="hero-text-content">
                    <div className="badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <span className="badge-dot"></span>
                        NOW POWERED BY AI FINANCIAL MODELS
                    </div>

                    <h1 className="hero-headline animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Helping Jhansi <br />
                        Businesses <span className="text-gradient">Scale</span> <br />
                        with AI-Driven <br />
                        Tax Strategy
                    </h1>

                    <p className="hero-subheadline animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        Full-stack GST, Audit, and Virtual CFO services tailored for modern entrepreneurs in Uttar Pradesh and beyond. Experience financial precision like never before.
                    </p>

                    <div className="hero-cta animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <button className="btn-primary">
                            Book a Free 15-Min Strategy Call <ArrowRight size={18} />
                        </button>
                        <button className="btn-outline">
                            Our Services
                        </button>
                    </div>
                </div>

                <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <div className="stats-glass-container">
                        <div className="stats-top-row">
                            <div className="stat-card">
                                <div className="stat-icon-wrapper">
                                    <BarChart3 className="stat-icon" size={20} />
                                </div>
                                <div className="stat-value">99.8%</div>
                                <div className="stat-label">AUDIT ACCURACY</div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon-wrapper">
                                    <Banknote className="stat-icon" size={20} />
                                </div>
                                <div className="stat-value">₹500Cr+</div>
                                <div className="stat-label">TAX MANAGED</div>
                            </div>
                        </div>

                        <div className="stat-card stat-card-wide">
                            <div className="stat-header">
                                <div className="stat-label text-left">LIVE GST COMPLIANCE SCORE</div>
                                <ShieldCheck className="stat-icon-green" size={20} />
                            </div>
                            <div className="stat-value-green">Excellent (98/100)</div>
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: '98%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

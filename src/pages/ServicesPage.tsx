import { FileText, Briefcase, Calculator, Users } from 'lucide-react';
import './ServicesPage.css';

const ServicesPage = () => {
    return (
        <div className="services-page">
            {/* Services Hero Section */}
            <section className="services-hero">
                <div className="container text-center">
                    <div className="badge animate-fade-in" style={{ animationDelay: '0.1s', margin: '0 auto 24px' }}>
                        <span className="badge-dot" style={{ backgroundColor: 'var(--orange)' }}></span>
                        NEXT-GEN CA ADVISORY
                    </div>

                    <h1 className="hero-headline animate-fade-in" style={{ animationDelay: '0.2s', color: 'var(--dark)' }}>
                        Expert Solutions for Your <br />
                        <span className="text-orange-gradient">Business Challenges</span>
                    </h1>

                    <p className="hero-subheadline animate-fade-in" style={{ animationDelay: '0.3s', color: 'var(--text)', margin: '0 auto 40px' }}>
                        Tech-forward CA services designed to navigate complex regulatory <br />
                        landscapes with ease, precision, and strategic foresight.
                    </p>

                    <div className="hero-cta justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <button className="btn-primary" style={{ backgroundColor: 'var(--orange)' }}>
                            Explore Services Engine
                        </button>
                        <button className="btn-outline" style={{ color: 'var(--dark)', borderColor: 'var(--dark)' }}>
                            Book Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Engine Section */}
            <section className="services-engine bg-gray-50 section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title text-left" style={{ color: 'var(--dark)' }}>Services Engine</h2>
                        <p className="section-subtitle text-left" style={{ textTransform: 'none', letterSpacing: 'normal' }}>
                            Comprehensive compliance & growth solutions for modern enterprises.
                        </p>
                        <div className="carousel-indicators">
                            <span className="indicator active" style={{ backgroundColor: 'var(--orange)' }}></span>
                            <span className="indicator"></span>
                            <span className="indicator"></span>
                        </div>
                    </div>

                    <div className="services-engine-grid">
                        {/* Service Card 1 */}
                        <div className="engine-card">
                            <div className="engine-icon-wrapper bg-orange-light">
                                <FileText className="text-orange" size={24} />
                            </div>
                            <h3 className="engine-card-title">GST Notice Response</h3>
                            <p className="engine-card-desc">
                                Resolution of complex tax disputes and litigation. We represent your case with strategic precision.
                            </p>

                            <div className="required-docs">
                                <h4 className="docs-title text-orange">REQUIRED DOCUMENTS</h4>
                                <ul className="docs-list">
                                    <li><span className="check text-orange">✓</span> GSTIN & Notice Copy</li>
                                    <li><span className="check text-orange">✓</span> Digital Signature</li>
                                    <li><span className="check text-orange">✓</span> Ledger Copies</li>
                                </ul>
                            </div>

                            <div className="engine-pricing">
                                <span className="starting-from">Starting from</span>
                                <span className="price">₹4,999</span>
                            </div>
                            <button className="btn-dark w-full">Book Now</button>
                        </div>

                        {/* Service Card 2 */}
                        <div className="engine-card active-card" style={{ borderTop: '4px solid var(--orange)' }}>
                            <div className="engine-icon-wrapper bg-orange-light">
                                <Briefcase className="text-orange" size={24} />
                            </div>
                            <h3 className="engine-card-title">Business Registration</h3>
                            <p className="engine-card-desc">
                                End-to-end company incorporation and compliance. Launch your venture with full legal security.
                            </p>

                            <div className="required-docs">
                                <h4 className="docs-title text-orange">REQUIRED DOCUMENTS</h4>
                                <ul className="docs-list">
                                    <li><span className="check text-orange">✓</span> PAN & ID Proof</li>
                                    <li><span className="check text-orange">✓</span> Address Proof (Office)</li>
                                    <li><span className="check text-orange">✓</span> MOA / AOA Drafts</li>
                                </ul>
                            </div>

                            <div className="engine-pricing">
                                <span className="starting-from">Starting from</span>
                                <span className="price">₹2,499</span>
                            </div>
                            <button className="btn-primary w-full" style={{ backgroundColor: 'var(--orange)' }}>Book Now</button>
                        </div>

                        {/* Service Card 3 */}
                        <div className="engine-card">
                            <div className="engine-icon-wrapper bg-orange-light">
                                <Calculator className="text-orange" size={24} />
                            </div>
                            <h3 className="engine-card-title">Statutory Audit</h3>
                            <p className="engine-card-desc">
                                Comprehensive audit for regulatory transparency and stakeholder trust. High-quality reporting.
                            </p>

                            <div className="required-docs">
                                <h4 className="docs-title text-orange">REQUIRED DOCUMENTS</h4>
                                <ul className="docs-list">
                                    <li><span className="check text-orange">✓</span> Trial Balance</li>
                                    <li><span className="check text-orange">✓</span> Bank Statements</li>
                                    <li><span className="check text-orange">✓</span> Purchase/Sale Invoices</li>
                                </ul>
                            </div>

                            <div className="engine-pricing">
                                <span className="starting-from">Starting from</span>
                                <span className="price">₹14,999</span>
                            </div>
                            <button className="btn-dark w-full">Book Now</button>
                        </div>

                        {/* Service Card 4 */}
                        <div className="engine-card">
                            <div className="engine-icon-wrapper bg-orange-light">
                                <Users className="text-orange" size={24} />
                            </div>
                            <h3 className="engine-card-title">Virtual CFO</h3>
                            <p className="engine-card-desc">
                                Strategic financial leadership for scaling startups and SMEs without the full-time overhead cost.
                            </p>

                            <div className="required-docs">
                                <h4 className="docs-title text-orange">REQUIRED DOCUMENTS</h4>
                                <ul className="docs-list">
                                    <li><span className="check text-orange">✓</span> Monthly Financials</li>
                                    <li><span className="check text-orange">✓</span> Budget Plans</li>
                                    <li><span className="check text-orange">✓</span> Cash Flow Statements</li>
                                </ul>
                            </div>

                            <div className="engine-pricing">
                                <span className="starting-from">Starting from</span>
                                <span className="price">₹24,999<span className="month">/mo</span></span>
                            </div>
                            <button className="btn-dark w-full">Book Now</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta bg-orange section-padding">
                <div className="container">
                    <div className="cta-content flex-between">
                        <div>
                            <h2 className="cta-headline">Ready to streamline your compliance?</h2>
                            <p className="cta-subheadline">Upload your documents now for a free initial assessment.</p>
                        </div>
                        <button className="btn-white text-orange font-bold">Get Started Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;

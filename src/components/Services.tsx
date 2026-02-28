import { Link } from 'react-router-dom';
import { AlertTriangle, Rocket, FileText, ChevronRight } from 'lucide-react';
import './Services.css';

const Services = () => {
    return (
        <section className="services section-padding">
            <div className="container">
                <div className="section-header text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <h4 className="section-subtitle">SOLVING YOUR COMPLIANCE HURDLES</h4>
                    <h2 className="section-title">Expert Solutions for Your Business Challenges</h2>
                </div>

                <div className="services-grid">
                    {/* Service Card 1 */}
                    <div className="service-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="card-accent-shape"></div>
                        <div className="card-icon-wrapper bg-orange-light">
                            <AlertTriangle className="text-orange" size={24} />
                        </div>

                        <h3 className="card-title">Struggling with GST Notices?</h3>
                        <p className="card-desc">
                            Our AI-driven response system analyzes notices and historical filings to provide rapid, compliant resolutions to tax authorities.
                        </p>

                        <Link to="/services" className="card-link">
                            Get Help Now <ChevronRight size={16} />
                        </Link>
                    </div>

                    {/* Service Card 2 */}
                    <div className="service-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="card-accent-shape"></div>
                        <div className="card-icon-wrapper bg-orange-light">
                            <Rocket className="text-orange" size={24} />
                        </div>

                        <h3 className="card-title">Starting a New Business?</h3>
                        <p className="card-desc">
                            From PAN/TAN registration to ROC filings, we handle the complex paperwork so you can focus on building your empire.
                        </p>

                        <Link to="/services" className="card-link">
                            Explore Setup <ChevronRight size={16} />
                        </Link>
                    </div>

                    {/* Service Card 3 */}
                    <div className="service-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <div className="card-accent-shape"></div>
                        <div className="card-icon-wrapper bg-orange-light">
                            <FileText className="text-orange" size={24} />
                        </div>

                        <h3 className="card-title">Need an Audit for a Loan?</h3>
                        <p className="card-desc">
                            Professional statutory and internal audits designed to strengthen your balance sheet and satisfy banking requirements.
                        </p>

                        <Link to="/services" className="card-link">
                            Schedule Audit <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

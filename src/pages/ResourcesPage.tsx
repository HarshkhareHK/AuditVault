import { useState } from 'react';
import {
    Search, Calculator, TrendingUp, ChevronLeft, ChevronRight,
    FileText, Download, ExternalLink, ArrowRight
} from 'lucide-react';
import balanceSheetsImg from '../assets/balance_sheets_guide.png';
import gstComplianceImg from '../assets/gst_compliance_guide.png';
import './ResourcesPage.css';

interface CalcCard {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge?: string;
    link: string;
}

interface Newsletter {
    title: string;
    date: string;
    size: string;
}

interface Guide {
    image: string;
    tag: string;
    tagColor: string;
    title: string;
    description: string;
}

const calculators: CalcCard[] = [
    {
        icon: <Calculator className="text-orange" size={24} />,
        title: 'Old vs New Tax Regime 2026',
        description: 'Compare your tax liability under the latest budget provisions and optimize your savings.',
        link: '#',
    },
    {
        icon: <FileText className="text-orange" size={24} />,
        title: 'GST Late Fee Calculator',
        description: 'Accurately estimate GSTR-3B and GSTR-1 late filing fees based on turnover and delay period.',
        badge: 'UPDATED',
        link: '#',
    },
    {
        icon: <TrendingUp className="text-orange" size={24} />,
        title: 'Capital Gains Estimator',
        description: 'Calculate STCG and LTCG for equity, property, and gold with indexation benefits.',
        link: '#',
    },
];

const newsletters: Newsletter[] = [
    { title: 'Tax Insights - October 2025', date: 'RELEASED OCT 01, 2025', size: '3.4 MB' },
    { title: 'Regulatory Roundup - September 2025', date: 'RELEASED SEP 01, 2025', size: '1.8 MB' },
    { title: 'August Audit Special Edition', date: 'RELEASED AUG 01, 2025', size: '2.1 MB' },
];

const guides: Guide[] = [
    {
        image: balanceSheetsImg,
        tag: 'Accounting',
        tagColor: '#f36428',
        title: 'Reading Balance Sheets for Beginners',
        description: 'Master the art of understanding assets, liabilities, and equity like a pro.',
    },
    {
        image: gstComplianceImg,
        tag: 'Compliance',
        tagColor: '#f36428',
        title: 'GST Compliance Guide 2025',
        description: 'Step-by-step checklist to ensure your business stays 100% compliant with GST...',
    },
];

const ResourcesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="resources-page">
            {/* Hero Section */}
            <section className="resources-hero">
                <div className="resources-hero-bg"></div>
                <div className="container text-center resources-hero-content">
                    <h1 className="resources-hero-title animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        Resource <span className="text-orange-gradient">Center</span>
                    </h1>
                    <p className="resources-hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Your comprehensive hub for financial tools, expert guides, and the latest<br />
                        regulatory updates in Indian taxation.
                    </p>

                    <div className="resources-search-bar animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Find calculators, guides, and tax updates..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        <button className="search-btn">Search</button>
                    </div>
                </div>
            </section>

            {/* Calculator Suite Section */}
            <section className="calculator-suite section-padding">
                <div className="container">
                    <div className="calc-header">
                        <div>
                            <h2 className="calc-title">Calculator Suite</h2>
                            <p className="calc-subtitle">Quick estimation tools for your financial planning</p>
                        </div>
                        <div className="calc-nav-arrows">
                            <button className="calc-arrow" aria-label="Previous">
                                <ChevronLeft size={20} />
                            </button>
                            <button className="calc-arrow" aria-label="Next">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="calc-grid">
                        {calculators.map((calc, index) => (
                            <div className="calc-card" key={index}>
                                {calc.badge && (
                                    <span className="calc-badge">{calc.badge}</span>
                                )}
                                <div className="calc-icon-wrapper bg-orange-light">
                                    {calc.icon}
                                </div>
                                <h3 className="calc-card-title">{calc.title}</h3>
                                <p className="calc-card-desc">{calc.description}</p>
                                <a href={calc.link} className="calc-link">
                                    LAUNCH CALCULATOR <ArrowRight size={14} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletters & Guides Section */}
            <section className="newsletters-guides section-padding">
                <div className="container">
                    <div className="ng-grid">
                        {/* Monthly Newsletters */}
                        <div className="newsletters-col">
                            <div className="ng-header">
                                <div className="ng-icon-wrapper">
                                    <FileText className="text-orange" size={20} />
                                </div>
                                <h2 className="ng-title">Monthly Newsletters</h2>
                            </div>

                            <div className="newsletters-list">
                                {newsletters.map((nl, index) => (
                                    <div className="newsletter-item" key={index}>
                                        <div className="nl-icon-wrapper">
                                            <FileText className="text-orange" size={18} />
                                        </div>
                                        <div className="nl-info">
                                            <h4 className="nl-title">{nl.title}</h4>
                                            <span className="nl-meta">{nl.date} • {nl.size}</span>
                                        </div>
                                        <button className="nl-download" aria-label="Download">
                                            <Download size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <a href="#" className="archive-link">
                                Archive Newsletters <ExternalLink size={14} />
                            </a>
                        </div>

                        {/* How-to Guides */}
                        <div className="guides-col">
                            <div className="ng-header">
                                <div className="ng-icon-dot"></div>
                                <h2 className="ng-title">How-to Guides</h2>
                            </div>

                            <div className="guides-grid">
                                {guides.map((guide, index) => (
                                    <div className="guide-card" key={index}>
                                        <div className="guide-img-wrapper">
                                            <img src={guide.image} alt={guide.title} className="guide-img" />
                                            <span
                                                className="guide-tag"
                                                style={{ backgroundColor: guide.tagColor }}
                                            >
                                                {guide.tag}
                                            </span>
                                        </div>
                                        <div className="guide-content">
                                            <h4 className="guide-title">{guide.title}</h4>
                                            <p className="guide-desc">{guide.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Subscription CTA */}
            <section className="resources-cta-section">
                <div className="container">
                    <div className="resources-cta bg-orange">
                        <div className="cta-left">
                            <h2 className="cta-headline">Stay ahead of the curve</h2>
                            <p className="cta-subtext">
                                Get critical tax updates and financial insights delivered directly to<br />
                                your inbox every Monday.
                            </p>
                        </div>
                        <div className="cta-right">
                            <div className="cta-email-form">
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    className="cta-email-input"
                                />
                                <button className="cta-subscribe-btn">Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResourcesPage;

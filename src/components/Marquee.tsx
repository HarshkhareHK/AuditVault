
import { AlertTriangle, Clock, CloudLightning } from 'lucide-react';
import './Marquee.css';

const Marquee = () => {
    return (
        <div className="marquee-container">
            <div className="marquee-header">
                <span>TRUSTED BY EXPERTS IN RETAIL, E-COMMERCE, MANUFACTURING</span>
            </div>

            <div className="marquee-wrapper">
                <div className="marquee-content">
                    <div className="marquee-item">
                        <span className="marquee-icon-wrap bg-orange-dim">
                            <CloudLightning size={14} className="text-orange" />
                        </span>
                        New MSME Audit Rules 2024
                    </div>

                    <div className="marquee-item">
                        <span className="marquee-icon-wrap bg-red-dim">
                            <AlertTriangle size={14} className="text-red" />
                        </span>
                        Income Tax Portal Updates Live
                    </div>

                    <div className="marquee-item">
                        <span className="marquee-icon-wrap bg-yellow-dim">
                            <Clock size={14} className="text-yellow" />
                        </span>
                        Latest ROC Compliance Changes
                    </div>

                    <div className="marquee-item">
                        <span className="marquee-icon-wrap bg-orange-dim">
                            <CloudLightning size={14} className="text-orange" />
                        </span>
                        GST Filing Deadline: 20th Oct
                    </div>

                    {/* Repeat for seamless loop */}
                    <div className="marquee-item">
                        <span className="marquee-icon-wrap bg-orange-dim">
                            <CloudLightning size={14} className="text-orange" />
                        </span>
                        New MSME Audit Rules 2024
                    </div>

                    <div className="marquee-item">
                        <span className="marquee-icon-wrap bg-red-dim">
                            <AlertTriangle size={14} className="text-red" />
                        </span>
                        Income Tax Portal Updates Live
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marquee;

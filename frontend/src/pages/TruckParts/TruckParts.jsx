import React from 'react';
import './TruckParts.css';
import TruckPartsImage from '../../assets/acd82af141d1308bffcf090586cb3cd044d3822d.png';

const TruckParts = () => {
    return (
        <div className="truckparts">
            {/* Background Elements */}
            <div className="truckparts__background-overlay"></div>
            
            {/* Truck Silhouette Background */}
            <div className="truckparts__truck-silhouette">
                <img src={TruckPartsImage} alt="" />
            </div>

            {/* Content Container */}
            <div className="truckparts__content-container">
                {/* Main Heading */}
                <h1 className="truckparts__main-heading">
                    PREMIUM USED TRUCK PARTS YOU CAN TRUST
                </h1>

                {/* Subheading */}
                <p className="truckparts__subheading">
                    FROM SALVAGED ENGINES TO WINCHES — WE'VE GOT THE PARTS THAT KEEP HEAVY-DUTY TRUCKS RUNNING
                </p>

                {/* Description */}
                <p className="truckparts__description">
                    WHETHER YOU'RE LOOKING FOR A REPLACEMENT DIFFERENTIAL, A POWERFUL WINCH, OR SALVAGED COMPONENTS FROM TRUCKS AND 
                    EQUIPMENT, BIGTRUCKING IS YOUR GO-TO SOURCE. OUR EXPERT TEAM ENSURES EVERY PART IS INSPECTED, TESTED, AND READY FOR 
                    ACTION — GIVING YOU THE PERFORMANCE YOU NEED AT A FRACTION OF THE NEW-PART COST.
                </p>

                {/* CTA Button */}
                <button className="truckparts__cta-button">
                    <span className="truckparts__button-content">
                        <svg className="truckparts__arrow-icon" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Request A Part Now
                    </span>
                </button>
            </div>

            {/* Decorative Elements */}
            <div className="truckparts__decorative-square-1"></div>
            <div className="truckparts__decorative-square-2"></div>
            <div className="truckparts__decorative-dot-1"></div>
            <div className="truckparts__decorative-dot-2"></div>

            {/* Gradient Overlays */}
            <div className="truckparts__gradient-bottom"></div>
            <div className="truckparts__gradient-top"></div>
        </div>
    );
};

export default TruckParts;
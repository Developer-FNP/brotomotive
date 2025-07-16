import React from 'react';
import './TruckParts.css';
import TruckPartsImage from '../../assets/acd82af141d1308bffcf090586cb3cd044d3822d.png';
import Form from '../../components/Form';

const TruckParts = () => {
    return (
        <>
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
                    PREMIUM USED TRUCK PARTS YOU CAN <br/> TRUST
                </h1>

                {/* Subheading */}
                <p className="truckparts__subheading">
                    FROM SALVAGED ENGINES TO WINCHES — WE'VE GOT THE PARTS THAT KEEP HEAVY-DUTY TRUCKS RUNNING
                </p>

                {/* Description */}
                <p className="truckparts__description">
                    WHETHER YOU'RE LOOKING FOR A REPLACEMENT DIFFERENTIAL, A POWERFUL WINCH, OR SALVAGED COMPONENTS FROM TRUCKS AND <br/>
                    EQUIPMENT, BIGTRUCKING IS YOUR GO-TO SOURCE. OUR EXPERT TEAM ENSURES EVERY PART IS INSPECTED, TESTED, AND READY FOR <br/> 
                    ACTION — GIVING YOU THE PERFORMANCE YOU NEED AT A FRACTION OF THE NEW-PART COST.
                </p>

                {/* CTA Button */}
                <Form />
            </div>
        </div>

        <section className="truckparts__info-box">

                    {/* 1. SALVAGE TRUCK PARTS */}
                    <div className="truckparts__info-section">
                        <h2>1. SALVAGE TRUCK PARTS</h2>
                        <h3 className="under_parts_subheading">Your Source for Quality Salvaged Truck Components</h3>
                        <p>
                            At Brotomotive, we specialize in providing high-quality salvage truck parts from heavy-duty vehicles that have been carefully dismantled. Each component is inspected for functionality and durability to ensure it meets your expectations.
                        </p>
                        <h4>Why Choose Salvage Parts?</h4>
                        <ul>
                            <li>Cost-effective alternative to new OEM parts</li>
                            <li>Environmentally friendly choice by reusing components</li>
                            <li>Availability of rare or discontinued parts</li>
                        </ul>
                    </div>

                    {/* 2. DIFFERENTIALS */}
                    <div className="truckparts__info-section">
                        <h2>2. DIFFERENTIALS</h2>
                        <h3 className="under_parts_subheading">Heavy-Duty Differentials You Can Rely On</h3>
                        <p>
                            We stock a wide range of used and rebuilt differentials for commercial trucks, semi-trailers, and heavy equipment.
                        </p>
                        <h4>What You'll Find:</h4>
                        <ul>
                            <li>Complete axle assemblies</li>
                            <li>Ring and pinion sets</li>
                            <li>Limited-slip and locking differentials</li>
                        </ul>
                    </div>

                    {/* 3. EQUIPMENT SALVAGE */}
                    <div className="truckparts__info-section">
                        <h2>3. EQUIPMENT SALVAGE</h2>
                        <h3 className="under_parts_subheading">Heavy Equipment Parts Salvaged & Ready to Serve</h3>
                        <p>
                            Need parts for construction, agricultural, or industrial equipment? Our inventory includes components from excavators, loaders, graders, and more.
                        </p>
                        <h4>Available Parts Categories:</h4>
                        <ul>
                            <li>Hydraulic pumps and cylinders</li>
                            <li>Engine and transmission assemblies</li>
                            <li>Operator cab components</li>
                            <li>Electronic control units</li>
                        </ul>
                    </div>

                    {/* 4. WINCHES */}
                    <div className="truckparts__info-section">
                        <h2>4. WINCHES</h2>
                        <h3 className="under_parts_subheading">Reliable Winches for Heavy-Duty Applications</h3>
                        <p>
                            From recovery operations to cargo securing, a dependable winch is essential. We offer a selection of used and reconditioned winches for all types of trucks and trailers.
                        </p>
                        <h4>Types We Offer:</h4>
                        <ul>
                            <li>Bumper-mounted recovery winches</li>
                            <li>Bed-mounted industrial winches</li>
                            <li>Heavy-duty cable and rope winch systems</li>
                        </ul>
                    </div>

                    {/* Contact Footer */}
                    <div className="truckparts__contact-prompt">
                        <p>NEED HELP FINDING THE RIGHT TRUCK PART? OUR TEAM IS READY TO GUIDE YOU.</p>
                        <p><strong>Request a Free Part Match</strong> <br />or<br /> 
                        <span className="truckparts__phone-highlight">Call +18333745813</span></p>
                    </div>
                </section>
        </>
    );
};

export default TruckParts;
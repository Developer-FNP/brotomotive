import React from 'react';
import './About.css';
import ServiceCard from '../../components/ServiceCard';
import truckImage from '../../assets/truck-image.png';
import wrenchIcon from '../../assets/wrench-icon.png';
import supportIcon from '../../assets/support-icon.png';
import deliveryIcon from '../../assets/delivery-icon.png';
import Choose from '../Choose'
import Testimonials from '../Testimonials'

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-header">
              <span className="about-label">About Us</span>
            </div>
            
            <div className="about-text">
              <h1 className="about-title">
                Fueled By <span className="highlight-blue">Expertise</span>.<br />
                Driven By <span className="highlight-blue">Values</span>.<br />
                Powered By <span className="highlight-blue">Trust</span>.
              </h1>
              
              <div className="about-description">
                <p>
                  At Brotomotive, We're More Than Just A Parts Provider — We're The 
                  Driving Force Behind Countless Journeys. With Years Of Experience In 
                  Supplying High-Quality Used Engines, Transmissions, And Heavy-Duty 
                  Vehicle Components, We've Built A Reputation For Performance, 
                  Reliability, And Trust.
                </p>
                
                <p>
                  Our Mission Is Simple: Keep Vehicles Running, Businesses Moving, And 
                  Customers Confident. Every Part We Stock Is Thoroughly Inspected And 
                  Backed By Our Commitment To Excellence. Whether You're Managing A 
                  Fleet Or Repairing A Single Truck, We Deliver Not Just Parts, But Peace 
                  Of Mind.
                </p>
              </div>
            </div>
            
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">10000+</div>
                <div className="stat-title">Engines & Transmissions Delivered</div>
                <div className="stat-description">
                  Trusted By Workshops, Fleets, And 
                  Resellers Across India.
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-title">On-Time Dispatch Rate</div>
                <div className="stat-description">
                  Ensuring Reliability And Speed With 
                  Every Order.
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-number">6+Years</div>
                <div className="stat-title">Serving The Heavy Vehicle Industry</div>
                <div className="stat-description">
                  Backed By Experience, Driven By Quality.
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src={truckImage} alt="Brotomotive Truck" className="truck-image" />
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">
              We Help You Keep Every Vehicle Moving Forward
            </h2>
            <p className="services-subtitle">
              Brotomotive Ensures Access To The Right Part, At The Right Time, For The Right Vehicle — Helping Workshops, Resellers, And 
              Businesses Stay On Track With Zero Downtime.
            </p>
          </div>
          
          <div className="services-cards">
            <ServiceCard
              icon={wrenchIcon}
              title="Precision-Matched Parts"
              description="Get Exactly What Fits — Engines, Transmissions, And More — Matched To Your Vehicle's Make, Model, And Performance Needs."
            />
            
            <ServiceCard
              icon={supportIcon}
              title="Expert-Guided Support"
              description="No Guesswork. Our Team Offers Expert Recommendations To Ensure You Order Confidently And Install With Ease."
            />
            
            <ServiceCard
              icon={deliveryIcon}
              title="Fast, Reliable Delivery"
              description="We Dispatch Quickly From Our Trusted Inventory Hubs, So Your Job Doesn't Have To Wait."
            />
          </div>
        </div>
      </section>
      <Choose />
      <Testimonials />
    </>
  );
};


export default About;
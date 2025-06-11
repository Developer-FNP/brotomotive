import React from 'react';
import './Choose.css';
import choose from '../assets/choose.png'; 
import { FaArrowRight } from 'react-icons/fa';


const choosePoints = [
  {
    title: 'Industry-Grade Quality Control',
    text: 'Every Part We Offer - From Engines To Transmissions - Undergoes A Strict, Multi-Point Inspection Process By Certifed Technicians To Ensure Lasting Performance And Reliability.',
  },
  {
    title: 'Nationwide Fast Shipping',
    text: 'With An Optimized Supply Chain And Well Stocked Inventory, We Deliver To Your Location Quickly And Securely - No Unnecessary Wait, Just Dependable Service.',
  },
  {
    title: 'Trusted By Fleets & Professionals',
    text: 'Our Clients Include Logistics Companies, Independent Repair Shops, And Heavy Truck Owners Who Rely On Us For Dependable Used Parts And Parts And Transparent Service.',
  },
  {
    title: 'Expert Support Team',
    text: 'Have Questions? Our Knowledgeable Parts Specialists Are Here To Help You Find The Perfect Fit For Your Truck - No Guesswork, Just Answers.',
  },
  {
    title: 'Warranty-Backed Confidence',
    text: 'We Stand Behind Our Parts. Most Of Our Inventory Is Covered By Warranty Options So You Can Purchase With Peace Of Mind.',
  },
];

const Choose = () => {
  return (
    <>
    <div id="chmain">
    <div id="ch-head">      
    <h2 className="choose-title">WHY CHOOSE BROTOMOTIVE</h2>
        <h3 className="choose-subtitle">Performance You Can Trust — Used, Tested, Reliable.</h3>
        </div>

    <div className="choose-container">
      <div className="choose-left">
        <div className="choose-list">
          {choosePoints.map((item, index) => (
            <div className="choose-item" key={index}>
              <div className="choose-header">
                <span className="choose-bullet">•</span>
                <span className="choose-text">{item.title}</span>
                  <span className="choose-icon-wrap">
                    <FaArrowRight className="choose-icon" />
                  </span>
              </div>
              <p className="choose-desc">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="choose-right">
        <div className="choose-image">
          <img id='chs' src={choose} alt="Team" />
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Choose;

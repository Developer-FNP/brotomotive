import React from 'react';
import './ServiceCard.css';
import cardBackground from '../assets/card-background.png';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="card-background">
        <img src={cardBackground} alt="" className="background-image" />
      </div>
      <div className="card-content">
        <div className="card-icon">
          <img src={icon} alt="" className="icon-image" />
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
import React from 'react';
import './ContactCard.css';

const ContactCard = ({ icon, title, content, type }) => {
  const renderContent = () => {
    if (type === 'phone') {
      return <a href={`tel:${content}`} className="contact-card-link">{content}</a>;
    } else if (type === 'email') {
      return <a href={`mailto:${content}`} className="contact-card-link">{content}</a>;
    } else {
      return <span className="contact-card-text">{content}</span>;
    }
  };

  return (
    <div className="contact-card">
      <div className="contact-card-bg-text">123%</div>
      <div className="contact-card-icon">
        <img src={icon} alt={`${type} icon`} />
      </div>
      <div className="contact-card-content">
        <h3 className="contact-card-title">{title}:</h3>
        {renderContent()}
      </div>
    </div>
  );
};

export default ContactCard;
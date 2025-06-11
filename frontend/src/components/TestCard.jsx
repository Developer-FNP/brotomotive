import React from 'react';
import './TestCard.css';
import { FaArrowRight } from 'react-icons/fa';
import backgroundImage from '../assets/testbg.png'; 
import quoteIcon from '../assets/comma.svg'; // Red comma icon

const TestCard = ({
  message,
  author,
  userName,
  userRole,
  avatar,
  rating = 5, // 1 to 5 stars
}) => {
  return (
    <div className="test-card">
      <div className="test-card-top">
        <img className="test-card-quote" src={quoteIcon} alt="Quote" />
        <span className="test-card-icon-wrap">
          <FaArrowRight className="test-card-icon" />
        </span>
      </div>

      <p className="test-card-text">
        "{message}"
        <br />
        <span className="test-card-author">– {author}</span>
      </p>

      <div className="test-card-footer">
        <div className="test-card-user">
          <img className="test-card-avatar" src={avatar} alt={userName} />
          <div className="test-card-user-details">
            <h4>{userName}</h4>
            <span>{userRole}</span>
          </div>
        </div>

        <div className="test-card-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? 'filled' : ''}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestCard;

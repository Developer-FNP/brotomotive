import React from 'react';
import './ShopCard.css';
import { FaArrowRight } from 'react-icons/fa';

const ShopCard = ({ imageSrc, label }) => {
  return (
    <div className="shop-card-wrapper">
      <div className="shop-card">
        <div className="shop-card-image">
          <img src={imageSrc} alt={label} />
        </div>
        <div className="shop-card-label">{label}</div>
      </div>
      <button id="secondary-shop-btn" className="shop-btn-clean">
  <span className="shop-btn-icon-wrap">
    <FaArrowRight className="shop-btn-icon" />
  </span>
  Shop Now
</button>

    </div>
  );
};

export default ShopCard;

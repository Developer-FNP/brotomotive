import React from 'react'
import { Link } from 'react-router-dom'
import './Shop.css'
import ShopCard from '../components/ShopCard';
import engine from '../assets/engine.png';
import trans from '../assets/transmission.png';
import parts from '../assets/parts.png';

const Shop = () => {
  const handleLinkClick = () => {
    // Small delay to allow navigation to complete
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <div id="shop">
        <h1 id='shead'>SHOP BY CATEGORY</h1>
        <div id="cards">
          <Link to="/engine" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
            <ShopCard imageSrc={engine} label="TRUCK ENGINE" />
          </Link>
          <Link to="/transmission" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
            <ShopCard imageSrc={trans} label="TRUCK TRANSMISSION" />
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
            <ShopCard imageSrc={parts} label="TRUCK PARTS" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Shop
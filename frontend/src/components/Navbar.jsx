import React, { useState } from 'react';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import Broto from "../assets/broto_logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleCallClick = () => {
    // Replace with your actual phone number
    window.location.href = 'tel:(833) 374 5813';
  };

  return (
    <>
      <div className="nav">
        <div>
          <a href="/">
            <img id="lgo" src={Broto} alt="Brotomotive logo" />
          </a>
        </div>

        <div id="menu">
          <a href="/" className="mnu">HOME</a>
          <a href="/engine" className="mnu">SHOP ENGINE</a>
          <a href="/transmission" className="mnu">SHOP TRANSMISSION</a>
          <a href="/truck-parts" className="mnu">TRUCK PARTS</a>
          <a href="/about" className="mnu">ABOUT US</a>
          <a href="/contact" className="mnu">CONTACT US</a>
        </div>

        <div className="nav-right">
          <a href="tel:+18333745813" className="call-btn desktop-call-btn">
  <FaPhoneAlt className="call-icon" />
  (833) 374 5813
</a>


          <button 
            className={`hamburger-menu ${isMenuOpen ? 'opened' : ''}`} 
            onClick={toggleMenu} 
            aria-label="Main Menu"
          >
            <svg width="50" height="50" viewBox="0 0 100 100">
              <path 
                className="line line1" 
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" 
              />
              <path 
                className="line line2" 
                d="M 20,50 H 80" 
              />
              <path 
                className="line line3" 
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Call Button */}
       <button className="floating-call-btn" onClick={handleCallClick}>
        <FaPhoneAlt className="floating-call-icon" />
        <span className="floating-call-text">Call Us</span>
      </button>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>
          <FaTimes />
        </button>
        
        <a href="/" className="mnu" onClick={closeMenu}>HOME</a>
        <a href="/engine" className="mnu" onClick={closeMenu}>SHOP ENGINE</a>
        <a href="/transmission" className="mnu" onClick={closeMenu}>SHOP TRANSMISSION</a>
        <a href="/truck-parts" className="mnu" onClick={closeMenu}>TRUCK PARTS</a>
        <a href="/about" className="mnu" onClick={closeMenu}>ABOUT US</a>
        <a href="/contact" className="mnu" onClick={closeMenu}>CONTACT US</a>
        
        <button className="call-btn" onClick={closeMenu}>
          <FaPhoneAlt className="call-icon" />
          (833) 374 5813
        </button>
      </div>
    </>
  );
};

export default Navbar;
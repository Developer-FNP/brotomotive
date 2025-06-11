import React from 'react'
import './Navbar.css'
import Broto from '../assets/broto_logo.svg'
import { FaPhoneAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
        <div className="nav">
      <div>
        <Link to="/">
          <img  id="lgo" src={Broto} alt="Brotomotive logo" />
        </Link>
      </div>

      <div id="menu">
        <Link to="/" className="mnu">HOME</Link>
        <Link to="/engine" className="mnu">SHOP ENGINE</Link>
        <Link to="/transmission" className="mnu">SHOP TRANSMISSION</Link>
        <Link to="/blog" className="mnu">TRUCK PARTS</Link>
        <Link to="/about" className="mnu">ABOUT US</Link>
        <Link to="/contact" className="mnu">CONTACT US</Link>
      </div>

      <button className="call-btn">
      <FaPhoneAlt className="call-icon" />
      Call Us
    </button>
    </div>
    </>
  )
}

export default Navbar

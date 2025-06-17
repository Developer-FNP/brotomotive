import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div id="foot">
        <div id="foot-left">
          <div className="bx" id="foot-abt">
            <h3 id="foot-hd">ABOUT US</h3>
            <p className="subtxt" id="foot-p">
              At Brotomotive, We're More Than Just A Parts Provider - We're The
              Driving Force Behind Countless Journeys. With Years Of Experience
              In Supplying High Quality Used Engines, Transmissions, And Heavy -
              Duty Vehicle Components, We've Built A Reputation For Performance,
              Reliablity, And Trust.
            </p>
          </div>
          <div className="bx" id="foot-links">
            <h3 id="foot-hd">CHECK OUT THESE LINKS BEFORE YOU GO</h3>
            <ul id="foot-ul">
              <li className="subtxt">
                <Link to="/" onClick={scrollToTop}>Home</Link>
              </li>
              <li className="subtxt">
                <Link to="/engine" onClick={scrollToTop}>Used Engines</Link>
              </li>
              <li className="subtxt">
                <Link to="/transmission" onClick={scrollToTop}>Used Transmissions</Link>
              </li>
              <li className="subtxt">
                <Link to="/truck-parts" onClick={scrollToTop}>Truck Parts</Link>
              </li>
              <li className="subtxt">
                <Link to="/about" onClick={scrollToTop}>About Us</Link>
              </li>
              <li className="subtxt">
                <Link to="/contact" onClick={scrollToTop}>Contact Us</Link>
              </li>
              <li className="subtxt">
                <Link to="" onClick={scrollToTop}>Privacy Policy</Link>
              </li>
              <li className="subtxt">
                <Link to="" onClick={scrollToTop}>Warranty Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="foot-right">
          <div className="bx" id="brot">
            <h1 id="broto-hd">BROTOMOTIVE</h1>
          </div>
          <div className="bx" id="address">
            <h2 id="foot-hd">ADDRESSES</h2>
            <h3 className="subtxt" id="add">
              • Sales Office: 11239 Ventura Blvd, Studio City, CA 91604, USA
            </h3>
            <h3 className="subtxt" id="add">
              • Head Office: 287 Grove St, Worcester, MA 01605
            </h3>
          </div>
          <div id="socials">
            <a href="#" id="scl" className="bx1">
              <FaFacebookF />
            </a>
            <a href="#" id="scl" className="bx1">
              <FaLinkedinIn />
            </a>
            <a href="#" id="scl" className="bx1">
              <FaInstagram />
            </a>
            <a href="#" id="scl" className="bx1">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <h3 className="footer_copyright">© COPYRIGHT 2025, ALL RIGHTS RESERVED</h3>
    </>
  );
};

export default Footer;

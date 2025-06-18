import React, { useState } from 'react';
import './Contact.css';
import ContactCard from '../components/ContactCard';
import contactHeroImage from '../assets/contact-hero.png';
import phoneIcon from '../assets/phone-icon.png';
import locationIcon from '../assets/location-icon.png';
import emailIcon from '../assets/email-icon.png';
import Form from '../components/Form';
const Contact = () => {

  return (
   <>
   <div className="contact-main">
    <div className="contact">
        <div className="contact-right">
            <h2 id='contact-head'>GET IN TOUCH WITH BROTOMOTIVE</h2>
            <h2 id='contact-subhead'>WHETHER YOU HAVE A QUESTION ABOUT PARTS. PRICING, OR ANYTHING ELSE, OUR TEAM IS READY TO HELP.</h2>
            <Form />
        </div>
    </div>
    <div id="contact-cards">
<ContactCard
  icon={phoneIcon}
  title="Phone"
  content="123456789"
  type="phone"
/>

<ContactCard
  icon={emailIcon}
  title="Email"
  content="support@fnpautoparts.com"
  type="email"
/>

<ContactCard
  icon={locationIcon}
  title="Address"
  content="Brotomotive, Sector 6, Noida"
  type="address"
/>
    </div>
    </div>
   </>
  );
};

export default Contact;
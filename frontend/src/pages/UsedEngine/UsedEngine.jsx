import React from 'react';
import './UsedEngine.css';
import engineImage from "../../assets/ChatGPT Image May 20 2025 1.png";
import { FaArrowRight } from 'react-icons/fa';
import Form from '../../components/Form';


const UsedEngine = () => {
  return (
    <>
    <div className='used-engine'>
      <div className='used-engine__content'>
        
        <div className='used-engine__text-content'>
          <h2 className='used-engine__title'>
            Looking for a Reliable Used Engine?<br />
            We've Got You Covered.
          </h2>
          <p className='used-engine__description'>
            We source quality-tested engines across United States based on your vehicle's make and model.
          </p>
          
        </div>
        <div className='used-engine__image-container'>
          <img 
            src={engineImage} 
            alt="Exploded engine parts"
            className='used-engine__image'
          />
        </div>
        <Form/>
      </div>
      </div>

    <div className='used-engine__guide'>
        <div className='used-engine__guide-content'>
          <div className='used-engine__guide-header'>
            <h1 className='used-engine__guide-title'>USED TRUCK ENGINE BUYING GUIDE</h1>
            <p className='used-engine__guide-subtitle'>What to Know Before Buying a Used Truck Engine</p>
          </div>

          <div className='used-engine__guide-sections'>
            <div className='used-engine__guide-section'>
              <h3 className='used-engine__guide-section-title'>1. KNOW YOUR TRUCK'S DETAILS</h3>
              <p className='used-engine__guide-section-text'>
                Always have the Make, Model, Year, and Engine Type ready. For heavy-duty trucks, details like engine displacement, fuel type (diesel/petrol), and turbo configuration are crucial.
              </p>
            </div>

            <div className='used-engine__guide-section'>
              <h3 className='used-engine__guide-section-title'>2. COMPATIBILITY IS KEY</h3>
              <p className='used-engine__guide-section-text'>
                Not all engines fit across years or variants. We verify engine codes, mount points, emission standards (BS-IV, BS-VI), and ECU compatibility before sourcing.
              </p>
            </div>

            <div className='used-engine__guide-section'>
              <h3 className='used-engine__guide-section-title'>3. SOURCE-CERTIFIED ENGINES ONLY</h3>
              <p className='used-engine__guide-section-text'>
                All engines we deliver are compression-tested, checked for oil leaks, blow-by, and structural damage, and come from verified dismantlers or fleet upgrades.
              </p>
            </div>

            <div className='used-engine__guide-section'>
              <h3 className='used-engine__guide-section-title'>4. WHAT'S INCLUDED IN THE ENGINE ASSEMBLY</h3>
              <p className='used-engine__guide-section-text'>Depending on the engine, parts may or may not include:</p>
              <ul className='used-engine__guide-list'>
                <li>Turbochargers</li>
                <li>Alternators</li>
                <li>Manifolds</li>
                <li>Sensors & Wiring Harness</li>
              </ul>
              <p className='used-engine__guide-section-text'>Always confirm what's bundled before finalizing.</p>
            </div>

            <div className='used-engine__guide-section'>
              <h3 className='used-engine__guide-section-title'>5. WARRANTY & DOCUMENTATION</h3>
              <p className='used-engine__guide-section-text'>We offer limited warranty options on most engines. Be sure to ask:</p>
              <ul className='used-engine__guide-list'>
                <li>Warranty period (e.g., 30 days, 90 days)</li>
                <li>Conditions (installed by certified mechanic, etc.)</li>
                <li>Any documentation provided (RC scrap, fleet service records)</li>
              </ul>
            </div>

            <div className='used-engine__guide-section'>
              <h3 className='used-engine__guide-section-title'>6. INSTALLATION SUPPORT</h3>
              <p className='used-engine__guide-section-text'>
                Truck engines are complex and heavy-duty. We help connect you with trusted truck mechanics or installation centers across India.
              </p>
            </div>

            <div className='used-engine__guide-section'>
              <h3 className='used-engine__guide-section-title'>7. PRICING TRANSPARENCY</h3>
              <p className='used-engine__guide-section-text'>
                Be upfront about your budget. We'll recommend the best fit — whether it's a mid-mileage OEM engine or a premium-grade reconditioned one.
              </p>
            </div>
          </div>

          <div className='used-engine__guide-footer'>
            <h2 className='used-engine__guide-footer-title'>
              NEED HELP FINDING THE RIGHT TRUCK ENGINE? OUR TEAM IS READY TO GUIDE YOU.
            </h2>
              <p className='used-engine__guide-contact'>Request a Free Engine Match <a href="tel:+1234-5678-90" className='used-engine__guide-contact-phone'>Call +1234-5678-90</a></p>
          </div>
        </div>
      </div>

      <div className='used-engine__maintenance'>
        <div className='used-engine__maintenance-content'>
          <div className='used-engine__maintenance-header'>
            <h1 className='used-engine__maintenance-title'>DIESEL ENGINE MAINTENANCE TIPS</h1>
            <p className='used-engine__maintenance-intro'>
              Regular maintenance is critical for a safe haul with a diesel engine that lasts. Here are a few key diesel engine maintenance tips to keep your engine humming:
            </p>
          </div>

          <div className='used-engine__maintenance-sections'>
            <div className='used-engine__maintenance-section'>
              <h3 className='used-engine__maintenance-section-title'>OIL CHANGES</h3>
              <p className='used-engine__maintenance-section-text'>
                Not all engines fit across years or variants. We verify engine codes, mount points, emission standards (BS-IV, BS-VI), and ECU compatibility before sourcing.
              </p>
            </div>

            <div className='used-engine__maintenance-section'>
              <h3 className='used-engine__maintenance-section-title'>SOURCE-CERTIFIED ENGINES ONLY</h3>
              <p className='used-engine__maintenance-section-text'>
                Since diesel engines produce more contaminants than gasoline engines, it's important to change your oil more to keep the engine parts lubricated and prevent damage from buildup.
              </p>
            </div>

            <div className='used-engine__maintenance-section'>
              <h3 className='used-engine__maintenance-section-title'>FUEL FILTER CHANGES</h3>
              <p className='used-engine__maintenance-section-text'>
                Changing your fuel filter is an important part of diesel engine maintenance. It protects the engine from impurities and water that damage the injectors irreparably if left unchecked.
              </p>
            </div>

            <div className='used-engine__maintenance-section'>
              <h3 className='used-engine__maintenance-section-title'>COOLANT FLUSHES</h3>
              <p className='used-engine__maintenance-section-text'>
                Since diesel engines function at high temperatures, cooling is essential. Flushing the coolant can help prevent overheating, which is essential for a diesel engine's long lifespan.
              </p>
            </div>

            <div className='used-engine__maintenance-section'>
              <h3 className='used-engine__maintenance-section-title'>REGULAR INSPECTION</h3>
              <p className='used-engine__maintenance-section-text'>
                For operators who want their diesel engine to last, regular inspections should not be ignored. Regular maintenance helps avoid costly repairs, before they become larger problems.
              </p>
            </div>
          </div>

          <div className='used-engine__maintenance-footer'>
            <h2 className='used-engine__maintenance-footer-title'>
              NEED HELP FINDING THE RIGHT TRUCK ENGINE? OUR TEAM IS READY TO GUIDE YOU.
            </h2>
            <p className='used-engine__guide-contact'>Request a Free Engine Match <a href="tel:+1234-5678-90" className='used-engine__guide-contact-phone'>Call +1234-5678-90</a></p>
          </div>
        </div>
      </div>
    </>
  );
};
export default UsedEngine;
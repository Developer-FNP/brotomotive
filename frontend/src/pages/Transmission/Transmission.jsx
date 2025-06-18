import React from 'react';
import './Transmission.css';
import transmissionImage from '../../assets/Component 2.png'
import { FaArrowRight } from 'react-icons/fa';
import Form from '../../components/Form';

const Transmission = () => {
  return (
    <>
        <div className='used-engine'>
          <div className='used-engine__content'>
            
            <div className='used-engine__text-content'>
              <h2 className='used-engine__title'>
                What to Know Before Buying a Used <br/> Truck Transmission
              </h2>
              <p className='used-engine__description'>
                We source quality-tested engines across United States based on your vehicle's make and model.
              </p>
              
            </div>
            <div className='used-engine__image-container'>
              <img 
                src={transmissionImage} 
                alt="Exploded engine parts"
                className='used-engine__image'
              />
            </div>
            <Form />
          </div>
          </div>
    
        <div className='used-engine__guide'>
            <div className='used-engine__guide-content'>
              <div className='used-engine__guide-header'>
                <h1 className='used-engine__guide-title'>USED TRUCK Transmission BUYING GUIDE</h1>
                <p className='used-engine__guide-subtitle'>What to Know Before Buying a Used Truck Transmission</p>
              </div>
    
              <div className='used-engine__guide-sections'>
                <div className='used-engine__guide-section'>
                  <h3 className='used-engine__guide-section-title'>1. KNOW YOUR TRUCK'S DETAILS</h3>
                  <p className='used-engine__guide-section-text'>
                    Provide complete truck details:
                    <ul>
                        <li>Make, Model, Year</li>
                        <li>Transmission type (Manual / Automatic / Semi-Automatic)</li>
                        <li>Drive Type (2WD / 4WD / 6x4 / 8x4)</li>
                        <li>Gear count (5-speed, 6-speed, etc.)</li>
                        <li>Transmission Code (if available)</li>
                    </ul>
                  </p>
                </div>
    
                <div className='used-engine__guide-section'>
                  <h3 className='used-engine__guide-section-title'>2. Quality Assurance is Critical</h3>
                  <p className='used-engine__guide-section-text'>
                    We source only from trusted commercial fleets and dismantlers. Each unit is visually inspected, spin-tested, and leak-checked before dispatch.
                  </p>
                </div>
    
                <div className='used-engine__guide-section'>
                  <h3 className='used-engine__guide-section-title'>3. Check What’s Included</h3>
                  <p className='used-engine__guide-section-text'>
                    Used transmissions may or may not come with:
                    <ul>
                        <li>Clutch Assembly</li>
                        <li>Torque Converter (for automatics)</li>
                        <li>Shifter Linkage</li>
                        <li>Mount Brackets</li>
                        <li>Bellhousing</li>
                    </ul>
                  </p>
                </div>
    
                <div className='used-engine__guide-section'>
                  <h3 className='used-engine__guide-section-title'>4. Ask About Warranty</h3>
                  <p className='used-engine__guide-section-text'>Our transmissions come with limited-fitment warranties. Clarify:</p>
                  <ul className='used-engine__guide-list'>
                    <li>Duration (30, 60, or 90 days)</li>
                    <li>Coverage (mechanical failure, leaks)</li>
                    <li>Void Conditions (improper install, oil contamination, etc.)</li>
                  </ul>
                  <p className='used-engine__guide-section-text'>Always confirm what's bundled before finalizing.</p>
                </div>
    
                <div className='used-engine__guide-section'>
                  <h3 className='used-engine__guide-section-title'>5. Fitment Support Available</h3>
                  <p className='used-engine__guide-section-text'>We guide you on:</p>
                  <ul className='used-engine__guide-list'>
                    <li>Choosing between OEM vs compatible alternatives</li>
                    <li>Installation tips</li>
                    <li>Connecting with certified truck technicians near you</li>
                  </ul>
                </div>
    
                <div className='used-engine__guide-section'>
                  <h3 className='used-engine__guide-section-title'>6. Set Expectations on Budget & Availability</h3>
                  <p className='used-engine__guide-section-text'>
                    Certain models (e.g., 9-speed Eaton, Allison ATs) have limited availability. Sharing your budget helps us find:
                    <ul>
                        <li>Rebuilt options</li>
                        <li>Lower-mileage units</li>
                        <li>Fastest sourcing routes</li>
                    </ul>
                  </p>
                </div>
              </div>
    
              <div className='used-engine__guide-footer'>
                <h2 className='used-engine__guide-footer-title'>
                  Not sure which transmission fits your truck? We’ll help you figure it out.
                </h2>
                  <p className='used-engine__guide-contact'>Request a Free Transmission Match  <a href="tel:+1234-5678-90" className='used-engine__guide-contact-phone'>Call +1234-5678-90</a></p>
              </div>
            </div>
          </div>
    
          <div className='used-engine__maintenance'>
            <div className='used-engine__maintenance-content'>
              <div className='used-engine__maintenance-header'>
                <h1 className='used-engine__maintenance-title'>DIESEL ENGINE MAINTENANCE TIPS</h1>
                <p className='used-engine__maintenance-intro'>
                  Extend the life of your truck’s transmission and ensure smooth gear performance with these essential maintenance practices.
                </p>
              </div>
    
              <div className='used-engine__maintenance-sections'>
                <div className='used-engine__maintenance-section'>
                  <h3 className='used-engine__maintenance-section-title'>1. Check Transmission Fluid Regularly</h3>
                  <p className='used-engine__maintenance-section-text'>
                    <ul>
                        <li>Inspect levels every 5,000–10,000 km, especially under heavy loads.</li>
                        <li>Use the manufacturer-recommended fluid (ATF for automatics, gear oil for manuals).</li>
                        <li>Fluid should be clean, reddish (ATF), and free from a burnt smell.</li>
                    </ul>
                  </p>
                </div>
    
                <div className='used-engine__maintenance-section'>
                  <h3 className='used-engine__maintenance-section-title'>2. Change Transmission Fluid on Time</h3>
                  <p className='used-engine__maintenance-section-text'>
                    <ul>
                        <li>Change fluid and filters every 50,000–100,000 km or as per vehicle usage.</li>
                        <li>For manual transmissions, replace gear oil to prevent wear on synchros and gears.</li>
                    </ul>
                  </p>
                </div>
    
                <div className='used-engine__maintenance-section'>
                  <h3 className='used-engine__maintenance-section-title'>3. Monitor Transmission Temperature</h3>
                  <p className='used-engine__maintenance-section-text'>
                    <ul>
                        <li>Overheating is the #1 killer of automatic transmissions.</li>
                        <li>Install a transmission temperature gauge if your truck hauls heavy loads or operates in hilly regions.</li>
                    </ul>
                  </p>
                </div>
    
                <div className='used-engine__maintenance-section'>
                  <h3 className='used-engine__maintenance-section-title'>4. Avoid Aggressive Driving & Overloading</h3>
                  <p className='used-engine__maintenance-section-text'>
                    <ul>
                        <li>Sudden downshifts, clutch popping, or overloaded runs can cause premature wear.</li>
                        <li>Maintain smooth gear shifts and avoid riding the clutch.</li>
                    </ul>
                  </p>
                </div>
    
                <div className='used-engine__maintenance-section'>
                  <h3 className='used-engine__maintenance-section-title'>5. Clean the Cooler & Inspect the Lines</h3>
                  <p className='used-engine__maintenance-section-text'>
                    <ul>
                        <li>For automatics, ensure the cooling lines and external cooler are not blocked.</li>
                        <li>Debris can lead to overheating or fluid contamination.</li>
                    </ul>
                  </p>
                </div>
                <div className='used-engine__maintenance-section'>
                  <h3 className='used-engine__maintenance-section-title'>6. Check Fluid Levels</h3>
                  <p className='used-engine__maintenance-section-text'>
                    <ul>
                        <li>Inspect the transmission fluid levels and top up if necessary. Low fluid can cause shifting issues.</li>
                        
                    </ul>
                  </p>
                </div>
                <div className='used-engine__maintenance-section'>
                  <h3 className='used-engine__maintenance-section-title'>7. Examine the Filters</h3>
                  <p className='used-engine__maintenance-section-text'>
                    <ul>
                        <li>Replace or clean the transmission filter to ensure proper fluid flow and prevent contamination.</li>
                        
                    </ul>
                  </p>
                </div>
                <div className='used-engine__maintenance-section'>
                  <h3 className='used-engine__maintenance-section-title'>8. Test Drive the Vehicle</h3>
                  <p className='used-engine__maintenance-section-text'>
                    <ul>
                        <li>After maintenance, take the vehicle for a short drive to check for any abnormal sounds or shifting difficulties.</li>
                    </ul>
                  </p>
                </div>
              </div>
    
              <div className='used-engine__maintenance-footer'>
                <h2 className='used-engine__maintenance-footer-title'>
                  Not sure which transmission fits your truck? We’ll help you figure it out.
                </h2>
                <p className='used-engine__guide-contact'>Request a Free Transmission Match <a href="tel:+1234-5678-90" className='used-engine__guide-contact-phone'>Call +1234-5678-90</a></p>
              </div>
            </div>
          </div>
        </>
  )
}

export default Transmission
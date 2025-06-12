import React from 'react';
import './Clients.css';

import PerkinsLogo from '../assets/PerkinsLogo.svg';
import VolvoLogo from '../assets/VolvoLogo.svg';
import IsuzuLogo from '../assets/IsuzuLogo.svg';
import DetroitLogo from '../assets/DetroitLogo.svg';
import JohnDeereLogo from '../assets/JohnDeereLogo.svg';
import CatLogo from '../assets/CatLogo.svg';
import MackLogo from '../assets/MackLogo.svg';
import MercedesBenzLogo from '../assets/MercedesBenzLogo.svg';
import FordLogo from '../assets/FordLogo.svg';
import InternationalLogo from '../assets/InternationalLogo.svg';
import DeutzLogo from '../assets/DeutzLogo.svg';
import CumminsLogo from '../assets/CumminsLogo.svg';

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="clients-header">
        <h2>
          OVER <span className="highlight">35000+ CLIENTS</span> ALL OVER THE WORLD
        </h2>
      </div>
      <div className="clients-grid">
        <img src={ VolvoLogo } alt="Volvo" />
        <img id='difimg' src={ MercedesBenzLogo} alt="Mercedes-Benz" />
        <img src={ IsuzuLogo } alt="Isuzu" />
        <img src={ DetroitLogo } alt="Detroit" />
        <img src={ PerkinsLogo } alt="Perkins" />
        <img src={ JohnDeereLogo } alt="John Deere" />
        <img id='difimg' src={ CatLogo } alt="CAT" />
        <img src={ MackLogo } alt="Mack" />
        <img src={ FordLogo } alt="Ford" />
        <img id='difimg' src={ InternationalLogo } alt="International" />
        <img id='difimg' src={DeutzLogo} alt="Deutz" />
        <img id='difimg' src={CumminsLogo} alt="Cummins" />
      </div>
    </section>
  );
};

export default Clients;

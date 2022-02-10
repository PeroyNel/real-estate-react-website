import React from 'react';
import { SubHeading } from '../../components';

import './Portfolio.css';

const Portfolio = () => (
  <div className="app__portfolio flex__center section__padding" id="portfolio">
    
    <div className="app__portfolio-title">
      <SubHeading title="architecture firm" />
      <h1 className="app__portfolio-h1">Our architecture Projects</h1>

      

    </div>
    <div className="">
      <p className="p__opensans1" style={{ margin: '0rem 0' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <button type="button" className="app__aboutus-button">
          <div className="app__aboutus-button-text">
            <p>Explore</p>
          </div>
        </button>
        
    </div>
    

  </div>
);

export default Portfolio;

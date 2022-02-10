import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Portfolio.css';

const Portfolio = () => (
  <div className="app__portfolio section__padding" id="portfolio">
    <div className="app__portfolio-title-container">
      
      <div className="app__portfolio-title">
        <SubHeading title="architecture firm" />
        <h1 className="app__portfolio-h1">Our architecture Projects</h1>
        <span className="app__portfolio-divider"></span>

      

      </div>
      <div className="">
        <p className="p__opensans1" style={{ margin: '0rem 0' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <button type="button" className="app__portfolio-button">
            <div className="app__porfolio-button-text">
              <p>Explore</p>
            </div>
          </button>
        
      </div>
    </div>

        <div className="app__portfolio-hero">
          <div className="app__portfolio-image">
            
              
            <img className="app__portfolio-image1" src={images.one} alt="header img"/>
              

            
            
            <img className="app__portfolio-image2" src={images.two} alt="header img"/>
            <img className="app__portfolio-image3" src={images.three} alt="header img"/>
            <img className="app__portfolio-image4" src={images.four} alt="header img"/>

          </div>
          

        </div>
    
    

  </div>
  
);

export default Portfolio;

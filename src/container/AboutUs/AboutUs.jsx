import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus section__padding app__wrapper" id="about">
    
    <div className="app__wrapper_img1" >
        <img src={images.mask1} alt="header img"/>
        <img style={{padding: '0.65rem'}} src={images.mask2} alt="header img"/>
        <img src={images.mask3} alt="header img"/>
      </div>
    <div className="app__wrapper_info1">
      
      
      <SubHeading title="The Process"/>
      <h1 className="app__aboutus-h1">Sneak peek the first step <br></br> into our new.</h1>
      <p className="p__opensans1" style={{ margin: '2rem 0' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      
      <button type="button" className="app__aboutus-button">
        <div className="app__aboutus-button-text">
          <p>Explore</p>
        </div>
      </button>

      

      

        
      
        

    </div>
    
    
    
    
    
    
    
  </div>
  
);

export default AboutUs;

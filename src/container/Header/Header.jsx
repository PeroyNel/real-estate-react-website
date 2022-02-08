import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Architecture"/>
      <h1 className="app__header-h1">New Way <br></br> Of Living.</h1>
      <span className="app__header-divider"></span>
      
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Change the way you live life, closer to nature.</p>
      
      <button type="button" className="app__header-button">
        <div className="app__header-button-text">
          <p>Explore</p>
        </div>
      </button>
      
        

    </div>
    
    <div className="app__wrapper_img">
      <img src={images.headermain} alt="header img"/>
    </div>

    
  </div>
  
);

export default Header;

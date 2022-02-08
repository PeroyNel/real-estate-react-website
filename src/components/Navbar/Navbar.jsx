import React, { useState } from 'react';
import { MdSegment } from 'react-icons/md';
import { MdCloseFullscreen } from 'react-icons/md';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo1} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">HOME</a></li>
        <li className="p__opensans"><a href="#about">ABOUT</a></li>
        <li className="p__opensans"><a href="#portfolio">PORTFOLIO</a></li>
        
        <li className="p__opensans"><a href="#contact">CONTACT</a></li>
        
        
        <li className="p__opensans"><a href="#blog">BLOG</a></li>
      </ul>
      
      <div className="app__navbar-smallscreen">
        <MdSegment color="black" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdCloseFullscreen fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home" onClick={() => setToggleMenu(false)}>HOME</a></li>
              <li className="p__opensans"><a href="#about" onClick={() => setToggleMenu(false)}>ABOUT</a></li>
              <li className="p__opensans"><a href="#portfolio" onClick={() => setToggleMenu(false)}>PORTFOLIO</a></li>
              
              <li className="p__opensans"><a href="#contact" onClick={() => setToggleMenu(false)}>CONTACT</a></li>
              
              <li className="p__opensans"><a href="#blog" onClick={() => setToggleMenu(false)}>BLOG</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

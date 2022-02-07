import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdMenuBook } from 'react-icons/md';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => (
  <div className ="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.logo1} alt="app logo"/>

    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#portfolio">Porfolio</a></li>
      <li className="p__opensans"><a href="#learnmore">Learn More</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
      <li className="p__opensans"><a href="#team">Team</a></li>
      <li className="p__opensans"><a href="#testimonials">Testimonials</a></li>
      <li className="p__opensans"><a href="#news">News</a></li>
    </ul>
    <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {}}/>

      <div className="app__navbar-smallscreen">
        <MdMenuBook fontSize={27} className="overlay__close" onClick={() => {}} />
        <ul className="app__navbar-smallscreen-links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#portfolio">Porfolio</a></li>
          <li className="p__opensans"><a href="#learnmore">Learn More</a></li>
          <li className="p__opensans"><a href="#contact">Contact</a></li>
          <li className="p__opensans"><a href="#team">Team</a></li>
          <li className="p__opensans"><a href="#testimonials">Testimonials</a></li>
          <li className="p__opensans"><a href="#news">News</a></li>
        </ul>
      </div>

     

    </div>
  </div>
);

export default Navbar;

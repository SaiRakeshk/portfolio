// Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToProjects }) => {
  const handleContactClick = () => {
    
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="nav">
      <div className="name" onClick={scrollToProjects}>Sai Rakesh K</div>
      <ul>
        <li onClick={scrollToProjects}>Projects</li>
        <li onClick={handleContactClick}>Contact</li> 
      </ul>
    </div>
  );
}

export default Navbar;

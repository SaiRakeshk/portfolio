// Navbar.js

import React from 'react';
import './Navbar.css';
import resumePDF from '../assets/Sai_Rakesh_K (10).pdf';

const Navbar = ({ scrollToProjects }) => {
  const handleContactClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleResumeClick = () => {
    
      window.open(resumePDF, '_blank');
    };

  return (
    <div className="nav">
      <div className="name" onClick={scrollToProjects}>Sai Rakesh K</div>
      <ul>
        <li onClick={scrollToProjects}>Projects</li>
        <li onClick={handleContactClick}>Contact</li>
        <li onClick={handleResumeClick}>Resume</li> 
      </ul>
    </div>
  );
}

export default Navbar;

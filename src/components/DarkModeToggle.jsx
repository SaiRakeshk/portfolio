// DarkModeToggle.js
import React from 'react';
import './DarkModeToggle.css';
import imgSrc from '../assets/icons8-dark-mode-50.png';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      <img src={imgSrc} alt="Dark Mode Toggle" className={darkMode ? "dark" : "light"} />
    </div>
  );
}

export default DarkModeToggle;

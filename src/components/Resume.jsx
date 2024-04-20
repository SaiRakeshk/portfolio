// ResumeButton.js
import React from 'react';
import resumePDF from '../assets/Sai_Rakesh_K (10).pdf';
import './Resume.css';

const ResumeButton = () => {
  const handleVisitResume = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <div className="resume-button-container">
      <button className="resume-button" onClick={handleVisitResume}>Visit Resume</button>
    </div>
  );
}

export default ResumeButton;

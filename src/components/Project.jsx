// project.js

import React, { useRef } from 'react';
import imgSrc from '../assets/realestate.jpg';
import Oilimage from '../assets/olje.jpg';
import FitnessImage from '../assets/fitness.jpg';


import './Project.css'; // Import CSS for styling

const Project = ({ projectsRef }) => {
  return (
    <div id="projects" ref={projectsRef} className="project-container">
      <h1 className="text-center">Projects</h1>
      <div className='project'>
        <img src={imgSrc} alt='project-image' className='project-image' />
        <div className="project-description">
          <h2 className="project-name">Real Estate Website</h2>
          <p className="project-text">
            <strong>Tech Stack:</strong> MERN (MongoDB, Express.js, React, Node.js) utilized for robust functionality. <br />
            <strong>Security:</strong> JWT authentication ensures robust user access control. <br />
            <strong>Responsiveness:</strong> Cross-device compatibility for optimal engagement. <br />
            <strong>API Development:</strong> RESTful APIs for seamless data communication. <br />
            <strong>Data Handling:</strong> MongoDB schemas for structured storage. <br />
            <strong>Backend Optimization:</strong> Streamlined routes for seamless operations. <br />
            <strong>Security Measures:</strong> Middleware for token validation ensures data security.<br></br>
            
          <p className="project-text">
            <strong>Dynamic Routing</strong>, <strong>State Management</strong>, <strong>Modular Design</strong>, and <strong>UX/UI</strong>.
          </p>
          </p>
        </div>
      </div>
      <br></br><br></br>
      <div className='project'>
        <img src={FitnessImage} alt='project-image' className='project-image' />
        <div className="project-description">
          <h2 className="project-name">Fitness Website</h2>
          <p className="project-text">
            <strong>Tech Stack:</strong> React.js, API Integration <br />
            <strong>Frontend Development:</strong> Developed a responsive frontend with React.js. <br />
            <strong>API Integration:</strong> Integrated APIs for exercises, instructional content and food nutrition details. <br />
            <strong>Key Features:</strong> Cross-device compatibility, dynamic routing and modular design for easy maintenance.<br />
            <strong>Additional Features</strong> Implemented BMI calculation. <br />
          </p>
        </div>
      </div>
      <br></br><br></br>
      <div className='project'>
        <img src={Oilimage} alt='project-image' className='project-image' />
        <div className="project-description">
          <h2 className="project-name">Oil Spill Detection</h2>
          <p className="project-text">
            <strong>Tech Stack:</strong> Python, NumPy, OpenCV, CNN <br />
            <strong>Overview:</strong> Automated identification of oil spills in images using CNN. <br />
            <strong>Features:</strong> Python-based project utilizing NumPy and OpenCV for image processing.<br></br>
            <br></br>The CNN model is trained on labeled image data to accurately identify oil spills,<br></br> allowing for timely and effective response measures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;

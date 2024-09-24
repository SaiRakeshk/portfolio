// project.js

import React from 'react';
import imgSrc from '../assets/realestate.jpg';
import EyeImage from '../assets/Screenshot_20190712-154030_Chrome-820x510.jpg';
import FitnessImage from '../assets/Fitness.jpg';

import './Project.css'; // Import CSS for styling

const Project = ({ projectsRef }) => {
  return (
    <div id="projects" ref={projectsRef} className="project-container">
      <h1 className="text-center">Projects</h1>

      {/* Real Estate Website */}
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
            <strong>Security Measures:</strong> Middleware for token validation ensures data security.<br />
          </p>
          <p className="project-text">
            <strong>Dynamic Routing</strong>, <strong>State Management</strong>, <strong>Modular Design</strong>, and <strong>UX/UI</strong>.
          </p>
        </div>
      </div>
      <br /><br />

      {/* Fitness Website */}
      <div className='project'>
        <img src={FitnessImage} alt='project-image' className='project-image' />
        <div className="project-description">
          <h2 className="project-name">Fitness Website</h2>
          <p className="project-text">
            <strong>Tech Stack:</strong> React.js, API Integration <br />
            <strong>Frontend Development:</strong> Developed a responsive frontend with React.js. <br />
            <strong>API Integration:</strong> Integrated APIs for exercises, instructional content, and food nutrition details. <br />
            <strong>Key Features:</strong> Cross-device compatibility, dynamic routing, and modular design for easy maintenance.<br />
            <strong>Additional Features:</strong> Implemented BMI calculation. <br />
          </p>
        </div>
      </div>
      <br /><br />

      {/* Eye Disease Detection */}
      <div className='project'>
        <img src={EyeImage} alt='project-image' className='project-image' />
        <div className="project-description">
          <h2 className="project-name">Eye Disease Detection</h2>
          <p className="project-text">
            <strong>Tech Stack:</strong> Python, PyTorch, YOLOv5, OpenCV <br />
            <strong>Overview:</strong> Developed a model using Python, PyTorch, and OpenCV for efficient eye disease detection. <br />
            <strong>Features:</strong> Identified diverse eye diseases from retinal images, leveraging the power of YOLOv5 for object detection. The model is trained on a dataset of retinal images to ensure accuracy in detecting multiple eye diseases.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;

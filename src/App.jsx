// App.js
import { useRef, useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import Home from './components/home'; // Ensure casing matches file name
import Navbar from './components/Navbar';
import Project from './components/Project';
import Technologiesknown from './components/Technologiesknown';
import ResumeButton from './components/Resume';

const App = () => {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    scrollToContact();
  };

  return (
    <div >
      <Navbar scrollToProjects={scrollToProjects} scrollToContact={handleContactClick} />
      <Home />
      <Technologiesknown />
      <Project projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default App;

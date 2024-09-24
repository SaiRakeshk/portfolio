// App.js
import { useRef, useState } from 'react';
import './App.css'
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Technologiesknown from './components/Technologiesknown';
import ResumeButton from './components/Resume';

const App = () => {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

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
    <>
      <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar scrollToProjects={scrollToProjects} scrollToContact={handleContactClick} />
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
        <Technologiesknown />
        <Project projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />

      </div>
    </>
  )
}

export default App;

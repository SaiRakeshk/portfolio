
import reactjsicon from '../assets/react-javascript-js-framework-facebook-svgrepo-com.svg';
import Angular from '../assets/angular-svgrepo-com.svg';
import backendIcon from '../assets/express-svgrepo-com.svg';
import Mongodb from '../assets/mongodb-logo-svgrepo-com.svg';
import MySQL from '../assets/mysql-logo-svgrepo-com.svg';
import java from '../assets/java-logo-svgrepo-com.svg';
import python from '../assets/python-3-logo-svgrepo-com.svg';
import cpp from '../assets/ISO_C++_Logo.svg';
import js from '../assets/javascript-svgrepo-com.svg';
import './Technologiesknown.css'

const Technologiesknown = () => {
  return (
    <div className="tech-stack">
    <h2>Tech Stack</h2>
    <h3>Frontend</h3>
    <div className="frontend">
      
      <img src={reactjsicon} alt="Frontend" className="tech-icon" />
      {/* <img src={Angular} alt="Frontend" className="tech-icon" /> */}
    </div>
    <h3>Backend</h3>
    <div className="backend">
      
      <img src={backendIcon} alt="Backend" className="tech-icon" />
    </div>
    <h3>Database</h3>
    <div className="db">
      
      <img src={Mongodb} alt="Database" className="tech-icon" />
      <img src={MySQL} alt="Database" className="tech-icon" />
    </div>
    <h3>Programming Languages</h3>
    <div className="languages">
      
      <img src={java} alt="Programming" className="tech-icon" />
      <img src={python} alt="Programming" className="tech-icon" />
      <img src={cpp} alt="Programming" className="tech-icon" />
      <img src={js} alt="Programming" className="tech-icon" />
    </div>
  </div>
  )
}

export default Technologiesknown

import './Home.css';
import githubLogo from '../assets/github-logo.svg';
import linkedinLogo from '../assets/linkedin-logo.svg';

const Home = () => {
  return (
    <div className='aboutme'>
      <div className='textbox'>
        <div className='important'>
          <p>
            Hi, I am <strong >Sai Rakesh </strong> <br />
            I am a <strong>Full Stack Developer</strong>. <br />
          </p>
        </div>
        <p>
          I am an enthusiastic full-stack web developer with expertise in UI, debugging, and database management.
          Adaptable to all stages of advanced project development. <br/>Skilled in both independent and collaborative work.
        </p>
        <div className="social-icons">
          <a href="https://github.com/SaiRakeshk" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/sai-rakesh-k-86132b13a/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default Home;

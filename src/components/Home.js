import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import aryan from '../aryan.png'; // Adjusted the import path
import githubIcon from '../github2.png'; // Add your icon paths
import linkedinIcon from '../linkedin.png';
import fiverr from '../fiverr.jpg';

const Home = ({ toggleFormVisibility }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationComplete(true);
    }, 500); // Slightly delayed to match the animation timing
    return () => clearTimeout(timeoutId);
  }, []);

  const handleHireMeClick = () => {
    window.open('https://www.fiverr.com/aryanfullstack?up_rollout=true', '_blank');
  };

  return (
    <section className={`home ${animationComplete ? 'animate' : ''}`}>
      <div className="intro">
        <h1>Hi, I'm Aryan!</h1>
        <p>
          A web developer based in India, empowering businesses<br />
          with innovative software solutions. Expertise in coding<br />
          and transforming ideas into impactful realities. Explore<br />
          my work and let’s discuss your project!
        </p>
        <div className="social-icons">
          <a href="https://github.com/aryansaxenadev" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/aryan-saxena-7b244a306/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.fiverr.com/aryanfullstack?up_rollout=true" target="_blank" rel="noopener noreferrer">
            <img src={fiverr} alt="Stack Overflow" />
          </a>
        </div>
        <p>
          <span className="typewriter-text">
            <Typewriter
              words={['Full-Stack Developer', 'Python Developer', 'Mern-Stack Developer', 'App Developer']}
              loop={0} // 0 means infinite
              cursor
              cursorStyle="_"
              typeSpeed={65}
              deleteSpeed={50}
              delaySpeed={1300}
            />
          </span>
        </p>
        <div className={`buttons ${animationComplete ? 'animate' : ''}`}>
          <button className='aredata' onClick={toggleFormVisibility}>Contact Me</button>
          <button id='are' className="project-button demo-button" onClick={handleHireMeClick}>Hire Me</button>
        </div>
      </div>
      <div className={`image-container ${animationComplete ? 'animate' : ''}`}>
        <img src={aryan} alt="Aryan" className="profile-pic" />
      </div>
    </section>
  );
}

export default Home;

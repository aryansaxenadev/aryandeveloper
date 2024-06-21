import React from 'react';
import './Contact.css'; // Ensure this path is correct

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-options">
        <div className="contact-option">
          <a href="mailto:aryan07mernstack@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <div className="contact-icon">
              <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Email" />
            </div>
            <div className="contact-text">
              <p>Email</p>
              <span>Let's get in touch.</span>
            </div>
          </a>
        </div>
        <div className="contact-option">
          <a href="https://www.linkedin.com/in/aryan-saxena-7b244a306/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <div className="contact-icon">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
            </div>
            <div className="contact-text">
              <p>LinkedIn</p>
              <span>Let's connect.</span>
            </div>
          </a>
        </div>
        <div className="contact-option">
          <a href="https://github.com/aryansaxenadev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <div className="contact-icon">
              <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="GitHub" />
            </div>
            <div className="contact-text">
              <p>GitHub</p>
              <span>Check out my repos.</span>
            </div>
          </a>
        </div>
        <div className="contact-option">
          <a href="https://www.fiverr.com/aryanfullstack" target="_blank" rel="noopener noreferrer" aria-label="Fiverr">
            <div className="contact-icon">
              <img src="https://img.icons8.com/color/48/000000/fiverr.png" alt="Fiverr" />
            </div>
            <div className="contact-text">
              <p>Fiverr</p>
              <span>Hire me for your next project.</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

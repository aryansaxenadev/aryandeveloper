import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';
import logo from '../logo2.png';
import { FaBars } from 'react-icons/fa'; // Import hamburger icon from react-icons library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <span>AryanDev</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars /> {/* Hamburger icon */}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} offset={-50} onClick={toggleMenu}>About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="skills" smooth={true} duration={500} offset={-50} onClick={toggleMenu}>Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="divider" smooth={true} duration={500} offset={-50} onClick={toggleMenu}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500} offset={-50} onClick={toggleMenu} className="contact-button">Contact Me</Link>
          </li>
        </ul>
        <div className="nav-social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

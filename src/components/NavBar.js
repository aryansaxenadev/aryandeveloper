import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './NavBar.css';
import logo from '../logo2.png';
import { FaBars } from 'react-icons/fa'; // Import hamburger icon from react-icons library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBlogClick = () => {
    window.location.href = '/blog';
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
            <ScrollLink to="about" smooth={true} duration={500} offset={-50} onClick={toggleMenu}>About Me</ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="skills" smooth={true} duration={500} offset={-50} onClick={toggleMenu}>Skills</ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="divider" smooth={true} duration={500} offset={-50} onClick={toggleMenu}>Projects</ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink to="contact" smooth={true} duration={500} offset={-50} onClick={toggleMenu} className="contact-button">Contact Me</ScrollLink>
          </li>
          <li className="nav-item">
            <a href="/blog" onClick={handleBlogClick}>My Blogs</a>
          </li>
        </ul>
        <div className="nav-social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


import "../assets/styles/navbar.css"

import React, { useState } from 'react';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1 className="the-logo" style={{color:"white"}}>Strion </h1>
      </div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#roadmap" onClick={() => setIsMenuOpen(false)}>Roadmap</a></li>
        <li><a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


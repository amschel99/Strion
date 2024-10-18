
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
        <h1 style={{color:"#0E1B20"}}>Strion Whitepaper</h1>
      </div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#whitepaper" onClick={() => setIsMenuOpen(false)}>White Paper</a></li>
        <li><a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a></li>
      </ul> */}
    </nav>
  );
};

export default Navbar;


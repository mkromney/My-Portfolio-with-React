import React from 'react';
import '../styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  const linkStyle = {
    fontSize: '130%', // Increase font size by 30%
    marginRight: '10px', // Add some spacing between links
    marginBottom: '20px', // Add 20px space below the links
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
  };

  return (
    <nav style={navbarStyle} className="navbar">
      <a href="/aboutme" style={linkStyle}>About Me</a>
      <a href="/portfolio" style={linkStyle}>Portfolio</a>
      <a href="/contact" style={linkStyle}>Contact</a>
      <a href="/resume" style={linkStyle}>Resume</a>
    </nav>
  );
};

export default Navbar;

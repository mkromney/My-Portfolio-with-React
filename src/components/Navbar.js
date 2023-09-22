import React from 'react';
import '../styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  const linkStyle = {
    fontSize: '130%', // Increase font size by 30%
    marginRight: '10px', // Add some spacing between links
    marginBottom: '20px', // Add 20px space below the links
    padding: '5px 0',
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    padding: '0px 0',
  };

  return (
    <nav style={navbarStyle} className="navbar">
      <a href="/aboutme" style={linkStyle}>About <span class="text-warning" > Me</span></a>
      <a href="/portfolio" style={linkStyle}>My<span class="text-warning" > Portfolio</span></a>
      <a href="/contact" style={linkStyle}>Get<span class="text-warning" > In Touch</span></a>
      <a href="/resume" style={linkStyle}>View<span class="text-warning" > Resume</span></a>
    </nav>
  );
};

export default Navbar;

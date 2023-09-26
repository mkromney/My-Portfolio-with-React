import React from 'react';
import '../styles/Styles.css';
import 'bootstrap/dist/css/bootstrap.css';

// Styles for the navbar: //
const Navbar = () => {
  const linkStyle = {
    fontSize: '130%', 
    marginRight: '10px', 
    marginBottom: '20px', 
    padding: '5px 0',
    maxWidth: '480px',
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'center',
    
  };

  // Returns navbar component: //
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

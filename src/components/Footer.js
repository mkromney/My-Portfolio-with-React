import React from "react";
import linkedinlogo from "../styles/images/linkedin.png";
import gitlogo from "../styles/images/github.png";
import discordlogo from "../styles/images/discord.png";
import '../styles/Styles.css';

// Styles for the footer: //
const footerStyles = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  
};

// Returns the footer component: //
const Footer = () => {
  return (
    <>
    <div style={footerStyles} className="w-100 p-3  text-center bg-dark">
      <a className="px-2" href="https://github.com/mkromney" target="_blank" rel="noreferrer">
        <img src={gitlogo} alt="Git Icon" width="40px" />
      </a>
      <a className="px-2" href="https://www.linkedin.com/in/maridonromney" target="_blank" rel="noreferrer">
        <img src={linkedinlogo} alt="LinkedIn" width="40px" />
      </a>
      <a className="px-2" href="https://discord.com/users/@mmaridonn" target="_blank" rel="noreferrer">
        <img src={discordlogo} alt="Discord Icon" width="40px" />
      </a>
      <div>
    <p className="text-white">&copy; Maridon Romney 2023 ❤️</p>
    </div>
    </div>
    </>
  );
};

export default Footer;

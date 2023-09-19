import React from "react";
import linkedinlogo from "../styles/images/linkedin.png";
import gitlogo from "../styles/images/github.png";
import discordlogo from "../styles/images/discord.png";
import '../styles/Footer.css'

const Footer = () => {
  return (
   <div className="footerStyle" class="w-100 p-3 col text-center bg-dark h-100 d-inline-block">
    <a href="https://github.com/mkromney" target="_blank" rel="noreferrer">
      <img src={gitlogo} alt="Git Icon" width="40px"></img>
     </a>
     <a href="https://www.linkedin.com/in/maridonromney" target="_blank" rel="noreferrer">
      <img src={linkedinlogo} alt="LinkedIn" width="40px"></img>
     </a>
     <a href="https://discord.com/users/@mmaridonn" target="_blank" rel="noreferrer">
      <img src={discordlogo} alt="Discord Icon" width="40px"></img>
     </a>
     <p className="text-white">&copy; Maridon Romney 2023 ❤️</p>
    </div>
  );
};
export default Footer;








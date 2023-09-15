import React from "react";
import linkedinlogo from "../styles/images/linkedin.png";
import gitlogo from "../styles/images/github.png";
import discordlogo from "../styles/images/discord.png";
  
const Footer = () => {
  return (
   <div class="col text-center">
    <a href="https://github.com/mkromney" target="_blank" rel="noreferrer">
      <img src={gitlogo} alt="Git Icon" width="40px"></img>
     </a>
     <a href="https://www.linkedin.com/in/maridonromney" target="_blank" rel="noreferrer">
      <img src={linkedinlogo} alt="LinkedIn" width="40px"></img>
     </a>
     <a href="https://discord.com/users/@mmaridonn" target="_blank" rel="noreferrer">
      <img src={discordlogo} alt="Discord Icon" width="40px"></img>
     </a>
    </div>
  );
};
export default Footer;








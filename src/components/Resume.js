import React from 'react';
import MaridonRomneyResume from '../styles/images/Maridon-Romney-Resumé-2023.pdf'; 
import ResumeImage from '../styles/images/MyResume.PNG'; 

// Styles for the page: //
const resumeContainer = {
 height: '90vw',
 marginTop: '20px',
 marginBottom: '20px',  
};

// Render the page: //
const Resume = () => {
  return (
    <div style={resumeContainer}>
      {/* Displays Resume and allows the user to download document: */}
      <p1 class="text-dark">*click anywhere on Resume to Download</p1>
      <a href={MaridonRomneyResume} download="Maridon-Romney-Resumé-2023.pdf">
        <img src={ResumeImage} alt="Maridon Romney Resume" />
      </a>
    </div>
  );
};

export default Resume;


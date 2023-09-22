import React from 'react';
import MaridonRomneyResume from '../styles/Maridon-Romney-Resumé-2023.pdf'; 
import ResumeImage from '../styles/images/MyResume.PNG'; 

const resumeContainer = {
 height: '90vw',
 marginTop: '20px',
 marginBottom: '20px',  
};

const Resume = () => {
  return (
    <div style={resumeContainer}>
      
      <a href={MaridonRomneyResume} download="Maridon-Romney-Resumé-2023.pdf">
        <img src={ResumeImage} alt="Maridon Romney Resume" />
      </a>
    </div>
  );
};

export default Resume;


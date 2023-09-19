// Your about me page.
import React from "react";
import "../styles/AboutMe.css"; // Import CSS for styling

const AboutMe = () => {
 return (
   
   <div className="aboutMeContainer">
     <section>
     <div className="aboutMeIntro">
       <h1>About Me</h1>
       <p>This is a brief introduction about myself...</p>
     </div>
     </section>
     <section className="aboutSection">
       <h2>Hobbies</h2>
       <p>About my hobbies...</p>
     
     
       <h2>Education</h2>
       <p>About my education...</p>
     </section>
   </div>
 );
};

export default AboutMe;

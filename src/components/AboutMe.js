// Your about me page.
import React from "react";
import "../styles/AboutMe.css"; // Import CSS for styling
import MyPhoto from "../styles/images/maridon-romney-2023.JPG"

const AboutMe = () => {
 return (
   
   <div class='text-left' className="aboutMeContainer">
     <box>
     <section>
     <div class='text-left' className="aboutMeIntro">
      <a>
      <img src={MyPhoto} alt="My Photo" width="500px"></img>
     </a>
       <p>Inspired by a lifetime passion for language learning and an early fascination of artificial intelligence, I recently earned an advanced degree in Syntax - the study of the underlying structures within everyday utterances with a focus on natural language processing in Python. The intentional combination of these disciplines brings unique perspective to deep learning algorithms and the question of Language in the human brain with the aim of solving some of our toughest software engineering and AI development challenges.</p>
     </div>
     </section>
     <section className="aboutSection">
       <h2>Hobbies</h2>
       <p>About my hobbies...</p>
       </section> 
       <section className="aboutSection"> 
       <h2>Education</h2>
       <p>About my education...</p>
     </section>
     </box>
   </div>
 );
};

export default AboutMe;

// Your about me page.
import React from "react";
import "../styles/AboutMe.css"; // Import CSS for styling
import MaridonPhoto from "../styles/images/maridon-romney-2023.JPG"

const pStyles = {
  width: '90vw',
  marginTop: '20px',
  textAlign: 'left', // Align the text to the left
  display: 'flex',
  
};

const AboutMe = () => {
 return (
   
   <div class='text-left' className="aboutMeContainer">
     <box>
     <section>
     <div class='text-left' className="aboutMeIntro">
      <a href='https://mmaridonn.com'>
        <img src={MaridonPhoto} alt="Maridon Romney" width="500px"></img>
      </a>
       <p style={pStyles}>Inspired by a lifetime passion for language learning and an early fascination with artificial intelligence, I recently earned an advanced degree in Linguistics, Minimalism Syntax Framework - the study of the underlying structures within everyday utterances with a focus on natural language processing in Python. The intentional combination of these disciplines brings unique perspective to deep learning algorithms and the question of Language in the human brain with the aim of solving some of our toughest software engineering and AI development challenges.</p>
     </div>
     <section className="aboutSection"> 
       <h2>Education</h2>
       <p>Logic, Language and Meaning:</p>
       <h5>University of Utah Linguistics Department</h5>
       <li>MA Linguistics: Syntax, Semantics, Computation Linguistics</li>
       <li>BA Linguistics: Syntax (Minimalism Framework)</li>
       <p>Notable Paper: The Chicken Paper</p>
     </section>
     </section>
     <section className="aboutSection">
       <h2>Hobbies</h2>
       
        <li>World / Language-building Hobby Writer</li>
        <li>Blade Runner Enthusiast</li>
        <li>Master Minecraft Architect</li>
        <li>Magic the Gathering Novice</li>
        <li>Avid Flyfisher and Mountaineer</li>
        <li>Polyglot, just for fun.</li>
        <li>(German, Spanish, Swedish,
          Japanese, French, Italian & more)</li>
       </section> 
       
     </box>
   </div>
 );
};

export default AboutMe;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";



import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      /* Wrap page elements in Router component to keep track of location state */
      <Router>
        <div className="flex-column justify-flex-start min-100-vh bg-primary-black">
          <Header />
          <Navbar />
          <div className="container">
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              <Route 
                path="/" 
                element={<AboutMe />} 
              />
              <Route 
                path="/aboutme" 
                element={<AboutMe />} 
              />
              <Route 
                path="/portfolio" 
                element={<Portfolio />} 
              />
              <Route 
              path="/contact" 
              element={<Contact />} 
              />
              <Route 
              path="/resume" 
              element={<Resume />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    
  );
}

export default App;
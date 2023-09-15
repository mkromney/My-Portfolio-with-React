import React from "react";
import Header from "./components/Header";
import List from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const styles = {
  app: {
    
    background: 'black',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

function App() {
  return (
    <div style={styles.app} >
      <Header />
      <Navbar />
      <List />
      <Footer />
    </div>
  );
}

export default App;

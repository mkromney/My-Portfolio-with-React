import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Header.css';

const styles = {
  headerStyle: {
    background: 'black',
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '0',
    position: 'relative',
    zIndex: '5',
    
  },
  headingStyle: {
    fontSize: '50px',
    marginBottom: '50px',
  },
  paragraphStyle: {
   
    fontSize: '30px', // Adjust the font size for the paragraph
    marginTop: '150px', // Add some top margin for separation
  },
};

function Header() {
  return (
    <div >
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Maridon Romney
        </h1>       
      </header>
    </div>
  );
}

export default Header;

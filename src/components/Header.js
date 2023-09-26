import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Styles.css';

// Styles for the page: //
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
    marginBottom: '100px',
  },
  paragraphStyle: {
   
    fontSize: '30px', 
    marginTop: '150px',
  },
};

// Returns the header component: //
function Header() {
  return (
    <div >
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Maridon Romney<span class="fs-4 text-warning font-weight-light">Junior Developer</span>
        </h1>       
      </header>
    </div>
  );
}

export default Header;

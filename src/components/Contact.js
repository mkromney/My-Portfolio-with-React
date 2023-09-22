import React from 'react';

const contactContainer = {
    height: '90vw',
    marginTop: '20px',
    marginBottom: '20px',  
  };

const Contact = () => {
  return (
    <>
      <section style={contactContainer} className="text-center">
        <h1>Get <span className="text-warning">In Touch</span></h1>
        <section className="p-3 d-flex justify-content-center">
        <div>
          <a href="mkromney@gmail.com" target="_blank" className="btn btn-warning mx-2" rel="noreferrer">Email Me</a>
          <a href="https://github.com/mkromney" target="_blank" className="btn btn-dark mx-2" rel="noreferrer">View my GitHub</a>
        </div>
      </section>
      </section>
     
    </>
  );
};

export default Contact;

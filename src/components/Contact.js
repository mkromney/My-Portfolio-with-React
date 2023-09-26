import React, { useState } from 'react';

// Styling for the component/page. //
const contactContainer = {
  height: '90vw',
  marginTop: '20px',
  marginBottom: '20px',
};

// Functional contact component. //
const Contact = () => {
  // State variables using the useState hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  // Email input handler. //
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    // Ensures user enters valid email. //
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputEmail)) {
      setEmailError('You must enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  // Handler for the input blur (for when a user clicks outside of the input field). //
  const handleBlur = (field) => {
    if (field === 'email' && !email) {
      setEmailError('*Email is required.');
    } else {
      setEmailError('');
    }

    if (field === 'name' && !name) {
      setNameError('*Name is required.');
    } else {
      setNameError('');
    }

    if (field === 'message' && !message) {
      setMessageError('*Message is required.');
    } else {
      setMessageError('');
    }
  };

  // Simulated function to send an email - console logs help show me they were sent and where I need to send them to. //
  const sendEmail = () => {
    const dataToSend = {
      name,
      email,
      message,
    };
    console.log('Sending email:', dataToSend);
    console.log('Email sent to mkromney@gmail.com');
  };

  // Form submission. //
  const handleSubmit = (event) => {
    event.preventDefault();

    // Makes sure all fields are filled in. //
    if (!name || !email || !message) {
      setNameError('*Name is required.');
      setEmailError('*Email is required.');
      setMessageError('*Message is required.');
      return;
    }

    // Makes sure the email is valid and matches pattern. //
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('You must enter a valid email address.');
      return;
    }

    // Simulates sending data to the server - need to replace with server logic later on. //
    sendEmail();

    // Clears form fields after submission. //
    setName('');
    setEmail('');
    setMessage('');
  };

  // JSX for the Contact form component, not fully functional yet. //
  return (
    <>
      <section style={contactContainer} className="text-center">
        <h1>Get <span className="text-warning">In Touch</span></h1>
        <form onSubmit={handleSubmit}>
          {/* Input for the user's name. */}
          <div className="mb-3">
            <input
              type="text"
              className="email-form"
              placeholder="your name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur('name')}
            />
            {nameError && <div className="text-danger">{nameError}</div>}
          </div>

          {/* Email input. */}
          <div className="mb-3">
            <input
              type="email"
              className="email-form"
              placeholder="your email*"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => handleBlur('email')}
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>

          {/* Message text. */}
          <div className="mb-3">
            <textarea
              className="email-form"
              placeholder="leave a message*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => handleBlur('message')}
            />
            {messageError && <div className="text-danger">{messageError}</div>}
          </div>

          {/* Submit button for contact form. */}
          <button type="submit" className="btn btn-outline-dark btn-sm" onClick={sendEmail}>
            Submit
          </button>

          {/* Links to email and github. */}
          <div className="mb-3" style={{ marginTop: '40px' }}>
          <a href="" target="_blank" className="btn btn-warning mx-2" rel="noreferrer">
              Email me directly
            </a>
            <a href="https://github.com/mkromney" target="_blank" className="btn btn-dark mx-2" rel="noreferrer">
              View my GitHub
            </a>
          </div>
        </form>
      </section>
    </>
  );
};

// Exporting the Contact component
export default Contact;

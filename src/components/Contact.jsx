import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS library
import './Contact.css';
import ResumeButton from './Resume';

const Contact = ({ contactRef }) => {
  const [showContactForm, setShowContactForm] = useState(false); // State to control form visibility
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control success message visibility
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_l92ocnh', 'template_bb70kdv', formRef.current, {
      publicKey: 'h9_I5CYWWye5vmhYN',
    })
      .then((result) => {
        console.log('SUCCESS!');
        setShowSuccessMessage(true); // Show success message
        setTimeout(() => {
          setShowSuccessMessage(false); // Hide success message after some time (e.g., 3 seconds)
          setShowContactForm(false); // Close the contact form window
        }, 3000); // 3000 milliseconds = 3 seconds
      }, (error) => {
        console.log('FAILED...', error.text);
        // Add any error handling here
      });
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
    setShowSuccessMessage(false); // Hide success message when toggling the contact form
  };

  return (
    <div className="contact-container">
      <div className="button-container">
        <button className="contact-button" onClick={toggleContactForm}>Contact me</button>
        <ResumeButton className="resume-button" />
      </div>
      {showContactForm && (
        <div className="contact-form-container">
          {!showSuccessMessage ? ( // Display form if success message is not shown
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Your Name" />
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Your Email" />
              <label>Message</label>
              <textarea name="message" placeholder="Your Message. (Please include your contact information in the message)"></textarea>
              <button type="submit">Send</button>
            </form>
          ) : ( // Display success message if form is successfully submitted
            <div className="success-message">Message sent successfully!</div>
          )}
          
          <button className="close-button" onClick={toggleContactForm}>X</button>
        </div>
      )}
    </div>
  );
}

export default Contact;

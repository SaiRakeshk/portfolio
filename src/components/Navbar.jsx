import { useState, useRef } from 'react';
import './Navbar.css';
import resumePDF from '../assets/Sai_Rakesh_K   (2).pdf';
import emailjs from '@emailjs/browser'; // Import EmailJS library

const Navbar = ({ scrollToProjects }) => {
  const [showContactForm, setShowContactForm] = useState(false); // State to control form visibility
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to show success message
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l92ocnh', 'template_bb70kdv', formRef.current, {
      publicKey: 'h9_I5CYWWye5vmhYN',
    })
      .then(() => {
        console.log('SUCCESS!');
        setShowSuccessMessage(true); // Show success message
        setTimeout(() => {
          setShowSuccessMessage(false); // Hide success message after some time (e.g., 3 seconds)
          setShowContactForm(false); // Close the contact form window
        }, 3000); // Hide success message after 3 seconds
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  };

  const handleContactClick = () => {
    setShowContactForm(!showContactForm); // Toggle contact form visibility
  };

  const handleResumeClick = () => {
    window.open(resumePDF, '_blank'); // Open the resume in a new tab
  };

  return (
    <div className="nav">
      <div className="name">Sai Rakesh K</div>
      <ul>
        <li onClick={scrollToProjects}>Projects</li>
        <li onClick={handleContactClick}>Contact</li>
        <li onClick={handleResumeClick}>Resume</li>
      </ul>

      {/* Contact Form */}
      {showContactForm && (
        <div className="contact-form-container">
          {!showSuccessMessage ? ( // Display form if success message is not shown
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Your Email" required />
              <label>Message</label>
              <textarea name="message" placeholder="Your Message. (Please include your contact information in the message)" required></textarea>
              <button type="submit">Send</button>
            </form>
          ) : (
            <div className="success-message">Message sent successfully!</div>
          )}

          <button className="close-button" onClick={handleContactClick}>X</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

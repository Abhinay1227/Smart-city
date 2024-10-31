// src/ContactUs.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './ContactUs.css';

function ContactUs() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle back to home
  const handleBackToHome = () => {
    navigate('/'); // Redirects to the home page
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      
      {/* Contact Form Section */}
      <div className="contact-form">
        <label htmlFor="name" className="contact-label">Name</label>
        <input type="text" id="name" className="contact-input" placeholder="Your Name" />

        <label htmlFor="email" className="contact-label">Email</label>
        <input type="email" id="email" className="contact-input" placeholder="Your Email" />

        <label htmlFor="message" className="contact-label">Message</label>
        <textarea id="message" className="contact-textarea" placeholder="Your Message"></textarea>

        <button type="submit" className="submit-btn">Submit</button>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info">
        <div className="contact-info-item">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span className="contact-info-text">(123) 456-7890</span>
        </div>
        
        <div className="contact-info-item">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <span className="contact-info-text">contact@smartcity.com</span>
        </div>
        
        <div className="contact-info-item">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <span className="contact-info-text">123 Smart City Ave, Innovation Hub</span>
        </div>
      </div>

      {/* Back to Home Button - From Uiverse.io by gharsh11032000 */}
      <button className="animated-button" onClick={handleBackToHome}>
        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.82843 12L13.1924 17.364L11.7782 18.7783L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 11H20V13H7.82843Z"
          ></path>
        </svg>
        <span className="text">Back to Home</span>
        <span className="circle"></span>
        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.82843 12L13.1924 17.364L11.7782 18.7783L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 11H20V13H7.82843Z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default ContactUs;

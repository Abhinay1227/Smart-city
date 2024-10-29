// src/AboutPage.js

import React from 'react';
import './AboutPage.css';
import person1 from './images/cat.jpg'; // Replace with actual image paths
import person2 from './images/cat.jpg';
import person3 from './images/cat.jpg';

function AboutPage() {
    return (
      <div className="about-page">
        <header className="about-header">
          <h1>About Us</h1>
          <p>Learn more about our team and our vision for a smart city.</p>
        </header>
  
        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={person1} alt="John Doe" className="team-image" />
              <h3>John Doe</h3>
              <p>Project Manager</p>
              <div className="hover-info">
                <p>John is passionate about urban development and sustainability.</p>
              </div>
            </div>
            <div className="team-member">
              <img src={person2} alt="Jane Smith" className="team-image" />
              <h3>Jane Smith</h3>
              <p>Lead Developer</p>
              <div className="hover-info">
                <p>Jane specializes in front-end technologies and user experience.</p>
              </div>
            </div>
            <div className="team-member">
              <img src={person3} alt="Emily Johnson" className="team-image" />
              <h3>Emily Johnson</h3>
              <p>UI/UX Designer</p>
              <div className="hover-info">
                <p>Emily loves creating intuitive designs that enhance user interaction.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default AboutPage;
  
// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './images/logo.jpeg';
import heroVideo from './videos/bg.mp4';

const Home = () => {
  return (
    <div className="home">
      {/* Navigation Bar */}
      <nav className="navbar">
        <img className="logoi" src={logo} alt="logo" />
        <div className="title">Smart City</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <video className="hero-video" src={heroVideo} autoPlay loop muted />
        <h1>Welcome to Smart City</h1>
        <p>Experience a connected, innovative, and sustainable city for all residents.</p>
        {/* Change the button to a Link component */}
        <Link to="/login">
          <button className="contact-button">Get Started</button>
        </Link>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Smart City</h2>
        <p>
          Our Smart City project uses cutting-edge technology to enhance urban living. We bring together
          transportation, energy management, and real-time data solutions for a smarter city.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Features</h2>
        <ul>
          <li>Smart Transportation</li>
          <li>Energy Efficiency</li>
          <li>Connected Infrastructure</li>
          <li>Real-time Data Insights</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Smart City. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

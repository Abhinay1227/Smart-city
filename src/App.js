// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutPage from './AboutPage';
import Login from './Login';
import Contact from './ContactUs'; // Import your Contact component
import './App.css';

function App() {
  return (
    <Router basename="/smart-city">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} /> {/* Route for Contact */}
      </Routes>
    </Router>
  );
}

export default App;

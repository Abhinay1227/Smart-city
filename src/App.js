// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutPage from './AboutPage';
import Login from './Login'; // Import your Login component
import './App.css';

function App() {
  return (
    <Router basename="/smart-city"> {/* Set the basename here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} /> {/* Route for login */}
      </Routes>
    </Router>
  );
}

export default App;

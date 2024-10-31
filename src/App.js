// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutPage from './AboutPage';
import Login from './Login'; // User Login component
import AdminLogin from './AdminLogin'; // Admin Login component
import SelectionPage from './SelectionPage';

function App() {
  return (
    <Router basename="/smart-city">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} /> {/* User Login */}
        <Route path="/admin-login" element={<AdminLogin />} /> {/* Admin Login */}
        <Route path="/selection" element={<SelectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;

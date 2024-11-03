// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutPage from './AboutPage';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import SelectionPage from './SelectionPage';
import Dashboard from './components/Dashboard'; // Make sure you import Dashboard
import WeatherDetails from './components/WeatherDetails'; // Import WeatherDetails

function App() {
  return (
    <Router basename="/smart-city">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Make sure this route is included */}
        <Route path="/weather" element={<WeatherDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

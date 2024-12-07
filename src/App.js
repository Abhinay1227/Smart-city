import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import Home from './Home';
import AboutPage from './AboutPage';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import SelectionPage from './SelectionPage';
import Dashboard from './components/Dashboard';
import WeatherDetails from './components/WeatherDetails';
import ContactUs from './ContactUs';
import CityMap from './components/CityMap';
import Forum from './components/Forum';
import SignupPage from './components/SignupPage'; 
import AdminDashboard from './components/AdminDashboard'; // New Admin Dashboard

function App() {
  return (
    <Router basename="/smart-city">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/map" element={<CityMap />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* User Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Added route */}

        {/* Features */}
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/weather" element={<WeatherDetails />} />
      </Routes>
    </Router>
  );
}

export default App
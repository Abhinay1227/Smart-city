// src/Dashboard/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to navigate to Weather Details
  const goToWeatherDetails = () => {
    navigate('/weather', { state: { city: "New York" } }); // Pass city to the Weather Details page
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <TopBar />
      <div className="dashboard-content">
        <div className="card weather-widget" onClick={goToWeatherDetails}>
          Weather Widget
        </div>
        <div className="card traffic-widget">Traffic Alerts</div>
        <div className="card service-widget">Service Requests</div>
        <div className="card air-quality-widget">Air Quality Index</div>
      </div>
    </div>
  );
}

export default Dashboard;

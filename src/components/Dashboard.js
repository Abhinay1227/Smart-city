// src/Dashboard/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const goToWeatherDetails = () => {
    navigate('/weather', { state: { city: "Guntur" } });
  };

  const goToForum = () => {
    navigate('/forum');
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <TopBar />
      <div className="dashboard-content">
        <div className="widget-grid">
          <div className="card weather-widget" onClick={goToWeatherDetails}>
            <i className="icon-weather"></i> Weather Widget
          </div>
          <div className="card traffic-widget">
            <i className="icon-traffic"></i> Traffic Alerts
          </div>
          <div className="card service-widget">
            <i className="icon-service"></i> Service Requests
          </div>
          <div className="card air-quality-widget">
            <i className="icon-air"></i> Air Quality Index
          </div>
          <div className="card forum-widget" onClick={goToForum}>
            <i className="icon-forum"></i> Community Forum
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// src/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <Link to="/profile" className="sidebar-link">
        <i className="icon-profile"></i> Profile
      </Link>
      <Link to="/map" className="sidebar-link">
        <i className="icon-map"></i> Map
      </Link>
      <Link to="/services" className="sidebar-link">
        <i className="icon-services"></i> Services
      </Link>
      <Link to="/notifications" className="sidebar-link">
        <i className="icon-notifications"></i> Notifications
      </Link>
      <Link to="/settings" className="sidebar-link">
        <i className="icon-settings"></i> Settings
      </Link>
    </div>
  );
}

export default Sidebar;

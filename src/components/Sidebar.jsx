// src/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <Link to="/profile" className="sidebar-link">Profile</Link>
      <Link to="/map" className="sidebar-link">Map</Link> {/* Updated to use Link */}
      <Link to="/services" className="sidebar-link">Services</Link>
      <Link to="/notifications" className="sidebar-link">Notifications</Link>
      <Link to="/settings" className="sidebar-link">Settings</Link>
    </div>
  );
}

export default Sidebar;

// src/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <a href="#profile" className="sidebar-link">Profile</a>
      <a href="#services" className="sidebar-link">Services</a>
      <a href="#notifications" className="sidebar-link">Notifications</a>
      <a href="#settings" className="sidebar-link">Settings</a>
    </div>
  );
}

export default Sidebar;

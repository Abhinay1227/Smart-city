// src/TopBar.jsx
import React from 'react';
import './TopBar.css';

function TopBar() {
  return (
    <div className="top-bar">
      <h1 className="top-bar-title">Dashboard</h1>
      <div className="top-bar-icons">
        <i className="fa fa-user" aria-hidden="true"></i>
        <i className="fa fa-bell" aria-hidden="true"></i>
        <i className="fa fa-cog" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default TopBar;

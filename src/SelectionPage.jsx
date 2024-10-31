// src/SelectionPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './SelectionPage.css';

function SelectionPage() {
  return (
    <div className="selection-container">
      <h2 className="selection-title">Who Are You?</h2>
      <p className="selection-subtitle">Choose an option to continue</p>
      <div className="selection-options">
        {/* Link to Admin Login page */}
        <Link to="/admin-login" className="selection-card admin-card">
          <h3>Admin</h3>
          <p>Manage city infrastructure, user data, and more.</p>
        </Link>
        {/* Link to User Login page */}
        <Link to="/login" className="selection-card user-card">
          <h3>User</h3>
          <p>Explore services, resources, and city updates.</p>
        </Link>
      </div>
    </div>
  );
}

export default SelectionPage;

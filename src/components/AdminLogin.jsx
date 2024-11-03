// src/AdminLogin.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  return (
    <div className="admin-login-container">
      <h1 className="login-title">Admin Login</h1>
      <form className="login-form">
        <input type="text" placeholder="Admin ID" required className="login-input" />
        <input type="password" placeholder="Password" required className="login-input" />
        <button type="submit" className="login-button">Login</button>
        <p className="redirect-text">
          Forgot your password? <Link to="/reset-password">Reset it</Link>
        </p>
      </form>
    </div>
  );
}

export default AdminLogin;

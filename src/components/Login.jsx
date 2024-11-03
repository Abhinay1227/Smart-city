// src/UserLogin.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function UserLogin() {
  return (
    <div className="user-login-container">
      <h1 className="login-title">User Login</h1>
      <form className="login-form">
        <input type="email" placeholder="Email" required className="login-input" />
        <input type="password" placeholder="Password" required className="login-input" />
        <button type="submit" className="login-button">Login</button>
        <p className="redirect-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default UserLogin;
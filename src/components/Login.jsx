// src/UserLogin.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    
    // Check if entered credentials match the specific email and password
    if (email === 'abhi@gmail.com' && password === 'Abhi@1227') {
      localStorage.setItem('isLoggedIn', 'true'); // Set login status in localStorage
      navigate('/dashboard'); // Redirect to the dashboard page
    } else {
      alert('Invalid email or password'); // Show error message
    }
  };

  return (
    <div className="user-login-container">
      <h1 className="login-title">User Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">Login</button>
        <p className="redirect-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default UserLogin;

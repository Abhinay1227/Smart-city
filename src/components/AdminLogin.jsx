import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    const adminCredentials = {
      email: email,
      password: password
    };

    try {
      // Replace the URL with your backend login endpoint
      const response = await axios.post('http://localhost:8080/api/admin/login', adminCredentials);

      // If login is successful, redirect to Admin Dashboard
      setSuccess(response.data);
      setError('');
      navigate('/admin-dashboard'); // Redirect to Admin Dashboard page
    } catch (err) {
      // If login fails
      setError(err.response ? err.response.data : 'Login failed');
      setSuccess('');
    }
  };

  return (
    <div className="admin-login-container">
      <h1 className="login-title">Admin Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Admin ID"
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
          Forgot your password? <Link to="/reset-password">Reset it</Link>
        </p>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
}

export default AdminLogin;

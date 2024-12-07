import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    // Prepare login data
    const loginData = {
      email: email,
      password: password,
    };

    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:8080/api/login', loginData);

      if (response.data === 'Login successful') {
        localStorage.setItem('isLoggedIn', 'true'); // Set login status in localStorage
        navigate('/dashboard'); // Redirect to the dashboard page
      } else {
        setErrorMessage('Invalid email or password'); // Show error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again.');
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="redirect-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default UserLogin;

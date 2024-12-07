import React from "react";
import "./AdminDashboard.css";
import { FaUser, FaBell, FaChartBar, FaCog, FaSignOutAlt, FaPlus, FaFileAlt } from "react-icons/fa";
import BarChart from "./BarChart";
import { useNavigate } from 'react-router-dom'; 

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session or user data (for example, from localStorage)
    localStorage.removeItem('userToken');  // Example for removing stored token (adjust as per your app's auth method)
    
    // Navigate to the login page
    navigate('/admin-login');
  };
  return (
    <div className="dashboard-container">
      {/* Top Navigation */}
      <header className="top-nav">
        <div className="logo">Admin Portal</div>
        <nav className="nav-links">
          <button className="nav-item">
            <FaChartBar /> Dashboard
          </button>
          <button className="nav-item">
            <FaUser /> User Management
          </button>
          <button className="nav-item">
            <FaBell /> Notifications
          </button>
          <button className="nav-item">
            <FaCog /> Settings
          </button>
          <div className="profile-section">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="profile-pic"
            />
            <span className="profile-name">Admin</span>
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome back, Admin!</h1>
        <p>Here’s an overview of your system’s activity.</p>
        <div className="quick-actions">
          <button className="action-btn">
            <FaPlus /> Add User
          </button>
          <button className="action-btn">
            <FaFileAlt /> Generate Report
          </button>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="analytics-section">
        <div className="analytics-card">
          <h3>Total Users</h3>
          <p>1,234</p>
          <span className="trend positive">+5%</span>
        </div>
        <div className="analytics-card">
          <h3>New Signups</h3>
          <p>87</p>
          <span className="trend neutral">0%</span>
        </div>
        <div className="analytics-card">
          <h3>Active Cities</h3>
          <p>45</p>
          <span className="trend positive">+2%</span>
        </div>
        <div className="analytics-card">
          <h3>Weather Stations</h3>
          <p>12</p>
          <span className="trend negative">-1%</span>
        </div>
      </div>

      {/* Chart and Activity Log */}
      <div className="data-section">
        <div className="chart-card">
          <h3>User Growth</h3>
          <BarChart />
        </div>
        <div className="activity-card">
          <h3>user Feedbacks</h3>
          <ul>
            <li>User *JohnDoe* signed in.</li>
            <li>City *New York* weather updated.</li>
            <li>Admin *Jane* added a new report.</li>
          </ul>
          <button className="expand-btn">View More</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

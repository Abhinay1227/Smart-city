import React, { useState, useEffect } from "react";
import axios from "axios";
import './SignupPage.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    gender: "",
    age: "",
    contact: "",
    location: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/displayall");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Update user
        await axios.put("http://localhost:8080/api/update", formData);
        alert("User updated successfully!");
      } else {
        // Add new user
        await axios.post("http://localhost:8080/api/add", formData);
        alert("User added successfully!");
      }
      fetchUsers();
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error occurred. Please try again.");
    }
  };

  // Handle edit
  const handleEdit = (user) => {
    setFormData(user);
    setIsEditing(true);
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete/${id}`);
      alert("User deleted successfully!");
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error occurred. Please try again.");
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      id: "",
      name: "",
      gender: "",
      age: "",
      contact: "",
      location: "",
      email: "",
      password: "",
    });
    setIsEditing(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="signup-container">
      <h2>{isEditing ? "Edit User" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User ID</label>
          <input
            type="number"
            name="id"
            placeholder="User ID"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contact</label>
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">{isEditing ? "Update User" : "Add User"}</button>
        {isEditing && <button type="button" onClick={resetForm}>Cancel Edit</button>}
      </form>

      <h2>All Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user.contact}</td>
                <td>{user.location}</td>
                <td>{user.email}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(user)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SignupPage;

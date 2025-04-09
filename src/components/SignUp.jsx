import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../components/NavBar";


const Signup = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:8000/api/users/register/", formData);
      navigate("/login");
    } catch (err) {
      setError("Signup failed. Try another username.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Sign Up</h2>
          {error && <p className="auth-error">{error}</p>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
          <p className="auth-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;

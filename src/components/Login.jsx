import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Login = () => {
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
      const response = await axios.post(
        "http://localhost:8000/api/token/",
        formData
      );
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      localStorage.setItem("username", formData.username);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
    <NavBar />
    <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Login</h2>
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
          <button type="submit">Login</button>
          <p className="auth-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </>
      
  );
};

export default Login;

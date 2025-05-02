import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign up</h2>
        <p className="subtext">Sign up to continue</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="remember-me">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label>Remember me</label>
          </div>
          <button type="submit" className="signup-btn">Sign up</button>
        </form>

        <div className="separator">
          <span>ACCESS QUICKLY</span>
        </div>

        <div className="social-buttons">
          <button className="social-btn google">Google</button>
          <button className="social-btn linkedin">LinkedIn</button>
          <button className="social-btn sso">SSO</button>
        </div>

        <p className="login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'; // Import the CSS for Navbar styling
import logo from '../assets/images/logo.png';  // Import your logo image


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
        <div className="navbar-logo">
          <img src={logo} alt="POS System Logo" className="logo-img" />
          <span className='logo-name'>REAL TECH</span>
        </div>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/supply-management">Supplier</Link>
          </li>
          <li>
            <Link to="/Items">Items</Link>
          </li>
          
        </ul>
        <div className="navbar-buttons">
          <Link to="SignUp"><button className="navbar-btn signup-btn">Sign Up</button></Link>
          <button className="navbar-btn logout-btn">Log Out</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';  // Optional: For custom styling

const Dashboard = () => {
  return (

    
    <div className="dashboard">
      
      
      <div className="dashboard-summary">
        <div className="card">
          <h3>Total Items</h3>
          <p>10</p> {/* You can update this dynamically based on state */}
        </div>
        <div className="card">
          <h3>Total Orders</h3>
          <p>25</p> {/* Update dynamically */}
        </div>
        <div className="card">
          <h3>Total Customers</h3>
          <p>50</p> {/* Update dynamically */}
        </div>
      </div>
     
      
    </div>
  );
};

export default Dashboard;

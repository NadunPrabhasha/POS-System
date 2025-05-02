// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Dashboard.css';  // Optional: For custom styling
import Slideshow from "../components/Slideshow";


const Dashboard = () => {
  return (

    
    <div className="dashboard">
      
      
      <div className="dashboard-summary">



            <Slideshow />
        </div>
    </div>
  );
};

export default Dashboard;

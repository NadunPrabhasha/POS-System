import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import Orders from "./components/Orders";
import Items from "./components/Items";
import SupplyManagement from "./components/SupplyManagement";
import Navbar from "./components/Navbar";
import "./assets/styles/style.css";


import TestComponent from './components/TestComponent';



import './App.css';

function App() {
  return (
    
    
    <div className="App">
      
      <Router>
      <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/items" element={<Items />} />
      <Route path="/supply-management" element={<SupplyManagement />} />
    </Routes>
  </Router>
    
    
  </div>
  );
}

export default App;

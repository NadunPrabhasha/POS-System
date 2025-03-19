// src/components/Customers.js
import React, { useState } from 'react';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomerName, setNewCustomerName] = useState("");

  const handleAddCustomer = (event) => {
    event.preventDefault();
    if (newCustomerName) {
      setCustomers([...customers, { id: Date.now(), name: newCustomerName }]);
      setNewCustomerName("");
    }
  };

  return (
    <div>
      <h2>Customers</h2>
      <form onSubmit={handleAddCustomer}>
        <input 
          type="text" 
          value={newCustomerName}
          onChange={(e) => setNewCustomerName(e.target.value)} 
          placeholder="Enter customer name"
        />
        <button type="submit">Add Customer</button>
      </form>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;

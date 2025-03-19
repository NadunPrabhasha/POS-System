// src/components/Orders.js
import React, { useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState("");

  const addOrder = (event) => {
    event.preventDefault();
    setOrders([...orders, { id: Date.now(), orderName: newOrder }]);
    setNewOrder("");
  };

  return (
    <div>
      <h2>Orders</h2>
      <form onSubmit={addOrder}>
        <input 
          type="text" 
          value={newOrder}
          onChange={(e) => setNewOrder(e.target.value)} 
          placeholder="Enter order details"
        />
        <button type="submit">Add Order</button>
      </form>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.orderName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;

import React, { useState } from "react";
import "../assets/styles/Items.css"; // Make sure this CSS file exists


const Items = () => {
  const [items, setItems] = useState([
    { id: 1, itemId: "ITM001", itemName: "Laptop Pro", category: "Laptop", price: "$1200" },
    { id: 2, itemId: "ITM002", itemName: "Gaming Mouse", category: "Accessories", price: "$50" },
  ]);

  return (
    <div className="items-page">
      <h2>Manage Items</h2>

      {/* Item Form Container */}
      <div className="form-container">
        <h3>Add New Item</h3>
        <label>Item ID: <input type="text" /></label>
        <label>Item Name: <input type="text" /></label>
        <label>Item Category: 
          <select>
            <option value="Desktop">Desktop</option>
            <option value="Laptop">Laptop</option>
            <option value="Accessories">Accessories</option>
          </select>
        </label>
        <label>Price: <input type="number" /></label>
        <button className="add-btn">Add Item</button>
      </div>

      {/* Items Table Container */}
      <div className="table-container">
        <h3>Item List</h3>
        <table>
          <thead>
            <tr>
              <th>Item Id</th>
              <th>Item Name</th>
              <th>Item Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.itemId}</td>
                <td>{item.itemName}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;

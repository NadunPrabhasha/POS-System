
import React, { useState } from 'react';
const Items = () => {
  // State to manage list of items
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState(0);

  // Handle adding a new item
  const addItem = (event) => {
    event.preventDefault();

    if (!newItemName || newItemQuantity <= 0) {
      alert('Please provide a valid item name and quantity.');
      return;
    }

    setItems([
      ...items,
      {
        id: Date.now(),
        name: newItemName,
        quantity: newItemQuantity,
      },
    ]);
    setNewItemName('');
    setNewItemQuantity(0);
  };

  // Handle updating the quantity of an item
  const updateItemQuantity = (id, quantity) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      )
    );
  };

  // Handle removing an item
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Supply Management</h2>
      
      {/* Add Item Form */}
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter item name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter quantity"
          value={newItemQuantity}
          onChange={(e) => setNewItemQuantity(parseInt(e.target.value))}
        />
        <button type="submit">Add Item</button>
      </form>

      {/* Item List */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - Quantity: {item.quantity}
            <button onClick={() => updateItemQuantity(item.id, 1)}>Add Stock</button>
            <button onClick={() => updateItemQuantity(item.id, -1)}>Remove Stock</button>
            <button onClick={() => removeItem(item.id)}>Remove Item</button>
          </li>
        ))}
      </ul>
    </div>
  );
}  
  export default Items;

import React, { useState, useEffect } from 'react';
import './SupplyManagement.css'; // Ensure the CSS file is present

const SupplyManagement = () => {
  const [supplies, setSupplies] = useState([]); // To store the list of supplies
  const [currentSupply, setCurrentSupply] = useState(null); // To manage the current supply being edited
  const [supplierName, setSupplierName] = useState(''); // Supplier name input state
  const [contact, setContact] = useState(''); // Contact input state
  const [companyName, setCompanyName] = useState(''); // Company name input state
  const [errors, setErrors] = useState({}); // To store validation errors

  // Fetch initial supplies (This would normally come from an API)
  useEffect(() => {
    // Fetch supplies from an API or backend (for demo, using static data)
    const initialSupplies = [
      { id: 1, supplier_name: 'Supplier A', contact: '123-456-7890', company_name: 'Company A' },
      { id: 2, supplier_name: 'Supplier B', contact: '987-654-3210', company_name: 'Company B' },
    ];
    setSupplies(initialSupplies);
  }, []);

  // Validation function
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Validate Supplier Name
    if (!supplierName.trim()) {
      formErrors.supplierName = "Supplier Name is required";
      isValid = false;
    }

    // Validate Contact (simple regex for phone number)
    const phoneRegex = /^[0-9]{3}[0-9]{3}[0-9]{4}$/;
    if (!contact.trim()) {
      formErrors.contact = "Contact is required";
      isValid = false;
    } else if (!phoneRegex.test(contact)) {
      formErrors.contact = "Contact must be a valid phone number (XXX-XXX-XXXX)";
      isValid = false;
    }

    // Validate Company Name
    if (!companyName.trim()) {
      formErrors.companyName = "Company Name is required";
      isValid = false;
    }

    setErrors(formErrors); // Update errors
    return isValid;
  };

  // Handle adding or updating a supply
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Don't submit if form is invalid
    }

    const newSupply = {
      id: currentSupply ? currentSupply.id : Date.now(),
      supplier_name: supplierName,
      contact,
      company_name: companyName,
    };

    if (currentSupply) {
      // Update the supply
      setSupplies(supplies.map(supply => (supply.id === currentSupply.id ? newSupply : supply)));
    } else {
      // Add a new supply
      setSupplies([...supplies, newSupply]);
    }

    // Reset form
    setSupplierName('');
    setContact('');
    setCompanyName('');
    setCurrentSupply(null); // Clear current supply being edited
    setErrors({}); // Clear errors
  };

  // Handle deleting a supply
  const handleDelete = (id) => {
    setSupplies(supplies.filter(supply => supply.id !== id));
  };

  // Handle editing a supply
  const handleEdit = (supply) => {
    setCurrentSupply(supply);
    setSupplierName(supply.supplier_name);
    setContact(supply.contact);
    setCompanyName(supply.company_name);
    setErrors({}); // Clear errors when editing
  };

  return (
    <div className="supply-management">
      <h2>Supply Management</h2>

      {/* Form for Create/Update */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Supplier Name:</label>
          <input
            type="text"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            required
          />
          {errors.supplierName && <p className="error">{errors.supplierName}</p>}
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
          {errors.contact && <p className="error">{errors.contact}</p>}
        </div>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          {errors.companyName && <p className="error">{errors.companyName}</p>}
        </div>
        <button type="submit">{currentSupply ? 'Update' : 'Add'} Supply</button>
      </form>

      {/* Table of Supplies */}
      <div className="supply-table">
        <h3>List of Supplies</h3>
        <table>
          <thead>
            <tr>
              <th>Supplier Name</th>
              <th>Contact</th>
              <th>Company Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {supplies.map(supply => (
              <tr key={supply.id}>
                <td>{supply.supplier_name}</td>
                <td>{supply.contact}</td>
                <td>{supply.company_name}</td>
                <td>
                  <button onClick={() => handleEdit(supply)}>Edit</button>
                  <button onClick={() => handleDelete(supply.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplyManagement;

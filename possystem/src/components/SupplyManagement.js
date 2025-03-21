import React, { useState, useEffect } from 'react';
import './SupplyManagement.css';

const SupplyManagement = () => {
  const [supplies, setSupplies] = useState([]);
  const [currentSupply, setCurrentSupply] = useState(null);
  const [supplierName, setSupplierName] = useState('');
  const [contact, setContact] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  useEffect(() => {
    const initialSupplies = [
      { id: 1, supplier_name: 'Supplier A', contact: '1234567890', company_name: 'Company A' },
      { id: 2, supplier_name: 'Supplier B', contact: '9876543210', company_name: 'Company B' },
      { id: 3, supplier_name: 'Supplier C', contact: '1112223333', company_name: 'Company A' },
    ];
    setSupplies(initialSupplies);
  }, []);

  // Validation function
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;
    

    if (!supplierName.trim()) {
      formErrors.supplierName = "Supplier Name is required";
      isValid = false;
    }

    const phoneRegex = /^[0-9]{3}[0-9]{3}[0-9]{4}$/;
    if (!contact.trim()) {
      formErrors.contact = "Contact is required";
      isValid = false;
    } else if (!phoneRegex.test(contact)) {
      formErrors.contact = "Contact must be in format XXX-XXX-XXXX";
      isValid = false;
    }

    if (!companyName.trim()) {
      formErrors.companyName = "Company Name is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle Add / Update Supply
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newSupply = {
      id: currentSupply ? currentSupply.id : Date.now(),
      supplier_name: supplierName,
      contact,
      company_name: companyName,
    };

    if (currentSupply) {
      setSupplies(supplies.map(supply => (supply.id === currentSupply.id ? newSupply : supply)));
    } else {
      setSupplies([...supplies, newSupply]);
    }

    setSupplierName('');
    setContact('');
    setCompanyName('');
    setCurrentSupply(null);
    setErrors({});
  };

  // Handle Delete
  const handleDelete = (id) => {
    setSupplies(supplies.filter(supply => supply.id !== id));
  };

  // Handle Edit
  const handleEdit = (supply) => {
    setCurrentSupply(supply);
    setSupplierName(supply.supplier_name);
    setContact(supply.contact);
    setCompanyName(supply.company_name);
    setErrors({});
  };

  // **🔍 Filtering Logic**
  const filteredSupplies = supplies.filter(supply =>
    supply.supplier_name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCompany === '' || supply.company_name === selectedCompany)
  );

  return (
    <div className="supply-management">
      <h2>Supply Management</h2>

      {/* Search & Filter Inputs */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by Supplier Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
          <option value="">All Companies</option>
          {[...new Set(supplies.map(supply => supply.company_name))].map(company => (
            <option key={company} value={company}>{company}</option>
          ))}
        </select>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Supplier Name:</label>
          <input type="text" value={supplierName} onChange={(e) => setSupplierName(e.target.value)} required />
          {errors.supplierName && <p className="error">{errors.supplierName}</p>}
        </div>
        <div>
          <label>Contact:</label>
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
          {errors.contact && <p className="error">{errors.contact}</p>}
        </div>
        <div>
          <label>Company Name:</label>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
          {errors.companyName && <p className="error">{errors.companyName}</p>}
        </div>
        <button type="submit">{currentSupply ? 'Update' : 'Add'} Supply</button>
      </form>

      {/* Table */}
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
            {filteredSupplies.map(supply => (
              <tr key={supply.id}>
                <td>{supply.supplier_name}</td>
                <td>{supply.contact}</td>
                <td>{supply.company_name}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(supply)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(supply.id)}>Delete</button>
                </td>
              </tr>
            ))}
            {filteredSupplies.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', color: 'red' }}>No suppliers found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplyManagement;

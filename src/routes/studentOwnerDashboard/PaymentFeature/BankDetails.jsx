import React, { useState } from 'react';

function BankDetails({ onDetailsChange }) {
  const [details, setDetails] = useState({
    accountNumber: '',
    bankName: '',
    routingNumber: '',
    accountType: '',
    branch: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
    onDetailsChange({ ...details, [name]: value });
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Bank Details
      </label>
      <input
        type="text"
        name="accountNumber"
        value={details.accountNumber}
        onChange={handleChange}
        placeholder="Account Number"
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
      <input
        type="text"
        name="bankName"
        value={details.bankName}
        onChange={handleChange}
        placeholder="Bank Name"
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
      <input
        type="text"
        name="routingNumber"
        value={details.routingNumber}
        onChange={handleChange}
        placeholder="Routing Number"
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
      <select
        name="accountType"
        value={details.accountType}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
      >
        <option value="" disabled>Select Account Type</option>
        <option value="Savings">Savings</option>
        <option value="Checking">Checking</option>
        <option value="Business">Business</option>
      </select>
      <input
        type="text"
        name="branch"
        value={details.branch}
        onChange={handleChange}
        placeholder="Branch"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
    </div>
  );
}

export default BankDetails;

import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    name: '',
    email: '',
    payment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/submit-payment', paymentData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting payment data:', error);
      alert('Failed to submit payment data');
    }
  };

  return (
    <div className="max-w-screen-md mx-auto px-4">
      <div className="flex justify-center items-center mt-8">
        <img src="src/PayPal.png" alt="PayPal Logo" className="w-16 h-20 mx-2" />
      </div>

      <div className="max-w-md p-8 rounded-lg shadow-lg mx-auto mt-8">
        <h3 className="text-center text-3xl font-bold mb-8 text-black">PAYMENT DETAILS</h3>

        <ul className="list-none">
          <li>
            <input type="radio" name="payment" value="paypal" onChange={handleChange} />
            <label htmlFor="paypal" className="ml-2">
              PayPal
            </label>
          </li>
        </ul>

        {paymentData.payment === 'paypal' && (
          <div className="mt-8">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder=""
              value={paymentData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
            />

            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder=""
              value={paymentData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
            />
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-800 text-white p-2 rounded-md mt-4 w-full"
          >
            Book Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;

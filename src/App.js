import React, { useState } from 'react';
import './App.css'

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    name: '',
    email: '',
    payment: '',
    phoneNum: '',
    password: '',
    amount: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    switch (paymentData.payment) {
      case 'paychangu':
        if (!paymentData.amount || !paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv) {
          setError("All fields are required");
          return;
        }

        setLoading(true);
        setError("");

        try {
          // Mock payment process: Replace with actual API call to Pay Changu
          console.log("Processing payment...");

          // Simulate success or failure
          setTimeout(() => {
            setLoading(false);
            alert("Payment successful!");
          }, 2000);
        } catch (err) {
          setLoading(false);
          setError("Payment failed. Please try again.");
        }
        break;
      case 'airtel':
      case 'mpamba':
        if (paymentData.name !== '' && paymentData.phoneNum !== '' && paymentData.password !== '') {
          alert('Room booked successfully');
        } else {
          alert('Please fill in the missing fields');
        }
        break;
      default:
        alert('Please select a payment method');
        break;
    }
  };

  return (
    <div className="background-image flex justify-center min-h-screen">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="flex justify-center items-center mt-8"></div>
      </div>

      <div className="max-w-md p-8 rounded-lg shadow-lg mx-auto mt-8 bg-white">
        <h3 className="text-center text-3xl font-bold mb-8 text-black">PAYMENT DETAILS</h3>

        <ul className="list-none">
          <li className="mb-4">
            <input type="radio" name="payment" value="mpamba" onChange={handleChange} />
            <label htmlFor="mpamba" className="ml-2">
              TNM Mpamba
            </label>
          </li>
          <li className="mb-4">
            <input type="radio" name="payment" value="airtel" onChange={handleChange} />
            <label htmlFor="airtel" className="ml-2">
              Airtel Money
            </label>
          </li>
          
          <li>
            <input type="radio" name="payment" value="paychangu" onChange={handleChange} />
            <label htmlFor="paychangu" className="ml-2">
              PayChangu
            </label>
          </li>
        </ul>

        {paymentData.payment === 'paychangu' && (
          <div className="mt-8">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={paymentData.amount}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter amount"
              required
            />
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter card number"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="MM/YY"
                  required
                />
              </div>

              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {(paymentData.payment === 'mpamba' || paymentData.payment === 'airtel') && (
          <div className="mt-8">
            <label htmlFor="phoneNum" className="block text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNum"
              value={paymentData.phoneNum}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              maxLength={10}
            />
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Enter PIN
            </label>
            <input
              type="password"
              name="password"
              placeholder="****"
              value={paymentData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              maxLength={4}
            />
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount (in MWK)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={paymentData.amount}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-800 text-white p-2 rounded-md mt-4 w-full"
            disabled={loading}
          >
            {loading ? "Processing..." : "Book Room"}
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Payment;

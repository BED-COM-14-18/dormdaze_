// import React, { useState } from 'react';
// import TimeForStay from './TimeForStay';
// import BankDetails from './BankDetails';
// import Pay from './pay';

// function PayFeature() {
//   const [timeForStay, setTimeForStay] = useState('');
//   const [bankDetails, setBankDetails] = useState({
//     accountNumber: '',
//     bankName: '', 
//     routingNumber: '',
//   });
//   const [paymentStatus, setPaymentStatus] = useState('');
//   const [amount, setAmount] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleTimeForStayChange = (time) => {
//     setTimeForStay(time);
//     setErrors({ ...errors, timeForStay: '' });
//   };

//   const handleBankDetailsChange = (details) => {
//     setBankDetails(details);
//     setErrors({
//       ...errors,
//       accountNumber: '',
//       bankName: '',
//       routingNumber: '',
//     });
//   };

//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//     setErrors({ ...errors, amount: '' });
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     if (!timeForStay) formErrors.timeForStay = 'Please enter time for stay';
//     if (!bankDetails.accountNumber) formErrors.accountNumber = 'Please enter account number';
//     if (!bankDetails.bankName) formErrors.bankName = 'Please enter bank name';
//     if (!bankDetails.routingNumber) formErrors.routingNumber = 'Please enter routing number';
//     if (!amount) formErrors.amount = 'Please enter amount';
//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   const handlePayment = () => {
//     if (validateForm()) {
//       // Simulate payment process
//       setPaymentStatus('Payment Successful');
//     }
//   };

//   const isFormValid = () => {
//     return (
//       timeForStay &&
//       bankDetails.accountNumber &&
//       bankDetails.bankName &&
//       bankDetails.routingNumber &&
//       amount
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">College Rent Booking</h1>
//         <TimeForStay onTimeChange={handleTimeForStayChange} />
//         {errors.timeForStay && <p className="text-red-600">{errors.timeForStay}</p>}
//         <BankDetails onDetailsChange={handleBankDetailsChange} />
//         {errors.accountNumber && <p className="text-red-600">{errors.accountNumber}</p>}
//         {errors.bankName && <p className="text-red-600">{errors.bankName}</p>}
//         {errors.routingNumber && <p className="text-red-600">{errors.routingNumber}</p>}
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Amount to Pay
//           </label>
//           <input
//             type="number"
//             value={amount}
//             onChange={handleAmountChange}
//             placeholder="Enter amount"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//           />
//           {errors.amount && <p className="text-red-600">{errors.amount}</p>}
//         </div>
//         <Pay onPay={handlePayment} disabled={!isFormValid()} />
//         <div className="mt-6">
//           <h2 className="text-xl font-semibold text-gray-800">Summary</h2>
//           <p className="mt-2 text-gray-700">Time for Stay: {timeForStay}</p>
//           <p className="mt-2 text-gray-700">Bank Details:</p>
//           <ul className="list-disc pl-5 text-gray-700">
//             <li>Account Number: {bankDetails.accountNumber}</li>
//             <li>Bank Name: {bankDetails.bankName}</li>
//             <li>Routing Number: {bankDetails.routingNumber}</li>
//           </ul>
//           <p className="mt-4 text-green-600 font-bold">{paymentStatus}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PayFeature;


// New commenting from here

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TimeForStay from './TimeForStay';
// import BankDetails from './BankDetails';
// import Pay from './pay';

// function TopBar() {
//   const navigate = useNavigate();
//     const handleGoBack = () => {
//     navigate(-1); // This navigates to the previous page
//     };
//   return (
//       <div className='bg-[hsl(0, 12%, 89%)] h-12 w-full flex justify-start fixed top-0 items-center'>
//               <div className='bg-transparent ml-4 mt-3'>
//                   <button type="button" className='h-6 w-6 bg-cover bg-no-repeat' onClick={handleGoBack}>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-arrow-left size-8 fill-black' viewBox="0 0 16 16">
//                           <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
//                       </svg>
//                   </button>
//               </div>
//       </div>
//   );
// }

// function PayFeature() {
//   const [timeForStay, setTimeForStay] = useState([null, null]);
//   const [bankDetails, setBankDetails] = useState({
//     accountNumber: '',
//     bankName: '', 
//     routingNumber: '',
//   });
//   const [paymentStatus, setPaymentStatus] = useState('');
//   const [errors, setErrors] = useState({});
//   const [formData, setFormData] = useState([]);
//   const navigate = useNavigate();

//   const handleTimeForStayChange = (time) => {
//     setTimeForStay(time);
//     setErrors({ ...errors, timeForStay: '' });
//   };

//   const handleBankDetailsChange = (details) => {
//     setBankDetails(details);
//     setErrors({
//       ...errors,
//       accountNumber: '',
//       bankName: '',
//       routingNumber: '',
//     });
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     if (!timeForStay[0] || !timeForStay[1]) formErrors.timeForStay = 'Please enter time for stay';
//     if (!bankDetails.accountNumber) formErrors.accountNumber = 'Please enter account number';
//     if (!bankDetails.bankName) formErrors.bankName = 'Please enter bank name';
//     if (!bankDetails.routingNumber) formErrors.routingNumber = 'Please enter routing number';
//     setErrors(formErrors);
//     return Object.keys(formErrors).length === 0;
//   };

//   const handlePayment = () => {
//     if (validateForm()) {
//       // Simulate payment process
//       setPaymentStatus('Payment Successful');
//       setFormData([...formData, { timeForStay, bankDetails }]); // Adjusted to exclude amount
//       setTimeout(() => {
//         navigate(-1);
//       }, 2000); // Redirect after 2 seconds to allow users to see the success message
//     }
//   };

//   const isFormValid = () => {
//     return (
//       timeForStay[0] &&
//       timeForStay[1] &&
//       bankDetails.accountNumber &&
//       bankDetails.bankName &&
//       bankDetails.routingNumber
//     ); // Adjusted to exclude amount
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <TopBar />
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">Book your room</h1>
//         <TimeForStay onTimeChange={handleTimeForStayChange} />
//         {errors.timeForStay && <p className="text-red-600">{errors.timeForStay}</p>}
//         <BankDetails onDetailsChange={handleBankDetailsChange} />
//         {errors.accountNumber && <p className="text-red-600">{errors.accountNumber}</p>}
//         {errors.bankName && <p className="text-red-600">{errors.bankName}</p>}
//         {errors.routingNumber && <p className="text-red-600">{errors.routingNumber}</p>}
//         <Pay onPay={handlePayment} disabled={!isFormValid()} />
//       </div>
//     </div>
//   );
// }

// export default PayFeature;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './payment.css';

function TopBar() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="bg-[hsl(0, 12%, 89%)] h-12 w-full flex justify-start fixed top-0 items-center">
      <div className="bg-transparent ml-4 mt-3">
        <button type="button" className="h-6 w-6 bg-cover bg-no-repeat" onClick={handleGoBack}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left size-8 fill-black" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function Payment() {
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
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const validateForm = () => {
    const formErrors = {};

    if (!paymentData.payment) formErrors.payment = 'Please select a payment method';
    if (paymentData.payment === 'paychangu' && (!paymentData.amount || !paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv)) {
      formErrors.paymentDetails = 'All PayChangu fields are required';
    }

    if ((paymentData.payment === 'mpamba' || paymentData.payment === 'airtel') && (!paymentData.phoneNum || !paymentData.password || !paymentData.amount)) {
      formErrors.paymentDetails = 'All fields for MPamba/Airtel are required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      setError('');

      try {
        // Mock payment processing logic (simulate success or failure)
        setTimeout(() => {
          setLoading(false);
          alert("Payment successful!");
          navigate(-1); // Navigate back after successful payment
        }, 2000);
      } catch (err) {
        setLoading(false);
        setError("Payment failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <TopBar />
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-16">
        <h3 className="text-center text-3xl font-bold mb-8 text-black">PAYMENT DETAILS</h3>

        {/* Payment Method Selection */}
        <div className="mb-8">
          <ul className="list-none">
            <li className="mb-4">
              <input
                type="radio"
                name="payment"
                value="mpamba"
                onChange={handleChange}
              />
              <label htmlFor="mpamba" className="ml-2">TNM Mpamba</label>
            </li>
            <li className="mb-4">
              <input
                type="radio"
                name="payment"
                value="airtel"
                onChange={handleChange}
              />
              <label htmlFor="airtel" className="ml-2">Airtel Money</label>
            </li>
            <li>
              <input
                type="radio"
                name="payment"
                value="paychangu"
                onChange={handleChange}
              />
              <label htmlFor="paychangu" className="ml-2">PayChangu</label>
            </li>
          </ul>
          {errors.payment && <p className="text-red-600">{errors.payment}</p>}
        </div>

        {/* Conditional Inputs Based on Payment Method */}
        {paymentData.payment === 'paychangu' && (
          <div className="mt-8">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={paymentData.amount}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter amount"
            />
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter card number"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="CVV"
                />
              </div>
            </div>
          </div>
        )}

        {(paymentData.payment === 'mpamba' || paymentData.payment === 'airtel') && (
          <div className="mt-8">
            <label htmlFor="phoneNum" className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="text"
              name="phoneNum"
              value={paymentData.phoneNum}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              maxLength={10}
            />
            <label htmlFor="password" className="block text-gray-700 mb-2">Enter PIN</label>
            <input
              type="password"
              name="password"
              placeholder="****"
              value={paymentData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              maxLength={4}
            />
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={paymentData.amount}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
        )}

        {/* Submit Button */}
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
}

export default Payment;

  
  

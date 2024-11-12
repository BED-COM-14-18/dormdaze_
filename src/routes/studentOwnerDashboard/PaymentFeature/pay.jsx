import React from 'react';

function Pay({ onPay}) {
  return (
    <button
      onClick={onPay}
      className={`w-full px-4 py-2 mt-4 bg-[#07a0c3] hover:bg-[#00E0C7] text-white font-bold rounded-lg 
      { 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'}`}
    >
      Pay Now
    </button>
  );
}

export default Pay;

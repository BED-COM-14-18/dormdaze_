// import React, { useState } from 'react';

// function TimeForStay({ onTimeChange }) {
//   const [time, setTime] = useState('');

//   const handleChange = (event) => {
//     setTime(event.target.value);
//     onTimeChange(event.target.value);
//   };

//   return (
//     <div className="mb-6">
//       <label className="block text-gray-700 text-sm font-bold mb-2">
//         Time for Stay
//       </label>
//       <input
//         type="text"
//         value={time}
//         onChange={handleChange}
//         placeholder="Enter duration"
//         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//       />
//     </div>
//   );
// }

// export default TimeForStay;

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TimeForStay({ onTimeChange }) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleChange = (update) => {
    setDateRange(update);
    onTimeChange(update);
  };

  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Time for Stay
      </label>
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={handleChange}
        placeholderText="Select date range"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
    </div>
  );
}

export default TimeForStay;

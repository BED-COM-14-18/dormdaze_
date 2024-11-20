// import React, { useState } from 'react';

// const FilterDropdown = ({ onFilter }) => {
//     const [filter, setFilter] = useState({
//         priceRanges: [],
//         roomTypes: [],
//     });

//     const priceRanges = [
//         { label: 'MK 0 - 30000', min: 0, max: 30000 },
//         { label: 'MK 30000 - 50000', min: 30000, max: 50000 },
//         { label: 'MK 50000 - 70000', min: 50000, max: 70000 },
//         { label: 'MK 70000 - 100000', min: 70000, max: 100000 },
//     ];

//     const roomTypes = ['Single', 'Double', 'shared'];

//     const handleCheckboxChange = (e) => {
//         const { name, value, checked } = e.target;
//         setFilter((prevFilter) => {
//           const newValues = checked
//             ? [...prevFilter[name], value]
//             : prevFilter[name].filter((v) => v !== value);
    
//           return { ...prevFilter, [name]: newValues };
//         });
//     };

//   /*const handleChange = (e) => {
//     setFilter({
//       ...filter,
//       [e.target.name]: e.target.value,
//     });
//   };*/

//   const handleFilter = () => {
//     onFilter(filter);
//   };

//   return (
//     <div className='absolute right-4 top-16 lg:right-32 sm:right-4 text-black bg-white border-solid border-[#ccc] sm:w-[36vw] lg:w-[15vw] border-b p-2 shadow-xl rounded-md'>

//     <div className='mb-2 flex flex-col items-start justify-between gap-y-2'>
//         <label className=' text-lg font-normal'>Price Range:</label>
//         {priceRanges.map((range) => (
//           <div key={range.label} className='flex flex-row items-center gap-x-2'>
//             <input
//               type="checkbox"
//               name="priceRanges"
//               value={JSON.stringify(range)}
//               onChange={handleCheckboxChange}
//             />
//             {range.label}
//           </div>
//         ))}
//     </div>

//     <div className='mb-2 flex flex-col items-start justify-between gap-y-2'>
//         <label className='text-lg font-normal'>Room Type:</label>
//         {roomTypes.map((type) => (
//           <div key={type} className='flex flex-row items-center gap-x-2'>
//             <input
//               type="checkbox"
//               name="roomTypes"
//               value={type.toLowerCase()}
//               onChange={handleCheckboxChange}
//             />
//             {type}
//           </div>
//         ))}
//     </div>
//       <button onClick={handleFilter} className=' text-white text-sm font-bold items-center rounded-lg w-full h-[5vh] bg-[#00e0c7] shadow-md focus:bg-slate-500 hover:drop-shadow-lg'>Apply Filter</button>
//     </div>
//   );
// };

// export default FilterDropdown;










import React, { useState, useEffect } from 'react';

const FilterApartments = ({ apartments, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState('all');
  const [roomSizeRange, setRoomSizeRange] = useState('all');

  const priceRanges = [
    { label: 'All', value: 'all' },
    { label: 'Under $500', value: 'under-500' },
    { label: '$500-$1000', value: '500-1000' },
    { label: '$1000-$2000', value: '1000-2000' },
    { label: 'Over $2000', value: 'over-2000' },
  ];

  const roomSizeRanges = [
    { label: 'All', value: 'all' },
    { label: 'Studio', value: 'studio' },
    { label: '1-2 bedrooms', value: '1-2' },
    { label: '3-4 bedrooms', value: '3-4' },
    { label: '5+ bedrooms', value: '5+' },
  ];

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleRoomSizeChange = (e) => {
    setRoomSizeRange(e.target.value);
  };

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(filteredApartments);
    }
  }, [priceRange, roomSizeRange, apartments]);

  const filteredApartments = apartments.filter((apartment) => {
    const priceMatch = (priceRange === 'all' || (
      priceRange === 'under-500' && apartment.price < 500) ||
      (priceRange === '500-1000' && apartment.price >= 500 && apartment.price < 1000) ||
      (priceRange === '1000-2000' && apartment.price >= 1000 && apartment.price < 2000) ||
      (priceRange === 'over-2000' && apartment.price >= 2000)
    );

    const roomSizeMatch = (roomSizeRange === 'all' || (
      roomSizeRange === 'studio' && apartment.room === 'studio') ||
      (roomSizeRange === '1-2' && (apartment.room === '1' || apartment.room === '2')) ||
      (roomSizeRange === '3-4' && (apartment.room === '3' || apartment.room === '4')) ||
      (roomSizeRange === '5+' && apartment.room >= 5)
    );

    return priceMatch && roomSizeMatch;
  });

  return (
    <div>
      <label>Price:</label>
      <select value={priceRange} onChange={handlePriceChange}>
        {priceRanges.map((range) => (
          <option key={range.value} value={range.value}>
            {range.label}
          </option>
        ))}
      </select>

      <label>Room Size:</label>
      <select value={roomSizeRange} onChange={handleRoomSizeChange}>
        {roomSizeRanges.map((range) => (
          <option key={range.value} value={range.value}>
            {range.label}
          </option>
        ))}
      </select>

      {filteredApartments.map((apartment) => (
        <div key={apartment.id}>
          <h2>{apartment.tagname}</h2>
          <p>Price: {apartment.price}</p>
          <p>Room Size: {apartment.room}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterApartments;

import React, { useState, useEffect } from 'react';
import { apartments } from './templateListing';


export const SearchBar = ({ onSearch }) => {
    // Accept onSearch prop to send search results
  const [filter, setFilter] = useState({
    address: '',
    minPrice: '',
    maxPrice: '',
    room: '',
    amenities: '',
  });

  useEffect(() => {
    const { address, minPrice, maxPrice, room, amenities } = filter;
    // If all filter fields are empty, trigger onSearch with null
    if (!address && !minPrice && !maxPrice && !room && !amenities) {
      onSearch(null);
    }
  }, [filter, onSearch]);

  const handleChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { address, minPrice, maxPrice, room, amenities } = filter;

    // Check if all filter fields are empty.
    if (!address && !minPrice && !maxPrice && !room && !amenities) {
      onSearch(null); // No input, return empty results.
      return;
    }

    const newFilteredApartments = apartments.filter((apartment) => {
      const { address, minPrice, maxPrice, room, amenities } = filter;
      const price = parseInt(apartment.price.replace('MK', ''), 10);

      const matchesAddress = apartment.address.toLowerCase().includes(address.toLowerCase());
      const matchesPrice = (!minPrice || price >= parseInt(minPrice, 10)) &&
                           (!maxPrice || price <= parseInt(maxPrice, 10));
      const matchesRoom = apartment.room.toLowerCase().includes(room.toLowerCase());
      const matchesAmenities = amenities.split(',').every(am =>
        apartment.amenities.some(a => a.toLowerCase().includes(am.trim().toLowerCase()))
      );

      return matchesAddress && matchesPrice && matchesRoom && matchesAmenities;
    });

    onSearch(newFilteredApartments); // Send search results back to the parent component
  };

  return (
    <div className='p-5 flex flex-col'>
      <div>
        <form onSubmit={handleSubmit} className='items-center justify-center flex flex-row'>
          <input
            type="text"
            name="address"
            placeholder="Type here to search..."
            value={filter.address}
            onChange={handleChange}
            className='text-slate-600 border-x-stone-500 rounded-l-md h-[5vh] md:h-[7vh] lg:h-[7vh] w-[45vw] pl-3 text-lg'
          />
          <button type="submit" className='h-[5vh] lg:h-[7vh] w-12 bg-slate-600 hover:bg-[#00e0c7] focus:drop-shadow-md rounded-r-md pl-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-search fill-white' viewBox="0 0 18 18">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>
        </form>
      </div>

      
    </div>
  );
};

export default SearchBar;

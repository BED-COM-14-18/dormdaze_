import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { MenuBt } from "./desktopComponent";
import SearchBar from "./searchBar";
import FilterDropdown from './FilterApartments';
import { useEffect } from "react";
import Example, { apartments } from "./templateListing";


function TopBar({onSearch, onFilter}) {
    const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterDropdown = () => {
    setIsFilterVisible(!isFilterVisible);
  };


    return(
        <div className='bg-[#58e9af] h-[vh] sm:h-[7vh] md:h-[7vh] w-full flex flex-row items-center justify-evenly  text-lg fixed top-0 shadow-lg gap-2'>
            <MenuBt></MenuBt>

            <SearchBar onSearch={onSearch} />

            <div className='flex flex-col  text-xs justify-around items-center bg-[#fffdf9] w-8 h-8 rounded-xl bg-center'>
                <button 
                    type="button"
                    onClick={toggleFilterDropdown}
                    className='h-5 w-5 bg-cover bg-no-repeat border-solid border-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16" className='size-5'>
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                    </svg>
                </button>
                {isFilterVisible && <FilterDropdown onFilter={onFilter} />}
            </div>
        </div>
    );
}

export function BottomBar() {
    return(
        <div className='bg-[#58e9af] h-[4.3] w-full gap-10 flex flex-row justify-evenly text-white  font-normal fixed bottom-0 font-[calc(10px + 2vmin)]'>
            <Link to={'/'}>
                <div className='flex flex-col items-center gap-0  font-sans text-sm mt-[1px]'>
                    <button type="button" className='h-6 w-6 bg-cover bg-no-repeat'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16" className='size-5'>
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                        </svg>
                    </button>
                    <p>Explore</p>
                </div>
            </Link>

            {/*<div className='flex flex-col items-center gap-0  font-sans  text-sm mt-1'>
            <button type="button" className="mapBt"></button>
            <p>Map</p>
            </div>*/}

            <Link to={'/notification'}>
            <div className='flex flex-col items-center gap-0  font-sans  text-sm mt-[1px]'>
                <button type="button" className='h-6 w-6 bg-cover bg-no-repeat'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16" className='size-5'>
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                    </svg>
                </button>
                <p>Notification</p>
            </div>
            </Link>

            <Link to={'/userProfile'}>
                <div className='flex flex-col items-center gap-0  font-sans  text-sm mt-[1px]'>
                    <button type="button" className='h-6 w-6 bg-cover bg-no-repeat'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" className='size-6'>
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                    </button>
                    <p>Account</p>
                </div>
            </Link>
        </div>
    )
}


export default function MobileHomePage() {
    const [searchResults, setSearchResults] = useState(null); // State to hold search results
    const [filteredApartments, setFilteredApartments] = useState(apartments);
  
    // Function to receive search results from SearchBar
    // const handleSearchResults = (results) => {
    //   setSearchResults(results);
    // };

    useEffect(() => {
        if (searchResults !== null) {
          setFilteredApartments(searchResults);
        }
      }, [searchResults]);
    
      // Function to receive search results from SearchBar
        const handleSearchResults = (results) => {
        setSearchResults(results);
        setFilteredApartments(results);
      };

      const handleFilter = (filter) => {
        const { priceRanges, roomTypes } = filter;
        const parsedPriceRanges = priceRanges.map((range) => JSON.parse(range));
    
        const filtered = searchResults.filter((apartment) => {
          const price = parseInt(apartment.price.replace('MK', ''), 10);
          const matchesPrice = parsedPriceRanges.length
            ? parsedPriceRanges.some((range) => price >= range.min && price <= range.max)
            : true;
          const matchesRoom = roomTypes.length
            ? roomTypes.includes(apartment.room.toLowerCase())
            : true;
    
          return matchesPrice && matchesRoom;
        });
        
        setFilteredApartments(filtered);
      };
  
    return (
      <>
        <div className='h-screen w-full flex flex-col'>
        
        <TopBar onSearch={handleSearchResults} onFilter={handleFilter} />
        {/* Pass handleSearchResults as prop */}
        {searchResults === null ? (
          <Example />
        ) :searchResults.length > 0 ? ( // Render search results if available
          <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-20 mx-6'>
            {searchResults.map((result) => (
              <Link key={result.id} to={result.href} state={result}>
                 <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7  text-sm p-1 bg-slate-50 border-solid shadow-md'>
                {/* Render search result item */}
                <img src={result.imageSrc} alt={result.imageAlt} className='rounded-lg rounded-b-none p-0' />
                <h3 className='mt-4 ml-2 text-lg font-medium  flex flex-row items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                    </svg>
                    {result.address}
                </h3>
                {/* Add other details as needed */}
                <p className='mt-1 ml-2 text-lg font-normal text-gray-900 flex flex-row items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l
                        -.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 
                        .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-
                        .514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 
                        0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
                    </svg>
                    {result.price}
                </p>
                <p className='mt-1 ml-2 mb-2 text-lg font-normal text-gray-900 flex flex-row items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                    </svg>
                    {result.room}
                </p>
                <p>Amenities: {result.amenities.join(', ')}</p>
              </div>
              </Link>
            ))}
          </div>
        ) : (
          <Example /> // Render Example component if no search results
        )}
        <BottomBar />
      </div>
    </>
  );
}


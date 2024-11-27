

import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
//import Rating from './ratingFeature';
//import ReadOnlyRating from './readonlyrating';
import HostelReviews from './HostelReviews';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-none w-full h-[8vh] flex items-center fixed top-0 z-50'>
      <button 
        type="button" 
        className='pl-10 h-6 w-6 bg-cover bg-no-repeat ml-6' 
        onClick={() => navigate(-1)} // Simplified inline function
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          className="bi bi-arrow-left" 
          viewBox="0 0 16 16"
        >
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
      </button>
    </div>
  );
};

const Slideshow = () => {
  const { state: { urls, imageAlt } } = useLocation(); // Destructured for simplicity

  return (
    <div className="slide-container">
      <Slide>
        {urls.map((url, index) => (
          <div key={index} className='flex items-center justify-center w-full rounded-lg'>
            <div className='flex items-center justify-center w-full h-80 rounded-lg bg-no-repeat bg-center'>
              <img
                src={url}
                alt={imageAlt}
                className='h-full w-[60vw] sm:w-full lg:w-[60vw] object-cover object-center group-hover:opacity-75 rounded-lg'
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

const Description = () => {
  const { state: { description } } = useLocation(); // Destructured for simplicity

  return (
    <div className='w-auto text-xlg text-black bg-slate-100 rounded-lg border-solid p-2 border-2 self-end'>
      {description}
    </div>
  );
};
const Amenities = () => {
  const { state: { amenities } } = useLocation(); // Destructured for simplicity

  return (
    <div className='flex flex-col w-full'>
      <p className='m-2 text-2xl text-black'>Amenities</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pb-2'>
        {amenities.map((amenity, index) => (
          <div key={index} className='bg-slate-50 rounded-lg flex items-center justify-center w-auto h-14 border-solid border-2 p-2'>
            {amenity}
          </div>
        ))}
      </div>
    </div>
  );
};

const Reservation = () => {
  const { state: { price } } = useLocation(); // Destructured for simplicity

  return (
    <div className='flex gap-2 bg-[#07a0c3] text-white rounded-lg border-solid w-full h-16 m-auto mt-2 items-center justify-evenly'>
      <p className='mt-1 ml-2 text-lg font-normal flex items-center gap-1'>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          className="bi bi-cash-coin fill-white" 
          viewBox="0 0 16 16"
        >
          <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
          <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
        </svg>
        {price}
      </p>

      <Link to={'/PaymentFeature'}>
        <button type="button" className='flex gap-3 items-center'>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            className="bi bi-bookmark-plus-fill fill-white" 
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1-2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"/>
          </svg>
          <p className='text-2xl font-bold'>Book</p>
        </button>
      </Link>
    </div>
  );
};
const Preview = () => {
  const { state: { address, room } } = useLocation(); // Destructured for simplicity

  return (
    <div className='bg-white flex flex-col items-center'>
      <div className='w-[60vw] px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8'>
        <div className='flex flex-col gap-4'>
          <Slideshow />
          <div className='bg-slate-50 rounded-lg flex gap-10 items-center justify-around h-12 mt-7 w-full border-solid border-2'>
            <h3 className='text-lg font-medium flex items-center gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
              </svg>
              {address}
            </h3>
            <h4 className='text-md font-normal flex items-center gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0L1 7.793V14.5A1.5 1.5 0 0 0 2.5 16h3a.5.5 0 0 0 .5-.5V10a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5.5a.5.5 0 0 0 .5.5h3a1.5 1.5 0 0 0 1.5-1.5V7.793l-6.646-6.647z"/>
                <path d="M13 2.5V6l-5-5-5 5V2.5a.5.5 0 0 1 .5-.5h3A.5.5 0 0 1 7.5 2H8V1h-.5a1 1 0 0 0-1 1v1h1V2h1a.5.5 0 0 1 .5.5V5.293l5-5V6h1V2.5a.5.5 0 0 1 1 0z"/>
              </svg>
              {room}
            </h4>
          </div>
          <Amenities />
          <Description />
          <Reservation />
          <HostelReviews />
        </div>
      </div>
    </div>
  );
}

export default function ListingPreviewDesktopHomePage() {
  return (
    <div className="flex flex-col">
      <TopBar />
      <Preview />
    </div>
  );
}


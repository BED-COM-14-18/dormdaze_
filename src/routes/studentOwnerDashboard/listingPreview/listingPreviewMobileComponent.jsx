

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useNavigate } from 'react-router-dom';
//import ReadOnlyRating from './readonlyrating';
import HostelReviews from './HostelReviews';
//import Rating from "./ratingFeature";

function TopBar() {
    const navigate = useNavigate();
    const handleGoBack = () => {
    navigate(-1); // This navigates to the previous page
    };
    return (
        <div className='bg-[hsl(0, 12%, 89%)] h-12 w-full flex justify-start fixed top-0 items-center p-0 z-50'>
                <div className='bg-transparent ml-4 mt-2'>
                    <button type="button" className='h-6 w-6 bg-cover bg-no-repeat' onClick={handleGoBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-arrow-left size-10 fill-black' viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg>
                    </button>
                </div>
        </div>
    );
}

const Slideshow = () => {
    const location = useLocation();
    const urls = location.state.urls || [];

    return (
        <div className='w-[90vw]'>
            <Slide>
                {urls.map((url, index) => (
                    <div key={index} className='flex flex-row items-center justify-center'>
                        <div style={{ 'backgroundImage': `url(${url})` }} className='flex flex-row rounded-lg bg-no-repeat bg-center w-96 h-80'>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
}

function Reservation() {
    const location = useLocation();
    const price = location.state.price;

    return (
        <div className='bg-[#07a0c3] h-[7vh] w-full flex flex-row items-center justify-evenly fixed bottom-0 gap-14'>
            <p className='mt-1 ml-2 text-xl font-normal text-white flex flex-row items-center gap-3 border-black'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-cash-coin size-6' viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
                </svg>
                {price}
            </p>

            <Link to='/PaymentFeature'>
                <button type="button" className='flex flex-row gap-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-bookmark-plus-fill size-6 fill-white' viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"/>
                    </svg>
                    <p className='text-2xl text-white font-bold'>Book</p>
                </button>
            </Link>
        </div>
    );
}

function Amenities() {
    const location = useLocation();
    const amenities = location.state.amenities || [];

    return (
        <div className='flex flex-col justify-start w-full'>
            <p className='m-2 text-2xl text-black'>Amenities</p>
            <div className='grid grid-cols-2 gap-2 pb-2'>
                {amenities.map((amenity, index) => (
                    <div key={index} className='bg-slate-100 rounded-lg border-solid border-2 p-2 flex items-center justify-center'>
                        {amenity}
                    </div>
                ))}
            </div>
        </div>
    );
}

function Description() {
    const location = useLocation();
    const description = location.state.description;

    return(
        <div>
            <p className='m-2 text-2xl text-black'>About this apartment</p>
            <div className='w-auto text-xlg text-black bg-slate-100 rounded-lg border-solid border-2 p-2 self-end'> {description} </div>
        </div>
    )
}

function Preview() {
    const location = useLocation();
    const address = location.state.address;
    const room = location.state.room;

    return (
        <div className='bg-white flex flex-col overflow-y-scroll'>
            <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                <div className='flex flex-col justify-center gap-4'>
                    <Slideshow />
                    <div className='bg-slate-100 rounded-lg flex flex-row gap-10 items-center justify-around h-12 mt-7 w-full border-solid border-2'>
                        <h3 className='text-lg font-medium text-gray-900 flex flex-row items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-geo-alt-fill' viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                            </svg>
                            {address}
                        </h3>

                        <p className='text-lg font-normal text-black flex flex-row items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-house' viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                            </svg>
                            {room}
                        </p>

                    </div>

                    <div className='flex flex-col w-full gap-y-3'>
                        <Amenities />
                        <Description />
                    </div>
                </div>
                <HostelReviews />
            </div>
        </div>
    );
}

export default function ListingPreviewMobileHomePage() {
    return (
        <div className='h-screen w-full flex flex-col'>
            <TopBar />
            <Preview />
            <Reservation />
        </div>
    );
}

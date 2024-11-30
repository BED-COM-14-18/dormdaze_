import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseurl } from '../../url';

function TopBar() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // This navigates to the previous page
  };
  return(
      <div className=' bg-white h-12 w-full flex fixed justify-start top-0 items-center p-0 shadow-md'>
            <div className='bg-[#e33d2800] mt-1'>
              <button 
                  type="button"
                  onClick={handleGoBack}
                  className='h-6 w-6 bg-cover bg-no-repeat ml-6'
              >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" className=' size-8 fill-black'>
                      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                  </svg>
              </button>
            </div>
      </div>
  );
}


export function CreateListingDesktop() {
  // State variable to hold the array of hostel listings
  const [listings, setListings] = useState([]);

    // State variable to hold the index of the listing being edited
    const [editingIndex, setEditingIndex] = useState(null);

  // Function to handle form submission and add a new listing
  const handleAddListing = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    let imageString = '';
    reader.readAsDataURL(event.target.photoUpload.files[0]);
    reader.onload = (e)=>{
      imageString = reader.result;
    }
    
    // Extract form data
    const HostelName = event.target.hostelName.value;
    const description = event.target.description.value;
    const rentalFee = event.target.price.value;
    const roomType = [event.target.roomType.value];
    const image = [imageString];
    const additionalServices = {
      breakfast: event.target.breakfast.checked,
      laundry: event.target.laundry.checked,
      wifi: event.target.wifi.checked,
      transport: event.target.transport.checked,
      electricityBills: event.target.electricityBills.checked,
      waterBills: event.target.waterBills.checked,
      cooker: event.target.cooker.checked
    };

    // Create new listing object
    const newListing = {
      HostelName,
      description,
      rentalFee,
      roomType,
      image,
      additionalServices
    };
    
    //rememeber to use axios.postForm when uploading blob

    //send data to backend
    axios.post(`${baseurl}/listing`, newListing)
    .then((res)=>{
      // Update listings state with the new listing
    setListings([...listings, res.data]);
    console.log(res.data)
    })
    .catch((err)=>{
      console.error('An error occured: ',err);
    })

    

    // Clear form fields
    event.target.reset();
  };

    // Function to handle editing of a listing
    const handleEditListing = (index) => {
      setEditingIndex(index);
    };
  
    // Function to handle deleting a listing
    const handleDeleteListing = (index) => {
      const updatedListings = [...listings];
      updatedListings.splice(index, 1);
      setListings(updatedListings);
    };


  return (
    <div>
      <TopBar />
      <div className="min-h-screen bg-gray-100 p-4 py-16">
      <header className="bg-white shadow p-4 mb-4">
        <h1 className="text-2xl font-bold text-center flex flex-row items-center justify-center">
          Hostel Booking
        </h1>
      </header>
      
      <section id="owner-interface" className="bg-white shadow p-4 mb-4 rounded">
        <h2 className="text-xl font-semibold mb-4">Owner Interface</h2>
        <form id="hostel-form" className="space-y-4" onSubmit={handleAddListing}>
          <div>
            <label htmlFor="hostel-name" className="block text-sm font-medium text-gray-700">Hostel Name:</label>
            <input type="text" id="hostel-name" name="hostelName" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
            <input type="text" id="address" name="address" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea id="description" name="description" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
            <input type="number" id="price" name="price" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
          </div>

          <div>
            <label htmlFor="room-type" className="block text-sm font-medium text-gray-700">Type of Room:</label>
            <select id="room-type" name="roomType" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="shared">Shared</option>
            </select>
          </div>

          <div>
            <label htmlFor="photo-upload" className="block text-sm font-medium text-gray-700">Photo Upload:</label>
            <input type="file" id="photo-upload" name="photoUpload" accept="image/*" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
          </div>

          <h3 className="text-lg font-medium mt-4">Additional Services:</h3>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center">
              <input type="checkbox" id="breakfast" name="breakfast" className="mr-2" />
              Breakfast
            </label>
            <label className="flex items-center">
              <input type="checkbox" id="laundry" name="laundry" className="mr-2" />
              Laundry
            </label>
            <label className="flex items-center">
              <input type="checkbox" id="wifi" name="wifi" className="mr-2" />
              WiFi
            </label>
            <label className="flex items-center">
              <input type="checkbox" id="transport" name="transport" className="mr-2" />
              Free Transport
            </label>
            <label className="flex items-center">
              <input type="checkbox" id="electricity-bills" name="electricityBills" className="mr-2" />
              Electricity Bills
            </label>
            <label className="flex items-center">
              <input type="checkbox" id="water-bills" name="waterBills" className="mr-2" />
              Water Bills
            </label>
            <label className="flex items-center">
              <input type="checkbox" id="cooker" name="cooker" className="mr-2" />
              Cooker
            </label>
          </div>

          <button type="submit" className="mt-4 w-full bg-[#07a0c3] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#00e0c7] focus:bg-[#00e0c7]">Add Hostel</button>
        </form>
      </section>

      {/* Display existing listings */}
      {listings.length > 0 && (
        <section id="existing-listings" className="bg-white shadow p-4 mb-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Existing Listings</h2>
          {listings.map((listing, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{listing.HostelName}</h3>
              <p>{listing.roomType}</p>
              <p>{listing.description}</p>
              <p>{listing.rentalFee}</p>
              <p>Additional Services: {Object.keys(listing.additionalServices).filter(service => listing.additionalServices[service]).join(', ')}</p>
              {/* Additional details like address, price, room type, etc., can be displayed here */}

              {/* Buttons for editing and deleting a listing */}
              <div className="flex mt-2">
                <button onClick={() => handleEditListing(index)} className="bg-blue-500 items-center justify-center text-white px-3 py-1 rounded-md mr-2 h-[7vh] w-[13vw]">Edit</button>
                <button onClick={() => handleDeleteListing(index)} className="bg-red-500 items-center justify-center text-white px-3 py-1 rounded-md h-[7vh] w-[13vw]">Delete</button>
              </div>
            </div>
          ))}
        </section>
      )}


       <section id="reservation-system" className="bg-white shadow p-4 mb-4 rounded">
         <h2 className="text-xl font-semibold mb-4">Reservation System</h2>
         {/* Reservation system functionality - Add the reservation system functionality here */}
       </section>

       <section id="cancellation-policy" className="bg-white shadow p-4 mb-4 rounded">
         <h2 className="text-xl font-semibold mb-4">Cancellation Policy</h2>
         {/* Add code for cancellation policy here */}
       </section>

       <section id="reporting-and-analytics" className="bg-white shadow p-4 mb-4 rounded">
        <h2 className="text-xl font-semibold mb-4">Reporting and Analytics</h2>
         {/* Add code for reporting and analytics here */}
       </section>


    </div>
    </div>
  );
}

export default CreateListingDesktop;



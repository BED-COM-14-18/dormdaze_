import React from 'react';
import { useNavigate } from 'react-router-dom';


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


const About = () => {
  return (
    <div>
      <TopBar />
      <div className="p-6 py-20 md:p-8 lg:p-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to Dormdaze!</h1>
       
      <section className="mb-8 shadow-sm border p-3 rounded-md bg-slate-50">
        <h2 className="text-2xl font-semibold mb-2">Revolutionizing Off-Campus Hostel Booking for University Students</h2>
        <p>
          Dormdaze is a dedicated platform designed to streamline the process of finding and booking off-campus hostels for university students. Our mission is to provide a secure, efficient, and user-friendly experience, making it easier for students to find the perfect accommodation near their university.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
        
        <div className='shadow-sm border p-3 rounded-md bg-slate-50'>
        <h3 className="text-xl font-semibold mb-1">For Students</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Seamless Browsing and Filtering:</strong> Easily search and filter available hostels based on location, price, amenities, and availability. Our advanced search features help you quickly find accommodations that meet your preferences.
          </li>
          <li>
            <strong>Detailed Hostel Listings:</strong> Access comprehensive information about each hostel, including detailed descriptions, high-quality photos, and a list of extra features such as Wi-Fi, security, and laundry facilities.
          </li>
          <li>
            <strong>Authentic Reviews and Ratings:</strong> Read reviews and ratings from fellow students to make informed decisions. Our community-driven feedback system provides valuable insights into the quality of accommodations and the experiences of past tenants.
          </li>
          <li>
            <strong>Secure Booking and Payment Processing:</strong> Book your preferred accommodation with confidence. Our secure payment gateway ensures that your transactions are safe and straightforward, eliminating the need for middlemen and reducing costs.
          </li>
          <li>
            <strong>Personalized Notifications:</strong> Stay updated with notifications about new listings and updates that match your preferences. Never miss out on the perfect hostel again.
          </li>
          <li>
            <strong>Interactive Maps:</strong> Visualize hostel locations on an interactive map to easily see their proximity to your university and other key landmarks, making it simpler to choose the most convenient option.
          </li>
        </ul>
        </div>

        <div className='shadow-sm border p-3 rounded-md mt-4 bg-slate-50'>
        <h3 className="text-xl font-semibold mb-1 ">For Hostel Owners</h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Effortless Listing Management:</strong> List and update your hostel accommodations with ease. Provide detailed descriptions, upload photos, and highlight amenities to attract potential student tenants.
          </li>
          <li>
            <strong>Efficient Reservation Management:</strong> Manage bookings and availability through our user-friendly dashboard. Receive notifications about new booking requests and cancellations, ensuring smooth operations.
          </li>
          <li>
            <strong>Respond to Reviews:</strong> Engage with students by responding to their reviews and feedback. Maintain a positive reputation and address any concerns to improve your service.
          </li>
          <li>
            <strong>Real-Time Availability Updates:</strong> Keep your availability information up to date. Prevent overbooking and ensure accurate information is available to students.
          </li>
        </ul>
        </div>
      </section>
      
      <section className="mb-8 shadow-sm border p-3 rounded-md mt-4 bg-slate-50">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>User-Friendly Interface:</strong> Our platform is designed with ease of use in mind, ensuring a smooth and intuitive experience for both students and hostel owners.
          </li>
          <li>
            <strong>Security and Privacy:</strong> We prioritize your security. Our secure authentication and payment processes ensure that your data and transactions are protected.
          </li>
          <li>
            <strong>Comprehensive Listings:</strong> Get all the information you need in one place. Our detailed listings help you make informed decisions quickly and confidently.
          </li>
          <li>
            <strong>Community-Driven Feedback:</strong> Trust the reviews and ratings from your peers. Our platform fosters a community of students sharing their genuine experiences.
          </li>
        </ul>
      </section>
      
      <section className="mb-8 shadow-sm border p-3 rounded-md mt-4 bg-slate-50">
        <h2 className="text-2xl font-semibold mb-2">Get Started Today!</h2>
        <p>
          Join Dormdaze and discover the easiest way to find and book off-campus hostels. Whether you're a student looking for the perfect place to stay or a hostel owner aiming to reach more students, our platform has you covered.
        </p>
        <p>
          Sign up now and revolutionize your off-campus living experience with Dormdaze!
        </p>
      </section>
      
      <p className="mt-8 shadow-sm border p-3 rounded-md bg-slate-50">
        For any questions or support, please <a href="mailto:dormdaze@gmail.com" className=' text-blue-500 hover:border-2 hover:bg-slate-300 p-2 hover:shadow-md rounded-lg'>email us</a>
      </p>
    </div>
    </div>
  );
};

export default About;

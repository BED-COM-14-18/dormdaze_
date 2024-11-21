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
                  onClick={handleGoBack}
                  type="button"
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


const Policies = () => {
  return (
    <div>
    <TopBar />
    <div className=" p-6 py-20 md:p-8 lg:p-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms and Policies</h1>

      <section className="mb-8 shadow-sm border p-3 rounded-md mt-4 bg-slate-50">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to Dormdaze, the premier platform for university students to find and book off-campus hostel accommodations. By using our website and services, you agree to comply with and be bound by the following terms and policies. Please read these terms carefully. If you do not agree to these terms, you should not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">User Agreement</h2>
        <div className='shadow-sm border p-3 rounded-md mt-4 bg-slate-50'>
        <h3 className="text-xl font-semibold mb-1">Acceptance of Terms</h3>
        <p>
          By accessing or using our website, you agree to be bound by these Terms and Policies, our Privacy Policy, and any additional terms applicable to specific services you use.
        </p>
        <h3 className="text-xl font-semibold mb-1 mt-4">Changes to Terms</h3>
        <p>
          We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the site after any changes constitutes your acceptance of the new terms.
        </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
        <div className='shadow-sm border p-3 rounded-md mt-4 bg-slate-50'>
           <h3 className="text-xl font-semibold mb-1">Account Security</h3>
           <p>
                Users are responsible for maintaining the confidentiality of 
                their account credentials. You agree to notify us immediately 
                of any unauthorized use of your account or any other security breach.
            </p>

            <h3 className="text-xl font-semibold mb-1 mt-4">Accurate Information</h3>
            <p>
               You agree to provide accurate, current, and complete information during 
               the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <h3 className="text-xl font-semibold mb-1 mt-4">Prohibited Activities</h3>
            <p>
                Users agree not to:
                <ul className="list-disc list-inside mt-2">
                    <li>Use the site for any illegal or unauthorized purpose.</li>
                    <li>Post false, inaccurate, misleading, defamatory, or libelous content.</li>
                    <li>Harass, abuse, or harm another person.</li>
                    <li>Attempt to gain unauthorized access to other users' accounts or our systems.</li>
                </ul>
            </p> 
        </div>
        
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">For Students</h2>
        <div className='shadow-sm border p-3 rounded-md mt-4 bg-slate-50'>
            <h3 className="text-xl font-semibold mb-1">Booking Process</h3>
            <p>
               Students can search for and book hostel accommodations through our platform.
               Bookings are subject to availability and the specific terms set by hostel owners.
            </p>
            <h3 className="text-xl font-semibold mb-1 mt-4">Reviews and Ratings</h3>
            <p>
               Students may leave reviews and ratings for hostels they have stayed in. Reviews must 
               be honest, fair, and based on actual experiences.
            </p>
            <h3 className="text-xl font-semibold mb-1 mt-4">Payments</h3>
            <p>
               Payments for bookings are processed through our secure payment gateway.
               By making a booking, you agree to the terms and conditions of the payment processor.
            </p>
            <h3 className="text-xl font-semibold mb-1 mt-4">Cancellations and Refunds</h3>
            <p>
              Cancellation policies vary by hostel. Students should review the cancellation 
              policy of each listing before booking. Refunds, if applicable, will be processed according to the hostel's policy.
            </p>
        </div>
        
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">For Hostel Owners</h2>
        <div className='shadow-sm border p-3 rounded-md mt-4 bg-slate-50'>
            <h3 className="text-xl font-semibold mb-1">Listing Accommodations</h3>
            <p>
              Hostel owners can list their accommodations on our platform. Listings must include
              accurate and complete information, including descriptions, photos, amenities, and availability.
            </p>
            <h3 className="text-xl font-semibold mb-1 mt-4">Booking Management</h3>
            <p>
              Owners are responsible for managing their bookings and availability through our platform.
              This includes confirming reservations and updating availability promptly.
            </p>
            <h3 className="text-xl font-semibold mb-1 mt-4">Responding to Reviews</h3>
            <p>
             Owners may respond to reviews left by students. Responses should be professional and respectful.
            </p>
            <h3 className="text-xl font-semibold mb-1 mt-4">Fees</h3>
            <p>
               Hostel owners may be charged fees for listing and booking services. Fees are detailed in the 
               account settings and are subject to change with prior notice.
            </p>  
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
        <div className='shadow-sm border p-3 rounded-md mt-4 bg-slate-50'>
            <h3 className="text-xl font-semibold mb-1">Data Collection</h3>
            <p>
              We collect personal information from users to provide and improve our services.
              This includes information provided during registration, booking, and communication.
            </p>
            <h3 className="text-xl font-semibold mb-1 mt-4">Data Use</h3>
            <p>
                Personal information is used to facilitate bookings, process payments, send notifications,
                and improve user experience. We do not sell or share personal information with third parties 
                for marketing purposes without user consent.
            </p>
            <h3 className="text-xl font-semibold mb-1 mt-4">Data Security</h3>
            <p>
               We implement security measures to protect personal information from unauthorized access, 
               alteration, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
        <div className='shadow-sm border p-3 rounded-md mt-4 bg-slate-50'>
            <h3 className="text-xl font-semibold mb-1">Service Availability</h3>
            <p>
             We strive to ensure that our services are available at all times. However, we do
             not guarantee uninterrupted access and are not liable for any downtime or technical issues.
            </p>
            <h3 className="text-xl font-semibold mb-1 mt-4">Disputes</h3>
            <p>
               Any disputes arising from the use of our services shall be resolved according to the laws of Malawi.
               We are not liable for any disputes between students and hostel owners.
            </p>
            <h3 className="text-xl font-semibold mb-1 mt-4">Indemnification</h3>
            <p>
                  Users agree to indemnify and hold harmless Dormdash, its affiliates, and employees 
                  from any claims, damages, losses, or expenses arising from their use of the platform or violation of these terms.
        </p>
        </div>
        
      </section>

      <section className="mb-8 shadow-sm border p-3 rounded-md mt-4 bg-slate-50">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p>
          If you have any questions or concerns about these Terms and Policies, please contact us at <a href="mailto:bsc-com-30-21@unima.ac.mw, mailto:bsc-inf-16-20" className=' text-blue-500 hover:border-2 hover:bg-slate-300 p-2 hover:shadow-md rounded-lg'>email us</a>.
        </p>
      </section>

      <p className="mt-8 shadow-sm border p-3 rounded-md border-red-600">
        By using our site, you acknowledge that you have read, understood, and agree to be bound by these Terms and Policies.
      </p>
    </div>
    </div>
  );
};

export default Policies;

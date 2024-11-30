 
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  
  //Router,
  createBrowserRouter,
  
} from "react-router-dom";
import './index.css';
import UserProfile from './routes/studentOwnerDashboard/userProfile/App';
import Notification from './routes/studentOwnerDashboard/notification/App';
import ListingPreview from './routes/studentOwnerDashboard/listingPreview/App';
import HostelOwnerDashboard from './routes/hostelOwnerDashoard/App';
import App from './App';
import ErrorPage from './error-page';
import reportWebVitals from './reportWebVitals';
import AdminDashboard from './routes/adminDashBoard/admin';
import PayFeature from './routes/studentOwnerDashboard/PaymentFeature/App';
import LoginPage from './routes/hostelOwnerDashoard/hostelOwnerAuth/LoginPage';
import CreateListing from './routes/hostelOwnerDashoard/createListings/App';
import Policies from './routes/studentOwnerDashboard/about/policies';
import About from './routes/studentOwnerDashboard/about/about';
import HostelOwnerProfile from './routes/hostelOwnerDashoard/HostelOwnerProfile/App';
import Auth from './routes/studentOwnerDashboard/studentAuth/Auth';
import Filter from "./routes/studentOwnerDashboard/FilterApartments";
import SignUp from "./routes/studentOwnerDashboard/studentAuth/ValidateSignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/userProfile",
    element: <UserProfile />,
  },
  {
    path:"/ValidateSignUp",
    element: <SignUp/>
  },
  {
    path: "/HostelOwnerProfile",
    element: <HostelOwnerProfile />
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/listingPreview",
    element: <ListingPreview />,
  },
  {
  path: "/hostelOwnerDashboard",
  element: <HostelOwnerDashboard />
  },
   {
    path: "/adminDashboard",
    element: <AdminDashboard />
  }, 
  {
    path: "/PaymentFeature",
    element: <PayFeature />
  },
  {
    path: "/hostelOwnerAuth",
    element: <LoginPage />
  },
  {
    path: "/createListings",
    element: <CreateListing />
  },
  {
    path: "/about/policies",
    element: <Policies />
  },
  {
    path: "/about/about",
    element: <About />
  },
  {
    path: "/FilterApartments",
    element:<Filter/>
  },
  {
    path: "/studentAuth",
    element: <Auth />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 

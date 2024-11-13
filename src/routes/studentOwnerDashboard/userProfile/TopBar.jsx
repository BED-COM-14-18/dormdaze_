// // TopBar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MenuBt } from '../desktopComponent';

// const TopBar = () => {
//   return (
//     <div className="bg-[#07a0c3] h-[9vh] w-full flex items-center justify-between text-lg fixed top-0 shadow-lg px-14 z-10">
//       <MenuBt />
      
//       <Link to="/">
//         <div className="flex flex-col items-center font-sans font-thin text-sm mt-1">
//           <button type="button" className="h-6 w-6">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
//               <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
//             </svg>
//           </button>
//           <p>Explore</p>
//         </div>
//       </Link>
      
//       <Link to="/notification">
//         <div className="flex flex-col items-center font-thin text-xs">
//           <button type="button" className="h-6 w-6">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
//               <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
//             </svg>
//           </button>
//           <p>Notification</p>
//         </div>
//       </Link>
      
//       <Link to="/hostelOwnerAuth">
//         <div className="flex flex-col items-center font-thin text-xs">
//           <button type="button" className="h-6 w-6">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
//               <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
//             </svg>
//           </button>
//           <p>User</p>
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default TopBar;
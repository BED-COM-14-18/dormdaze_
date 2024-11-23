import React, { useState, useEffect } from 'react';
import backgroundimage from 'pub';
import loginbackground from './loginbackground.jpg';

function AdminDashboard() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loggedIn, setLoggedIn] = useState(false);
const [students, setStudents] = useState([]);
const [landlords, setLandlords] = useState([]);
    const [studentSearchQuery, setStudentSearchQuery] = useState('');
    const [landlordSearchQuery, setLandlordSearchQuery] = useState('');
    const [messageContent, setMessageContent] = useState('');
     const [scheduledTime, setScheduledTime] = useState('');
     const [scheduledMessages, setScheduledMessages] = useState([]);
     const [recipientType, setRecipientType] = useState('student');
     const [announcementContent, setAnnouncementContent] = useState('');
     const [announcements, setAnnouncements] = useState([]);
     const [selectedUserId, setSelectedUserId] = useState(null);

     // Mock API data fetching
    const fetchStudents = () => {
        const dummyStudents = [
             { id: 1, name: 'Stephano Kachingwe', email: 'bsc-inf-12-20@unima.ac.mw', hostel: 'Hostel A', access: true },
             { id: 2, name: 'Chimwemwe Banda', email: 'bsc-inf-16-20@unima.ac.mw', hostel: 'Hostel B', access: false },
        ];
        setStudents(dummyStudents);
     };

     const fetchLandlords = () => {
       const dummyLandlords = [
            { id: 1, name: 'Rute Chipote', email: 'rutechipote@example.com', access: true },
            { id: 2, name: 'James Damison Gwemba', email: 'jdgwemba@example.com', access: false },
         ];
         setLandlords(dummyLandlords);
   };

   useEffect(() => {
         fetchStudents();
        fetchLandlords();
     }, []);

     const deleteStudent = (id) => {
         const updatedStudents = students.filter(student => student.id !== id);
         setStudents(updatedStudents);
    };

     const deleteLandlord = (id) => {
        const updatedLandlords = landlords.filter(landlord => landlord.id !== id);
        setLandlords(updatedLandlords);
    };

     const handleStudentSearch = (e) => {
         const query = e.target.value.toLowerCase();
         setStudentSearchQuery(query);
        const filteredStudents = students.filter(student =>
             student.name.toLowerCase().includes(query) ||
             student.email.toLowerCase().includes(query) ||
            student.hostel.toLowerCase().includes(query)
        );
         setStudents(filteredStudents);
     };

    const handleLandlordSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setLandlordSearchQuery(query);
         const filteredLandlords = landlords.filter(landlord =>
             landlord.name.toLowerCase().includes(query) ||
             landlord.email.toLowerCase().includes(query)
         );
         setLandlords(filteredLandlords);
     };

     const handleMessageChange = (e) => {
         setMessageContent(e.target.value);
     };

     const handleScheduledTimeChange = (e) => {
         setScheduledTime(e.target.value);
     };

     const handleAnnouncementChange = (e) => {
         setAnnouncementContent(e.target.value);
     };

     const handleRecipientChange = (e) => {
     setRecipientType(e.target.value);
         setMessageContent('');
     };

     const sendMessage = (userType, id) => {
         console.log(`Message sent to ${userType} with ID ${id}: ${messageContent}`);
         setMessageContent('');
     };

     const scheduleMessage = () => {
         console.log(`Message scheduled for ${scheduledTime}: ${messageContent}`);
         setScheduledMessages([...scheduledMessages, { time: scheduledTime, content: messageContent }]);
         setMessageContent('');
         setScheduledTime('');
     };

     const toggleAccess = (id, userType) => {
         if (userType === 'student') {
         const updatedStudents = students.map(student =>
                 student.id === id ? { ...student, access: !student.access } : student
             );
             setStudents(updatedStudents);
         } else if (userType === 'landlord') {
             const updatedLandlords = landlords.map(landlord =>
                 landlord.id === id ? { ...landlord, access: !landlord.access } : landlord
             );
             setLandlords(updatedLandlords);
         }
     };

     const sendAnnouncement = () => {
         if (selectedUserId === null) {
             alert('Please select a user to send the announcement.');
             return;
         }
         if (recipientType === 'student') {
             sendMessage('student', selectedUserId);
             setAnnouncements([...announcements, { content: announcementContent }]);
         } else if (recipientType === 'landlord') {
             sendMessage('landlord', selectedUserId);
             setAnnouncements([...announcements, { content: announcementContent }]);
         }
     };

     const deleteAnnouncement = (index) => {
         const updatedAnnouncements = [...announcements];
         updatedAnnouncements.splice(index, 1);
         setAnnouncements(updatedAnnouncements);
     };

     const deleteScheduledMessage = (index) => {
         const updatedScheduledMessages = [...scheduledMessages];
         updatedScheduledMessages.splice(index, 1);
         setScheduledMessages(updatedScheduledMessages);
         console.log('Scheduled message deleted');
     };

     const handleLogin = () => {
       if (username === 'admin' && password === 'admin2024') {
             setLoggedIn(true);
         } else {
             alert('Invalid username or password');
         }
     };

     const handleLogout = () => {
         setUsername('');
         setPassword('');
         setLoggedIn(false);
     };

     const handleEnterKeyPress = (e) => {
         if (e.key === 'Enter') {
             handleLogin();
         }
     };

     return (
         <div className="admin-container bg-gray-100 min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover p-4 sm:p-8 lg:p-16" style={{ backgroundImage: `url(${backgroundimage})` }}>
             {!loggedIn ? (
                 <div className="login-container bg-white p-8 rounded-lg shadow-md w-full max-w-xs border-white" style={{ backgroundImage: `url(${loginbackground})` }}>
                     <h1 className="text-2xl font-bold mb-4">Login</h1>
                     <input 
                         type="text" 
                         placeholder="Username" 
                         value={username} 
                         onChange={(e) => setUsername(e.target.value)} 
                         onKeyPress={handleEnterKeyPress}
                         className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-cyan-500" 
                     />
                     <input 
                         type="password" 
                         placeholder="Password" 
                         value={password} 
                         onChange={(e) => setPassword(e.target.value)} 
                         onKeyPress={handleEnterKeyPress}
                         className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-cyan-500" 
                     />
                     <button onClick={handleLogin} className="w-full bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-700">Login</button>
                 </div>
             ) : (
                 <div className="dashboard-container max-w-4xl mx-auto w-full flex flex-col">
                     <h1 className="text-5xl font-bold mb-8 text-center bg-cyan-500 rounded">Admin Dashboard</h1>

                     {/* Send Message Section */}
                     <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
                         <h2 className="text-xl font-semibold mb-4">Send Message</h2>
                         <textarea 
                             placeholder="Type your message here..." 
                             value={messageContent} 
                             onChange={handleMessageChange} 
                             className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-cyan-500"
                         />
                         <div className="flex flex-col sm:flex-row items-center justify-between">
                             <select 
                                 value={recipientType} 
                                 onChange={handleRecipientChange} 
                                 className="p-2 border rounded mb-4 sm:mb-0 sm:mr-4 focus:outline-none focus:border-cyan-500"
                             >
                                 <option value="student">Student</option>
                                 <option value="landlord">Landlord</option>
                             </select>
                             <input 
                                 type="text" 
                                 placeholder="Recipient User ID" 
                                 value={selectedUserId || ''} 
                                 onChange={(e) => setSelectedUserId(e.target.value)} 
                                 className="p-2 border rounded mb-4 sm:mb-0 focus:outline-none focus:border-cyan-500"
                             />
                             <button 
                                 onClick={sendAnnouncement} 
                                 className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-700"
                             >
                                 Send
                             </button>
                         </div>
                     </div>

                     {/* Schedule Message Section */}
                     <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
                         <h2 className="text-xl font-semibold mb-4">Schedule Message</h2>
                         <textarea 
                             placeholder="Type your message here..." 
                            value={messageContent} 
                             onChange={handleMessageChange} 
                             className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-cyan-500"
                         />
                         <input 
                             type="datetime-local" 
                             value={scheduledTime} 
                             onChange={handleScheduledTimeChange} 
                             className="p-2 border rounded mb-4 focus:outline-none focus:border-cyan-500"
                         />
                         <button 
                             onClick={scheduleMessage} 
                             className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-700"
                         >
                             Schedule
                         </button>
                     </div>

                     {/* Scheduled Messages List */}
                     <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Scheduled Messages</h2>
                         {scheduledMessages.length === 0 ? (
                             <p>No scheduled messages.</p>
                         ) : (
                             <ul className="list-disc pl-4">
                                 {scheduledMessages.map((msg, index) => (
                                     <li key={index} className="mb-2">
                                         <span>{msg.time}: {msg.content}</span>
                                         <button 
                                             onClick={() => deleteScheduledMessage(index)} 
                                             className="text-cyan-500 ml-4"
                                         >
                                             Delete
                                         </button>
                                     </li>
                                 ))}
                             </ul>
                         )}
                     </div>

                 {/* Announcements Section */}
                 <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
                         <h2 className="text-xl font-semibold mb-4">Announcements</h2>
                         <textarea 
                             placeholder="Type your announcement here..." 
                             value={announcementContent} 
                             onChange={handleAnnouncementChange} 
                             className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-cyan-500"
                         />
                         <button 
                             onClick={sendAnnouncement} 
                             className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-700"
                         >
                             Post Announcement
                         </button>
                         {announcements.length === 0 ? (
                             <p>No announcements.</p>
                         ) : (
                             <ul className="list-disc pl-4 mt-4">
                                 {announcements.map((announcement, index) => (
                                     <li key={index} className="mb-2">
                                         <span>{announcement.content}</span>
                                         <button 
                                             onClick={() => deleteAnnouncement(index)} 
                                             className="text-red-500 ml-4"
                                         >
                                             Delete
                                         </button>
                                     </li>
                                 ))}
                             </ul>
                         )}
                     </div>

                 {/* User Management Section */}
                     <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
                         <h2 className="text-xl font-semibold mb-4">User Management</h2>

                         <h3 className="text-lg font-medium mb-2">Students</h3>
                         <input 
                             type="text" 
                             placeholder="Search students..." 
                             value={studentSearchQuery} 
                             onChange={handleStudentSearch} 
                         className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-cyan-500"
                         />
                         <div className="overflow-x-auto">
                             <table className="w-full table-auto mb-8">
                                 <thead>
                                     <tr>
                                         <th className="px-4 py-2">Name</th>
                                     <th className="px-4 py-2">Email</th>
                                         <th className="px-4 py-2">Hostel</th>
                                         <th className="px-4 py-2">Actions</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     {students.map(student => (
                                         <tr key={student.id}>
                                             <td className="border px-4 py-2">{student.name}</td>
                                             <td className="border px-4 py-2">{student.email}</td>
                                             <td className="border px-4 py-2">{student.hostel}</td>
                                            <td className="border px-4 py-2 flex flex-col sm:flex-row items-center justify-around">
                                                 <button 
                                                     onClick={() => toggleAccess(student.id, 'student')} 
                                                    className={`py-1 px-2 mb-2 sm:mb-0 sm:mr-2 rounded ${student.access ? 'bg-green-500' : 'bg-cyan-500'} text-white`}
                                                 >
                                                     {student.access ? 'Revoke' : 'Grant'} Access
                                                 </button>
                                             <button 
                                                     onClick={() => deleteStudent(student.id)} 
                                                     className="py-1 px-2 rounded bg-cyan-500 text-white"
                                                 >
                                                     Delete
                                                 </button>
                                             </td>
                                         </tr>
                                     ))}
                                 </tbody>
                             </table>
                         </div>

                         <h3 className="text-lg font-medium mb-2">Landlords</h3>
                         <input 
                             type="text" 
                             placeholder="Search landlords..." 
                            value={landlordSearchQuery} 
                            onChange={handleLandlordSearch} 
                             className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-cyan-500"
                        />
                         <div className="overflow-x-auto">
                             <table className="w-full table-auto">
                                 <thead>
                                     <tr>
                                 <th className="px-4 py-2">Name</th>
                                         <th className="px-4 py-2">Email</th>
                                         <th className="px-4 py-2">Actions</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     {landlords.map(landlord => (
                                         <tr key={landlord.id}>
                                             <td className="border px-4 py-2">{landlord.name}</td>
                                             <td className="border px-4 py-2">{landlord.email}</td>
                                             <td className="border px-4 py-2 flex flex-col sm:flex-row items-center justify-around">
                                                 <button 
                                                     onClick={() => toggleAccess(landlord.id, 'landlord')} 
                                                     className={`py-1 px-2 mb-2 sm:mb-0 sm:mr-2 rounded ${landlord.access ? 'bg-green-500' : 'bg-cyan-500'} text-white`}
                                                 >
                                                     {landlord.access ? 'Revoke' : 'Grant'} Access
                                                 </button>
                                                 <button 
                                                     onClick={() => deleteLandlord(landlord.id)} 
                                                     className="py-1 px-2 rounded bg-cyan-500 text-white"
                                                 >
                                                     Delete
                                                 </button>
                                             </td>
                                         </tr>
                                     ))}
                                 </tbody>
                             </table>
                         </div>
                     </div>

                     <button onClick={handleLogout} className="self-end bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-700">Logout</button>
                 </div>
             )}
         </div>
     );
 }

 export default AdminDashboard;
 /*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>*/


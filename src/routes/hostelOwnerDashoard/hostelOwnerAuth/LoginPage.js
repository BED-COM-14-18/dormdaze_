import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [hasAccount, setHasAccount] = useState(true);
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    age: '',
    username: '',
    password: '',
    nationality: '',
    district: '',
    area: '',
    gender: ''
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const getRegisteredUsers = () => {
    const storedUsers = localStorage.getItem('registeredUsers');
    return storedUsers ? JSON.parse(storedUsers) : [];
  };

  const [registeredUsers, setRegisteredUsers] = useState(getRegisteredUsers());

  useEffect(() => {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = registeredUsers.find(
      user => user.username === userDetails.username && user.password === userDetails.password
    );
    if (user) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { fullName, age, username, password, nationality, district, area, gender } = userDetails;

    if (!fullName || !age || !username || !password || !nationality || !district || !area || !gender) {
      setError('All fields are required');
      return;
    }

    const newUser = { ...userDetails };
    setRegisteredUsers([...registeredUsers, newUser]);
    setIsLoggedIn(true);
    setError('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#b6acac]">
      <div className="bg-[#eff8f8] p-8 max-h-[600px] rounded-lg shadow-md w-[300px]">
        <h1 className="text-center text-[#333]">Dormdaze</h1>
        {isLoggedIn ? (
          <div>
            <h1>Welcome, {userDetails.username}!</h1>
            <Link to='/hostelOwnerDashboard' className='inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600'>Click Here to see Hostel Listings</Link>
          </div>
        ) : hasAccount ? (
          <form onSubmit={handleLogin} className='flex flex-col'>
            <h2 className="mb-4">Sign in to start your session</h2>
            {error && <div className='bg-red-500 mb-2 p-2 rounded-md'>{error}</div>}
            <label htmlFor='username' className="mb-1 font-bold">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userDetails.username}
              onChange={handleInputChange}
              className='mb-4 p-2 rounded-md border border-[#ccc]'
              required
            />
            <label htmlFor='password' className="mb-1 font-bold">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userDetails.password}
              onChange={handleInputChange}
              className='mb-4 p-2 rounded-md border border-[#ccc]'
              required
            />
            <button className='mb-4 p-2 rounded-md bg-[#576558] text-white hover:bg-[#0b160c]' type="submit">Login</button>
            <button className='p-2 rounded-md bg-green-500 text-white hover:bg-green-600' type="button" onClick={() => setHasAccount(false)}>Register</button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className='flex flex-col'>
            <h2 className="mb-4">Register your account</h2>
            {error && <div className='bg-red-500 mb-2 p-2 rounded-md'>{error}</div>}
            <label htmlFor='fullName' className="mb-1 font-bold">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={userDetails.fullName}
              onChange={handleInputChange}
              className='mb-4 p-2 rounded-md border border-[#ccc]'
              required
            />
            <label htmlFor='age' className="mb-1 font-bold">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={userDetails.age}
              onChange={handleInputChange}
              className='mb-4 p-2 rounded-md border border-[#ccc]'
              required
            />
            <label htmlFor='username' className="mb-1 font-bold">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userDetails.username}
              onChange={handleInputChange}
              className='mb-4 p-2 rounded-md border border-[#ccc]'
              required
            />
            <label htmlFor='password' className="mb-1 font-bold">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userDetails.password}
              onChange={handleInputChange}
              className='mb-4 p-2 rounded-md border border-[#ccc]'
              required
            />
            <label htmlFor='nationality' className="mb-1 font-bold">Nationality:</label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={userDetails.nationality}
              onChange={handleInputChange}
              className='mb-4 p-2 rounded-md border border-[#ccc]'
              required
            />
            <label htmlFor='district' className="mb-1 font-bold">District:</label>
            <input
              type="text"
              id="district"
              name="district"
              value={userDetails.district}
              onChange={handleInputChange}
              className='mb-4 p-2 rounded-md border border-[#ccc]'
              required
            />
            <label htmlFor='area' className="mb-1 font-bold">Area:</label>
            <input
              type="text"
              id="area"
              name="area"
              value={userDetails.area}
              onChange={handleInputChange}
              className='mb-4 p-2 rounded-md border border-[#ccc]'
              required
            />
            <label htmlFor='gender' className="mb-1 font-bold">Gender:</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={userDetails.gender}
              onChange={handleInputChange}
              className='mb-4 p-2 rounded-md border border-[#ccc]'
              required
            />
            <button className='mb-4 p-2 rounded-md bg-[#576558] text-white hover:bg-[#0b160c]' type="submit">Register</button>
            <button type="button" className='p-2 rounded-md bg-red-500 text-white hover:bg-red-600' onClick={() => setHasAccount(true)}>Back to Login</button>
          </form>
        )}
        <div className='login-link mt-4'>
          <p className="text-center text-[#700808] text-lg">Already have an Account? 
            <a href="#" className="text-[#212b22] hover:underline" onClick={() => setHasAccount(true)}>Log In</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

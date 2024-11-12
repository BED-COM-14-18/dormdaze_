  import React, { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';

const LoginPage = () => {
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

  // Retrieve registered users from localStorage or initialize an empty array
  const getRegisteredUsers = () => {
    const storedUsers = localStorage.getItem('registeredUsers');
    return storedUsers ? JSON.parse(storedUsers) : [];
  };

  const [registeredUsers, setRegisteredUsers] = useState(getRegisteredUsers());

  // Persist registered users to localStorage whenever the registeredUsers state changes
  useEffect(() => {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleLogin = () => {
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

  const handleRegister = () => {
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
    <div className='flex flex-col justify-center overflow-y-scroll items-center h-screen w-full p-5 box-border'>
      <div className='w-full p-5 border border-solid rounded-md shadow-md box-border'>
        {isLoggedIn ? (
          <div>
            <h1>Welcome, {userDetails.username}!</h1>
            <Link
  to='/hostelOwnerDashboard'
  className='inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600'
>
  Click Here to see Hostel Listings
</Link>
          </div>
        ) : hasAccount ? (
          <div>
            <h2>Sign in to start your session</h2>
            {error && <div className='bg-red-500 mb-2 w-[30%]'>{error}</div>}
            <div className='mb-2'>
              <label className='p-1  block mb-1 border-solid box-border'>Username:</label>
              <input
                type="text"
                name="username"
                value={userDetails.username}
                onChange={handleInputChange}
                className='w-[400px] p-1 rounded-lg shadow-sm h-[6vh] border-solid border-[1px] box-border'
              />
            </div>
            <div className='mb-2'>
              <label className='p-1  block mb-1 '>Password:</label>
              <input
                type="password"
                name="password"
                value={userDetails.password}
                onChange={handleInputChange}
                className='w-[400px] p-1 rounded-lg shadow-sm h-[6vh] border-solid border-[1px] box-border '
              />
            </div>
            <button className='py-3 rounded cursor-pointer block w-[30%] box-border bg-blue-700 mb-2' onClick={handleLogin}>Login</button>
            <button className='item justify-center w-[30%] py-3 rounded cursor-pointer block box-border bg-green-700 mb-2' onClick={() => setHasAccount(false)}>Register</button>
          </div>
        ) : (
          <div className='flex flex-col justify-center items-center h-screen w-full py-10 box-border'>
            <h2>Register your account</h2>
            {error && <div className='bg-red-900 mb-2'>{error}</div>}
            <div className=' mb-2'>
              <label className='p-1  block mb-1'>Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={userDetails.fullName}
                onChange={handleInputChange}
                className='w-full p-1 rounded-lg shadow-sm h-[6vh] border-solid border-[1px] box-border '
              />
            </div>
            <div className=' mb-2'>
              <label className='p-1  block mb-1'>Age:</label>
              <input
                type="number"
                name="age"
                value={userDetails.age}
                onChange={handleInputChange}
                className='w-full p-1 rounded-lg shadow-sm h-[6vh] border-solid border-[1px] box-border '
              />
            </div>
            <div className='mb-2 '>
              <label className='p-1  block mb-1'>Username:</label>
              <input
                type="text"
                name="username"
                value={userDetails.username}
                onChange={handleInputChange}
                className='w-full p-1 rounded-lg shadow-sm h-[6vh] border-solid border-[1px] box-border '
              />
            </div>
            <div className='mb-2'>
              <label className='p-1  block mb-1'>Password:</label>
              <input
                type="password"
                name="password"
                value={userDetails.password}
                onChange={handleInputChange}
                className='w-full p-1 rounded-lg shadow-sm h-[6vh] border-solid border-[1px] box-border '
              />
            </div>
            <div className='mb-2'>
              <label className='p-1  block mb-1'>Nationality:</label>
              <input
                type="text"
                name="nationality"
                value={userDetails.nationality}
                onChange={handleInputChange}
                className='w-full p-1 rounded-lg shadow-sm h-[6vh] border-solid border-[1px] box-border '
              />
            </div>
            <div className='mb-2'>
              <label className='p-1  block mb-1'>District:</label>
              <input
                type="text"
                name="district"
                value={userDetails.district}
                onChange={handleInputChange}
                className='w-full p-1 rounded-lg shadow-sm h-[6vh] border-solid border-[1px] box-border '
              />
            </div>
            <div className='mb-2'>
              <label className=' mr-2 block mb-1'>Area:</label>
              <input
                type="text"
                name="area"
                value={userDetails.area}
                onChange={handleInputChange}
                className='w-full p-1 rounded-lg shadow-sm h-[6vh] border-solid border-[1px] box-border '
              />
            </div>
            <div className='mb-2'>
              <label className='mr-2 block mb-1'>Gender:</label>
              <input
                type="text"
                name="gender"
                value={userDetails.gender}
                onChange={handleInputChange}
                className='w-full p-1 rounded-lg shadow-sm h-[6vh] border-solid border-[1px] box-border '
              />
            </div>
            <button className=' h-10 border-none bg-blue-700 rounded-lg cursor-pointer block w-full box-border' onClick={handleRegister}>Register</button>
            <button className='h-10 mt-1 border-none bg-red-700 rounded-lg cursor-pointer block w-full box-border' onClick={() => setHasAccount(true)}>Back to Login</button>
          </div>
        )}
      </div>
    </div>
  );
};


export default LoginPage;

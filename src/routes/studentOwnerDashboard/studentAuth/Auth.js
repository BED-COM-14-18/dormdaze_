import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

// Dummy data to simulate registered users
const dummyUsers = [
  {
    email: 'user@example.com',
    password: 'password123',
  },
];

const validateSignup = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First name is required!';
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required!';
  }
  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid!';
  }
  if (!values.password) {
    errors.password = 'Password is required!';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password is required!';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must match!';
  }
  return errors;
};

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [signupValues, setSignupValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loginValues, setLoginValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupValues({ ...signupValues, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateSignup(signupValues);
    if (Object.keys(validationErrors).length === 0) {
      dummyUsers.push({
        email: signupValues.email,
        password: signupValues.password,
      });
      setLoggedIn(true); // Automatically log the user in after successful signup
    } else {
      setErrors(validationErrors);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const user = dummyUsers.find(
      (user) =>
        user.email === loginValues.email &&
        user.password === loginValues.password
    );
    if (user) {
      setLoggedIn(true);
    } else {
      setErrors({ login: 'Invalid email or password' });
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleModeSwitch = () => {
    setErrors({});
    setIsLogin(!isLogin);
  };

  if (loggedIn) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      {isLogin ? (
        <form
          className="bg-white shadow-lg rounded-lg p-8 w-[50%] lg:w-[30%]"
          onSubmit={handleLoginSubmit}
        >
          <h1 className="text-2xl font-bold mb-6 text-center text-black-700">
            Log In
          </h1>

          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="loginEmail">
              Email
            </label>
            <div className="flex items-center border-2 rounded-full mb-4 p-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <input
                className="flex-grow p-2 outline-none"
                type="email"
                name="email"
                id="loginEmail"
                placeholder="Email"
                value={loginValues.email}
                onChange={handleLoginChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="loginPassword">
              Password
            </label>
            <div className="flex items-center border-2 rounded-full mb-4 p-2">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              <input
                className="flex-grow p-2 outline-none"
                type="password"
                name="password"
                id="loginPassword"
                placeholder="Password"
                value={loginValues.password}
                onChange={handleLoginChange}
              />
            </div>
          </div>

          {errors.login && (
            <div className="text-red-500 text-sm mb-4">{errors.login}</div>
          )}

          <button
            className="bg-blue-500 text-white rounded-full p-2 w-full hover:bg-blue-600"
            type="submit"
          >
            Log In
          </button>

          <div className="mt-4 text-center">
            <span>Don't have an account? </span>
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={handleModeSwitch}
            >
              Sign Up
            </button>
          </div>
        </form>
      ) : (
        <form
          className="bg-white shadow-lg rounded-lg p-8 w-[50%] lg:w-[30%]"
          onSubmit={handleSignupSubmit}
        >
          <h1 className="text-2xl font-bold mb-6 text-center text-black-700">
            Sign Up
          </h1>
          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="firstName">
              First Name
            </label>
            <div className="flex items-center border-2 rounded-full mb-4 p-2">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <input
                className="flex-grow p-2 outline-none"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={signupValues.firstName}
                onChange={handleSignupChange}
              />
            </div>
            {errors.firstName && (
              <div className="text-red-500 text-sm mb-4">{errors.firstName}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="lastName">
              Last Name
            </label>
            <div className="flex items-center border-2 rounded-full mb-4 p-2">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <input
                className="flex-grow p-2 outline-none"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={signupValues.lastName}
                onChange={handleSignupChange}
              />
            </div>
            {errors.lastName && (
              <div className="text-red-500 text-sm mb-4">{errors.lastName}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border-2 rounded-full mb-4 p-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <input
                className="flex-grow p-2 outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={signupValues.email}
                onChange={handleSignupChange}
              />
            </div>
            {errors.email && (
              <div className="text-red-500 text-sm mb-4">{errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border-2 rounded-full mb-4 p-2">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              <input
                className="flex-grow p-2 outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={signupValues.password}
                onChange={handleSignupChange}
              />
            </div>
            {errors.password && (
              <div className="text-red-500 text-sm mb-4">{errors.password}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="flex items-center border-2 rounded-full mb-4 p-2">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              <input
                className="flex-grow p-2 outline-none"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={signupValues.confirmPassword}
                onChange={handleSignupChange}
              />
            </div>
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm mb-4">{errors.confirmPassword}</div>
            )}
          </div>

          <button
            className="bg-blue-500 text-white rounded-full p-2 w-full hover:bg-blue-600"
            type="submit"
          >
            Sign Up
          </button>

          <div className="mt-4 text-center">
            <span>Already have an account? </span>
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={handleModeSwitch}
            >
              Log In
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Auth;

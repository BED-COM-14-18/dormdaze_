import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseurl } from '../../url';

const validateSignUp = (values) => {
  const errors = {};

  // Name validation
  if (!values.name) {
    errors.name = 'Name is required!';
  }

  // Email validation
  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid!';
  }

  // Password validation
  if (!values.password) {
    errors.password = 'Password is required!';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters!';
  }

  // Confirm Password validation
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password is required!';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match!';
  }

  // Role validation
  if (!values.role) {
    errors.role = 'Please select a role!';
  }

  return errors;
};

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      role: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateSignUp(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Determine the endpoint based on the role
      const endpoint = formData.role === 'student' ? `${baseurl}/auth/signup` : `${baseurl}/landlord`;

      // Make the POST request
      const response = await axios.post(endpoint, formData);
      console.log('Sign Up Data submitted: ', response.data);
      alert('Sign Up successful!');
    } catch (error) {
      console.error('There was an error!', error);
      alert('Sign Up failed!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#8fad8feb]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Your Account</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>
          {/* Create Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Create Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>
          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
            )}
          </div>
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Register as:</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="landowner"
                  checked={formData.role === 'landowner'}
                  onChange={handleRoleChange}
                  className="form-radio"
                />
                <span className="ml-2">Land Owner</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={formData.role === 'student'}
                  onChange={handleRoleChange}
                  className="form-radio"
                />
                <span className="ml-2">Student</span>
              </label>
            </div>
            {errors.role && <p className="text-sm text-red-500 mt-1">{errors.role}</p>}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Create Account
          </button>
        </form>
        {/* Sign In Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/studentAuth" className="text-blue-500 hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

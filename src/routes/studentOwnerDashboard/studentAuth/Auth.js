import React, { useState } from 'react';
import './SignUp.css'; // Adjusted to match import naming conventions

const validateSignUp = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name is required!';
  }
  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid!';
  }
  if (!values.password) {
    errors.password = 'Password is required!';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters!';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password is required!';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match!';
  }
  return errors;
};

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateSignUp(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form Data submitted: ', formData);
    alert('Account created successfully!');
  };

  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="form-container">
        <h1>Welcome</h1>
        <p>Sign Up</p>

        <form onSubmit={handleSubmit} className="sign-up-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <label htmlFor="password">Create Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <p className="error-text">{errors.confirmPassword}</p>
          )}

          <button className="submit-btn">Submit</button>
        </form>

        <div className="login-link">
          <p>
            Already have an account? <a href="#">Log in here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

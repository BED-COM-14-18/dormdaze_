// src/routes/App.jsx
import React from 'react';
import SignUp from './SignUp'; 
// Adjust the path if necessary
//import './SignUp.css'; // Adjust the path to your CSS file

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
}

export default App;
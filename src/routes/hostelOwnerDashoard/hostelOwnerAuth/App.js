import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import CreateListingDesktop from './CreateListingDesktop';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-listing" element={<CreateListingDesktop />} />
     </Routes>
    </Router>
  );
}

export default App;

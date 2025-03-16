// import React from 'react'

// const App = () => {
//   return (
//     <div className='text-blue-900'>I am ready to implement CommunityFix </div>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './pages/residents/UserDashboard';
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} /> 
        <Route path="/residents/dashboard" element={<UserDashboard />} />
        {/* Add more routes for admin and service team here */}
      </Routes>
    </Router>
  );
};

export default App;
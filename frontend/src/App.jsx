// import React from 'react'

// const App = () => {
//   return (
//     <div className='text-blue-900'>I am ready to implement CommunityFix </div>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './pages/residents/Dashboard';
// import UserDashboard from './pages/residents/UserDashboard';
// import SDashboard from './pages/serviceTeam/ServiceTeamDashboard';
import STDashboard from './pages/serviceTeam/MechanicDashboard';
import ReportsPage from './pages/serviceTeam/ReportsPage';
import Home from "./pages/Home";
import AssignedIssues from './pages/serviceTeam/AssignedIssuesPage';
import ReviewsPage from './pages/serviceTeam/ReviewsPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} /> 
        <Route path="/residents/dashboard" element={<UserDashboard />} />
        <Route path="/serviceTeam/MechanicDashboard" element={<STDashboard />} />
        <Route path="/serviceTeam/ReportsPage" element={<ReportsPage  />} />
        <Route path="/serviceTeam/AssignedIssuesPage" element={<AssignedIssues  />} />
        <Route path="/serviceTeam/ReviewsPage" element={<ReviewsPage  />} />
        {/* Add more routes for admin and service team here */}
      </Routes>
    </Router>
  );
};

export default App;
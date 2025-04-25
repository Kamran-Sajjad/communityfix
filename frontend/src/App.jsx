// import React from 'react'

// const App = () => {
//   return (
//     <div className='text-blue-900'>I am ready to implement CommunityFix </div>
//   )
// }

// export default App


import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './pages/residents/UserDashboard';
import FeedbackPage from './pages/residents/FeedbackPage';
import SettingsPage from './pages/residents/SettingsPage';
// import SDashboard from './pages/serviceTeam/ServiceTeamDashboard';
import STDashboard from './pages/serviceTeam/MechanicDashboard';
import ReportsPage from './pages/serviceTeam/ReportsPage';
import Home from "./pages/Home";
import AssignedIssues from './pages/serviceTeam/AssignedIssuesPage';
import ReviewsPage from './pages/serviceTeam/ReviewsPage';
import SignUp from './pages/auth/SignUp';
// import Login from './pages/auth/login';
import AboutUs from './pages/residents/AboutUs';
import Login from './pages/auth/Login';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} /> 
        <Route path="/residents/dashboard" element={<UserDashboard />} />
        <Route path="/residents/FeedbackPage" element={<FeedbackPage />} />
        <Route path="/residents/SettingsPage" element={<SettingsPage />} />
        <Route path="/residents/AboutUs" element={<AboutUs />} />
        <Route path="/serviceTeam/MechanicDashboard" element={<STDashboard />} />
        <Route path="/serviceTeam/ReportsPage" element={<ReportsPage  />} />
        <Route path="/serviceTeam/AssignedIssuesPage" element={<AssignedIssues  />} />
        <Route path="/serviceTeam/ReviewsPage" element={<ReviewsPage  />} />
        <Route path="/auth/SignUp" element={<SignUp  />} />
        <Route path="/auth/Login" element={<Login  />} /> 
        {/* Add more routes for admin and service team here */}
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
       
  );
};

export default App;
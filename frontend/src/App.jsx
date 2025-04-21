


import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import UserDashboard from './pages/residents/UserDashboard';
import FeedbackPage from './pages/residents/FeedbackPage';
import SettingsPage from './pages/residents/SettingsPage';

import UserDashboard from './pages/residents/Dashboard';
// import UserDashboard from './pages/residents/UserDashboard';

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

// import ReviewsPage from './pages/serviceTeam/ReviewsPage';
import ListedIssuesPage from './pages/residents/ListedIssuesPage';
import AddIssuePage from './pages/residents/AddIssuePage';


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

        <Route path="/residents/ListedIssuesPage" element={<ListedIssuesPage  />} />
        <Route path="/residents/AddIssuePage" element={<AddIssuePage  />} />

        {/* Add more routes for admin and service team here */}
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
       
  );
};

export default App;
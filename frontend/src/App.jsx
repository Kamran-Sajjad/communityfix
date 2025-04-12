// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDashboard from './pages/residents/UserDashboard';
import Test from './pages/admin/Test';
import Admindb from './pages/admin/Admindb';
import RequestedUser from './pages/admin/RequestedUser';
import RequestedReports from './pages/admin/RequestedReports';
import { AdHeader } from './components/Dashboard/AdHeader'; 
import Feedbackhistory from './components/Dashboard/Feedbackhistory';
import  RegisteredUsers from './pages/admin/RegisteredUsers';
import { PendingReports } from './components/Dashboard/PendingReports';
import Analytics from './pages/admin/Analytics';
import IssueReports from './components/Dashboard/IssueReports';
import Reports from './pages/admin/Reports';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residents/dashboard" element={<UserDashboard />} />
        <Route path="/admin/test" element={<Test />} />
        <Route path="/admindb" element={<Admindb />} />
        <Route path="/requestedusers" element={<RequestedUser />} />
        <Route path="/requestedreports" element={<RequestedReports />} />
        <Route path="/adheader" element={<AdHeader />} />
        <Route path="/Feedbackhistory" element={<Feedbackhistory />} />
        <Route path="/regUsers" element={<RegisteredUsers/>} />
        <Route path="/pending-reports" element={<PendingReports />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/issue-reports" element={<IssueReports />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
};

export default App;
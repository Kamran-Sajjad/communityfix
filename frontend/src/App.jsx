import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import UserDashboard from './pages/residents/UserDashboard';
import FeedbackPage from "./pages/residents/FeedbackPage";
import SettingsPage from "./pages/residents/SettingsPage";

import UserDashboard from "./pages/residents/Dashboard";
import FAQ from "./pages/residents/FAQ";
// import UserDashboard from './pages/residents/UserDashboard';

// import SDashboard from './pages/serviceTeam/ServiceTeamDashboard';
import STDashboard from "./pages/serviceTeam/MechanicDashboard";
import ReportsPage from "./pages/serviceTeam/ReportsPage";
import Home from "./pages/Home";
import AssignedIssues from "./pages/serviceTeam/AssignedIssuesPage";

import ReviewsPage from "./pages/serviceTeam/ReviewsPage";
import SignUp from "./pages/auth/SignUp";
// import Login from './pages/auth/login';
import AboutUs from "./pages/residents/AboutUs";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import OtpVerification from "./pages/auth/OtpVerification";
import NewPassword from "./pages/auth/NewPassword";
import TermsAndConditionsPage from "./pages/auth/TermsAndConditionsPage";

// import ReviewsPage from './pages/serviceTeam/ReviewsPage';
import ListedIssuesPage from "./pages/residents/ListedIssuesPage";
import AddIssuePage from "./pages/residents/AddIssuePage";
import ReviewsAndComments from "./pages/residents/ReviewsAndComments";

// import Home from "./pages/Home";
// import UserDashboard from "./pages/residents/UserDashboard";
// import Test from "./pages/admin/Test";
import Admindb from "./pages/admin/Admindb";
import RequestedUser from "./pages/admin/RequestedUser";
import RequestedReports from "./pages/admin/RequestedReports";
import { AdHeader } from "./components/Dashboard/AdHeader";
import RegisteredUsers from "./pages/admin/RegisteredUsers";
import { PendingReports } from "./components/Dashboard/PendingReports";
import Analytics from "./pages/admin/Analytics";
import IssueReports from "./components/Dashboard/IssueReports";
import Reports from "./pages/admin/Reports";
import Feedbackhistory from "./components/Dashboard/Feedbackhistory";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residents/dashboard" element={<UserDashboard />} />
        <Route path="/residents/FAQ" element={<FAQ />} />

        <Route path="/residents/FeedbackPage" element={<FeedbackPage />} />
        <Route path="/residents/SettingsPage" element={<SettingsPage />} />
        <Route path="/residents/AboutUs" element={<AboutUs />} />
        <Route
          path="/serviceTeam/MechanicDashboard"
          element={<STDashboard />}
        />
        <Route path="/serviceTeam/ReportsPage" element={<ReportsPage />} />
        <Route
          path="/serviceTeam/AssignedIssuesPage"
          element={<AssignedIssues />}
        />

        <Route path="/serviceTeam/ReviewsPage" element={<ReviewsPage />} />

        <Route path="/auth/SignUp" element={<SignUp />} />
        <Route path="/auth/Login" element={<Login />} />
        <Route path="/auth/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/auth/OtpVerification" element={<OtpVerification />} />
        <Route path="/auth/NewPassword" element={<NewPassword />} />
        <Route path="/auth/TermsAndConditionsPage" element={<TermsAndConditionsPage />} />

        <Route
          path="/residents/ListedIssuesPage"
          element={<ListedIssuesPage />}
        />
        <Route path="/residents/AddIssuePage" element={<AddIssuePage />} />
        <Route path="/residents/ReviewsAndComments" element={<ReviewsAndComments />} />

        {/* Add more routes for admin and service team here */}

        {/* <Route path="/admin/test" element={<Test />} /> */}

        <Route path="/admindb" element={<Admindb />} />
        <Route path="/requestedusers" element={<RequestedUser />} />
        <Route path="/requestedreports" element={<RequestedReports />} />
        <Route path="/adheader" element={<AdHeader />} />
        <Route path="/Feedbackhistory" element={<Feedbackhistory />} />
        <Route path="/regUsers" element={<RegisteredUsers />} />
        <Route path="/pending-reports" element={<PendingReports />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/issue-reports" element={<IssueReports />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
};

export default App;

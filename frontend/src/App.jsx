

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import FeedbackPage from "./pages/residents/FeedbackPage";
import SettingsPage from "./pages/residents/SettingsPage";

import UserDashboard from "./pages/residents/Dashboard";
import FAQ from "./pages/residents/FAQ";

import STDashboard from "./pages/serviceTeam/MechanicDashboard";
import ReportsPage from "./pages/serviceTeam/ReportsPage";
import Home from "./pages/Home";
import AssignedIssues from "./pages/serviceTeam/AssignedIssuesPage";

import ReviewsPage from "./pages/serviceTeam/ReviewsPage";
import SignUp from "./pages/auth/SignUp";
import AboutUs from "./pages/residents/AboutUs";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import OtpVerification from "./pages/auth/OtpVerification";
import NewPassword from "./pages/auth/NewPassword";
import TermsAndConditionsPage from "./pages/auth/TermsAndConditionsPage";
import ListedIssuesPage from "./pages/residents/ListedIssuesPage";
import AddIssuePage from "./pages/residents/AddIssuePage";
import ReviewsAndComments from "./pages/residents/ReviewsAndComments";

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
// <<<<<<< resident/backend
import { AuthProvider } from "./context/AuthContext";
// =======
// >>>>>>> admin/kamran

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/SignUp" element={<SignUp />} />
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/auth/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/auth/OtpVerification" element={<OtpVerification />} />
          <Route path="/auth/verify-otp" element={<OtpVerification />} />
          <Route path="/auth/NewPassword" element={<NewPassword />} />
          <Route
            path="/auth/TermsAndConditionsPage"
            element={<TermsAndConditionsPage />}
          />

          <Route
            path="/residents/dashboard"
            element={
              isAuthenticated && user?.accountType === "resident" ? (
                <UserDashboard />
              ) : (
                <Navigate to="/auth/Login" />
              )
            }
          />

          <Route path="/residents/FAQ" element={<FAQ />} />
          <Route path="/residents/FeedbackPage" element={<FeedbackPage />} />
          <Route path="/residents/SettingsPage" element={<SettingsPage />} />
          <Route path="/residents/AboutUs" element={<AboutUs />} />
          <Route
            path="/residents/ReviewsAndComments/:issueId"
            element={<ReviewsAndComments />}
          />
          <Route
            path="/residents/ListedIssuesPage"
            element={<ListedIssuesPage />}
          />
          <Route path="/residents/AddIssuePage" element={<AddIssuePage />} />
       

          <Route
            path="/serviceTeam/MechanicDashboard"
            element={
              isAuthenticated && user?.accountType === "serviceTeam" ? (
                <STDashboard />
              ) : (
                <Navigate to="/auth/Login" />
              )
            }
          />
          <Route path="/serviceTeam/ReportsPage" element={<ReportsPage />} />
          <Route
            path="/serviceTeam/AssignedIssuesPage"
            element={<AssignedIssues />}
          />

          <Route path="/serviceTeam/ReviewsPage" element={<ReviewsPage />} />

          <Route
            path="/admin/admindb"
            element={
              isAuthenticated && user?.accountType === "admin" ? (
                <Admindb />
              ) : (
                <Navigate to="/auth/Login" />
              )
            }
          />
          <Route path="/admin/requestedusers" element={<RequestedUser />} />
          <Route
            path="/admin/requestedreports"
            element={<RequestedReports />}
          />
          <Route path="/admin/adheader" element={<AdHeader />} />
          <Route path="/admin/Feedbackhistory" element={<Feedbackhistory />} />
          <Route path="/admin/regUsers" element={<RegisteredUsers />} />
          <Route path="/admin/pending-reports" element={<PendingReports />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/issue-reports" element={<IssueReports />} />
          <Route path="/admin/reports" element={<Reports />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Router>
    </AuthProvider>

  );
};

export default App;

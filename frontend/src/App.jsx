

// import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// import FeedbackPage from "./pages/residents/FeedbackPage";
// import SettingsPage from "./pages/residents/SettingsPage";

// import UserDashboard from "./pages/residents/Dashboard";
// import FAQ from "./pages/residents/FAQ";

// import STDashboard from "./pages/serviceTeam/MechanicDashboard";
// import ReportsPage from "./pages/serviceTeam/ReportsPage";
// import Home from "./pages/Home";
// import AssignedIssues from "./pages/serviceTeam/AssignedIssuesPage";

// import ReviewsPage from "./pages/serviceTeam/ReviewsPage";
// import SignUp from "./pages/auth/SignUp";
// import AboutUs from "./pages/residents/AboutUs";
// import Login from "./pages/auth/Login";
// import ForgotPassword from "./pages/auth/ForgotPassword";
// import OtpVerification from "./pages/auth/OtpVerification";
// import NewPassword from "./pages/auth/NewPassword";
// import TermsAndConditionsPage from "./pages/auth/TermsAndConditionsPage";
// import ListedIssuesPage from "./pages/residents/ListedIssuesPage";
// import AddIssuePage from "./pages/residents/AddIssuePage";
// import ReviewsAndComments from "./pages/residents/ReviewsAndComments";

// import Admindb from "./pages/admin/Admindb";
// import RequestedUser from "./pages/admin/RequestedUser";
// import RequestedReports from "./pages/admin/RequestedReports";
// import { AdHeader } from "./components/Dashboard/AdHeader";
// import RegisteredUsers from "./pages/admin/RegisteredUsers";
// import { PendingReports } from "./components/Dashboard/PendingReports";
// import Analytics from "./pages/admin/Analytics";
// import IssueReports from "./components/Dashboard/IssueReports";
// import Reports from "./pages/admin/Reports";
// import Feedbackhistory from "./components/Dashboard/Feedbackhistory";
// // <<<<<<< resident/backend
// import { AuthProvider } from "./context/AuthContext";
// // =======
// // >>>>>>> admin/kamran

// const App = () => {
//   const { isAuthenticated, user } = useSelector((state) => state.auth);

//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/auth/SignUp" element={<SignUp />} />
//           <Route path="/auth/Login" element={<Login />} />
//           <Route path="/auth/ForgotPassword" element={<ForgotPassword />} />
//           <Route path="/auth/OtpVerification" element={<OtpVerification />} />
//           <Route path="/auth/verify-otp" element={<OtpVerification />} />
//           <Route path="/auth/NewPassword" element={<NewPassword />} />
//           <Route
//             path="/auth/TermsAndConditionsPage"
//             element={<TermsAndConditionsPage />}
//           />

//           <Route
//             path="/residents/dashboard"
//             element={
//               isAuthenticated && user?.accountType === "resident" ? (
//                 <UserDashboard />
//               ) : (
//                 <Navigate to="/auth/Login" />
//               )
//             }
//           />

//           <Route path="/residents/FAQ" element={<FAQ />} />
//           <Route path="/residents/FeedbackPage" element={<FeedbackPage />} />
//           <Route path="/residents/SettingsPage" element={<SettingsPage />} />
//           <Route path="/residents/AboutUs" element={<AboutUs />} />
//           <Route
//             path="/residents/ReviewsAndComments/:issueId"
//             element={<ReviewsAndComments />}
//           />
//           <Route
//             path="/residents/ListedIssuesPage"
//             element={<ListedIssuesPage />}
//           />
//           <Route path="/residents/AddIssuePage" element={<AddIssuePage />} />


//           <Route
//             path="/serviceTeam/MechanicDashboard"
//             element={
//               isAuthenticated && user?.accountType === "serviceTeam" ? (
//                 <STDashboard />
//               ) : (
//                 <Navigate to="/auth/Login" />
//               )
//             }
//           />
//           <Route path="/serviceTeam/ReportsPage" element={<ReportsPage />} />
//           <Route
//             path="/serviceTeam/AssignedIssuesPage"
//             element={<AssignedIssues />}
//           />

//           <Route path="/serviceTeam/ReviewsPage" element={<ReviewsPage />} />

//           <Route
//             path="/admin/admindb"
//             element={
//               isAuthenticated && user?.accountType === "admin" ? (
//                 <Admindb />
//               ) : (
//                 <Navigate to="/auth/Login" />
//               )
//             }
//           />
//           <Route path="/admin/requestedusers" element={<RequestedUser />} />
//           <Route
//             path="/admin/requestedreports"
//             element={<RequestedReports />}
//           />
//           <Route path="/admin/adheader" element={<AdHeader />} />
//           <Route path="/admin/Feedbackhistory" element={<Feedbackhistory />} />
//           <Route path="/admin/regUsers" element={<RegisteredUsers />} />
//           <Route path="/admin/pending-reports" element={<PendingReports />} />
//           <Route path="/admin/analytics" element={<Analytics />} />
//           <Route path="/admin/issue-reports" element={<IssueReports />} />
//           <Route path="/admin/reports" element={<Reports />} />
//         </Routes>
//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="colored"
//         />
//       </Router>
//     </AuthProvider>

//   );
// };

// export default App;
















// import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// import FeedbackPage from "./pages/residents/FeedbackPage";
// import SettingsPage from "./pages/residents/SettingsPage";
// import UserDashboard from "./pages/residents/Dashboard";
// import FAQ from "./pages/residents/FAQ";
// import STDashboard from "./pages/serviceTeam/MechanicDashboard";
// import ReportsPage from "./pages/serviceTeam/ReportsPage";
// import Home from "./pages/Home";
// import AssignedIssues from "./pages/serviceTeam/AssignedIssuesPage";
// import ReviewsPage from "./pages/serviceTeam/ReviewsPage";
// import SignUp from "./pages/auth/SignUp";
// import AboutUs from "./pages/residents/AboutUs";
// import Login from "./pages/auth/Login";
// import ForgotPassword from "./pages/auth/ForgotPassword";
// import OtpVerification from "./pages/auth/OtpVerification";
// import NewPassword from "./pages/auth/NewPassword";
// import TermsAndConditionsPage from "./pages/auth/TermsAndConditionsPage";
// import ListedIssuesPage from "./pages/residents/ListedIssuesPage";
// import AddIssuePage from "./pages/residents/AddIssuePage";
// import ReviewsAndComments from "./pages/residents/ReviewsAndComments";
// import Admindb from "./pages/admin/Admindb";
// import RequestedUser from "./pages/admin/RequestedUser";
// import RequestedReports from "./pages/admin/RequestedReports";
// import { AdHeader } from "./components/Dashboard/AdHeader";
// import RegisteredUsers from "./pages/admin/RegisteredUsers";
// import { PendingReports } from "./components/Dashboard/PendingReports";
// import Analytics from "./pages/admin/Analytics";
// import IssueReports from "./components/Dashboard/IssueReports";
// import Reports from "./pages/admin/Reports";
// import Feedbackhistory from "./components/Dashboard/Feedbackhistory";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./components/ProtectedRoute";  // Import ProtectedRoute component

// const App = () => {
//   const { isAuthenticated, user } = useSelector((state) => state.auth);

//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/auth/SignUp" element={<SignUp />} />
//           <Route path="/auth/Login" element={<Login />} />
//           <Route path="/auth/ForgotPassword" element={<ForgotPassword />} />
//           <Route path="/auth/OtpVerification" element={<OtpVerification />} />
//           <Route path="/auth/NewPassword" element={<NewPassword />} />
//           <Route path="/auth/TermsAndConditionsPage" element={<TermsAndConditionsPage />} />

//           {/* Protected Routes for Residents */}
//           <Route
//             path="/residents/dashboard"
//             element={
//               <ProtectedRoute allowedAccountTypes={['resident']}>
//                 <UserDashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/residents/FAQ" element={<FAQ />} />
//           <Route path="/residents/FeedbackPage" element={<FeedbackPage />} />
//           <Route path="/residents/SettingsPage" element={<SettingsPage />} />
//           <Route path="/residents/AboutUs" element={<AboutUs />} />
//           <Route path="/residents/ReviewsAndComments/:issueId" element={<ReviewsAndComments />} />
//           <Route path="/residents/ListedIssuesPage" element={<ListedIssuesPage />} />
//           <Route path="/residents/AddIssuePage" element={<AddIssuePage />} />

//           {/* Protected Routes for Service Team */}
//           <Route
//             path="/serviceTeam/MechanicDashboard"
//             element={
//               <ProtectedRoute allowedAccountTypes={['serviceTeam']}>
//                 <STDashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/serviceTeam/ReportsPage" element={<ReportsPage />} />
//           <Route path="/serviceTeam/AssignedIssuesPage" element={<AssignedIssues />} />
//           <Route path="/serviceTeam/ReviewsPage" element={<ReviewsPage />} />

//           {/* Protected Routes for Admin */}
//           <Route
//             path="/admin/admindb"
//             element={
//               <ProtectedRoute allowedAccountTypes={['admin']}>
//                 <Admindb />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/admin/requestedusers" element={<RequestedUser />} />
//           <Route path="/admin/requestedreports" element={<RequestedReports />} />
//           <Route path="/admin/adheader" element={<AdHeader />} />
//           <Route path="/admin/Feedbackhistory" element={<Feedbackhistory />} />
//           <Route path="/admin/regUsers" element={<RegisteredUsers />} />
//           <Route path="/admin/pending-reports" element={<PendingReports />} />
//           <Route path="/admin/analytics" element={<Analytics />} />
//           <Route path="/admin/issue-reports" element={<IssueReports />} />
//           <Route path="/admin/reports" element={<Reports />} />
//         </Routes>
//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="colored"
//         />
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;
















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
// <<<<<<< feature/nizam
// =======
import IssueDetailsPage from "./pages/admin/IssueDetailsPage";


// > resident/backend
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";  // Import ProtectedRoute component
import CreateAdmin from "./pages/admin/createadmin";
import UpdateProfile from "./pages/admin/UpdateProfile";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/auth/SignUp" element={<SignUp />} />
          <Route path="/auth/Login" element={<Login />} />
          <Route path="/auth/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/auth/OtpVerification" element={<OtpVerification />} />
          <Route path="/auth/NewPassword" element={<NewPassword />} />
          <Route path="/auth/TermsAndConditionsPage" element={<TermsAndConditionsPage />} />

          {/* Protected Routes for Residents */}
          <Route
            path="/residents/dashboard"
            element={
              <ProtectedRoute allowedAccountTypes={['resident']}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/residents/FAQ"
            element={
              <ProtectedRoute allowedAccountTypes={['resident']}>
                <FAQ />
              </ProtectedRoute>
            }
          />
          <Route
            path="/residents/FeedbackPage"
            element={
              <ProtectedRoute allowedAccountTypes={['resident']}>
                <FeedbackPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/residents/SettingsPage"
            element={
              <ProtectedRoute allowedAccountTypes={['resident']}>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/residents/AboutUs"
            element={
              <ProtectedRoute allowedAccountTypes={['resident']}>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/residents/ReviewsAndComments/:issueId"
            element={
              <ProtectedRoute allowedAccountTypes={['resident']}>
                <ReviewsAndComments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/residents/ListedIssuesPage"
            element={
              <ProtectedRoute allowedAccountTypes={['resident']}>
                <ListedIssuesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/residents/AddIssuePage"
            element={
              <ProtectedRoute allowedAccountTypes={['resident']}>
                <AddIssuePage />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes for Service Team */}
          <Route
            path="/serviceTeam/MechanicDashboard"
            element={
              <ProtectedRoute allowedAccountTypes={['serviceTeam']}>
                <STDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/serviceTeam/ReportsPage"
            element={
              <ProtectedRoute allowedAccountTypes={['serviceTeam']}>
                <ReportsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/serviceTeam/AssignedIssuesPage"
            element={
              <ProtectedRoute allowedAccountTypes={['serviceTeam']}>
                <AssignedIssues />
              </ProtectedRoute>
            }
          />
          <Route
            path="/serviceTeam/ReviewsPage"
            element={
              <ProtectedRoute allowedAccountTypes={['serviceTeam']}>
                <ReviewsPage />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes for Admin */}
          <Route
            path="/admin/admindb"
            element={
              <ProtectedRoute allowedAccountTypes={['admin']}>
                <Admindb />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/requestedusers"
            element={
              <ProtectedRoute allowedAccountTypes={['admin']}>
                <RequestedUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/requestedreports"
            // <<<<<<< feature/nizam
            element={
              <ProtectedRoute allowedAccountTypes={['admin']}>
                <RequestedReports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/adheader"
            element={
              <ProtectedRoute allowedAccountTypes={['admin']}>
                <AdHeader />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/Feedbackhistory"
            element={
              <ProtectedRoute allowedAccountTypes={['admin']}>
                <Feedbackhistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/regUsers"
            element={
              <ProtectedRoute allowedAccountTypes={['admin']}>
                <RegisteredUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/pending-reports"
            element={
              <ProtectedRoute allowedAccountTypes={['admin']}>
                <PendingReports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <ProtectedRoute allowedAccountTypes={['admin']}>
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/issue-reports"
            element={
              <ProtectedRoute allowedAccountTypes={['admin']}>
                <IssueReports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/reports"
            element={
              <ProtectedRoute allowedAccountTypes={['admin']}>
                <Reports />
              </ProtectedRoute>
            }
          />
          <Route

            element={<RequestedReports />}
          />
          <Route path="/admin/adheader" element={<AdHeader />} />
          <Route path="/admin/Feedbackhistory" element={<Feedbackhistory />} />
          <Route path="/admin/regUsers" element={<RegisteredUsers />} />
          <Route path="/admin/pending-reports" element={<PendingReports />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/createadmin" element={<CreateAdmin />} />
          <Route path="/admin/updateprofile" element={<UpdateProfile />} />
          <Route path="/admin/issue-reports" element={<IssueReports />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/issue-details/:issueId" element={<IssueDetailsPage />} />


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

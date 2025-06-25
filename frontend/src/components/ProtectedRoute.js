// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { useSelector } from "react-redux";

// const ProtectedRoute = ({ children, allowedAccountTypes }) => {
//   const navigate = useNavigate();
//   const { isAuthenticated, user } = useSelector((state) => state.auth);

//   // useEffect to perform redirection
//   useEffect(() => {
//     // If not authenticated, redirect to login
//     if (!isAuthenticated) {
//       navigate("/auth/Login");
//     }

//     // If the user's account type doesn't match the allowed types, redirect to login
//     if (user && !allowedAccountTypes.includes(user.accountType)) {
//       navigate("/auth/Login");
//     }
//   }, [isAuthenticated, user, allowedAccountTypes, navigate]);

//   // If the conditions to redirect haven't been met, render the children (protected content)
//   return isAuthenticated && allowedAccountTypes.includes(user?.accountType)
//     ? children
//     : null; // or you can render a loading state or other content while waiting for navigation
// };

// export default ProtectedRoute;


// src/components/ProtectedRoute.js

import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedAccountTypes }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // useEffect to perform redirection
  useEffect(() => {
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      navigate("/auth/Login");
    }

    // If the user's account type doesn't match the allowed types, redirect to login
    if (user && !allowedAccountTypes.includes(user.accountType)) {
      navigate("/auth/Login");
    }
  }, [isAuthenticated, user, allowedAccountTypes, navigate]);

  // If the conditions to redirect haven't been met, render the children (protected content)
  return isAuthenticated && allowedAccountTypes.includes(user?.accountType)
    ? children
    : null; // Or render a loading state, or nothing until redirection completes
};

export default ProtectedRoute;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const handleButtonClick = () => {
//     navigate("/residents/dashboard"); // Navigate to the dashboard page
//   };
//   const handleADButtonClick = () => {
//     navigate("/admindb"); // Navigate to the admin dashboard page
//   };

//   const handleSTButtonClick = () => {
//     navigate("/serviceTeam/MechanicDashboard"); // Navigate to the dashboard page
//     // navigate("/serviceTeam/mechanic-dashboard"); // Navigate to the dashboard page
//   };
//   const handleAuthenticationScreenClick = () => {
//     navigate("/auth/SignUp"); // Navigate to the dashboard page
//     // navigate("/serviceTeam/mechanic-dashboard"); // Navigate to the dashboard page
//   };

//   return (
//     <div>
//       <h1>Welcome to CommunityFix</h1>
//       <button
//         onClick={handleButtonClick}
//         className="bg-black text-white py-2 px-4 rounded mt-4"
//       >
//         Resident Dashboard

//       </button>
//       <button
//         onClick={handleADButtonClick}
//         className="bg-black text-white py-2 px-4 rounded mt-4"
//       >
//         Admin Dashboard

//       </button>

//       <button
//         onClick={handleSTButtonClick}
//         className="bg-black text-white py-2 px-4 rounded mt-4"
//       >
//         Service Team Dashboard
//       </button>
//       <button
//         onClick={handleAuthenticationScreenClick}
//         className="bg-black text-white py-2 px-4 rounded mt-4"
//       >
//         Authentication Screens
//       </button>

//     </div>
//   );
// };

// export default Home;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";

// const Home = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate("/");
//     }, 5500);
//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-row">
//       {/* Left Section (30%) - Logo */}
//       <div className="w-[30%] bg-black flex items-center justify-center p-8">
//         <div className="relative">
//           <img
//             src={logo}
//             alt="CommunityFix Logo"
//             className="w-64 h-64 object-contain animate-[ping_2s_ease-in-out_infinite]"
//           />
//           <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 animate-[pulse_2s_ease-in-out_infinite]" />
//         </div>
//       </div>

//       {/* Right Section (70%) - Content */}
//       <div className="w-[70%] flex flex-col items-center justify-center p-8">
//         <div className="max-w-2xl w-full">
//           {/* Main Heading with Typing Animation */}
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 overflow-hidden">
//             <span className="inline-block animate-[typing_3s_steps(30,end)_forwards] border-r-4 border-r-gray-800 whitespace-nowrap">
//               Welcome to <span className="text-blue-600">CommunityFix</span>
//             </span>
//           </h1>

//           {/* Tagline with Fade-in */}
//           <p className="text-lg md:text-xl text-gray-600 mb-10 animate-[fadeIn_2s_ease-in-out_forwards] opacity-0">
//             Streamlining community maintenance with seamless repair solutions
//           </p>

//           {/* Progress Bar */}
//           <div className="w-full h-2 bg-gray-200 rounded-full mb-12 overflow-hidden">
//             <div className="h-full bg-blue-600 rounded-full animate-[progress_5s_linear_forwards]" />
//           </div>

//           {/* Quick Access Buttons */}
//           <div className="grid grid-cols-2 gap-4">
//             <button
//               onClick={() => navigate("/residents/dashboard")}
//               className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
//             >
//               Resident
//             </button>
//             <button
//               onClick={() => navigate("/admindb")}
//               className="bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
//             >
//               Admin
//             </button>
//             <button
//               onClick={() => navigate("/serviceTeam/MechanicDashboard")}
//               className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
//             >
//               Service Team
//             </button>
//             <button
//               onClick={() => navigate("/auth/SignUp")}
//               className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
//             >
//               Sign Up
//             </button>
//           </div>

//           {/* Redirect Notice */}
//           <p className="mt-12 text-gray-500 text-sm animate-[fadeIn_3s_ease-in-out_forwards] opacity-0">
//             You'll be redirected to login shortly...
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/image.png"; // Add your background image

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth/login");
    }, 5500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content Container */}
      <div className="text-center max-w-4xl z-10">
        {/* Logo with subtle animation */}

        <div className="mb-8 animate-float">
          <img
            src={logo}
            alt="CommunityFix Logo"
            className="w-32 h-32 mx-auto object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 overflow-hidden">
          <span className="animate-typing inline-block border-r-4 border-r-gray-500 whitespace-nowrap">
            Welcome to CommunityFix </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-800 mb-10 animate-fadeIn opacity-0"
          style={{ animationDelay: "1s" }}
        >
          Connecting communities with seamless maintenance solutions
        </p>

        <div className="w-full max-w-xs mx-auto mb-12">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full animate-progress" />
          </div>
          <p className="text-md text-gray-700 mt-2 animate-fadeIn opacity-0">
            Preparing your experience...
          </p>
        </div>

        <div
          className="animate-fadeIn opacity-0"
          style={{ animationDelay: "1s" }}
        >
          <p className="text-gray-700 italic">
            "Building better communities through efficient problem resolution"
          </p>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-4 right-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} CommunityFix
      </div>
    </div>
  );
};

export default Home;

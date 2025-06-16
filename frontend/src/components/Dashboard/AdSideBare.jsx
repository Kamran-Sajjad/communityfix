// import React, { useState } from "react";
// import OutsideClickHandler from "react-outside-click-handler";
// import {
//   FaUser,
//   FaExclamationCircle,
//   FaChartLine,
//   FaCog,
//   FaSignOutAlt,
//   FaChevronRight,
//   FaChevronLeft,
//   FaHome,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";

// const AdSideBare = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const closeSidebar = () => {
//     setIsExpanded(false);
//     setIsMobileOpen(false);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileOpen(!isMobileOpen);
//   };

//   const navItems = [
//     {
//       icon: <FaHome className="w-5 h-5" />,
//       text: "Home",
//       path: "/admindb",
//     },
//     {
//       icon: <FaUser className="w-5 h-5" />,
//       text: "Requested Users",
//       path: "/requestedusers",
//     },
//     {
//       icon: <FaExclamationCircle className="w-5 h-5" />,
//       text: "Requests",
//       path: "/requestedreports",
//     },
//     {
//       icon: <FaChartLine className="w-5 h-5" />,
//       text: "Analytics",
//       path: "/analytics",
//     },
//     {
//       icon: <FaCog className="w-5 h-5" />,
//       text: "Settings",
//       path: "/settings",
//     },
//     {
//       icon: <FaSignOutAlt className="w-5 h-5 text-red-500" />,
//       text: "Logout",
//       path: "/logout",
//     },
//   ];

//   return (
//     <>
//       {/* Mobile menu button - Higher z-index than sidebar */}
//       <button
//         onClick={toggleMobileMenu}
//         className={`md:hidden fixed top-4 left-4 z-40 bg-gray-800 text-white p-2 rounded-md shadow-lg transition-all ${
//           isMobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"
//         }`}
//       >
//         ☰
//       </button>

//       <OutsideClickHandler onOutsideClick={closeSidebar}>
//         <div
//           className={`fixed left-0 top-0 h-full bg-gray-900 text-white shadow-lg transition-all duration-300 ease-in-out ${
//             isExpanded ? "w-60" : "w-16"
//           } ${
//             isMobileOpen ? "translate-x-0 z-30" : "-translate-x-full md:translate-x-0 z-20"
//           }`}
//         >
//           {/* Logo Section */}
//           <div className="flex justify-center items-center py-6">
//             {isExpanded ? (
//               <img src={logo} alt="Logo" className="w-24 h-auto rounded-sm" />
//             ) : (
//               <span className="text-2xl font-bold">CF</span>
//             )}
//           </div>

//           {/* Toggle Button */}
//           <button
//             onClick={toggleSidebar}
//             className="absolute top-6 -right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition hidden md:block z-10"
//           >
//             {isExpanded ? (
//               <FaChevronLeft className="w-4 h-4" />
//             ) : (
//               <FaChevronRight className="w-4 h-4" />
//             )}
//           </button>

//           {/* Close button for mobile */}
//           <button
//             onClick={closeSidebar}
//             className="md:hidden absolute top-2 right-2 text-white p-2 z-10"
//           >
//             ✕
//           </button>

//           {/* Navigation Links */}
//           <ul className="mt-6 space-y-2 px-2">
//             {navItems.map((item, index) => (
//               <li
//                 key={index}
//                 className="group flex items-center p-3 rounded-md hover:bg-gray-700 cursor-pointer transition duration-200 relative"
//               >
//                 <Link
//                   to={item.path}
//                   className="flex items-center w-full"
//                   onClick={closeSidebar}
//                 >
//                   <span className="flex-shrink-0">{item.icon}</span>
//                   {/* Tooltip for collapsed state */}
//                   {!isExpanded && (
//                     <div className="absolute left-16 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
//                       {item.text}
//                     </div>
//                   )}
//                   {/* Text for expanded state */}
//                   {isExpanded && (
//                     <span className="ml-3 text-sm font-medium">{item.text}</span>
//                   )}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </OutsideClickHandler>
//     </>
//   );
// };

// export default AdSideBare;

import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import {
  FaUser,
  FaExclamationCircle,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaChevronRight,
  FaChevronLeft,
  FaHome,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const AdSideBare = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeSidebar = () => {
    if (isMobileOpen) setIsMobileOpen(false);
  };

  const showExpanded = isExpanded || isMobileOpen;

  const navItems = [
    {
      icon: <FaHome className="w-5 h-5" />,
      text: "Dashboard",
      path: "/admin/admindb",
    },
    {
      icon: <FaUser className="w-5 h-5" />,
      text: "Registered Users",
      path: "/admin/requestedusers",
    },
    {
      icon: <FaExclamationCircle className="w-5 h-5" />,
      text: "Issues Requests",
      path: "/admin/requestedreports",
    },
    {
      icon: <FaChartLine className="w-5 h-5" />,
      text: "Analytics",
      path: "/admin/analytics",
    },
    {
      icon: <FaCog className="w-5 h-5" />,
      text: "Settings",
      path: "/admin/settings",
    },
    {
      icon: <FaSignOutAlt className="w-5 h-5 text-red-500" />,
      text: "Logout",
      path: "/logout",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          // className="fixed inset bg-white bg-opacity-5 z-40 md:hidden"
          // className="fixed inset-0 bg-white bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Hamburger Button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-800 text-white p-2 rounded-md shadow-md"
      >
        <FaBars className="w-5 h-5" />
      </button>

      <OutsideClickHandler onOutsideClick={closeSidebar}>
        <div
          className={`fixed top-0 left-0 h-full bg-black text-white shadow-lg z-50 
          ${isMobileOpen ? (showExpanded ? "w-48" : "w-16") : "w-0 hidden"}
          transition-all duration-300 ease-in-out overflow-visible
          md:block md:${showExpanded ? "w-48" : "w-16"}`}
        >
          {/* Logo */}
          <div className="flex justify-center items-center py-6 mt-2 md:mt-0">
            {showExpanded ? (
              <img src={logo} alt="Logo" className="w-20 h-auto" />
            ) : (
              <span className="text-2xl font-bold">CF.</span>
            )}
          </div>

          {/* Toggle Button (Desktop Only) */}
          <button
            onClick={toggleSidebar}
            className="absolute top-6 -right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200 hidden md:block"
          >
            {showExpanded ? (
              <FaChevronLeft className="w-4 h-4" />
            ) : (
              <FaChevronRight className="w-4 h-4" />
            )}
          </button>

          {/* Navigation Items */}
          <ul className="mt-6 space-y-4 px-2">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="group flex items-center p-2 rounded-md hover:bg-gray-700 cursor-pointer transition-colors duration-200 relative"
              >
                <Link
                  to={item.path}
                  className="flex items-center w-full"
                  onClick={closeSidebar}
                >
                  {item.icon}
                  {!showExpanded && (
                    <div className="absolute left-14 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                      {item.text}
                    </div>
                  )}
                  {showExpanded && (
                    <span className="ml-3 text-sm font-medium">
                      {item.text}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default AdSideBare;

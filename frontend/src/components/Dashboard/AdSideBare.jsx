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
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../assets/logo.png"; // Ensure the path is correct

const AdSideBare = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const closeSidebar = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={closeSidebar}>
      <div
        className={`fixed left-0 top-0 h-screen bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out ${
          isExpanded ? "w-60" : "w-16"
        }`}
      >
        {/* Logo Section */}
        <div className="flex justify-center items-center py-6">
          {isExpanded ? (

            <img src={logo} alt="Logo" className="w-24 h-auto rounded-sm" />
          ) : (
            <span className="text-2xl font-bold">CF</span>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-6 -right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          {isExpanded ? (
            <FaChevronLeft className="w-4 h-4" />
          ) : (
            <FaChevronRight className="w-4 h-4" />
          )}
        </button>

        {/* Navigation Links */}
        <ul className="mt-6 space-y-3 px-2">
          {[
            {
              icon: <FaUser className="w-5 h-5" />,
              text: "Requested Users",
              path: "/requestedusers",
            },
            {
              icon: <FaExclamationCircle className="w-5 h-5" />,
              text: "Requests",
              path: "/requestedreports",
            },
            {
              icon: <FaChartLine className="w-5 h-5" />,
              text: "Reports",
              path: "/reports",
            },
            {
              icon: <FaChartLine className="w-5 h-5" />,
              text: "Analytics",
              path: "/analytics",
            },
            {
              icon: <FaCog className="w-5 h-5" />,
              text: "Settings",
              path: "/settings",
            },
            {
              icon: <FaSignOutAlt className="w-5 h-5 text-red-500" />,
              text: "Logout",
              path: "/logout",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="group flex items-center p-3 rounded-md hover:bg-gray-700 cursor-pointer transition duration-200 relative"
            >
              <Link
                to={item.path}
                className="flex items-center w-full"
              >
                {item.icon}
                {/* Tooltip for collapsed state */}
                {!isExpanded && (
                  <div className="absolute left-16 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {item.text}
                  </div>
                )}
                {/* Text for expanded state */}
                {isExpanded && (
                  <span className="ml-3 text-sm font-medium">{item.text}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </OutsideClickHandler>
  );
};

export default AdSideBare;
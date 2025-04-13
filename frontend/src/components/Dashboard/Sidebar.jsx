
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import {
  FaHome,
  FaBlog,
  FaUser,
  FaExclamationCircle,
  FaCommentDots,
  FaList,
  FaCog,
  FaSignOutAlt,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import logo from "../../assets/logo.png"; // Import the logo

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State for expanded/collapsed sidebar

  // Toggle sidebar state
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // Close sidebar when clicking outside
  const closeSidebar = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={closeSidebar}>
      <div
        className={`fixed h-screen bg-black text-white shadow-lg transition-all duration-300 ease-in-out ${
          isExpanded ? "w-48" : "w-16"
        }`}
      >
        {/* Logo or Text (CF.) */}
        <div className="flex justify-center items-center py-6">
          {isExpanded ? (
            <img src={logo} alt="Logo" className="w-20 h-auto" />
          ) : (
            <span className="text-2xl font-bold">CF.</span>
          )}
        </div>

        {/* Expansion Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-6 -right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200"
        >
          {isExpanded ? (
            <FaChevronLeft className="w-4 h-4" />
          ) : (
            <FaChevronRight className="w-4 h-4" />
          )}
        </button>

        {/* Menu Items */}
        <ul className="mt-6 space-y-4 px-2">
          {[
            { icon: <FaHome className="w-5 h-5" />, text: "Home" },
            // { icon: <FaBlog className="w-5 h-5" />, text: "Blog" },
            { icon: <FaUser className="w-5 h-5" />, text: "Profile" },
            { icon: <FaExclamationCircle className="w-5 h-5" />, text: "Report Issue" },
            { icon: <FaCommentDots className="w-5 h-5" />, text: "Feedback" },
            { icon: <FaList className="w-5 h-5" />, text: "Listed Issues" },
            { icon: <FaCog className="w-5 h-5" />, text: "Settings" },
            {
              icon: <FaSignOutAlt className="w-5 h-5 text-red-500" />,
              text: "Logout",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="group flex items-center p-2 rounded-md hover:bg-gray-700 cursor-pointer transition-colors duration-200 relative"
            >
              {item.icon}
              {/* Tooltip for collapsed state */}
              {!isExpanded && (
                <div className="absolute left-14 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.text}
                </div>
              )}
              {/* Text for expanded state */}
              {isExpanded && (
                <span className="ml-3 text-sm font-medium">{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </OutsideClickHandler>
  );
};

export default Sidebar;

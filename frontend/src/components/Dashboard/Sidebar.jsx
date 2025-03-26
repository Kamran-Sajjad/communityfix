


// import React from "react";
// import OutsideClickHandler from "react-outside-click-handler";
// import {
//   FaHome,
//   FaBlog,
//   FaUser,
//   FaExclamationCircle,
//   FaCommentDots,
//   FaList,
//   FaCog,
//   FaSignOutAlt,
//   FaChevronRight,
//   FaChevronLeft,
// } from "react-icons/fa";
// import logo from "../../assets/logo.png";

// const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
//   // Toggle sidebar state
//   const toggleSidebar = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   // Close sidebar when clicking outside (only on mobile)
//   const closeSidebar = () => {
//     if (mobileMenuOpen) {
//       setMobileMenuOpen(false);
//     }
//   };

//   return (
//     <>
//       {/* Mobile Overlay */}
//       {mobileMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={closeSidebar}
//         />
//       )}

//       {/* Sidebar */}
//       <OutsideClickHandler onOutsideClick={closeSidebar}>
//         <div
//           className={`fixed h-screen bg-black text-white shadow-lg transition-all duration-300 ease-in-out z-50 ${
//             mobileMenuOpen ? "w-48" : "w-0 overflow-hidden md:w-16 md:overflow-visible"
//           }`}
//         >
//           {/* Logo or Text (CF.) */}
//           <div className="flex justify-center items-center py-6">
//             {mobileMenuOpen ? (
//               <img src={logo} alt="Logo" className="w-20 h-auto" />
//             ) : (
//               <span className="text-2xl font-bold hidden md:block">CF.</span>
//             )}
//           </div>

//           {/* Expansion Button (only visible on desktop) */}
//           <button
//             onClick={toggleSidebar}
//             className="absolute top-6 -right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200 hidden md:block"
//           >
//             {mobileMenuOpen ? (
//               <FaChevronLeft className="w-4 h-4" />
//             ) : (
//               <FaChevronRight className="w-4 h-4" />
//             )}
//           </button>

//           {/* Menu Items */}
//           <ul className="mt-6 space-y-4 px-2">
//             {[
//               { icon: <FaHome className="w-5 h-5" />, text: "Home" },
//               { icon: <FaBlog className="w-5 h-5" />, text: "Blog" },
//               { icon: <FaUser className="w-5 h-5" />, text: "Profile" },
//               { icon: <FaExclamationCircle className="w-5 h-5" />, text: "Report Issue" },
//               { icon: <FaCommentDots className="w-5 h-5" />, text: "Feedback" },
//               { icon: <FaList className="w-5 h-5" />, text: "Listed Issues" },
//               { icon: <FaCog className="w-5 h-5" />, text: "Settings" },
//               {
//                 icon: <FaSignOutAlt className="w-5 h-5 text-red-500" />,
//                 text: "Logout",
//               },
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="group flex items-center p-2 rounded-md hover:bg-gray-700 cursor-pointer transition-colors duration-200 relative"
//               >
//                 {item.icon}
//                 {/* Tooltip for collapsed state */}
//                 {!mobileMenuOpen && (
//                   <div className="absolute left-14 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:block">
//                     {item.text}
//                   </div>
//                 )}
//                 {/* Text for expanded state */}
//                 {mobileMenuOpen && (
//                   <span className="ml-3 text-sm font-medium">{item.text}</span>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </OutsideClickHandler>
//     </>
//   );
// };

// export default Sidebar;

// import React from "react";
// import OutsideClickHandler from "react-outside-click-handler";
// import {
//   FaHome,
//   FaBlog,
//   FaUser,
//   FaExclamationCircle,
//   FaCommentDots,
//   FaList,
//   FaCog,
//   FaSignOutAlt,
//   FaChevronRight,
//   FaChevronLeft,
// } from "react-icons/fa";
// import logo from "../../assets/logo.png";

// const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen, isExpanded, setIsExpanded }) => {
//   // Toggle sidebar state for mobile
//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   // Toggle expand/collapse for desktop
//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   // Close sidebar when clicking outside (only on mobile)
//   const closeSidebar = () => {
//     if (mobileMenuOpen) {
//       setMobileMenuOpen(false);
//     }
//   };

//   // Determine which state to show based on screen size
//   const showExpanded = mobileMenuOpen || isExpanded;

//   return (
//     <>
//       {/* Mobile Overlay - only shown when mobile menu is open */}
//       {mobileMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={closeSidebar}
//         />
//       )}

//       {/* Sidebar */}
//       <OutsideClickHandler onOutsideClick={closeSidebar}>
//         <div
//           className={`fixed h-screen bg-black text-white shadow-lg transition-all duration-300 ease-in-out z-50 ${
//             showExpanded ? "w-48" : "w-16"
//           } ${mobileMenuOpen ? "block" : "hidden md:block"}`}
//         >
//           {/* Logo or Text (CF.) */}
//           <div className="flex justify-center items-center py-6">
//             {showExpanded ? (
//               <img src={logo} alt="Logo" className="w-20 h-auto" />
//             ) : (
//               <span className="text-2xl font-bold">CF.</span>
//             )}
//           </div>

//           {/* Expansion Button (only visible on desktop) */}
//           <button
//             onClick={toggleExpand}
//             className="absolute top-6 -right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200 hidden md:block"
//           >
//             {showExpanded ? (
//               <FaChevronLeft className="w-4 h-4" />
//             ) : (
//               <FaChevronRight className="w-4 h-4" />
//             )}
//           </button>

//           {/* Menu Items */}
//           <ul className="mt-6 space-y-4 px-2">
//             {[
//               { icon: <FaHome className="w-5 h-5" />, text: "Home" },
//               { icon: <FaBlog className="w-5 h-5" />, text: "Blog" },
//               { icon: <FaUser className="w-5 h-5" />, text: "Profile" },
//               { icon: <FaExclamationCircle className="w-5 h-5" />, text: "Report Issue" },
//               { icon: <FaCommentDots className="w-5 h-5" />, text: "Feedback" },
//               { icon: <FaList className="w-5 h-5" />, text: "Listed Issues" },
//               { icon: <FaCog className="w-5 h-5" />, text: "Settings" },
//               {
//                 icon: <FaSignOutAlt className="w-5 h-5 text-red-500" />,
//                 text: "Logout",
//               },
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="group flex items-center p-2 rounded-md hover:bg-gray-700 cursor-pointer transition-colors duration-200 relative"
//               >
//                 {item.icon}
//                 {/* Tooltip for collapsed state */}
//                 {!showExpanded && (
//                   <div className="absolute left-14 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
//                     {item.text}
//                   </div>
//                 )}
//                 {/* Text for expanded state */}
//                 {showExpanded && (
//                   <span className="ml-3 text-sm font-medium">{item.text}</span>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </OutsideClickHandler>
//     </>
//   );
// };

// export default Sidebar;

import React from "react";
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
  FaBars,
} from "react-icons/fa";
import logo from "../../assets/logo.png";

const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen, isExpanded, setIsExpanded }) => {
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle expand/collapse for desktop
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Close sidebar when clicking outside (only on mobile)
  const closeSidebar = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Determine which state to show based on screen size
  const showExpanded = mobileMenuOpen || isExpanded;

  return (
    <>
      {/* Mobile Overlay - only shown when mobile menu is open */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-white bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <OutsideClickHandler onOutsideClick={closeSidebar}>
        <div
          className={`fixed h-screen bg-black text-white shadow-lg transition-all duration-300 ease-in-out z-50 ${
            showExpanded ? "w-48" : "w-16"
          } ${mobileMenuOpen ? "block" : "hidden md:block"}`}
        >
          {/* Mobile hamburger button inside sidebar */}
          {mobileMenuOpen && (
            <button
              onClick={toggleMobileMenu}
              className="absolute top-6 left-4 text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 md:hidden"
            >
              <FaBars className="w-5 h-5" />
            </button>
          )}

          {/* Logo or Text (CF.) */}
          <div className="flex justify-center items-center py-6 mt-2 md:mt-0">
            {showExpanded ? (
              <img src={logo} alt="Logo" className="w-20 h-auto" />
            ) : (
              <span className="text-2xl font-bold">CF.</span>
            )}
          </div>

          {/* Expansion Button (only visible on desktop) */}
          <button
            onClick={toggleExpand}
            className="absolute top-6 -right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200 hidden md:block"
          >
            {showExpanded ? (
              <FaChevronLeft className="w-4 h-4" />
            ) : (
              <FaChevronRight className="w-4 h-4" />
            )}
          </button>

          {/* Menu Items */}
          <ul className="mt-6 space-y-4 px-2">
            {[
              { icon: <FaHome className="w-5 h-5" />, text: "Home" },
              { icon: <FaBlog className="w-5 h-5" />, text: "Blog" },
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
                {!showExpanded && (
                  <div className="absolute left-14 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {item.text}
                  </div>
                )}
                {/* Text for expanded state */}
                {showExpanded && (
                  <span className="ml-3 text-sm font-medium">{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default Sidebar;
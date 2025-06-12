
// import React, { useState } from "react";
// import OutsideClickHandler from "react-outside-click-handler";

// import {
//     Home,
//     User,
//     ShoppingCart,
//     MessageCircle,
//     FileText,
//     Settings,
//     LogOut,
//   } from "lucide-react";
//   import logo from "../../assets/logo.png";
//   export default function Sidebar({ mobileMenuOpen }) {
//     return (
//       <div
//         className={`${mobileMenuOpen ? "block" : "hidden"} md:block w-full md:w-[90px] bg-black flex-shrink-0 md:flex md:flex-col md:items-center py-6 absolute md:relative z-10 h-screen`}
//       >
//         {/* <div className="w-16 h-18 bg-white rounded-lg mb-10 flex items-center justify-center overflow-hidden mx-auto"> */}
//           <img src={logo} alt="Community Fix Logo" className="w-14 h-14  rounded-lg mb-10 " />
//         {/* </div> */}
  
//         <div className="flex flex-col items-center space-y-8 flex-1">
//           <button className="w-10 h-10 flex items-center justify-center text-white">
//             <Home className="w-6 h-6" />
//           </button>
  
//           <button className="w-10 h-10 flex items-center justify-center text-white relative">
//             <User className="w-6 h-6" />
//             <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">
//               1
//             </div>
//           </button>
  
//           <button className="w-10 h-10 flex items-center justify-center text-white">
//             <ShoppingCart className="w-6 h-6" />
//           </button>
  
//           <button className="w-10 h-10 flex items-center justify-center text-white">
//             <MessageCircle className="w-6 h-6" />
//           </button>
  
//           <button className="w-10 h-10 flex items-center justify-center text-white">
//             <FileText className="w-6 h-6" />
//           </button>
  
//           <button className="w-10 h-10 flex items-center justify-center text-white">
//             <Settings className="w-6 h-6" />
//           </button>
  
//           <button className="w-10 h-10 flex items-center justify-center text-red-500 mt-auto">
//             <LogOut className="w-6 h-6" />
//           </button>
//         </div>


//         {/* Expansion Button */}
//         <button>
//           onClick={toggleSidebar}
//           className="absolute top-6 -right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200"
        
//           {isExpanded ? (
//             <FaChevronLeft className="w-4 h-4" />
//           ) : (
//             <FaChevronRight className="w-4 h-4" />
//           )}
//         </button>


//         {/* Menu Items */}
//         <ul className="mt-6 space-y-4 px-2">
//           {[
//             { icon: <FaHome className="w-5 h-5" />, text: "Home" },
//             // { icon: <FaBlog className="w-5 h-5" />, text: "Blog" },
//             { icon: <FaUser className="w-5 h-5" />, text: "Profile" },
//             { icon: <FaExclamationCircle className="w-5 h-5" />, text: "Report Issue" },
//             { icon: <FaCommentDots className="w-5 h-5" />, text: "Feedback" },
//             { icon: <FaList className="w-5 h-5" />, text: "Listed Issues" },
//             { icon: <FaCog className="w-5 h-5" />, text: "Settings" },
//             {
//               icon: <FaSignOutAlt className="w-5 h-5 text-red-500" />,
//               text: "Logout",
//             },
//           ].map((item, index) => (
//             <li
//               key={index}
//               className="group flex items-center p-2 rounded-md hover:bg-gray-700 cursor-pointer transition-colors duration-200 relative"
//             >
//               {item.icon}
//               {/* Tooltip for collapsed state */}
//               {!isExpanded && (
//                 <div className="absolute left-14 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
//                   {item.text}
//                 </div>
//               )}
//               {/* Text for expanded state */}
//               {isExpanded && (
//                 <span className="ml-3 text-sm font-medium">{item.text}</span>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//   );
// };
// // </OutsideClickHandler>

// // export default Sidebar;

//   //     </div>
//   //   );
//   // }












// import React, { useState } from "react";
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

// const Sidebar = () => {
//   const [isExpanded, setIsExpanded] = useState(false); 

 
//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//   };

 
//   const closeSidebar = () => {
//     if (isExpanded) {
//       setIsExpanded(false);
//     }
//   };

//   return (
//     <OutsideClickHandler onOutsideClick={closeSidebar}>
//       <div
//         className={`fixed h-screen bg-black text-white shadow-lg transition-all duration-300 ease-in-out ${
//           isExpanded ? "w-48" : "w-16"
//         }`}
//       >
//         {/* Logo or Text (CF.) */}
//         <div className="flex justify-center items-center py-6">
//           {isExpanded ? (
//             <img src={logo} alt="Logo" className="w-20 h-auto" />
//           ) : (
//             <span className="text-2xl font-bold">CF.</span>
//           )}
//         </div>

   
//         <button
//           onClick={toggleSidebar}
//           className="absolute top-6 -right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200"
//         >
//           {isExpanded ? (
//             <FaChevronLeft className="w-4 h-4" />
//           ) : (
//             <FaChevronRight className="w-4 h-4" />
//           )}
//         </button>
//         <ul className="mt-6 space-y-4 px-2">
//           {[
//             { icon: <FaHome className="w-5 h-5" />, text: "Home" },
//             { icon: <FaBlog className="w-5 h-5" />, text: "Blog" },
//             { icon: <FaUser className="w-5 h-5" />, text: "Profile" },
//             { icon: <FaExclamationCircle className="w-5 h-5" />, text: "Report Issue" },
//             { icon: <FaCommentDots className="w-5 h-5" />, text: "Feedback" },
//             { icon: <FaList className="w-5 h-5" />, text: "Listed Issues" },
//             { icon: <FaCog className="w-5 h-5" />, text: "Settings" },
//             {
//               icon: <FaSignOutAlt className="w-5 h-5 text-red-500" />,
//               text: "Logout",
//             },
//           ].map((item, index) => (
//             <li
//               key={index}
//               className="group flex items-center p-2 rounded-md hover:bg-gray-700 cursor-pointer transition-colors duration-200 relative"
//             >
//               {item.icon}
//               {/* Tooltip for collapsed state */}
//               {!isExpanded && (
//                 <div className="absolute left-14 bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
//                   {item.text}
//                 </div>
//               )}
//               {/* Text for expanded state */}
//               {isExpanded && (
//                 <span className="ml-3 text-sm font-medium">{item.text}</span>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </OutsideClickHandler>
//   );
// };

// export default Sidebar;

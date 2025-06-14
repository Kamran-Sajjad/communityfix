
// import React, { useState, useRef, useEffect } from "react";
// import { Bell, X } from "lucide-react";
// import { useNavigate } from "react-router-dom"; // useNavigate instead of useRouter

// const Header = ({ title = "Welcome back" }) => {
//   const navigate = useNavigate(); // useNavigate hook from react-router-dom
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       text: "New service request from Kamran",
//       time: "2 mins ago",
//       read: false,
//     },
//     {
//       id: 2,
//       text: "Service completed for Nizam",
//       time: "1 hour ago",
//       read: true,
//     },
//     {
//       id: 3,
//       text: "Urgent: Pipe leak reported by Basit",
//       time: "3 hours ago",
//       read: false,
//     },
//   ]);

//   const notificationRef = useRef(null);

//   // Close notifications when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (notificationRef.current && !notificationRef.current.contains(event.target)) {
//         setShowNotifications(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const unreadCount = notifications.filter((n) => !n.read).length;

//   const markAllAsRead = () => {
//     setNotifications(notifications.map((n) => ({ ...n, read: true })));
//   };

//   const handleNotificationClick = (id) => {
//     // Mark as read when clicked
//     setNotifications(notifications.map((n) => 
//       n.id === id ? { ...n, read: true } : n
//     ));
//     // Navigate to ReportsPage
//     navigate("/serviceTeam/ReportsPage");
//     setShowNotifications(false);
//   };

//   return (
//     <header className="mb-2 p-2 px-2 flex flex-col sm:flex-row items-center justify-between gap-2">
//       {/* Title */}
//       <h1
//         className="
//           w-full text-center 
//           sm:text-left sm:pl-25  
//           md:pl-72               
//           lg:pl-80              
//           font-bold 
//           text-xl sm:text-2xl md:text-3xl
//         "
//       >
//         {title}
//       </h1>

//       {/* Notification + Profile */}
//       <div className="flex items-center justify-center sm:justify-end gap-4 w-full sm:w-auto">
//         {/* Notification Icon */}
//         <div className="relative" ref={notificationRef}>
//           <button
//             className="p-2 rounded-full bg-white hover:bg-gray-100 transition relative"
//             onClick={() => setShowNotifications(!showNotifications)}
//           >
//             <Bell className="w-5 h-5" />
//             {unreadCount > 0 && (
//               <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
//             )}
//           </button>

//           {/* Notification Panel */}
//           {showNotifications && (
//             <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
//               <div className="p-3 border-b border-gray-200 flex justify-between items-center">
//                 <h3 className="font-bold">Notifications</h3>
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={markAllAsRead}
//                     className="text-xs text-blue-600 hover:text-blue-800"
//                   >
//                     Mark all read
//                   </button>
//                   <button
//                     onClick={() => setShowNotifications(false)}
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     <X className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//               <div className="max-h-80 overflow-y-auto">
//                 {notifications.length > 0 ? (
//                   notifications.map((notification) => (
//                     <div
//                       key={notification.id}
//                       className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
//                         !notification.read ? "bg-blue-50" : ""
//                       }`}
//                       onClick={() => handleNotificationClick(notification.id)}
//                     >
//                       <p className="text-sm">{notification.text}</p>
//                       <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="p-4 text-center text-gray-500">
//                     No new notifications
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Profile Section */}
//         <div className="flex items-center gap-2 sm:gap-3">
//           <div className="h-8 w-8 sm:h-7 sm:w-10 md:h-10 md:w-12 rounded-full bg-gray-300 flex items-center justify-center">
//             <span className="text-sm sm:text-lg font-bold">A</span>
//           </div>
//           <div className="hidden sm:block">
//             <h2 className="font-bold text-sm md:text-base">Arslan</h2>
//             <p className="text-xs md:text-sm text-gray-600">Painter</p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




"use client";

import React from "react";
import Notification from "./Notification"; // Adjust the import path as needed

// const Header = ({ title = "Welcome back" }) => {
const Header = ({ firstName= "Welcome back" }) => {
  const initialNotifications = [
    {
      id: 1,
      text: "New service request from Kamran",
      time: "2 mins ago",
      read: false,
    },
    {
      id: 2,
      text: "Service completed for Nizam",
      time: "1 hour ago",
      read: true,
    },
    {
      id: 3,
      text: "Urgent: Pipe leak reported by Basit",
      time: "3 hours ago",
      read: false,
    },
  ];
 // Get current time for dynamic greeting
 const currentHour = new Date().getHours();
 let greeting = "Welcome";
 
 if (currentHour < 12) {
   greeting = "Good morning";
 } else if (currentHour < 18) {
   greeting = "Good afternoon";
 } else {
   greeting = "Good evening";
 }
  return (
    <header className="mb-2 p-2 px-2 flex flex-col sm:flex-row items-center justify-between gap-2">
      {/* Title */}
      <h1 className="w-full text-center sm:text-left sm:pl-25 md:pl-72 lg:pl-80 font-bold text-xl sm:text-2xl md:text-3xl">
       {greeting}, {firstName}!
      </h1>

      {/* Notification + Profile */}
      <div className="flex items-center justify-center sm:justify-end gap-4 w-full sm:w-auto">
        {/* Using the Notification component */}
        <Notification initialNotifications={initialNotifications} />

        {/* Profile Section - Unchanged */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-8 w-8 sm:h-7 sm:w-10 md:h-10 md:w-12 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-sm sm:text-lg font-bold">A</span>
          </div>
          <div className="hidden sm:block">
            <h2 className="font-bold text-sm md:text-base">{firstName}</h2>
            <p className="text-xs md:text-sm text-gray-600">Painter</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
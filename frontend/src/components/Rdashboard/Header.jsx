


// "use client";

// import { ChevronDown, Menu, Bell } from "lucide-react"; // Added Bell to imports
// import logo from "../../assets/logo.png";
// import Notification from "./Notification";

// export default function Header({ setMobileMenuOpen, mobileMenuOpen }) {
//   const notifications = [
//     {
//       id: 1,
//       text: "New maintenance request received",
//       time: "15 mins ago",
//       read: false
//     },
//     {
//       id: 2,
//       text: "System update completed",
//       time: "2 hours ago",
//       read: true
//     },
//     {
//       id: 3,
//       text: "Urgent: Server maintenance scheduled",
//       time: "1 day ago",
//       read: false
//     }
//   ];

//   return (
//     <div className="bg-black text-white p-4 flex items-center justify-between">
//       {/* Mobile menu button */}
//       {!mobileMenuOpen && (
//         <button 
//           onClick={() => setMobileMenuOpen(true)}
//           className="md:hidden mr-3"
//         >
//           <Menu className="w-6 h-6" />
//         </button>
//       )}

//       {/* Logo - visible only on mobile */}
//       <div className="md:hidden flex items-center">
//         <img src={logo} alt="Community Fix Logo" className="w-7 h-7 rounded" />
//       </div>

//       {/* Notification and profile - aligned to right */}
//       <div className="flex items-center ml-auto">
//         <div className="mr-4">
//           <Notification 
//             initialNotifications={notifications}
//             navigateTo="/residents/FeedbackPage"
//             customIcon={({ unreadCount }) => (
//               <div className="cursor-pointer relative">
//                 <Bell className="w-5 h-5 md:w-6 md:h-6 text-white" />
//                 {unreadCount > 0 && (
//                   <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
//                     {unreadCount}
//                   </div>
//                 )}
//               </div>
//             )}
//           />
//         </div>

//         <div className="flex items-center">
//           <img src={logo} alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
//           {/* <ChevronDown className="w-4 h-4 ml-1 hidden md:block text-white" /> */}
//         </div>
//       </div>
//     </div>
//   );
// }








// "use client";

// import { ChevronDown, Menu } from "lucide-react";
// import logo from "../../assets/logo.png";
// import NotificationBell from "../../components/Notification/NotificationBell";

// export default function Header({ setMobileMenuOpen, mobileMenuOpen }) {
//   return (
//     <div className="bg-black text-white p-4 flex items-center justify-between">
//       {/* Mobile menu button */}
//       {!mobileMenuOpen && (
//         <button 
//           onClick={() => setMobileMenuOpen(true)}
//           className="md:hidden mr-3"
//         >
//           <Menu className="w-6 h-6" />
//         </button>
//       )}

//       {/* Logo - visible only on mobile */}
//       <div className="md:hidden flex items-center">
//         <img src={logo} alt="Community Fix Logo" className="w-7 h-7 rounded" />
//       </div>

//       {/* Notification and profile - aligned to right */}
//       <div className="flex items-center ml-auto">
//         <div className="mr-4">
//           <NotificationBell color="white"/>
//         </div>

//         <div className="flex items-center">
//           <img src={logo} alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
//         </div>
//       </div>
//     </div>
//   );
// }



















"use client";

import { Menu } from "lucide-react";
import logo from "../../assets/logo.png";
import NotificationBell from "../../components/Notification/NotificationBell";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header({ setMobileMenuOpen, mobileMenuOpen }) {
  const [userInitial, setUserInitial] = useState("U");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/users/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const fullName = res.data?.fullName || "User";
        const firstLetter = fullName.trim().charAt(0).toUpperCase();
        setUserInitial(firstLetter);
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="bg-black text-white p-4 flex items-center justify-between">
      {/* Mobile menu button */}
      {!mobileMenuOpen && (
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden mr-3"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Logo - visible only on mobile */}
      <div className="md:hidden flex items-center">
        <img src={logo} alt="Community Fix Logo" className="w-7 h-7 rounded" />
      </div>

      {/* Notification and profile - aligned to right */}
      <div className="flex items-center ml-auto">
        <div className="mr-4">
          <NotificationBell color="white" />
        </div>

        {/* User Initial Avatar with Gray Background */}
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-300 text-black flex items-center justify-center font-bold text-sm md:text-base">
          {userInitial}
        </div>
      </div>
    </div>
  );
}

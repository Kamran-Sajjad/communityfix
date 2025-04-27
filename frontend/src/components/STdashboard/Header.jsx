// // components/Header.jsx
// import { Bell } from "lucide-react";

// export default function Header() {
//   return (
//     <div className="h-20 bg-black flex items-center justify-between px-6">
//       <h1 className="text-white text-xl">Welcome Back, Mr. Arslan</h1>
//       <div className="w-10 h-10 bg-gray-600 rounded-md flex items-center justify-center relative">
//         <Bell className="w-5 h-5 text-white" />
//         <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
//       </div>
//     </div>
//   );
// }

// // components/Header.jsx
// import { Bell } from "lucide-react";

// const Header=()=> {
// // export default function Header() {
//   return (
//     <div className="h-20 bg-black flex items-center justify-between px-4 lg:px-6 ">
//       <h1 className="text-white text-lg lg:text-xl sm:pl-20 lg:pl-72">Welcome Back, Mr. Arslan</h1>
//       <div className="w-10 h-10 bg-gray-600 rounded-md flex items-center justify-center relative">
//         <Bell className="w-5 h-5 text-white" />
//         <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
//       </div>
//     </div>
//   );
// }
// export default Header;










import React from "react";
import { Bell } from "lucide-react";

const Header = ({ title = "Welcome back" }) => {
  return (
    <header className="mb-2 p-2 px-2 flex flex-col sm:flex-row items-center justify-between gap-2">
      {/* Title with responsive positioning */}
      <h1 className={`
        w-full text-center 
        sm:text-left sm:pl-25  
        md:pl-72               
        lg:pl-80              
        font-bold 
        text-xl sm:text-2xl md:text-3xl
      `}>
        {title}
      </h1>

      {/* Notification + Profile - Always in a row */}
      <div className="flex items-center justify-center sm:justify-end gap-4 w-full sm:w-auto">
        {/* Notification Icon */}
        <button
          className="p-2 rounded-full bg-white hover:bg-gray-100 transition relative"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-8 w-8 sm:h-7 sm:w-10 md:h-10 md:w-12 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-sm sm:text-lg font-bold">A</span>
          </div>
          <div className="hidden sm:block">
            <h2 className="font-bold text-sm md:text-base">Arslan</h2>
            <p className="text-xs md:text-sm text-gray-600">Painter</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
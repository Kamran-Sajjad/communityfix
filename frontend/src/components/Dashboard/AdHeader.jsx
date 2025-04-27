// import React from "react";

// export const AdHeader = ({ title = "Dashboard, Admin" }) => {
//   return (
//     <header className="mb-2 p-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
//       {/* Title - Always on top or left depending on screen size */}
//       <h1 className="text-2xl ml-16 md:text-3xl font-bold sm:flex align-center">
//         {title}
//       </h1>

//       {/* Right side controls */}
//       <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-normal">
//         {/* Notification Bell Button */}
//         <button
//           className="p-2 rounded-full bg-white hover:bg-gray-100 transition relative"
//           aria-label="Notifications"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
//           </svg>
//           <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
//         </button>

//         {/* Profile Section - collapses on small screens */}
//         <div className="flex items-center gap-2 sm:gap-3">
//           <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-gray-300 flex items-center justify-center">
//             <span className="text-sm sm:text-lg font-bold">U</span>
//           </div>
//           <div className="hidden sm:block">
//             <h2 className="font-bold text-sm md:text-base">Usman</h2>
//             <p className="text-xs md:text-sm text-gray-600">Society Manager</p>
//           </div>
//         </div>
//         {/* </div> */}
//       </div>
//     </header>
//   );
// };






import React from "react";
import { Bell } from "lucide-react";

export const AdHeader = ({ title = "Dashboard, Admin" }) => {
  return (
    <header className="mb-2 p-2 px-2 flex flex-col sm:flex-row items-center sm:justify-between gap-2">
      
      {/* Title - Center on small, left on larger */}
      <h1 className="w-full text-center sm:text-left sm:ml-12 font-bold text-xl sm:text-2xl md:text-3xl">
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
            <span className="text-sm sm:text-lg font-bold">U</span>
          </div>
          <div className="hidden sm:block">
            <h2 className="font-bold text-sm md:text-base">Usman</h2>
            <p className="text-xs md:text-sm text-gray-600">Society Manager</p>
          </div>
        </div>













      </div>
    </header>
  );
};

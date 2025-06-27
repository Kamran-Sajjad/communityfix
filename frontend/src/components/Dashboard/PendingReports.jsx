// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export const PendingReports = () => {
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     acceptedUsers: 0,
//     pendingUsers: 0,
//     pendingPercentage: 0,
//   });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/users/stats");
//         if (response.data.success) {
//           setStats(response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       }
//     };

//     fetchStats();
//   }, []);

//   return (
//     <div className="bg-black text-white p-4 sm:p-6 rounded-lg shadow-lg shadow-cyan-200/50 hover:shadow-cyan-200/70 transition-shadow duration-300">
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div className="flex-1">
//           <h3 className="text-base sm:text-lg font-medium">Pending Requests</h3>
//           <div className="flex items-center gap-3 sm:gap-4 mt-2">
  

//             {/* User Icon */}
//             <div className="h-10 w-10 sm:h-12 sm:w-12">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-full w-full"
//               >
//                 <path
//                   d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M12 14.5C6.99 14.5 2.91 17.86 2.91 22C2.91 22.28 3.13 22.5 3.41 22.5H20.59C20.87 22.5 21.09 22.28 21.09 22C21.09 17.86 17.01 14.5 12 14.5Z"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <path
//                   d="M13 7H17"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>

//             {/* Info */}
//             <div className="hidden sm:block ml-2">
//               <p className="text-sm font-medium">{stats.totalUsers} total users</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile view */}
//       <div className="sm:hidden mt-3 flex justify-between items-center">
//         <p className="text-sm font-medium">{stats.totalUsers} total</p>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import axios from "axios";

export const PendingReports = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    acceptedUsers: 0,
    pendingUsers: 0,
    pendingPercentage: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/stats");
        if (response.data.success) {
          setStats(response.data);
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-black text-white p-4 sm:p-6 rounded-lg shadow-lg shadow-cyan-200/50 hover:shadow-cyan-200/70 transition-shadow duration-300 h-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-medium">Pending Requests</h3>
          <div className="flex items-center gap-3 sm:gap-4 mt-2">
            <div className="h-10 w-10 sm:h-12 sm:w-12">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14.5C6.99 14.5 2.91 17.86 2.91 22C2.91 22.28 3.13 22.5 3.41 22.5H20.59C20.87 22.5 21.09 22.28 21.09 22C21.09 17.86 17.01 14.5 12 14.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 7H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="hidden sm:block ml-2">
              <p className="text-sm font-medium">{stats.totalUsers} total users</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden mt-3 flex justify-between items-center">
        <p className="text-sm font-medium">{stats.totalUsers} total</p>
      </div>
    </div>
  );
};

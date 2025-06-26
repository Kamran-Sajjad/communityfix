
// import React, { useEffect, useState } from "react";
// import { Bell } from "lucide-react";
// import axios from "axios";
// import adminImage from "../../assets/Admin.jpg";

// export const AdHeader = ({ title = "Dashboard, Admin" }) => {
//   const [userData, setUserData] = useState({
//     fullName: "",
//     accountType: "",
//     firstLetter: "",
//     isAdmin: false,
//     profileImage: null,
//   });

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const res = await axios.get("/api/users/profile", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         setUserData(res.data);
//       } catch (error) {
//         console.error("Failed to load profile:", error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   return (










// <<<<<<< notification
//     <header className="p-4 sm:px-8 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6 bg-white rounded-lg shadow-sm">
//       {/* Title */}
//       <h1 className="w-full text-center sm:text-left font-bold text-xl sm:text-2xl md:text-3xl">
// =======
//     <header className="p-4 sm:px-8 flex sm:flex-row items-center sm:justify-between gap-4 sm:gap-6 bg-white rounded-lg shadow-sm">
//       {/* Title */}
//       <h1 className="w-full ml-8 sm:text-left font-bold text-sm sm:text-xl md:text-3xl lg:text-3xl xl:text-5xl lg:ml-0 xl:ml-0 md:ml-0 ">
// >>>>>>> admin/kamran
//         {title}
//       </h1>

//       {/* Notification + Profile Section */}
// <<<<<<< notification




//       <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
// =======

//       <div className="flex items-center justify-end sm:justify-end gap-4 w-full sm:w-auto">
// >>>>>>> admin/kamran
//         {/* Notification Bell */}
//         <button
//           className="p-2 rounded-full bg-white hover:bg-gray-100 transition relative shadow"
//           aria-label="Notifications"
//         >
//           <Bell className="w-5 h-5 text-gray-700" />
//           <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
//         </button>

//         {/* Profile Avatar and Info */}
//         <div className="flex items-center gap-3">
//           {/* Avatar */}
//           {userData.isAdmin ? (
//             <img
//               src={adminImage}
//               alt="Admin"
//               className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover shadow"
//             />
//           ) : userData.profileImage ? (
//             <img
//               src={userData.profileImage}
//               alt="Profile"
//               className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover shadow"
//             />
//           ) : (
//             <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-gray-300 flex items-center justify-center text-gray-800 font-bold text-lg shadow">
//               {userData.firstLetter}
//             </div>
//           )}

//           {/* Name */}
//           <div className="flex flex-col items-start justify-center leading-tight">
//             <p className="text-sm sm:text-base font-semibold text-gray-900 truncate max-w-[120px] sm:max-w-none">
//               {userData.fullName || "User"}
//             </p>
//             <p className="text-xs text-gray-600 capitalize">
//               {userData.accountType || "Role"}
//             </p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };








import React, { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import axios from "axios";
import adminImage from "../../assets/Admin.jpg";
import NotificationBell from "../Notification/NotificationBell";

export const AdHeader = ({ title = "Dashboard, Admin" }) => {
  const [userData, setUserData] = useState({
    fullName: "",
    accountType: "",
    firstLetter: "",
    isAdmin: false,
    profileImage: null,
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("/api/users/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUserData(res.data);
      } catch (error) {
        console.error("Failed to load profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <header className="p-4 sm:px-8 flex sm:flex-row items-center sm:justify-between gap-4 sm:gap-6 bg-white rounded-lg shadow-sm">
      {/* Title */}
      <h1 className="w-full ml-8 sm:text-left font-bold text-sm sm:text-xl md:text-3xl lg:text-3xl xl:text-5xl lg:ml-0 xl:ml-0 md:ml-0 ">
        {title}
      </h1>

      {/* Notification + Profile Section */}
      <div className="flex items-center justify-end sm:justify-end gap-4 w-full sm:w-auto">
        {/* Notification Bell */}
        {/* <button
          className="p-2 rounded-full bg-white hover:bg-gray-100 transition relative shadow"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-gray-700" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button> */}

         {/* <div className="flex items-center ml-auto"> */}
        <div className="mr-4">
  <NotificationBell color="black" />
</div>


        {/* Profile Avatar and Info */}
        <div className="flex items-center gap-3">
          {/* Avatar - Hidden on small screens */}
          {userData.isAdmin ? (
            <img
              src={adminImage}
              alt="Admin"
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover shadow sm:flex hidden"
            />
          ) : userData.profileImage ? (
            <img
              src={userData.profileImage}
              alt="Profile"
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover shadow sm:flex hidden"
            />
          ) : (
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-gray-300 flex items-center justify-center text-gray-800 font-bold text-lg shadow sm:flex hidden">
              {userData.firstLetter}
            </div>
          )}

          {/* Name */}
          <div className="flex flex-col items-start justify-center leading-tight">
            <p className="text-sm sm:text-base font-semibold text-gray-900 truncate max-w-[120px] sm:max-w-none">
              {userData.fullName || "User"}
            </p>
            <p className="text-xs text-gray-600 capitalize">
              {userData.accountType || "Role"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

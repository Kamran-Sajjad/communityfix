

// import { useState } from "react";
// import { Users, RefreshCw, MessageSquare, CircleDashed, LogOut, Menu } from "lucide-react";
// import { Link } from "react-router-dom"; // Use `next/link` if you're using Next.js

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <>
//       {/* Hamburger Button for Small Screens */}
//       <button
//         className="fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-md lg:hidden"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         <Menu className="w-6 h-6" />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed lg:relative w-[250px] bg-black flex flex-col h-screen transform transition-transform duration-300 ease-in-out ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         <div className="h-20"></div> {/* Spacer to align with header */}
//         <div className="flex flex-col space-y-6 px-6 py-8">
//           {/* Dashboard Link */}
//           <NavLink
//             icon={<Users className="w-6 h-6" />}
//             text="Dashboard"
//             to="/serviceTeam/MechanicDashboard" // Update the route as needed
//           />

//           {/* Other Links */}
//           <NavLink icon={<Users className="w-6 h-6" />} text="Assigned Issues" to="/assigned-issues" />
//           <NavLink icon={<RefreshCw className="w-6 h-6" />} text="Update" to="/update" />
//           <NavLink icon={<MessageSquare className="w-6 h-6" />} text="Reviews" to="/reviews" />
//           <NavLink icon={<CircleDashed className="w-6 h-6" />} text="Reports" to="/serviceTeam/ReportsPage" />
//           <NavLink icon={<LogOut className="w-6 h-6" />} text="Logout" className="mt-auto" to="/logout" />
//         </div>
//       </div>
//     </>
//   );
// };

// // Updated NavLink to include routing
// function NavLink({ icon, text, className = "", to = "#" }) {
//   return (
//     <Link to={to} className={`flex items-center space-x-3 text-white ${className}`}>
//       {icon}
//       <span className="text-lg font-medium">{text}</span>
//     </Link>
//   );
// }

// export default Sidebar;

import { useState } from "react";
import { Users,  MessageSquare, CircleDashed, LogOut, Menu } from "lucide-react";
// import { Users, RefreshCw, MessageSquare, CircleDashed, LogOut, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"; // Update the path based on your project structure

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button for Small Screens */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-md lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative w-[250px] bg-black flex flex-col h-screen transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo at the Top */}
        <div className="flex items-center justify-center mt-8 h-20">
          <img src={logo} alt="Logo" className="w-24 h-auto" />
        </div>

        <div className="flex flex-col space-y-6 px-6 py-8">
          {/* Navigation Links */}
          <NavLink icon={<Users className="w-6 h-6" />} text="Dashboard" to="/serviceTeam/MechanicDashboard" />
          <NavLink icon={<Users className="w-6 h-6" />} text="Assigned Issues" to="/serviceTeam/AssignedIssuesPage" />
          {/* <NavLink icon={<RefreshCw className="w-6 h-6" />} text="Update" to="/update" /> */}
          <NavLink icon={<MessageSquare className="w-6 h-6" />} text="Reviews" to="/serviceTeam/ReviewsPage" />
          <NavLink icon={<CircleDashed className="w-6 h-6" />} text="Reports" to="/serviceTeam/ReportsPage" />
          <NavLink icon={<LogOut className="w-6 h-6" />} text="Logout" className="mt-auto" to="/logout" />
        </div>
      </div>
    </>
  );
};

// NavLink Component
function NavLink({ icon, text, className = "", to = "#" }) {
  return (
    <Link to={to} className={`flex items-center space-x-3 text-white ${className}`}>
      {icon}
      <span className="text-lg font-medium">{text}</span>
    </Link>
  );
}

export default Sidebar;

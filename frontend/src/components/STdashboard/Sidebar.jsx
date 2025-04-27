

// import { useState } from "react";
// import { Users,  MessageSquare, CircleDashed, LogOut, Menu } from "lucide-react";
// // import { Users, RefreshCw, MessageSquare, CircleDashed, LogOut, Menu } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png"; // Update the path based on your project structure

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
//         className={`fixed w-[250px] bg-black flex flex-col h-screen transform transition-transform duration-300 ease-in-out ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         {/* Logo at the Top */}
//         <div className="flex items-center justify-center mt-8 h-20">
//           <img src={logo} alt="Logo" className="w-24 h-auto" />
//         </div>

//         <div className="flex flex-col space-y-6 px-6 py-8">
//           {/* Navigation Links */}
//           <NavLink icon={<Users className="w-6 h-6" />} text="Dashboard" to="/serviceTeam/MechanicDashboard" />
//           <NavLink icon={<Users className="w-6 h-6" />} text="Assigned Issues" to="/serviceTeam/AssignedIssuesPage" />
//           {/* <NavLink icon={<RefreshCw className="w-6 h-6" />} text="Update" to="/update" /> */}
//           <NavLink icon={<MessageSquare className="w-6 h-6" />} text="Reviews" to="/serviceTeam/ReviewsPage" />
//           <NavLink icon={<CircleDashed className="w-6 h-6" />} text="Reports" to="/serviceTeam/ReportsPage" />
//           <NavLink icon={<LogOut className="w-6 h-6" />} text="Logout" className="mt-auto" to="/auth/login" />
//         </div>
//       </div>
//     </>
//   );
// };

// // NavLink Component
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
import { Users, MessageSquare, CircleDashed, LogOut, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

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
        className={`fixed top-0 left-0 w-[250px] bg-black flex flex-col h-screen z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Logo and Navigation Links */}
          <div>
            {/* Logo at the Top */}
            <div className="flex items-center justify-center mt-8 h-20">
              <img src={logo} alt="Logo" className="w-24 h-auto" />
            </div>

            <div className="flex flex-col space-y-6 px-6 py-8">
              <NavLink icon={<Users className="w-6 h-6" />} text="Dashboard" to="/serviceTeam/MechanicDashboard" />
              <NavLink icon={<Users className="w-6 h-6" />} text="Assigned Issues" to="/serviceTeam/AssignedIssuesPage" />
              <NavLink icon={<MessageSquare className="w-6 h-6" />} text="Reviews" to="/serviceTeam/ReviewsPage" />
              <NavLink icon={<CircleDashed className="w-6 h-6" />} text="Reports" to="/serviceTeam/ReportsPage" />
            </div>
          </div>

          {/* Logout at the Bottom */}
          <div className="px-6 pb-8">
            <NavLink icon={<LogOut className="w-6 h-6 text-red-500" />} text="Logout" to="/auth/login" className="text-red-500 hover:text-red-400" />
          </div>
        </div>
      </div>
    </>
  );
};

function NavLink({ icon, text, className = "", to = "#" }) {
  return (
    <Link to={to} className={`flex items-center space-x-3 text-white hover:text-gray-300 transition-colors ${className}`}>
      {icon}
      <span className="text-lg font-medium">{text}</span>
    </Link>
  );
}

export default Sidebar;
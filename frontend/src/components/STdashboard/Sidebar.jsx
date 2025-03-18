// // components/Sidebar.jsx
// import { Users, RefreshCw, History, MessageSquare, CircleDashed, LogOut } from "lucide-react";

// export default function Sidebar() {
//   return (
//     <div className="w-[250px] bg-black flex flex-col">
//       <div className="h-20"></div> {/* Spacer to align with header */}
//       <div className="flex flex-col space-y-6 px-6 py-8">
//         <div className="flex items-center space-x-3 text-white">
//           <div className="flex items-center justify-center w-8 h-8">
//             <div className="w-5 h-5 bg-white"></div>
//             <div className="w-5 h-5 bg-gray-500 absolute ml-2 mt-2"></div>
//           </div>
//           <span className="text-lg font-medium">Dashboard</span>
//         </div>

//         <NavLink icon={<Users className="w-6 h-6" />} text="Assigned Issues" />
//         <NavLink icon={<RefreshCw className="w-6 h-6" />} text="Update" />
//         <NavLink icon={<History className="w-6 h-6" />} text="History" />
//         <NavLink icon={<MessageSquare className="w-6 h-6" />} text="Reviews" />
//         <NavLink icon={<CircleDashed className="w-6 h-6" />} text="Reports" />
//         <NavLink icon={<LogOut className="w-6 h-6" />} text="Logout" className="mt-auto" />
//       </div>
//     </div>
//   );
// }

// function NavLink({ icon, text, className = "" }) {
//   return (
//     <div className={`flex items-center space-x-3 text-white ${className}`}>
//       {icon}
//       <span className="text-lg font-medium">{text}</span>
//     </div>
//   );
// }

// components/Sidebar.jsx
import { useState } from "react";
import { Users, RefreshCw, History, MessageSquare, CircleDashed, LogOut, Menu } from "lucide-react";

const Sidebar=()=> {
// export default function Sidebar() {
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
        <div className="h-20"></div> {/* Spacer to align with header */}
        <div className="flex flex-col space-y-6 px-6 py-8">
          <NavLink icon={<Users className="w-6 h-6" />} text="Assigned Issues" />
          <NavLink icon={<RefreshCw className="w-6 h-6" />} text="Update" />
          <NavLink icon={<History className="w-6 h-6" />} text="History" />
          <NavLink icon={<MessageSquare className="w-6 h-6" />} text="Reviews" />
          <NavLink icon={<CircleDashed className="w-6 h-6" />} text="Reports" />
          <NavLink icon={<LogOut className="w-6 h-6" />} text="Logout" className="mt-auto" />
        </div>
      </div>
    </>
  );
}

function NavLink({ icon, text, className = "" }) {
  return (
    <div className={`flex items-center space-x-3 text-white ${className}`}>
      {icon}
      <span className="text-lg font-medium">{text}</span>
    </div>
  );
}
export default Sidebar;
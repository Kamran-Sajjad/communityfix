// import { Bell, ChevronDown, Menu } from "lucide-react";
// import logo from "../../assets/logo.png";
// export default function Header({ setMobileMenuOpen }) {
//   return (
//     <>
//       {/* Mobile Header */}
//       <div className="md:hidden bg-black text-white p-4 flex items-center justify-between">
//         <div className="flex items-center">
//           <button onClick={() => setMobileMenuOpen((prev) => !prev)} className="mr-3">
//             <Menu className="w-6 h-6" />
//           </button>
//           {/* <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center overflow-hidden"> */}
//             <img src={logo} alt="Community Fix Logo" className="w-7 h-7 rounded" />
//           {/* </div> */}
//         </div>
//         <div className="flex items-center">
//           <div className="relative mr-4">
//             <Bell className="w-5 h-5" />
//             <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
//           </div>
//           <img src={logo} alt="User" className="w-8 h-8 rounded-full" />
//         </div>
//       </div>

//       {/* Desktop Header */}
//       <div className="hidden md:flex justify-end p-4">
//         <div className="flex items-center">
//           <div className="relative mr-4">
//             <Bell className="w-6 h-6" />
//             <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
//               1
//             </div>
//           </div>
//           <div className="flex items-center">
//             <img src={logo} alt="User" className="w-10 h-10 rounded-full" />
//             <ChevronDown className="w-4 h-4 ml-1" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }













// import { Bell, ChevronDown, Menu } from "lucide-react";
// import logo from "../../assets/logo.png";

// export default function Header({ setMobileMenuOpen }) {
//   return (
//     <>
//       {/* Mobile Header (Black BG) */}
//       <div className="md:hidden bg-black text-white p-4 flex items-center justify-between">
//         <div className="flex items-center">
//           <button 
//             onClick={() => setMobileMenuOpen((prev) => !prev)} 
//             className="mr-3"
//           >
//             <Menu className="w-6 h-6" />
//           </button>
//           <img src={logo} alt="Logo" className="w-7 h-7 rounded" />
//         </div>
//         <div className="flex items-center">
//           <div className="relative mr-4">
//             <Bell className="w-5 h-5" />
//             <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
//           </div>
//           <img src={logo} alt="User" className="w-8 h-8 rounded-full" />
//         </div>
//       </div>

//       {/* Desktop Header (Black BG) */}
//       <div className="hidden md:flex bg-black text-white justify-end p-4">
//         <div className="flex items-center">
//           <div className="relative mr-4">
//             <Bell className="w-5 h-5" />
//             <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
//           </div>
//           <div className="flex items-center">
//             <img src={logo} alt="User" className="w-10 h-10 rounded-full" />
//             <ChevronDown className="w-4 h-4 ml-1" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import { Bell, ChevronDown, Menu } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Header({ setMobileMenuOpen, mobileMenuOpen }) {
  return (
    <div className="bg-black text-white p-4 flex items-center justify-between">
      {/* Mobile menu button - only visible on small screens */}
      {/* <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden mr-3"
      >
        <Menu className="w-6 h-6" />
      </button> */}
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
        <div className="relative mr-4">
          <Bell className="w-5 h-5 md:w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
            1
          </div>
        </div>
        <div className="flex items-center">
          <img src={logo} alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
          <ChevronDown className="w-4 h-4 ml-1 hidden md:block" />
        </div>
      </div>
    </div>
  );
}
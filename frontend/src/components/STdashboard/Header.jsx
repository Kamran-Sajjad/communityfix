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

// components/Header.jsx
import { Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="h-20 bg-black flex items-center justify-between px-4 lg:px-6">
      <h1 className="text-white text-lg lg:text-xl">Welcome Back, Mr. Arslan</h1>
      <div className="w-10 h-10 bg-gray-600 rounded-md flex items-center justify-center relative">
        <Bell className="w-5 h-5 text-white" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
      </div>
    </div>
  );
}
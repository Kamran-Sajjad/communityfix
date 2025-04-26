// "use client"

// import { useState } from "react"
// import {
//   Home,
//   Users,
//   ShoppingCart,
//   MessageCircle,
//   FileText,
//   Settings,
//   LogOut,
//   Bell,
//   Menu,
//   Clipboard,
//   Flame,
// } from "lucide-react"

// export default function ListedIssuesPage() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <div className="flex flex-col md:flex-row h-screen w-full bg-white overflow-hidden">
//       {/* Mobile Header */}
//       <div className="md:hidden bg-black text-white p-4 flex items-center justify-between">
//         <div className="flex items-center">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mr-3">
//             <Menu className="w-6 h-6" />
//           </button>
//           <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center overflow-hidden">
//             <img src="/placeholder.svg?height=50&width=50" alt="Community Fix Logo" className="w-6 h-6" />
//           </div>
//         </div>
//         <div className="flex items-center">
//           <div className="relative mr-4">
//             <Bell className="w-5 h-5" />
//             <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
//           </div>
//           <img src="/placeholder.svg?height=50&width=50" alt="User" className="w-8 h-8 rounded-full" />
//         </div>
//       </div>

//       {/* Sidebar - Hidden on mobile unless menu is open */}
//       <div
//         className={`${mobileMenuOpen ? "block" : "hidden"} md:block w-full md:w-[90px] bg-black flex-shrink-0 md:flex md:flex-col md:items-center py-6 absolute md:relative z-10 h-screen`}
//       >
//         <div className="w-16 h-16 bg-white rounded-lg mb-10 flex items-center justify-center overflow-hidden mx-auto">
//           <img src="/placeholder.svg?height=100&width=100" alt="Community Fix Logo" className="w-14 h-14" />
//         </div>

//         <div className="flex flex-col items-center space-y-8 flex-1">
//           <button className="w-10 h-10 flex items-center justify-center text-white">
//             <Home className="w-6 h-6" />
//           </button>

//           <button className="w-10 h-10 flex items-center justify-center text-white">
//             <Users className="w-6 h-6" />
//           </button>

//           <button className="w-10 h-10 flex items-center justify-center text-white">
//             <ShoppingCart className="w-6 h-6" />
//           </button>

//           <button className="w-10 h-10 flex items-center justify-center text-white">
//             <MessageCircle className="w-6 h-6" />
//           </button>

//           <button className="w-10 h-10 flex items-center justify-center text-white bg-white/20 rounded-md">
//             <FileText className="w-6 h-6" />
//           </button>

//           <button className="w-10 h-10 flex items-center justify-center text-white">
//             <Settings className="w-6 h-6" />
//           </button>

//           <button className="w-10 h-10 flex items-center justify-center text-red-500 mt-auto">
//             <LogOut className="w-6 h-6" />
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <div className="flex items-center p-4 md:p-6">
//           <div className="flex items-center">
//             <Clipboard className="w-6 h-6 md:w-7 md:h-7 mr-3" />
//             <span className="text-xl md:text-2xl font-bold">Listed Issues</span>
//           </div>

//           {/* Desktop notification and profile */}
//           <div className="hidden md:flex ml-auto items-center">
//             <div className="relative mr-4">
//               <Bell className="w-6 h-6" />
//               <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
//                 1
//               </div>
//             </div>
//             <div className="flex items-center">
//               <img src="/placeholder.svg?height=50&width=50" alt="User" className="w-10 h-10 rounded-full" />
//               <span className="ml-2">▼</span>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Area with Scrolling */}
//         <div className="flex-1 p-4 md:p-6 overflow-auto">
//           <div className="space-y-6">
//             {/* Road Maintenance Issue */}
//             <div className="bg-gray-200 rounded-lg overflow-hidden">
//               <div className="flex flex-col md:flex-row">
//                 <div className="p-4 md:p-6 md:w-1/2">
//                   <h2 className="text-xl md:text-2xl font-bold mb-3">Road Maintenance</h2>
//                   <p className="text-sm md:text-base text-gray-700">
//                     Potholes and damaged roads make daily commutes unsafe. This issue ensures timely repairs for
//                     smoother and safer travel.
//                   </p>
//                 </div>

//                 <div className="md:w-1/2 h-48 md:h-auto bg-teal-100 flex items-center justify-center">
//                   <img
//                     src="/placeholder.svg?height=200&width=300"
//                     alt="Road Maintenance Illustration"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="bg-gray-300 p-3 flex justify-end items-center">
//                 <div className="flex items-center mr-4">
//                   <Flame className="w-4 h-4 md:w-5 md:h-5 mr-1" />
//                   <span className="text-sm md:text-base">12</span>
//                 </div>
//                 <button className="border border-black rounded-md px-3 py-1.5 text-sm">Express your thoughts</button>
//               </div>
//             </div>

//             {/* Street Lighting Issue */}
//             <div className="bg-gray-200 rounded-lg overflow-hidden">
//               <div className="flex flex-col md:flex-row">
//                 <div className="p-4 md:p-6 md:w-1/2">
//                   <h2 className="text-xl md:text-2xl font-bold mb-3">Street Lighting</h2>
//                   <p className="text-sm md:text-base text-gray-700">
//                     Dark streets due to broken or absent lights increase risks at night. Resolving this brings
//                     visibility and security to the community.
//                   </p>
//                 </div>

//                 <div className="md:w-1/2 h-48 md:h-auto bg-blue-900 flex items-center justify-center">
//                   <img
//                     src="/placeholder.svg?height=200&width=300"
//                     alt="Street Lighting Illustration"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="bg-gray-300 p-3 flex justify-end items-center">
//                 <div className="flex items-center mr-4">
//                   <Flame className="w-4 h-4 md:w-5 md:h-5 mr-1" />
//                   <span className="text-sm md:text-base">09</span>
//                 </div>
//                 <button className="border border-black rounded-md px-3 py-1.5 text-sm">Express your thoughts</button>
//               </div>
//             </div>

//             {/* Waste Management Issue */}
//             <div className="bg-gray-200 rounded-lg overflow-hidden">
//               <div className="flex flex-col md:flex-row">
//                 <div className="p-4 md:p-6 md:w-1/2">
//                   <h2 className="text-xl md:text-2xl font-bold mb-3">Waste Management</h2>
//                   <p className="text-sm md:text-base text-gray-700">
//                     Overflowing trash bins and improper waste disposal harm the environment. Addressing this ensures
//                     cleaner and healthier surroundings.
//                   </p>
//                 </div>

//                 <div className="md:w-1/2 h-48 md:h-auto bg-green-100 flex items-center justify-center">
//                   <img
//                     src="/placeholder.svg?height=200&width=300"
//                     alt="Waste Management Illustration"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="bg-gray-300 p-3 flex justify-end items-center">
//                 <div className="flex items-center mr-4">
//                   <Flame className="w-4 h-4 md:w-5 md:h-5 mr-1" />
//                   <span className="text-sm md:text-base">18</span>
//                 </div>
//                 <button className="border border-black rounded-md px-3 py-1.5 text-sm">Express your thoughts</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// /residents/ReviewsAndComments



import { useState } from "react";
import Sidebar from "../../components/Rdashboard/Sidebar";
import Header from "../../components/Rdashboard/Header";
import PageHeader from "../../components/Rdashboard/PageHeader";
import IssueCard from "../../components/Rdashboard/IssueCard";
import useMobileMenu from "../../hooks/useMobileMenu";
import { issues } from "../../components/data/issues";

export default function ListedIssuesPage() {
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header 
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto md:ml-14">
          <PageHeader />
          
          <div className="p-4 md:p-6 space-y-6 ">
            {/* Filters/Search (can be expanded later) */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-500">
                Showing {issues.length} issues
              </div>
              <div>
                {/* Placeholder for filter dropdown */}
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>All Issues</option>
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </div>
            </div>

            {/* Issues List */}
            <div className="space-y-4">
              {issues.map((issue) => (
                <IssueCard 
                  key={issue.id}
                  issue={issue}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
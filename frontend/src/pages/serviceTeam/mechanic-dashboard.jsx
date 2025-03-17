// "use client"

// import {
//   Bell,
//   ChevronDown,
//   ChevronLeft,
//   ChevronRight,
//   CircleDashed,
//   Filter,
//   History,
//   LogOut,
//   MessageSquare,
//   RefreshCw,
//   Users,
//   Car,
//   Zap,
// } from "lucide-react"
// import { useState } from "react"

// export default function MechanicDashboard() {
//   const [showContacts, setShowContacts] = useState(true)

//   return (
//     <div className="flex h-screen w-full bg-white">
//       {/* Sidebar */}
//       <div className="w-[250px] bg-black flex flex-col">
//         <div className="h-20"></div> {/* Spacer to align with header */}
//         <div className="flex flex-col space-y-6 px-6 py-8">
//           <div className="flex items-center space-x-3 text-white">
//             <div className="flex items-center justify-center w-8 h-8">
//               <div className="w-5 h-5 bg-white"></div>
//               <div className="w-5 h-5 bg-gray-500 absolute ml-2 mt-2"></div>
//             </div>
//             <span className="text-lg font-medium">Dashboard</span>
//           </div>

//           <div className="flex items-center space-x-3 text-white">
//             <Users className="w-6 h-6" />
//             <span className="text-lg font-medium">Assigned Issues</span>
//           </div>

//           <div className="flex items-center space-x-3 text-white">
//             <RefreshCw className="w-6 h-6" />
//             <span className="text-lg font-medium">Update</span>
//           </div>

//           <div className="flex items-center space-x-3 text-white">
//             <History className="w-6 h-6" />
//             <span className="text-lg font-medium">History</span>
//           </div>

//           <div className="flex items-center space-x-3 text-white">
//             <MessageSquare className="w-6 h-6" />
//             <span className="text-lg font-medium">Reviews</span>
//           </div>

//           <div className="flex items-center space-x-3 text-white">
//             <CircleDashed className="w-6 h-6" />
//             <span className="text-lg font-medium">Reports</span>
//           </div>

//           <div className="mt-auto flex items-center space-x-3 text-white">
//             <LogOut className="w-6 h-6" />
//             <span className="text-lg font-medium">Logout</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <div className="h-20 bg-black flex items-center justify-between px-6">
//           <h1 className="text-white text-xl">Welcome Back, Mr. Arslan</h1>
//           <div className="w-10 h-10 bg-gray-600 rounded-md flex items-center justify-center relative">
//             <Bell className="w-5 h-5 text-white" />
//             <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
//           </div>
//         </div>

//         <div className="flex flex-1">
//           <div className="flex-1 p-6 overflow-auto">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-3 gap-6 mb-8">
//               <div className="bg-black text-white p-6 rounded-lg">
//                 <h3 className="text-lg font-medium mb-2">Total Householders</h3>
//                 <p className="text-3xl font-bold mb-1">14</p>
//                 <p className="text-gray-400 text-sm">registered users</p>
//               </div>

//               <div className="bg-black text-white p-6 rounded-lg">
//                 <h3 className="text-lg font-medium mb-2">Work</h3>
//                 <p className="text-3xl font-bold mb-1">8</p>
//                 <p className="text-gray-400 text-sm">completed</p>
//               </div>

//               <div className="bg-black text-white p-6 rounded-lg">
//                 <h3 className="text-lg font-medium mb-2">Pending</h3>
//                 <p className="text-3xl font-bold mb-1">6</p>
//                 <p className="text-gray-400 text-sm">requests</p>
//               </div>
//             </div>

//             {/* Working Status */}
//             <div className="mb-8">
//               <h2 className="text-xl font-bold mb-4">Working status</h2>

//               <div className="flex items-center bg-gray-50 p-4 rounded-lg">
//                 <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
//                   <CircleDashed className="w-6 h-6" />
//                 </div>

//                 <div className="flex-1">
//                   <h3 className="font-semibold">Solar installations</h3>
//                   <p className="text-gray-500 text-sm">working..</p>
//                 </div>

//                 <div className="flex items-center mr-4">
//                   <div className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center">
//                     <span className="text-sm font-medium">90%</span>
//                   </div>
//                 </div>

//                 <button className="bg-black text-white px-4 py-2 rounded-md mr-4">Review</button>

//                 <div className="flex space-x-2">
//                   <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
//                     <ChevronLeft className="w-5 h-5" />
//                   </button>
//                   <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
//                     <ChevronRight className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Completion Status */}
//             <div className="mb-8">
//               <h2 className="text-xl font-bold mb-4">Completion status</h2>

//               <div className="flex items-center bg-gray-50 p-4 rounded-lg">
//                 <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
//                   <Car className="w-6 h-6" />
//                 </div>

//                 <div className="flex-1">
//                   <h3 className="font-semibold">Auto repair</h3>
//                   <p className="text-gray-500 text-sm">completed</p>
//                 </div>

//                 <button className="bg-black text-white px-4 py-2 rounded-md mr-4">Review</button>

//                 <div className="flex space-x-2">
//                   <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
//                     <ChevronLeft className="w-5 h-5" />
//                   </button>
//                   <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
//                     <ChevronRight className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Issue Status Table */}
//             <div className="bg-white rounded-lg border border-gray-100 p-4">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-bold">issue status</h2>
//                 <button className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-md text-sm">
//                   <span>Filter & Short</span>
//                   <Filter className="w-4 h-4" />
//                 </button>
//               </div>

//               <table className="w-full">
//                 <thead>
//                   <tr className="text-left text-gray-500">
//                     <th className="pb-3">Name</th>
//                     <th className="pb-3">Address</th>
//                     <th className="pb-3">Age</th>
//                     <th className="pb-3">issue</th>
//                     <th className="pb-3">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-t border-gray-100">
//                     <td className="py-3">Hasnain</td>
//                     <td className="py-3">Street 4 House 38</td>
//                     <td className="py-3">32</td>
//                     <td className="py-3">Ups installation</td>
//                     <td className="py-3 text-red-500">not completed</td>
//                   </tr>
//                   <tr className="border-t border-gray-100">
//                     <td className="py-3">Kamran</td>
//                     <td className="py-3">Street 7 House 9</td>
//                     <td className="py-3">45</td>
//                     <td className="py-3">Pipe leaks</td>
//                     <td className="py-3">completed</td>
//                   </tr>
//                   <tr className="border-t border-gray-100">
//                     <td className="py-3">Nizam</td>
//                     <td className="py-3">Street 2 House 50</td>
//                     <td className="py-3">22</td>
//                     <td className="py-3">Solar installation</td>
//                     <td className="py-3">completed</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="w-[300px] border-l border-gray-200 p-4">
//             <div className="mb-8">
//               <h2 className="text-xl font-bold mb-4">Contacts</h2>

//               <div className="space-y-6">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-black rounded-full"></div>
//                   <div>
//                     <p className="font-medium">Kamran choudhry</p>
//                     <p className="text-gray-400 text-sm">bhai kam karo tak</p>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 pt-4"></div>

//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-black rounded-full"></div>
//                   <div>
//                     <p className="font-medium">Nizam khan</p>
//                     <p className="text-gray-400 text-sm">Thank you.</p>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-200 pt-4"></div>

//                 <div className="flex items-center space-x-3">
//                   <div className="w-10 h-10 bg-black rounded-full"></div>
//                   <div>
//                     <p className="font-medium">Usman admin</p>
//                     <p className="text-gray-400 text-sm">Aj kal ban reports arhy.</p>
//                   </div>
//                 </div>

//                 <div className="flex justify-center mt-2">
//                   <button onClick={() => setShowContacts(!showContacts)}>
//                     <ChevronDown className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-xl font-bold mb-4">Services</h2>

//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 flex items-center justify-center">
//                       <Car className="w-6 h-6" />
//                     </div>
//                     <span className="font-medium">Vehicle repair</span>
//                   </div>
//                   <ChevronRight className="w-5 h-5" />
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 flex items-center justify-center">
//                       <Zap className="w-6 h-6" />
//                     </div>
//                     <span className="font-medium">Electric installations</span>
//                   </div>
//                   <ChevronRight className="w-5 h-5" />
//                 </div>

//                 <button className="w-full bg-black text-white py-3 rounded-lg mt-6">Add Services</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// pages/mechanic-dashboard.jsx
"use client";
import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import StatsCard from "../../components/STdashboard/StatsCard";
import WorkingStatus from "../../components/STdashboard/WorkingStatus";
import CompletionStatus from "../../components/STdashboard/CompletionStatus";
import IssueStatusTable from "../../components/STdashboard/IssueStatusTable";
import Contacts from "../../components/STdashboard/Contacts";
import Services from "../../components/STdashboard/Services";

export default function MechanicDashboard() {
  return (
    <div className="flex h-screen w-full bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-1">
          <div className="flex-1 p-6 overflow-auto">
            <div className="grid grid-cols-3 gap-6 mb-8">
              <StatsCard title="Total Householders" value="14" description="registered users" />
              <StatsCard title="Work" value="8" description="completed" />
              <StatsCard title="Pending" value="6" description="requests" />
            </div>
            <WorkingStatus />
            <CompletionStatus />
            <IssueStatusTable />
          </div>
          <div className="w-[300px] border-l border-gray-200 p-4">
            <Contacts />
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
}
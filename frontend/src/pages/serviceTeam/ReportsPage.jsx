// "use client"

// import { Bell, CircleDashed, History, LogOut, MessageSquare, RefreshCw, Users, X, Check } from "lucide-react"

// export default function ReportsPage() {
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

//         <div className="flex-1 p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <CircleDashed className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Reports</h2>
//           </div>

//           {/* Report Cards */}
//           <div className="space-y-6">
//             <div className="bg-gray-200 rounded-lg p-6">
//               <div className="flex justify-between mb-2">
//                 <h3 className="text-xl font-bold">Nizam</h3>
//                 <span className="text-gray-600">Airline near Quetta cafe 107</span>
//               </div>

//               <div className="mb-4">
//                 <h4 className="font-bold">solar installation</h4>
//                 <p className="text-gray-700">Set up eco-friendly solar panels to reduce energy costs.</p>
//               </div>

//               <div className="flex justify-end space-x-4">
//                 <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
//                   <X className="w-6 h-6 text-red-500" />
//                 </button>
//                 <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
//                   <Check className="w-6 h-6 text-green-500" />
//                 </button>
//               </div>
//             </div>

//             <div className="bg-gray-200 rounded-lg p-6">
//               <div className="flex justify-between mb-2">
//                 <h3 className="text-xl font-bold">Basit</h3>
//                 <span className="text-gray-600">Airline, basharat chowk 003</span>
//               </div>

//               <div className="mb-4">
//                 <h4 className="font-bold">garbage cleaning</h4>
//                 <p className="text-gray-700">Remove waste efficiently to ensure a clean environment</p>
//               </div>

//               <div className="flex justify-end space-x-4">
//                 <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
//                   <X className="w-6 h-6 text-red-500" />
//                 </button>
//                 <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
//                   <Check className="w-6 h-6 text-green-500" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



// "use client";

import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import ReportCard from "../../components/STdashboard/ReportCard";
import { CircleDashed } from "lucide-react";

const ReportsPage=()=> {
  const reports = [
    {
      name: "Nizam",
      location: "Airline near Quetta cafe 107",
      title: "solar installation",
      description: "Set up eco-friendly solar panels to reduce energy costs.",
    },
    {
      name: "Basit",
      location: "Airline, basharat chowk 003",
      title: "garbage cleaning",
      description: "Remove waste efficiently to ensure a clean environment. ",
    },
  ];

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header userName="Mr. Arslan" />

        {/* Reports Section */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="flex items-center mb-8">
            <CircleDashed className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">Reports</h2>
          </div>

          {/* Report Cards */}
          <div className="space-y-6">
            {reports.map((report, index) => (
              <ReportCard
                key={index}
                name={report.name}
                location={report.location}
                title={report.title}
                description={report.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReportsPage;
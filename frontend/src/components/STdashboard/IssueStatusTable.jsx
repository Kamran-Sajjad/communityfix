// "use client";

// import { Filter } from "lucide-react";

// const IssueStatusTable = ({ issues = [] }) => {
//   return (
//     <div className="bg-white rounded-lg border border-gray-100 p-4 overflow-x-auto">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg lg:text-xl font-bold">Issue status</h2>
//         <button className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-md text-sm">
//           <span>Filter & Sort</span>
//           <Filter className="w-4 h-4" />
//         </button>
//       </div>
//       <table className="w-full min-w-[600px]">
//         <thead>
//           <tr className="text-left text-gray-500">
//             <th className="pb-3">Name</th>
//             <th className="pb-3">Address</th>
//             <th className="pb-3">Age</th>
//             <th className="pb-3">Issue</th>
//             <th className="pb-3">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map((issue) => (
//             <tr key={issue.id} className="border-t border-gray-100">
//               <td className="py-3">{issue.name}</td>
//               <td className="py-3">{issue.address}</td>
//               <td className="py-3">{issue.age}</td>
//               <td className="py-3">{issue.issue}</td>
//               <td className={`py-3 ${issue.status === "not completed" ? "text-red-500" : "text-green-500"}`}>
//                 {issue.status}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default IssueStatusTable;


















// "use client";

// import { Filter } from "lucide-react";

// const IssueStatusTable = ({ issues = [] }) => {
//   return (
//     <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm overflow-x-auto">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg lg:text-xl font-bold">Issue Status</h2>
//         <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md text-sm transition-colors">
//           <span>Filter</span>
//           <Filter className="w-4 h-4" />
//         </button>
//       </div>
//       <table className="w-full min-w-[600px]">
//         <thead>
//           <tr className="text-left text-gray-500">
//             <th className="pb-3 font-medium">Name</th>
//             <th className="pb-3 font-medium">Address</th>
//             <th className="pb-3 font-medium">Issue</th>
//             <th className="pb-3 font-medium">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map((issue) => (
//             <tr key={issue.id} className="border-t border-gray-100 hover:bg-gray-50">
//               <td className="py-4">{issue.name}</td>
//               <td className="py-4">{issue.address}</td>
//               <td className="py-4 font-medium">{issue.issue}</td>
//               <td className="py-4">
//                 <span className={`px-2 py-1 rounded-full text-xs ${
//                   issue.status === "completed" 
//                     ? "bg-green-100 text-green-800" 
//                     : "bg-yellow-100 text-yellow-800"
//                 }`}>
//                   {issue.status === "completed" ? "Completed" : "Pending"}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default IssueStatusTable;

























"use client";

import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";

const IssueStatusTable = ({ issues = [] }) => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredIssues = issues.filter(issue => {
    if (statusFilter === "all") return true;
    return issue.status === statusFilter;
  });

  const statusOptions = [
    { value: "all", label: "All" },
    { value: "not completed", label: "Pending" },
    { value: "completed", label: "Completed" }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg lg:text-xl font-bold">Issue Status</h2>
        
        {/* Filter Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md text-sm transition-colors"
          >
            <span>Filter: {statusOptions.find(opt => opt.value === statusFilter)?.label}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
          </button>
          
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              {statusOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => {
                    setStatusFilter(option.value);
                    setIsFilterOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    statusFilter === option.value 
                      ? "bg-blue-50 text-blue-600" 
                      : "hover:bg-gray-100"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="pb-3 font-medium">Name</th>
            <th className="pb-3 font-medium">Address</th>
            <th className="pb-3 font-medium">Issue</th>
            <th className="pb-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredIssues.map((issue) => (
            <tr key={issue.id} className="border-t border-gray-100 hover:bg-gray-50">
              <td className="py-4">{issue.name}</td>
              <td className="py-4">{issue.address}</td>
              <td className="py-4 font-medium">{issue.issue}</td>
              <td className="py-4">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  issue.status === "completed" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {issue.status === "completed" ? "Completed" : "Pending"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueStatusTable;
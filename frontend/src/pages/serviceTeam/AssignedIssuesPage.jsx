
// With local storage
// "use client";

// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import useIssues from "../../hooks/useIssues";
// import Button from "../../components/STdashboard/Button";
// import { Users } from "lucide-react";
// import { useState, useEffect } from "react";

// export default function AssignedIssuesPage() {
//   const { issues: initialIssues } = useIssues();
//   const [issues, setIssues] = useState([]);
//   const [filter, setFilter] = useState("all"); // "all", "pending", or "completed"

//   // Update issues state when initialIssues changes
//   useEffect(() => {
//     const localIssues = JSON.parse(localStorage.getItem('assignedIssues') || '[]'); // Fixed missing quote
//     const combinedIssues = [...initialIssues, ...localIssues];
//     setIssues(combinedIssues);
//   }, [initialIssues]);

//   // Filter issues based on the selected filter
//   const filteredIssues = issues.filter((issue) => {
//     if (filter === "all") return true;
//     return issue.status === filter;
//   });

//   // Handle updating an issue
//   const handleUpdateIssue = (updatedIssue) => {
//     const updatedIssues = issues.map((issue) =>
//       issue.id === updatedIssue.id ? updatedIssue : issue
//     );
//     setIssues(updatedIssues);
    
//     // Update localStorage if it's a locally added issue
//     const localIssues = updatedIssues.filter(issue => 
//       !initialIssues.some(initIssue => initIssue.id === issue.id)
//     );
//     localStorage.setItem('assignedIssues', JSON.stringify(localIssues));
//   };

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Welcome back Arslan" />
//         </div>
//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Assigned issues</h2>
//           </div>
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">Completed/Pending Issues</h3>
//               <div className="flex space-x-2">
//                 <Button 
//                   active={filter === "all"}
//                   onClick={() => setFilter("all")}
//                 >
//                   All
//                 </Button>
//                 <Button 
//                   active={filter === "pending"}
//                   onClick={() => setFilter("pending")}
//                 >
//                   Pending
//                 </Button>
//                 <Button 
//                   active={filter === "completed"}
//                   onClick={() => setFilter("completed")}
//                 >
//                   Completed
//                 </Button>
//               </div>
//             </div>
//             <IssueTable 
//               issues={filteredIssues} 
//               onUpdateIssue={handleUpdateIssue} 
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// without local storage
"use client";

import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import IssueTable from "../../components/STdashboard/IssueTable";
import useIssues from "../../hooks/useIssues";
import Button from "../../components/STdashboard/Button";
import { Users } from "lucide-react";
import { useState, useEffect } from "react";

export default function AssignedIssuesPage() {
  // Load only from the useIssues hook (no localStorage)
  const { issues: initialIssues } = useIssues();
  const [issues, setIssues] = useState([]);
  const [filter, setFilter] = useState("all");

  // Initialize with only the API data
  useEffect(() => {
    setIssues(initialIssues);
  }, [initialIssues]);

  const filteredIssues = issues.filter((issue) => {
    if (filter === "all") return true;
    return issue.status === filter;
  });

  const handleUpdateIssue = (updatedIssue) => {
    setIssues(prevIssues => 
      prevIssues.map(issue => 
        issue.id === updatedIssue.id ? updatedIssue : issue
      )
    );
    // No localStorage persistence
  };

  return (
    <div className="flex h-screen w-full bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <Header title="Welcome back Arslan" />
        </div>
        <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
          <div className="flex items-center mb-8">
            <Users className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">Assigned issues</h2>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Completed/Pending Issues</h3>
              <div className="flex space-x-2">
                <Button 
                  active={filter === "all"}
                  onClick={() => setFilter("all")}
                >
                  All
                </Button>
                <Button 
                  active={filter === "pending"}
                  onClick={() => setFilter("pending")}
                >
                  Pending
                </Button>
                <Button 
                  active={filter === "completed"}
                  onClick={() => setFilter("completed")}
                >
                  Completed
                </Button>
              </div>
            </div>
            <IssueTable 
              issues={filteredIssues} 
              onUpdateIssue={handleUpdateIssue} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}


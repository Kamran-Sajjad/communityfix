// "use client";

// // import Sidebar from "../../components/STDashboard/Sidebar";
// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import { useIssues } from "../../hooks/useIssues";
// import Button from "../../components/STdashboard/Button";
// import { Users } from "lucide-react";

// export default function AssignedIssuesPage() {
//   const issues = useIssues();

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header username="Mr. Arslan" />
//         <div className="flex-1 p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Assigned issues</h2>
//           </div>
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">completed/pending issues</h3>
//               <div className="flex space-x-2">
//                 <Button>pending</Button>
//                 <Button>completed</Button>
//               </div>
//             </div>
//             <IssueTable issues={issues} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import { useIssues } from "../../hooks/useIssues";
// import Button from "../../components/STdashboard/Button";
// import { Users } from "lucide-react";
// import { useEffect, useState } from "react";

// export default function AssignedIssuesPage() {
//   const [issues, setIssues] = useState([]);

//   // Fetch issues (replace with your useIssues hook if needed)
//   useEffect(() => {
//     const fetchedIssues = [
//       { name: "Umer", address: "Street 9 House 32", issue: "renovation", status: "completed" },
//       { name: "Kamran", address: "Street 7 House 9", issue: "Pipe leaks", status: "completed" },
//       // Add more issues here
//     ];
//     setIssues(fetchedIssues);
//   }, []);

//   const handleUpdateIssue = (updatedIssue) => {
//     setIssues((prevIssues) =>
//       prevIssues.map((issue) =>
//         issue.name === updatedIssue.name ? updatedIssue : issue
//       )
//     );
//   };

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header username="Mr. Arslan" />
//         <div className="flex-1 p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Assigned issues</h2>
//           </div>
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">completed/pending issues</h3>
//               <div className="flex space-x-2">
//                 <Button>pending</Button>
//                 <Button>completed</Button>
//               </div>
//             </div>
//             <IssueTable issues={issues} onUpdateIssue={handleUpdateIssue} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import { useIssues } from "../../hooks/useIssues";
// import Button from "../../components/STdashboard/Button";
// import { Users } from "lucide-react";
// import { useState } from "react";

// export default function AssignedIssuesPage() {
//   // Use the useIssues hook to fetch issues
//   const { issues } = useIssues();
//   const [filter, setFilter] = useState("all"); // "all", "pending", or "completed"

//   // Filter issues based on the selected filter
//   const filteredIssues = issues.filter((issue) => {
//     if (filter === "all") return true;
//     return issue.status === filter;
//   });

//   // Handle updating an issue
//   const handleUpdateIssue = (updatedIssue) => {
//     // Update the issue in the state (if using a state management solution)
//     console.log("Updated Issue:", updatedIssue);
//   };

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header username="Mr. Arslan" />
//         <div className="flex-1 p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Assigned issues</h2>
//           </div>
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">completed/pending issues</h3>
//               <div className="flex space-x-2">
//                 <Button onClick={() => setFilter("all")}>All</Button>
//                 <Button onClick={() => setFilter("pending")}>Pending</Button>
//                 <Button onClick={() => setFilter("completed")}>Completed</Button>
//               </div>
//             </div>
//             <IssueTable issues={filteredIssues} onUpdateIssue={handleUpdateIssue} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import { useIssues } from "../../hooks/useIssues";
// import Button from "../../components/STdashboard/Button";
// import { Users } from "lucide-react";
// import { useState } from "react";

// export default function AssignedIssuesPage() {
//   const { issues: initialIssues } = useIssues();
//   const [issues, setIssues] = useState(initialIssues);
//   const [filter, setFilter] = useState("all"); // "all", "pending", or "completed"

//   // Filter issues based on the selected filter
//   const filteredIssues = issues.filter((issue) => {
//     if (filter === "all") return true;
//     return issue.status === filter;
//   });

//   // Handle updating an issue
//   const handleUpdateIssue = (updatedIssue) => {
//     setIssues((prevIssues) =>
//       prevIssues.map((issue) =>
//         issue.id === updatedIssue.id ? updatedIssue : issue
//       )
//     );
//   };

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header username="Mr. Arslan" />
//         <div className="flex-1 p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Assigned issues</h2>
//           </div>
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">completed/pending issues</h3>
//               <div className="flex space-x-2">
//                 <Button onClick={() => setFilter("all")}>All</Button>
//                 <Button onClick={() => setFilter("pending")}>Pending</Button>
//                 <Button onClick={() => setFilter("completed")}>Completed</Button>
//               </div>
//             </div>
//             <IssueTable issues={filteredIssues} onUpdateIssue={handleUpdateIssue} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import IssueTable from "../../components/STdashboard/IssueTable";
import useIssues  from "../../hooks/useIssues";
import Button from "../../components/STdashboard/Button";
import { Users } from "lucide-react";
import { useState, useEffect } from "react";

export default function AssignedIssuesPage() {
  const { issues: initialIssues } = useIssues();
  const [issues, setIssues] = useState([]);
  const [filter, setFilter] = useState("all"); // "all", "pending", or "completed"

  // Update issues state when initialIssues changes
  useEffect(() => {
    setIssues(initialIssues);
  }, [initialIssues]);

  // Filter issues based on the selected filter
  const filteredIssues = issues.filter((issue) => {
    if (filter === "all") return true;
    return issue.status === filter;
  });

  // Handle updating an issue
  const handleUpdateIssue = (updatedIssue) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === updatedIssue.id ? updatedIssue : issue
      )
    );
  };

  return (
    <div className="flex h-screen w-full bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header username="Mr. Arslan" />
        <div className="flex-1 p-6 overflow-auto">
          <div className="flex items-center mb-8">
            <Users className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">Assigned issues</h2>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">completed/pending issues</h3>
              <div className="flex space-x-2">
                <Button onClick={() => setFilter("all")}>All</Button>
                <Button onClick={() => setFilter("pending")}>Pending</Button>
                <Button onClick={() => setFilter("completed")}>Completed</Button>
              </div>
            </div>
            <IssueTable issues={filteredIssues} onUpdateIssue={handleUpdateIssue} />
          </div>
        </div>
      </div>
    </div>
  );
}
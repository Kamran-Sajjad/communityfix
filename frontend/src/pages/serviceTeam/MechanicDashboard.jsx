// "use client";

// import { useState } from "react";
// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import StatsCard from "../../components/STdashboard/StatsCard";
// import WorkingStatus from "../../components/STdashboard/WorkingStatus";
// import CompletionStatus from "../../components/STdashboard/CompletionStatus";
// import IssueStatusTable from "../../components/STdashboard/IssueStatusTable";
// // import Contacts from "../../components/STdashboard/Contacts";
// import { useSelector } from 'react-redux';
// import ChatWindow from '../../components/Chat/ChatWindow';




// const MechanicDashboard = () => {
//   const { user } = useSelector((state) => state.auth);
//   // State for all issues
//   const [issues, setIssues] = useState([
//     { 
//       id: 1,
//       name: "Hasnain", 
//       address: "Street 4 House 38", 
//       age: 32, 
//       issue: "Ups installation", 
//       status: "not completed",
//       progress: 30
//     },
//     { 
//       id: 2,
//       name: "Kamran", 
//       address: "Street 7 House 9", 
//       age: 45, 
//       issue: "Pipe leaks", 
//       status: "completed",
//       progress: 100
//     },
//     { 
//       id: 3,
//       name: "Nizam", 
//       address: "Street 2 House 50", 
//       age: 22, 
//       issue: "Solar installation", 
//       status: "not completed",
//       progress: 90
//     },
//     { 
//       id: 4,
//       name: "Ali", 
//       address: "Street 5 House 12", 
//       age: 28, 
//       issue: "Electrical wiring", 
//       status: "not completed",
//       progress: 45
//     },
//     { 
//       id: 5,
//       name: "Usman", 
//       address: "Street 9 House 3", 
//       age: 35, 
//       issue: "Car repair", 
//       status: "completed",
//       progress: 100
//     }
//   ]);
//   const firstName = user?.fullName.split(' ')[0] || 'Resident';
//   // Calculate stats
//   const totalHouseholders = issues.length;
//   const completedWork = issues.filter(issue => issue.status === "completed").length;
//   const pendingRequests = issues.filter(issue => issue.status === "not completed").length;

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header firstName={firstName} />
//           {/* <Header title="Welcome back Arslan" /> */}
//         </div>
//         <div className="flex lg:ml-[250px] p-4 flex-col lg:flex-row flex-1">
//           <div className="flex-1 p-4 lg:p-6 overflow-auto">
//             {/* Stats Cards */}
//             <div className="flex gap-4 lg:gap-6 mb-8 overflow-x-auto">
//               <StatsCard 
//                 title="Total Householders" 
//                 value={totalHouseholders.toString()} 
//                 description="registered users" 
//               />
//               <StatsCard 
//                 title="Work" 
//                 value={completedWork.toString()} 
//                 description="completed" 
//               />
//               <StatsCard 
//                 title="Pending" 
//                 value={pendingRequests.toString()} 
//                 description="requests" 
//               />
//             </div>

//             {/* Working Status - shows only not completed tasks */}
//             <WorkingStatus issues={issues} />

//             {/* Completion Status - shows only completed tasks */}
//             <CompletionStatus issues={issues} />

//             {/* Issue Status Table - shows all tasks */}
//             <IssueStatusTable issues={issues} />
//           </div>

//           {/* Right Sidebar */}
//         </div>
//       </div>
//          <ChatWindow />

//     </div>
//   );
// };

// export default MechanicDashboard;



















"use client";

import { useState, useEffect } from "react";
import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import StatsCard from "../../components/STdashboard/StatsCard";
import WorkingStatus from "../../components/STdashboard/WorkingStatus";
import CompletionStatus from "../../components/STdashboard/CompletionStatus";
import IssueStatusTable from "../../components/STdashboard/IssueStatusTable";
import { useSelector } from 'react-redux';
import ChatWindow from '../../components/Chat/ChatWindow';
import axios from "axios";
import { toast } from "react-toastify";

const MechanicDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const firstName = user?.fullName.split(' ')[0] || 'Mechanic';

  useEffect(() => {
    const fetchAssignedIssues = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/api/issues/service/accepted", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        // Transform the data to match expected format
        const formattedIssues = response.data.issues.map(issue => ({
          id: issue._id || issue.id,
          name: issue.name,
          address: issue.address,
          issue: issue.title,
          status: issue.status === 'completed' || issue.status === 'resolved' ? 'completed' : 'not completed',
          progress: issue.status === 'completed' || issue.status === 'resolved' ? 100 : 
                   issue.status === 'in_progress' ? 50 : 0
        }));

        setIssues(formattedIssues);
      } catch (error) {
        console.error("Error fetching issues:", error);
        toast.error("Failed to load issues");
      } finally {
        setLoading(false);
      }
    };

    fetchAssignedIssues();
  }, []);

  // Calculate stats
  const totalHouseholders = issues.length;
  const completedWork = issues.filter(issue => issue.status === "completed").length;
  const pendingRequests = issues.filter(issue => issue.status !== "completed").length;

  if (loading) {
    return (
      <div className="flex h-screen w-full bg-white">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <Header firstName={firstName} />
        </div>
        <div className="flex lg:ml-[250px] p-4 flex-col lg:flex-row flex-1">
          <div className="flex-1 p-4 lg:p-6 overflow-auto">
            {/* Stats Cards */}
            <div className="flex gap-4 lg:gap-6 mb-8 overflow-x-auto">
              <StatsCard 
                title="Total Assigned" 
                value={totalHouseholders.toString()} 
                description="issues" 
              />
              <StatsCard 
                title="Completed" 
                value={completedWork.toString()} 
                description="issues" 
              />
              <StatsCard 
                title="Pending" 
                value={pendingRequests.toString()} 
                description="issues" 
              />
            </div>

            {/* Working Status - shows only pending tasks */}
            <WorkingStatus issues={issues.filter(issue => issue.status !== "completed")} />

            {/* Completion Status - shows only completed tasks */}
            <CompletionStatus issues={issues.filter(issue => issue.status === "completed")} />

            {/* Issue Status Table - shows all tasks */}
            <IssueStatusTable issues={issues} />
          </div>
        </div>
      </div>
      <ChatWindow />
    </div>
  );
};

export default MechanicDashboard;
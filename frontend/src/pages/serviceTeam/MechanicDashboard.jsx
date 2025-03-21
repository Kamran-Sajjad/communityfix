
"use client";


import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import StatsCard from "../../components/STdashboard/StatsCard";
import WorkingStatus from "../../components/STdashboard/WorkingStatus";
import CompletionStatus from "../../components/STdashboard/CompletionStatus";
import IssueStatusTable from "../../components/STdashboard/IssueStatusTable";
import Contacts from "../../components/STdashboard/Contacts";
import Services from "../../components/STdashboard/Services";

// export default function MechanicDashboard() {
//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <div className="flex flex-col lg:flex-row flex-1">
//           <div className="flex-1 p-4 lg:p-6 overflow-auto">
//             {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
//               <StatsCard title="Total Householders" value="14" description="registered users" />
//               <StatsCard title="Work" value="8" description="completed" />
//               <StatsCard title="Pending" value="6" description="requests" />
//             </div> */}
//             <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-8 overflow-x-auto">
//               <StatsCard title="Total Householders" value="14" description="registered users" />
//               <StatsCard title="Work" value="8" description="completed" />
//               <StatsCard title="Pending" value="6" description="requests" />
//             </div>
//             <WorkingStatus />
//             <CompletionStatus />
//             <IssueStatusTable />
//           </div>
//           <div className="w-full lg:w-[300px] border-t lg:border-l border-gray-200 p-4 lg:p-6">
//             <Contacts />
//             <Services />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// pages/mechanic-dashboard.jsx
"use client";

// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
// import StatsCard from "../components/StatsCard";
// import WorkingStatus from "../components/WorkingStatus";
// import CompletionStatus from "../components/CompletionStatus";
// import IssueStatusTable from "../components/IssueStatusTable";
// import Contacts from "../components/Contacts";
// import Services from "../components/Services";
const MechanicDashboard=()=> {
// export default function MechanicDashboard() {
  return (
    <div className="flex h-screen w-full bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-col lg:flex-row flex-1">
          <div className="flex-1 p-4 lg:p-6 overflow-auto">
            {/* Stats Cards */}
            <div className="flex gap-4 lg:gap-6 mb-8 overflow-x-auto">
              <StatsCard title="Total Householders" value="14" description="registered users" />
              <StatsCard title="Work" value="8" description="completed" />
              <StatsCard title="Pending" value="6" description="requests" />
            </div>

            {/* Working Status */}
            <WorkingStatus />

            {/* Completion Status */}
            <CompletionStatus />

            {/* Issue Status Table */}
            <IssueStatusTable />
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[300px] border-t lg:border-l border-gray-200 p-4 lg:p-6">
            <Contacts />
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MechanicDashboard;
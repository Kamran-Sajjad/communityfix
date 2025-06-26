// import React, { useState,useEffect } from "react";
// import AdSideBare from "../../components/Dashboard/AdSideBare";
// import { AdHeader } from "../../components/Dashboard/AdHeader";
// import { WorkProgress } from "../../components/Dashboard/WorkProgress";
// import { PendingReports } from "../../components/Dashboard/PendingReports";
// import { FeedBack } from "../../components/Dashboard/FeedBack";
// import { Stats } from "../../components/Dashboard/Stats";
// import { RegUsers } from "../../components/Dashboard/RegUsers";
// import { RepTable } from "../../components/Dashboard/RepTable";
// import { DepartmentMem } from "../../components/Dashboard/DepartmentMem";
// import ChatWindow from '../../components/Chat/ChatWindow';



// function Admindb() {
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

//   return (
//     <div className="flex min-h-screen w-full bg-gray-100 relative">
    
//       <div
//         className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 z-30`} 
//         // className={`fixed md:relative z-50 h-full
//         //  md:block`}
//       >
//         <AdSideBare
//           isExpanded={isSidebarExpanded}
//           toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
//         />
        
//       </div>


//       {/* Main Content */}
//       <div
//         className={`flex flex-col flex-1 w-full transition-all duration-300 md:ml-12 ${
//           isSidebarExpanded ? "ml-4" : "ml-0"
//         }`}
//       >
//         {/* Header */}
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <AdHeader title="Dashboard Admin" />
//         </div>

//         {/* Dashboard Widgets */}
//         <div className="mt-6 px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <WorkProgress/>
//           <PendingReports />
//           <FeedBack />
//           <Stats />
//           <RegUsers />
//         </div>

//         {/* Reports & Department Members Section */}
//         <div className="mt-6 px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-6">
//           <div className="w-full lg:w-3/5">
//             <RepTable />
//           </div>
//           <div className="w-full lg:w-2/5">
//             <DepartmentMem />
//           </div>
//         </div>
//       </div>
//       <ChatWindow />

//     </div>
//   );
// }


// useEffect(() => {
//   if (user?._id) {
//     connectSocket(user._id);
//   }
//   return () => {
//     disconnectSocket();
//   };
// }, [user?._id]);

// export default Admindb;












import React, { useState } from "react";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import { AdHeader } from "../../components/Dashboard/AdHeader";
import { WorkProgress } from "../../components/Dashboard/WorkProgress";
import { PendingReports } from "../../components/Dashboard/PendingReports";
import { FeedBack } from "../../components/Dashboard/FeedBack";
import { Stats } from "../../components/Dashboard/Stats";
import { RegUsers } from "../../components/Dashboard/RegUsers";
import { RepTable } from "../../components/Dashboard/RepTable";
import { DepartmentMem } from "../../components/Dashboard/DepartmentMem";
import ChatWindow from '../../components/Chat/ChatWindow';

function Admindb() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gray-100 relative">
// <<<<<<< ST/basit
    
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 z-30`} 
      
      >
// =======
//       
//       <div className="fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 z-30">
// >>>>>>> admin/kamran
        <AdSideBare
          isExpanded={isSidebarExpanded}
          toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
        />
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 w-full transition-all duration-300 md:ml-12 ${
          isSidebarExpanded ? "ml-4" : "ml-0"
        }`}
      >
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <AdHeader title="Dashboard Admin" />
        </div>

        <div className="mt-6 px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <WorkProgress />
          <PendingReports />
          <FeedBack />
          <Stats />
          <RegUsers />
        </div>

        <div className="mt-6 px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/5">
            <RepTable />
          </div>
          <div className="w-full lg:w-2/5">
            <DepartmentMem />
          </div>
        </div>
      </div>

      <ChatWindow />
    </div>
  );
}

export default Admindb;

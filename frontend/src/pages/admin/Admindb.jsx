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

function Admindb() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`fixed md:relative z-20 h-screen transition-all duration-300 ${
          isSidebarExpanded ? "w-64" : "w-16"
        }`}
      >
        <AdSideBare 
          isExpanded={isSidebarExpanded} 
          toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)} 
        />
      </div>

      {/* Main Content */}
      <div 
        className={`flex-1 transition-all duration-300 ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-16"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white shadow-sm">
          <AdHeader />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <WorkProgress />
          <PendingReports/> <FeedBack/> <Stats/> <RegUsers/> <RepTable/>
<DepartmentMem/>
        </div>
        
      </div>
    </div>
  );
}

export default Admindb;

import React from "react";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import { AdHeader } from "../../components/Dashboard/AdHeader";
import { WorkProgress } from "../../components/Dashboard/WorkProgress";
import { PendingReports } from "../../components/Dashboard/PendingReports";
import { FeedBack } from "../../components/Dashboard/FeedBack";
import { Stats } from "../../components/Dashboard/Stats";
import { RegUsers } from "../../components/Dashboard/RegUsers";
import { RepTable } from "../../components/Dashboard/RepTable";
import { DepartmentMem } from "../../components/Dashboard/DepartmentMem";
import { Link } from "react-router-dom";
function Admindb() {
  return (
    <div className="flex min-h-screen bg-gray-100">
  
      <div className="hidden md:block md:w-64 transition-all duration-300">
        <AdSideBare />
      </div>
      <div className="flex-1 p-4 md:ml-1 transition-all duration-300">
        <AdHeader></AdHeader>
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

import React, { useState } from "react";
import IssueReports from "../../components/Dashboard/IssueReports";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import { AdHeader } from "../../components/Dashboard/AdHeader";

const Reports = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="flex w-full min-h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 z-30`} 
        // className={`fixed md:relative z-50 h-full
        //  md:block`}
      >
        <AdSideBare
          isExpanded={isSidebarExpanded}
          toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
        />
        
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 md:ml-12 ${
          isSidebarExpanded ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <AdHeader title="Report's History" />
        </div>

        {/* Reports Section */}
        <div className="p-6">
          <IssueReports />
        </div>
      </div>
    </div>
  );
};

export default Reports;

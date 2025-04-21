import React, { useState } from "react";
import { Link } from "react-router-dom";
import IssueReports from "../../components/Dashboard/IssueReports";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import { AdHeader } from "../../components/Dashboard/AdHeader";

const Reports = () => {
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
      <div className={`flex-1 transition-all duration-300 ${isSidebarExpanded ? "md:ml-64" : "md:ml-16"}`}>
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white shadow-sm">
          <AdHeader title="Reports, History" />
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

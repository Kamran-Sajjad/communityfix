import React, { useState, useEffect } from "react";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import ReportCard from "../../components/Dashboard/ReportCard";
import reportsData from "../../hooks/reports.json";
import { AdHeader } from "../../components/Dashboard/AdHeader";

const RequestedReports = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    setReports(reportsData);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-black z-40 transition-all duration-300 ${
          isSidebarExpanded ? "w-64" : "w-16"
        }`}
      >
        <AdSideBare isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isSidebarExpanded ? "ml-64" : "ml-16"
        }`}
      >
        {/* Header Section */}
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <AdHeader title="Requested Reports" />
        </div>

        {/* Reports List */}
        <div className="p-4 sm:p-6 md:p-8 mx-auto max-w-full md:max-w-7xl space-y-4">
          {reports.length > 0 ? (
            reports.map((report, index) => (
              <ReportCard key={index} report={report} />
            ))
          ) : (
            <p className="text-center text-gray-500">No reports available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestedReports;

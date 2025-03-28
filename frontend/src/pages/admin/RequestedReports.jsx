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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:relative transition-all duration-300 ease-in-out bg-black ${
          isSidebarExpanded ? "w-64" : "w-16"
        }`}
      >
        <AdSideBare isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-4 sm:p-6 md:p-8 transition-all duration-300 ${
          isSidebarExpanded ? "ml-64" : "ml-16"
        }`}
      >
        {/* Header Section */}
        <AdHeader className="ml-2" title="Requested Reports" />

        {/* Reports List */}
        <div className="mx-auto max-w-full md:max-w-7xl space-y-4">
          {reports.length > 0 ? (
            reports.map((report, index) => <ReportCard key={index} report={report} />)
          ) : (
            <p className="text-center text-gray-500">No reports available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestedReports;

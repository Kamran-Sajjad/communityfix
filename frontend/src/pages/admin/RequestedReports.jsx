import React, { useState, useEffect } from "react";
import axios from "axios";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import ReportCard from "../../components/Dashboard/ReportCard";
import { AdHeader } from "../../components/Dashboard/AdHeader";

const RequestedReports = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/issues");
        // Transform the API data to match ReportCard's expected format
        const transformedReports = data.issues.map(issue => ({
          ...issue,
          issueTitle: issue.title,
          issueDescription: issue.description,
          age: Math.floor((Date.now() - new Date(issue.createdAt)) / 3600000),
          recommendations: ["Resolve", "Review", "Escalate"]
        }));
        setReports(transformedReports);
        setError(null);
      } catch (err) {
        console.error("Failed to load reports:", err);
        setError("Failed to load reports. Please try again later.");
        setReports([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 z-30`}>
        <AdSideBare
          isExpanded={isSidebarExpanded}
          toggleSidebar={toggleSidebar}
        />
      </div>

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition-all duration-300 md:ml-12 ${
        isSidebarExpanded ? "ml-64" : "ml-0"
      }`}>
        {/* Header Section */}
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <AdHeader title="Requested Reports" />
        </div>

        {/* Reports List */}
        <div className="p-4 sm:p-6 md:p-8 mx-auto max-w-full md:max-w-7xl space-y-4">
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600">Loading reports...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">{error}</div>
          ) : reports.length > 0 ? (
            reports.map((report) => (
              <ReportCard 
                key={report._id || report.id} 
                report={report} 
              />
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
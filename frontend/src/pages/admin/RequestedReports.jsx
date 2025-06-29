







// import axios from "axios";
// import AdSideBare from "../../components/Dashboard/AdSideBare";
// import ReportCard from "../../components/Dashboard/ReportCard";
// import { AdHeader } from "../../components/Dashboard/AdHeader";
// import { useState, useEffect } from "react";
// import { showSuccessToast, showErrorToast, showWarningToast } from "../../../../backend/utils/toastUtils"; // import toast functions

// const RequestedReports = () => {
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     issueType: "",
//     issueCategory: "",
//     // status="",
//   });

//   // Fetch reports with applied filters
//   const fetchReports = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

      
//       // Fetch issues based on filters
//       const { data } = await axios.get("http://localhost:5000/api/issues", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         params: filters, // Pass filters to the request
//       });

//       const transformedReports = data.issues.map((issue) => ({
//         ...issue,
//         issueTitle: issue.title,
//         issueDescription: issue.description,
//         age: Math.floor((Date.now() - new Date(issue.createdAt)) / 3600000),
//         recommendations: ["Resolve", "Review", "Escalate"],
//         // Pass adminAccepted status to the report
//         accepted: issue.adminAccepted,
//       }));

//       setReports(transformedReports);
//       setError(null);
//     } catch (err) {
//       console.error("Failed to load reports:", err);
//       setError("Failed to load reports. Please try again later.");
//       setReports([]);
//       showErrorToast("Failed to load reports. Please try again later."); // Use toast for error
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchReports(); // Fetch reports when component mounts or filters change
//   }, [filters]);

//   // Handle Accept action (for admin)
//   const handleAccept = async (issueId) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post(`http://localhost:5000/api/issues/${issueId}/accept`, {}, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchReports(); // Re-fetch reports after action
//       showSuccessToast("Issue accepted and sent to service team"); // Success toast
//     } catch (err) {
//       console.error("Failed to accept issue:", err);
//       showErrorToast("Failed to accept issue"); // Error toast
//     }
//   };

//   // Handle Reject action (for admin)
//   const handleReject = async (issueId) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post(`http://localhost:5000/api/issues/${issueId}/reject`, {}, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       fetchReports(); // Re-fetch reports after action
//       showSuccessToast("Issue rejected and removed"); // Success toast
//     } catch (err) {
//       console.error("Failed to reject issue:", err);
//       showErrorToast("Failed to reject issue"); // Error toast
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarExpanded(!isSidebarExpanded);
//   };

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="flex w-full min-h-screen bg-gray-100 relative">
//       <div className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 z-30`}>
//         <AdSideBare isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
//       </div>

//       <div className={`flex flex-col flex-1 transition-all duration-300 md:ml-12 ${isSidebarExpanded ? "ml-64" : "ml-0"}`}>
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <AdHeader title="Requested Reports" />
//         </div>

//         <div className="flex justify-end p-4 gap-4 mt-2">
//           <select
//             name="issueType"
//             value={filters.issueType}
//             onChange={handleFilterChange}
//             className="px-4 py-2 border border-gray-300 rounded shadow-md"
//           >
//             <option value="">Issue Type</option>
//             <option value="societal">Societal</option>
//             <option value="household">Household</option>
//           </select>

//           <select
//             name="issueCategory"
//             value={filters.issueCategory}
//             onChange={handleFilterChange}
//             className="px-4 py-2 border border-gray-300 rounded shadow-md"
//           >
//             <option value="">Issue Category</option>
//             <option value="renovation">Renovation</option>
//             <option value="repair">Repair</option>
//             <option value="plumbing">Plumbing</option>
//             <option value="water_supply">Water Supply</option>
//             <option value="electrical">Electrical</option>
//             <option value="waste_management">Waste Management</option>
//             <option value="gardening">Gardening</option>
//             <option value="security">Security</option>
//             <option value="maintenance">Maintenance</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div className="p-2 sm:p-6 md:p-8 mx-auto max-w-full md:max-w-7xl space-y-4">
//           {loading ? (
//             <div className="text-center py-8">
//               <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//               <p className="mt-2 text-gray-600">Loading reports...</p>
//             </div>
//           ) : error ? (
//             <div className="text-center py-8 text-red-500">{error}</div>
//           ) : reports.length > 0 ? (
//             reports.map((report) => (
//               <ReportCard
//                 key={report._id || report.id}
//                 report={report}
//                 onApprove={handleAccept}
//                 onReject={handleReject}
//                 accepted={report.accepted} // Pass accepted status from backend
//               />
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No reports available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestedReports;


















import axios from "axios";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import ReportCard from "../../components/Dashboard/ReportCard";
import { AdHeader } from "../../components/Dashboard/AdHeader";
import { useState, useEffect } from "react";
import { showSuccessToast, showErrorToast } from "../../../../backend/utils/toastUtils";

const RequestedReports = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    issueType: "",
    issueCategory: "",
    status: "", // ✅ New: Status filter
  });

  // Fetch reports with applied filters
  const fetchReports = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const { data } = await axios.get("http://localhost:5000/api/issues", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: filters, // ✅ Pass all filters including status
      });

      const transformedReports = data.issues.map((issue) => ({
        ...issue,
        issueTitle: issue.title,
        issueDescription: issue.description,
        age: Math.floor((Date.now() - new Date(issue.createdAt)) / 3600000),
        recommendations: ["Resolve", "Review", "Escalate"],
        accepted: issue.adminAccepted,
      }));

      setReports(transformedReports);
      setError(null);
    } catch (err) {
      console.error("Failed to load reports:", err);
      setError("Failed to load reports. Please try again later.");
      setReports([]);
      showErrorToast("Failed to load reports. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports(); // ✅ Re-fetch whenever filters change
  }, [filters]);

  const handleAccept = async (issueId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`http://localhost:5000/api/issues/${issueId}/accept`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchReports();
      showSuccessToast("Issue accepted and sent to service team");
    } catch (err) {
      console.error("Failed to accept issue:", err);
      showErrorToast("Failed to accept issue");
    }
  };

  const handleReject = async (issueId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`http://localhost:5000/api/issues/${issueId}/reject`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchReports();
      showSuccessToast("Issue rejected and removed");
    } catch (err) {
      console.error("Failed to reject issue:", err);
      showErrorToast("Failed to reject issue");
    }
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100 relative">
      <div className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 z-30`}>
        <AdSideBare isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      </div>

      <div className={`flex flex-col flex-1 transition-all duration-300 md:ml-12 ${isSidebarExpanded ? "ml-64" : "ml-0"}`}>
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <AdHeader title="Requested Reports" />
        </div>

        {/* ✅ Filters Section */}
        <div className="flex flex-wrap justify-end p-4 gap-4 mt-2">
          <select
            name="issueType"
            value={filters.issueType}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded shadow-md"
          >
            <option value="">Issue Type</option>
            <option value="societal">Societal</option>
            <option value="household">Household</option>
          </select>

          <select
            name="issueCategory"
            value={filters.issueCategory}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded shadow-md"
          >
            <option value="">Issue Category</option>
            <option value="renovation">Renovation</option>
            <option value="repair">Repair</option>
            <option value="plumbing">Plumbing</option>
            <option value="water_supply">Water Supply</option>
            <option value="electrical">Electrical</option>
            <option value="waste_management">Waste Management</option>
            <option value="gardening">Gardening</option>
            <option value="security">Security</option>
            <option value="maintenance">Maintenance</option>
            <option value="other">Other</option>
          </select>

          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded shadow-md"
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Report Cards */}
        <div className="p-2 sm:p-6 md:p-8 mx-auto max-w-full md:max-w-7xl space-y-4">
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
                onApprove={handleAccept}
                onReject={handleReject}
                accepted={report.accepted}
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

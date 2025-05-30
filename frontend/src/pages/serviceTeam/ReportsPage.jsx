// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import ReportCard from "../../components/STdashboard/ReportCard";
// import { CircleDashed } from "lucide-react";

// const ReportsPage=()=> {
//   const reports = [
//     {
//       name: "Nizam",
//       location: "Airline near Quetta cafe 107",
//       title: "solar installation",
//       description: "Set up eco-friendly solar panels to reduce energy costs.",
//     },
//     {
//       name: "Basit",
//       location: "Airline, basharat chowk 003",
//       title: "garbage cleaning",
//       description: "Remove waste efficiently to ensure a clean environment. ",
//     },
//   ];

//   return (
//     <div className="flex h-screen w-full bg-white">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         {/* <Header userName="Mr. Arslan" /> */}
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Welcome back Arslan" />
//         </div>

//         {/* Reports Section */}
//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <CircleDashed className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Reports</h2>
//           </div>

//           {/* Report Cards */}
//           <div className="space-y-6">
//             {reports.map((report, index) => (
//               <ReportCard
//                 key={index}
//                 name={report.name}
//                 location={report.location}
//                 title={report.title}
//                 description={report.description}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ReportsPage;







// "use client";

// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import ReportCard from "../../components/STdashboard/ReportCard";
// import { CircleDashed } from "lucide-react";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ReportsPage = () => {
//   const [reports, setReports] = useState([
//     {
//       id: 1,
//       name: "Nizam",
//       location: "Airline near Quetta cafe 107",
//       title: "solar installation",
//       description: "Set up eco-friendly solar panels to reduce energy costs.",
//     },
//     {
//       id: 2,
//       name: "Basit",
//       location: "Airline, basharat chowk 003",
//       title: "garbage cleaning",
//       description: "Remove waste efficiently to ensure a clean environment.",
//     },
//   ]);

//   const handleAccept = (reportId) => {
//     const acceptedReport = reports.find(report => report.id === reportId);
    
//     toast.success('The task has been accepted', {
//       position: "top-right",
//       autoClose: 3000,
//     });

//     setReports(reports.filter(report => report.id !== reportId));

//     // Add to assigned issues in localStorage
//     const assignedIssues = JSON.parse(localStorage.getItem('assignedIssues')) || [];
//     assignedIssues.push({
//       id: Date.now(),
//       name: acceptedReport.name,
//       address: acceptedReport.location,
//       issue: acceptedReport.title,
//       description: acceptedReport.description,
//       status: "pending",
//       progress: 0,
//       age: 30, // Default age
//     });
//     localStorage.setItem('assignedIssues', JSON.stringify(assignedIssues));
//   };

//   const handleReject = (reportId) => {
//     toast.error('The task has been rejected', {
//       position: "top-right",
//       autoClose: 3000,
//     });
//     setReports(reports.filter(report => report.id !== reportId));
//   };

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Welcome back Arslan" />
//         </div>

//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <CircleDashed className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Reports</h2>
//           </div>

//           <div className="space-y-6">
//             {reports.length === 0 ? (
//               <div className="text-center py-8 text-gray-500">
//                 No pending reports available
//               </div>
//             ) : (
//               reports.map((report) => (
//                 <ReportCard
//                   key={report.id}
//                   name={report.name}
//                   location={report.location}
//                   title={report.title}
//                   description={report.description}
//                   onAccept={() => handleAccept(report.id)}
//                   onReject={() => handleReject(report.id)}
//                 />
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportsPage;



// import React, { useEffect, useState } from "react";
// // import Sidebar from "../../components/Sidebar";
// // import ReportCard from "../components/ReportCard";
// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import ReportCard from "../../components/STdashboard/ReportCard";
// import axios from "axios";
// import { toast } from "react-toastify";

// const ReportsPage = () => {
//   const [reports, setReports] = useState([]);

//   const fetchReports = async () => {
//     try {
//       const { data } = await axios.get("/api/serviceteam/reports", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       setReports(data.data);
//     } catch (error) {
//       toast.error("Failed to fetch reports");
//     }
//   };

//   const handleAccept = async (reportId) => {
//     try {
//       const { data } = await axios.put(
//         `/api/serviceteam/reports/${reportId}/accept`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       toast.success("The task has been accepted");
//       setReports(reports.filter((report) => report._id !== reportId));
//     } catch (error) {
//       toast.error("Error accepting the report");
//     }
//   };

//   const handleReject = async (reportId) => {
//     try {
//       await axios.put(
//         `/api/serviceteam/reports/${reportId}/reject`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       toast.error("The task has been rejected");
//       setReports(reports.filter((report) => report._id !== reportId));
//     } catch (error) {
//       toast.error("Error rejecting the report");
//     }
//   };

//   useEffect(() => {
//     fetchReports();
//   }, []);

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 bg-[#f0f4f8] min-h-screen p-8">
//         <h1 className="text-3xl font-bold mb-6 text-gray-800">Reports</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reports?.length > 0 ? (
//             reports.map((report) => (
//               <ReportCard
//                 key={report._id}
//                 name={report.name}
//                 location={report.location}
//                 title={report.title}
//                 description={report.description}
//                 onAccept={() => handleAccept(report._id)}
//                 onReject={() => handleReject(report._id)}
//               />
//             ))
//           ) : (
//             <p className="text-gray-500">No reports available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportsPage;


// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/STdashboard/Sidebar";
// import ReportCard from "../../components/STdashboard/ReportCard";
// import axios from "axios";
// import { toast } from "react-toastify";

// const ReportsPage = () => {
//   const [reports, setReports] = useState([]);

//   const fetchReports = async () => {
//     try {
//       const { data } = await axios.get("/api/serviceteam/reports", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       console.log("Fetched reports:", data);

//       const reportsArray = Array.isArray(data) ? data : data.data || data.reports || [];
//       setReports(reportsArray);
//     } catch (error) {
//       console.error("Fetch reports error:", error);
//       toast.error("Failed to fetch reports");
//     }
//   };

//   const handleAccept = async (reportId) => {
//     try {
//       await axios.put(
//         `/api/serviceteam/reports/${reportId}/accept`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       toast.success("The task has been accepted");
//       setReports((prev) => prev.filter((r) => r._id !== reportId));
//     } catch (error) {
//       toast.error("Error accepting the report");
//     }
//   };

//   const handleReject = async (reportId) => {
//     try {
//       await axios.put(
//         `/api/serviceteam/reports/${reportId}/reject`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       toast.error("The task has been rejected");
//       setReports((prev) => prev.filter((r) => r._id !== reportId));
//     } catch (error) {
//       toast.error("Error rejecting the report");
//     }
//   };

//   useEffect(() => {
//     fetchReports();
//   }, []);

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 bg-[#f0f4f8] min-h-screen p-8">
//         <h1 className="text-3xl font-bold mb-6 text-gray-800">Reports</h1>

//         {/* Debug Output */}
//         <pre className="text-xs bg-white p-2 rounded mb-4">
//           {JSON.stringify(reports, null, 2)}
//         </pre>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reports?.length > 0 ? (
//             reports.map((report) => (
//               <ReportCard
//                 key={report._id}
//                 name={report.name}
//                 location={report.location}
//                 title={report.title}
//                 description={report.description}
//                 onAccept={() => handleAccept(report._id)}
//                 onReject={() => handleReject(report._id)}
//               />
//             ))
//           ) : (
//             <p className="text-gray-500">No reports available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportsPage;



// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/STdashboard/Sidebar";
// import ReportCard from "../../components/STdashboard/ReportCard";
// import axios from "axios";
// import { toast } from "react-toastify";

// const ReportsPage = () => {
//   const [reports, setReports] = useState([]);

//   const fetchReports = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/serviceteam/reports", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       console.log("Fetched reports:", data);

//       // Ensure it's an array, otherwise fallback to possible keys
//       const reportsArray = Array.isArray(data)
//         ? data
//         : data.data || data.reports || [];

//       if (!Array.isArray(reportsArray)) {
//         throw new Error("API did not return a valid reports array");
//       }

//       setReports(reportsArray);
//     } catch (error) {
//       console.error("Fetch reports error:", error?.response || error?.message || error);
//       toast.error("Failed to fetch reports");
//     }
//   };

//   const handleAccept = async (reportId) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/serviceteam/reports/${reportId}/accept`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       toast.success("The task has been accepted");
//       setReports((prev) => prev.filter((r) => r._id !== reportId));
//     } catch (error) {
//       console.error("Accept error:", error?.response || error?.message);
//       toast.error("Error accepting the report");
//     }
//   };

//   const handleReject = async (reportId) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/serviceteam/reports/${reportId}/reject`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       toast.error("The task has been rejected");
//       setReports((prev) => prev.filter((r) => r._id !== reportId));
//     } catch (error) {
//       console.error("Reject error:", error?.response || error?.message);
//       toast.error("Error rejecting the report");
//     }
//   };

//   useEffect(() => {
//     fetchReports();
//   }, []);

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 bg-[#f0f4f8] min-h-screen p-8">
//         <h1 className="text-3xl font-bold mb-6 text-gray-800">Reports</h1>

//         {/* Debug Output */}
//         <pre className="text-xs bg-white p-2 rounded mb-4 overflow-x-auto">
//           {JSON.stringify(reports, null, 2)}
//         </pre>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reports?.length > 0 ? (
//             reports.map((report) => (
//               <ReportCard
//                 key={report._id}
//                 name={report.name}
//                 location={report.location}
//                 title={report.title}
//                 description={report.description}
//                 onAccept={() => handleAccept(report._id)}
//                 onReject={() => handleReject(report._id)}
//               />
//             ))
//           ) : (
//             <p className="text-gray-500">No reports available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportsPage;


import React, { useEffect, useState } from "react";
import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
// import ReportCard from "../../components/STdashboard/ReportCard";
import ReportCard from "../../components/STdashboard/ReportCard";
import axios from "axios";
import { toast } from "react-toastify";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);

  const fetchReports = async () => {
    const token = localStorage.getItem("serviceTeamToken");


    if (!token) {
      toast.error("You are not logged in. Please log in to view reports.");
      return;
    }

    try {
      const { data } = await axios.get("http://localhost:5000/api/serviceteam/reports", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Fetched reports:", data);

      const reportsArray = Array.isArray(data)
        ? data
        : data.data || data.reports || [];

      if (!Array.isArray(reportsArray)) {
        throw new Error("API did not return a valid reports array");
      }

      setReports(reportsArray);
    } catch (error) {
      console.error("Fetch reports error:", error?.response || error?.message || error);
      if (error?.response?.status === 401) {
        toast.error("Unauthorized access. Please log in again.");
      } else {
        toast.error("Failed to fetch reports");
      }
    }
  };

  const handleAccept = async (reportId) => {
    const token = localStorage.getItem("serviceTeamToken");

    if (!token) return toast.error("Unauthorized action");

    try {
      await axios.put(
        `http://localhost:5000/api/serviceteam/reports/${reportId}/accept`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("The task has been accepted");
      setReports((prev) => prev.filter((r) => r._id !== reportId));
    } catch (error) {
      console.error("Accept error:", error?.response || error?.message);
      toast.error("Error accepting the report");
    }
  };

  const handleReject = async (reportId) => {
    const token = localStorage.getItem("serviceTeamToken");

    if (!token) return toast.error("Unauthorized action");

    try {
      await axios.put(
        `http://localhost:5000/api/serviceteam/reports/${reportId}/reject`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.error("The task has been rejected");
      setReports((prev) => prev.filter((r) => r._id !== reportId));
    } catch (error) {
      console.error("Reject  error:", error?.response || error?.message);
      toast.error("Error rejecting the report");
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#f0f4f8] min-h-screen p-8">
      <div className="sticky z-20 bg-white shadow-sm w-full">
          <Header title="Welcome back Arslan" />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Reports</h1>

        {/* Debug Output */}
        <pre className="text-xs p-2 rounded mb-4 overflow-x-auto">
          {JSON.stringify(reports, null, 2)}
        </pre>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports?.length > 0 ? (
            reports.map((report) => (
              <ReportCard
                key={report._id}
                name={report.name}
                location={report.location}
                title={report.title}
                description={report.description}
                onAccept={() => handleAccept(report._id)}
                onReject={() => handleReject(report._id)}
              />
            ))
          ) : (
            <p className="text-gray-500">No reports available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;

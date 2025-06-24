// // import Sidebar from "../../components/STdashboard/Sidebar";
// // import Header from "../../components/STdashboard/Header";
// // import ReportCard from "../../components/STdashboard/ReportCard";
// // import { CircleDashed } from "lucide-react";

// // const ReportsPage=()=> {
// //   const reports = [
// //     {
// //       name: "Nizam",
// //       location: "Airline near Quetta cafe 107",
// //       title: "solar installation",
// //       description: "Set up eco-friendly solar panels to reduce energy costs.",
// //     },
// //     {
// //       name: "Basit",
// //       location: "Airline, basharat chowk 003",
// //       title: "garbage cleaning",
// //       description: "Remove waste efficiently to ensure a clean environment. ",
// //     },
// //   ];

// //   return (
// //     <div className="flex h-screen w-full bg-white">
// //       {/* Sidebar */}
// //       <Sidebar />

// //       {/* Main Content */}
// //       <div className="flex-1 flex flex-col">
// //         {/* Header */}
// //         {/* <Header userName="Mr. Arslan" /> */}
// //         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
// //           <Header title="Welcome back Arslan" />
// //         </div>

// //         {/* Reports Section */}
// //         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
// //           <div className="flex items-center mb-8">
// //             <CircleDashed className="w-6 h-6 mr-2" />
// //             <h2 className="text-xl font-bold">Reports</h2>
// //           </div>

// //           {/* Report Cards */}
// //           <div className="space-y-6">
// //             {reports.map((report, index) => (
// //               <ReportCard
// //                 key={index}
// //                 name={report.name}
// //                 location={report.location}
// //                 title={report.title}
// //                 description={report.description}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // export default ReportsPage;

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
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import ReportCard from "../../components/STdashboard/ReportCard";
import { CircleDashed } from "lucide-react";
import { toast } from "react-toastify";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);

  const fetchReports = async () => {
    try {
      const response = await axios.get("/api/issues/societal/accepted", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setReports(response.data.issues);
    } catch (error) {
      console.error("Error fetching accepted societal issues:", error);
      toast.error("Failed to load reports");
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleAccept = (id) => {
    toast.success("Already accepted by Admin");
  };

  const handleReject = (id) => {
    toast.error("Cannot reject already accepted issue");
  };

  return (
    <div className="flex h-screen w-full bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <Header title="Welcome back Arslan" />
        </div>

        <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
          <div className="flex items-center mb-8">
            <CircleDashed className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">Accepted Societal Reports</h2>
          </div>

          <div className="space-y-6">
            {reports.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No accepted societal reports found
              </div>
            ) : (
              reports.map((report) => (
                <ReportCard
                  key={report._id}
                  name={report.name}
                  location={report.address}
                  title={report.title}
                  description={report.description}
                  image={report.attachments?.[0]?.url}
                  onAccept={() => handleAccept(report._id)}
                  onReject={() => handleReject(report._id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;

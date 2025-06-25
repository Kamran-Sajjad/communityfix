// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import ReportCard from "../components/STdashboard/ReportCard";
// import Header from "../components/STdashboard/Header";
// import Sidebar from "../components/STdashboard/Sidebar";
// import { toast } from "react-toastify";
// import { CircleDashed } from "lucide-react";

// const HouseholdReportsPage = () => {
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     const fetchHouseholdReports = async () => {
//       try {
//         const res = await axios.get("/api/issues/household/accepted", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         setReports(res.data.issues);
//       } catch (err) {
//         console.error(err);
//         toast.error("Failed to fetch household issues");
//       }
//     };

//     fetchHouseholdReports();
//   }, []);

//   const handleAccept = (id) => {
//     toast.success("Accepted task (placeholder)");
//     // logic to assign task can go here
//   };

//   const handleReject = (id) => {
//     toast.warning("Rejected task (placeholder)");
//     // logic to reject can go here
//   };

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Household Reports" />
//         </div>

//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <CircleDashed className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Accepted Household Reports</h2>
//           </div>

//           <div className="space-y-6">
//             {reports.length === 0 ? (
//               <div className="text-center text-gray-500">No household reports found.</div>
//             ) : (
//               reports.map((report) => (
//                 <ReportCard
//                   key={report._id}
//                   name={report.name}
//                   location={report.address}
//                   title={report.title}
//                   description={report.description}
//                   image={report.attachments?.[0]?.url}
//                   onAccept={() => handleAccept(report._id)}
//                   onReject={() => handleReject(report._id)}
//                 />
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HouseholdReportsPage;

import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import HouseReportCard from "../../components/STdashboard/HouseReportCard";
import { CircleDashed } from "lucide-react";
import { toast } from "react-toastify";

const HouseholdReportsPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchHouseholdReports = async () => {
      try {
        const res = await axios.get("/api/issues/household/accepted", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setReports(res.data.issues);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch household reports");
      }
    };

    fetchHouseholdReports();
  }, []);

  const handleAccept = (id) => {
    toast.success("Accepted task (placeholder)");
    // Logic for assigning to service team if needed
  };

  const handleReject = (id) => {
    toast.warning("Rejected task (placeholder)");
    // Logic for rejection if needed
  };

  return (
    <div className="flex h-screen w-full bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Household Reports" />

        <main className="flex-1 lg:ml-[250px] p-6 overflow-auto">
          <div className="flex items-center mb-6">
            <CircleDashed className="w-5 h-5 mr-2" />
            <h2 className="text-xl font-bold">Accepted Household Issues</h2>
          </div>

          <div className="space-y-6">
            {reports.length === 0 ? (
              <div className="text-center text-gray-500">No reports found.</div>
            ) : (
              reports.map((report) => (
                <HouseReportCard
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
        </main>
      </div>
    </div>
  );
};

export default HouseholdReportsPage;

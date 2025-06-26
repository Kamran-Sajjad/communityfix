

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import HouseReportCard from "../../components/STdashboard/HouseReportCard";
// import { CircleDashed } from "lucide-react";
// import { toast } from "react-toastify";

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
//         toast.error("Failed to fetch household reports");
//       }
//     };

//     fetchHouseholdReports();
//   }, []);

//   const handleAccept = (id) => {
//     toast.success("Accepted task (placeholder)");
//     // Logic for assigning to service team if needed
//   };

//   const handleReject = (id) => {
//     toast.warning("Rejected task (placeholder)");
//     // Logic for rejection if needed
//   };

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header title="Household Reports" />

//         <main className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-6">
//             <CircleDashed className="w-5 h-5 mr-2" />
//             <h2 className="text-xl font-bold">Accepted Household Issues</h2>
//           </div>

//           <div className="space-y-6">
//             {reports.length === 0 ? (
//               <div className="text-center text-gray-500">No reports found.</div>
//             ) : (
//               reports.map((report) => (
//                 <HouseReportCard
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
//         </main>
//       </div>
//     </div>
//   );
// };

// export default HouseholdReportsPage;










// ✅ UPDATED HOUSEHOLDREPORTSPAGE.JSX
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import HouseReportCard from "../../components/STdashboard/HouseReportCard";
import { CircleDashed } from "lucide-react";
import { toast } from "react-toastify";
import {jwtDecode} from "jwt-decode";

const HouseholdReportsPage = () => {
  const [reports, setReports] = useState([]);

  const token = localStorage.getItem("token");
  const currentUserId = token ? jwtDecode(token)?._id : null;

  const fetchReports = async () => {
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

  useEffect(() => {
    fetchReports();
  }, []);

  const handleAccept = async (id) => {
    try {
      await axios.post(`/api/issues/${id}/accept/service`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      toast.success("Accepted successfully");
      fetchReports();
    } catch (err) {
      toast.error("Failed to accept issue");
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.post(`/api/issues/${id}/reject/service`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      toast.success("Rejected successfully");
      setReports((prev) => prev.filter((r) => r._id !== id));
      // fetchReports();
    } catch (err) {
      toast.error("Failed to reject issue");
    }
  };

  const filteredReports = reports.filter(
    (report) =>
      !report.serviceAccepted &&
      (!report.rejectedByServiceTeam || !report.rejectedByServiceTeam.includes(currentUserId))
  );

  return (
    <div className="flex h-screen w-full bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Household Reports" />

        <main className="flex-1 lg:ml-[250px] p-6 overflow-auto">
          <div className="flex items-center mb-6">
            <CircleDashed className="w-5 h-5 mr-2" />
            <h2 className="text-xl font-bold">Household Issues Reports</h2>
          </div>

          <div className="space-y-6">
            {filteredReports.length === 0 ? (
              <div className="text-center text-gray-500">No reports found.</div>
            ) : (
              filteredReports.map((report) => (
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

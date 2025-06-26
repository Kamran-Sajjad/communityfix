
// // export default ReportsPage;
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import ReportCard from "../../components/STdashboard/ReportCard";
// import { CircleDashed } from "lucide-react";
// import { toast } from "react-toastify";

// const ReportsPage = () => {
//   const [reports, setReports] = useState([]);

//   const fetchReports = async () => {
//     try {
//       const response = await axios.get("/api/issues/societal/accepted", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`
//         }
//       });
//       setReports(response.data.issues);
//     } catch (error) {
//       console.error("Error fetching accepted societal issues:", error);
//       toast.error("Failed to load reports");
//     }
//   };

//   useEffect(() => {
//     fetchReports();
//   }, []);

//   const handleAccept = (id) => {
//     toast.success("Already accepted by Admin");
//   };

//   const handleReject = (id) => {
//     toast.error("Cannot reject already accepted issue");
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
//             <h2 className="text-xl font-bold"> Societal Tasks</h2>
//           </div>

//           <div className="space-y-6">
//             {reports.length === 0 ? (
//               <div className="text-center py-8 text-gray-500">
//                 No accepted societal reports found
//               </div>
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

// export default ReportsPage;








// ✅ UPDATED REPORTSPAGE.JSX
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import ReportCard from "../../components/STdashboard/ReportCard";
import { CircleDashed } from "lucide-react";
import { toast } from "react-toastify";
import {jwtDecode} from "jwt-decode";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);

  const token = localStorage.getItem("token");
  const currentUserId = token ? jwtDecode(token)?._id : null;

  const fetchReports = async () => {
    try {
      const response = await axios.get("/api/issues/societal/accepted", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
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
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <Header title="Welcome back Arslan" />
        </div>

        <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
          <div className="flex items-center mb-8">
            <CircleDashed className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold"> Societal Reports</h2>
          </div>

          <div className="space-y-6">
            {filteredReports.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No accepted societal reports found
              </div>
            ) : (
              filteredReports.map((report) => (
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



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import ReportCard from "./ReportCard"; // adjust if necessary

// export const RepTable = () => {
//   const [reports, setReports] = useState([]);
//   const [filterCategory, setFilterCategory] = useState("all");
// useEffect(() => {
//   const fetchReports = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found");
//         return;
//       }

//       const { data } = await axios.get("http://localhost:5000/api/issues", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setReports(data.issues || data);
//     } catch (err) {
//       console.error("Failed to load reports:", err);
//     }
//   };

//   fetchReports();
// }, []);
//   const filtered = filterCategory === "all"
//     ? reports
//     : reports.filter(issue => issue.issueCategory === filterCategory);

//   const latest = filtered.slice(0, 4);

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">Reports</h2>
//         <Link to="/admin/reports" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
//           History 
//         </Link>
//       </div>

//       <div className="mb-4">

//       </div>

//       <div className="overflow-x-auto w-full mb-6">
//         <table className="w-full text-left text-sm border-collapse">
//           <thead className="border-b text-gray-500">
//             <tr>
//               <th className="pb-2 px-4">Name</th>
//               <th className="pb-2 px-4">Address</th>
//               <th className="pb-2 px-4">Issue</th>
//               <th className="pb-2 px-4">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {latest.map(issue => (
//               <tr key={issue._id} className="border-b">
//                 <td className="py-3 px-4">{issue.name}</td>
//                 <td className="px-4">{issue.address}</td>
//                 <td className="px-4">{issue.title}</td>
//                 <td className={`px-4 ${issue.status === "resolved" ? "text-green-500" : "text-red-500"}`}>
//                   {issue.status}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* {latest.map(issue => (
//         <ReportCard
//           key={issue._id}
//           report={{
//             name: issue.name,
//             address: issue.address,
//             age: Math.floor((Date.now() - new Date(issue.createdAt)) / 36e5),
//             issueTitle: issue.title,
//             issueDescription: issue.description,
//             recommendations: ["Resolve", "Review", "Escalate"],
//           }}
//         />
//       ))} */}
//     </div>
//   );
// };





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReportCard from "./ReportCard"; // adjust if necessary

export const RepTable = () => {
  const [reports, setReports] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        const { data } = await axios.get("http://localhost:5000/api/issues", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setReports(data.issues || data);
      } catch (err) {
        console.error("Failed to load reports:", err);
      }
    };

    fetchReports();
  }, []);
  const filtered = filterCategory === "all"
    ? reports
    : reports.filter(issue => issue.issueCategory === filterCategory);

  const latest = filtered.slice(0, 4);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Reports</h2>
        <Link to="/admin/reports" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
          History
        </Link>
      </div>

      <div className="mb-4">

      </div>

      <div className="overflow-x-auto w-full mb-6">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="pb-2 px-4">Name</th>
              <th className="pb-2 px-4">Address</th>
              <th className="pb-2 px-4">Issue</th>
              <th className="pb-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {latest.map(issue => (
              <tr key={issue._id} className="border-b">
                <td className="py-3 px-4">{issue.name}</td>
                <td className="px-4">{issue.address}</td>
                <td className="px-4">{issue.title}</td>
                <td
                  className={`px-4 ${issue.status === "completed"
                      ? "text-green-700"
                      : issue.status === "in_progress"
                        ? "text-gray-800"
                        : "text-red-500"
                    }`}
                >
                  {issue.status === "in_progress"
                    ? "In Progress"
                    : issue.status === "completed"
                      ? "Completed"
                      : "Pending"}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* {latest.map(issue => (
        <ReportCard
          key={issue._id}
          report={{
            name: issue.name,
            address: issue.address,
            age: Math.floor((Date.now() - new Date(issue.createdAt)) / 36e5),
            issueTitle: issue.title,
            issueDescription: issue.description,
            recommendations: ["Resolve", "Review", "Escalate"],
          }}
        />
      ))} */}
    </div>
  );
};

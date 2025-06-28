










// "use client";

// import { useState } from "react";
// import Popup from "./Popup";

// export default function IssueTable({ issues, onUpdateIssue, updatingId }) {
//   const [selectedIssue, setSelectedIssue] = useState(null);

//   const handleUpdateClick = (issue) => {
//     setSelectedIssue(issue);
//   };

//   const handleCloseModal = () => {
//     setSelectedIssue(null);
//   };

//   const handleSubmitUpdate = (updatedIssue) => {
//     onUpdateIssue(updatedIssue);
//     setSelectedIssue(null);
//   };

//   return (
//     <>
//       <table className="w-full">
//         <thead>
//           <tr className="text-left text-gray-500">
//             <th className="pb-4 font-medium">Name</th>
//             <th className="pb-4 font-medium">Address</th>
//             <th className="pb-4 font-medium">Issue</th>
//             <th className="pb-4 font-medium">Status</th>
//             <th className="pb-4 font-medium"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map((issue) => (
//             <tr key={issue._id || issue.id} className="border-t border-gray-100">
//               <td className="py-4">{issue.name || "N/A"}</td>
//               <td className="py-4">{issue.address || "N/A"}</td>
//               <td className="py-4 font-medium">{issue.title || "Untitled"}</td>
//               <td className="py-4 capitalize text-sm">
//                 {issue.status || "unknown"}
//               </td>
//               <td className="py-4">
//                 <button
//                   onClick={() => handleUpdateClick(issue)}
//                   disabled={updatingId === (issue._id || issue.id)}
//                   className={`px-4 py-1 rounded-full text-sm ${
//                     updatingId === (issue._id || issue.id)
//                       ? "bg-gray-300 cursor-not-allowed"
//                       : "bg-gray-200 hover:bg-gray-400"
//                   }`}
//                 >
//                   {updatingId === (issue._id || issue.id) ? "Updating..." : "Update"}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedIssue && (
//         <Popup
//           issue={selectedIssue}
//           onClose={handleCloseModal}
//           onUpdate={handleSubmitUpdate}
//         />
//       )}
//     </>
//   );
// }









// "use client";

// import { useState } from "react";
// import Popup from "./Popup";

// export default function IssueTable({ issues, onUpdateIssue, updatingId }) {
//   const [selectedIssue, setSelectedIssue] = useState(null);

//   const handleUpdateClick = (issue) => {
//     setSelectedIssue(issue);
//   };

//   const handleCloseModal = () => {
//     setSelectedIssue(null);
//   };

//   const handleSubmitUpdate = (updatedIssue) => {
//     onUpdateIssue(updatedIssue);
//     setSelectedIssue(null);
//   };

//   return (
//     <>
//       <table className="w-full">
//         <thead>
//           <tr className="text-left text-gray-500">
//             <th className="pb-4 font-medium">Name</th>
//             <th className="pb-4 font-medium">Address</th>
//             <th className="pb-4 font-medium">Issue</th>
//             <th className="pb-4 font-medium">Issue Type</th> {/* Added Issue Type column */}
//             <th className="pb-4 font-medium">Status</th>
//             <th className="pb-4 font-medium"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map((issue) => (
//             <tr key={issue._id || issue.id} className="border-t border-gray-100">
//               <td className="py-4">{issue.name || "N/A"}</td>
//               <td className="py-4">{issue.address || "N/A"}</td>
//               <td className="py-4 font-medium">{issue.title || "Untitled"}</td>
//               <td className="py-4">{issue.issueType || "N/A"}</td> {/* Display the issue type */}
//               <td className="py-4 capitalize text-sm">
//                 {issue.status || "unknown"}
//               </td>
//               <td className="py-4">
//                 <button
//                   onClick={() => handleUpdateClick(issue)}
//                   disabled={updatingId === (issue._id || issue.id)}
//                   className={`px-4 py-1 rounded-full text-sm ${
//                     updatingId === (issue._id || issue.id)
//                       ? "bg-gray-300 cursor-not-allowed"
//                       : "bg-gray-200 hover:bg-gray-400"
//                   }`}
//                 >
//                   {updatingId === (issue._id || issue.id) ? "Updating..." : "Update"}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedIssue && (
//         <Popup
//           issue={selectedIssue}
//           onClose={handleCloseModal}
//           onUpdate={handleSubmitUpdate}
//         />
//       )}
//     </>
//   );
// }






"use client";

import { useState } from "react";
import Popup from "./Popup";

export default function IssueTable({ issues, onUpdateIssue, updatingId }) {
  const [selectedIssue, setSelectedIssue] = useState(null);

  const handleUpdateClick = (issue) => {
    setSelectedIssue(issue);
  };

  const handleCloseModal = () => {
    setSelectedIssue(null);
  };

  const handleSubmitUpdate = (updatedIssue) => {
    onUpdateIssue(updatedIssue);
    setSelectedIssue(null);
  };

  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="pb-4 font-medium">Name</th>
            <th className="pb-4 font-medium">Address</th>
            <th className="pb-4 font-medium">Issue</th>
            <th className="pb-4 font-medium">Issue Type</th> {/* Added Issue Type column */}
            <th className="pb-4 font-medium">Status</th>
            <th className="pb-4 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue._id || issue.id} className="border-t border-gray-100">
              <td className="py-4">{issue.name || "N/A"}</td>
              <td className="py-4">{issue.address || "N/A"}</td>
              <td className="py-4 font-medium">{issue.title || "Untitled"}</td>
              <td className="py-4">{issue.issueType || "N/A"}</td> {/* Display the issue type */}
              <td className="py-4 capitalize text-sm">
                {issue.status || "unknown"}
              </td>
              <td className="py-4">
                <button
                  onClick={() => handleUpdateClick(issue)}
                  disabled={updatingId === (issue._id || issue.id) || issue.status === "completed"} // Disable if status is completed
                  className={`px-4 py-1 rounded-full text-sm ${
                    (updatingId === (issue._id || issue.id) || issue.status === "completed")
                      ? "bg-green-300 cursor-not-allowed"
                      : "bg-gray-200 hover:bg-gray-400"
                  }`}
                >
                  {updatingId === (issue._id || issue.id) || issue.status === "completed"
                    ? "Completed"
                    : "Update"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedIssue && (
        <Popup
          issue={selectedIssue}
          onClose={handleCloseModal}
          onUpdate={handleSubmitUpdate}
        />
      )}
    </>
  );
}

// "use client";
// import Popup from "./Popup";
// export default function IssueTable({ issues }) {
//   return (
//     <table className="w-full">
//       <thead>
//         <tr className="text-left text-gray-500">
//           <th className="pb-4 font-medium">Name</th>
//           <th className="pb-4 font-medium">Address</th>
//           {/* <th className="pb-4 font-medium">Age</th> */}
//           <th className="pb-4 font-medium">Issue</th>
//           <th className="pb-4 font-medium">Status</th>
//           <th className="pb-4 font-medium"></th>
//         </tr>
//       </thead>
//       <tbody>
//         {issues.map((issue, index) => (
//           <tr key={index} className="border-t border-gray-100">
//             <td className="py-4">{issue.name}</td>
//             <td className="py-4">{issue.address}</td>
//             {/* <td className="py-4">{issue.age}</td> */}
//             <td className="py-4">{issue.issue}</td>
//             <td className="py-4">{issue.status}</td>
//             <td className="py-4">
//               <button className="px-4 py-1 rounded-full bg-gray-200 text-sm">Update</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }



// "use client";

// import { useState } from "react";
// // import UpdateStatusModal from "./UpdateStatusModal";
// import Popup from "./Popup";

// export default function IssueTable({ issues, onUpdateIssue }) {
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
//         {/* <tbody>
//           {issues.map((issue, index) => (
//             <tr key={index} className="border-t border-gray-100">
//               <td className="py-4">{issue.name}</td>
//               <td className="py-4">{issue.address}</td>
//               <td className="py-4">{issue.issue}</td>
//               <td className="py-4">{issue.status}</td>
//               <td className="py-4">
//                 <button
//                   onClick={() => handleUpdateClick(issue)}
//                   className="px-4 py-1 rounded-full bg-gray-200 text-sm"
//                 >
//                   Update
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody> */}
//         <tbody>
//   {issues.map((issue) => (
//     <tr key={issue.id} className="border-t border-gray-100">
//       <td className="py-4">{issue.name}</td>
//       <td className="py-4">{issue.address}</td>
//       <td className="py-4">{issue.issue}</td>
//       <td className="py-4">{issue.status}</td>
//       <td className="py-4">
//         <button
//           onClick={() => handleUpdateClick(issue)}
//           className="px-4 py-1 rounded-full bg-gray-200 text-sm"
//         >
//           Update
//         </button>
//       </td>
//     </tr>
//   ))}
// </tbody>
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

export default function IssueTable({ issues, onUpdateIssue }) {
  const [selectedIssue, setSelectedIssue] = useState(null);

  // Debugging: Log issues passed to the table
  console.log("Issues in IssueTable:", issues);

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
            <th className="pb-4 font-medium">Status</th>
            <th className="pb-4 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id} className="border-t border-gray-100">
              <td className="py-4">{issue.name}</td>
              <td className="py-4">{issue.address}</td>
              <td className="py-4">{issue.issue}</td>
              <td className="py-4">{issue.status}</td>
              <td className="py-4">
                <button
                  onClick={() => handleUpdateClick(issue)}
                  className="px-4 py-1 rounded-full bg-gray-200 text-sm hover:bg-gray-400"
                >
                  Update
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
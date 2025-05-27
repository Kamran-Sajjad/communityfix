// import { useState } from "react";

// export default function IssueUpdatePopup({ issue, onClose, onSubmit }) {
//   const [status, setStatus] = useState(issue.status);
//   const [progress, setProgress] = useState(0);
//   const [image, setImage] = useState(null);

//   const handleSubmit = () => {
//     onSubmit({ status, progress, image });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-6 w-96">
//         <h2 className="text-xl font-bold mb-4">Update Issue Status</h2>

//         {/* Current Status Selection */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Current Status</label>
//           <div className="space-y-2">
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 value="delayed"
//                 checked={status === "delayed"}
//                 onChange={() => setStatus("delayed")}
//               />
//               <span>⏳ Delayed</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 value="in-progress"
//                 checked={status === "in-progress"}
//                 onChange={() => setStatus("in-progress")}
//               />
//               <span>🔄 In Progress</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 value="completed"
//                 checked={status === "completed"}
//                 onChange={() => setStatus("completed")}
//               />
//               <span>✅ Completed</span>
//             </label>
//           </div>
//         </div>

//         {/* Estimated Completion Time (Progress Bar) */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Estimated Completion</label>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={progress}
//             onChange={(e) => setProgress(e.target.value)}
//             className="w-full"
//           />
//           <div className="text-sm text-gray-600">{progress}% completed</div>
//         </div>

//         {/* Image Upload Section */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2">Upload Image</label>
//           <div className="flex space-x-2">
//             <button
//               className="px-4 py-2 bg-gray-200 rounded-lg"
//               onClick={() => alert("Open camera to take a photo")}
//             >
//               📸 Take a Photo
//             </button>
//             <button
//               className="px-4 py-2 bg-gray-200 rounded-lg"
//               onClick={() => alert("Open file picker to upload from device")}
//             >
//               📂 Upload from Device
//             </button>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-end space-x-2">
//           <button
//             className="px-4 py-2 bg-red-500 text-white rounded-lg"
//             onClick={onClose}
//           >
//             ❌ Cancel
//           </button>
//           <button
//             className="px-4 py-2 bg-green-500 text-white rounded-lg"
//             onClick={handleSubmit}
//           >
//             ✅ Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
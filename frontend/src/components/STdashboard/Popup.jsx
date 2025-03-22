

// "use client";

// import { useState } from "react";

// export default function Popup({ issue, onClose, onUpdate }) {
//   const [status, setStatus] = useState(issue.status);
//   const [progress, setProgress] = useState(
//     // issue.status === "completed" ? 100 : 30 // Default progress based on status
//   );
//   const [estimatedCompletionDate, setEstimatedCompletionDate] = useState("");
//   const [estimatedCompletionTime, setEstimatedCompletionTime] = useState("");
//   const [image, setImage] = useState(null);

//   // Handle status change
//   const handleStatusChange = (newStatus) => {
//     setStatus(newStatus);
//     if (newStatus === "completed") {
//       setProgress(100); // Automatically set progress to 100% for "Completed"
//     }
//   };

//   // Handle progress change (only for "In Progress" and "Delayed")
//   const handleProgressChange = (e) => {
//     if (status !== "completed") {
//       setProgress(Number(e.target.value));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedIssue = {
//       ...issue,
//       status,
//       progress,
//       estimatedCompletion: `${estimatedCompletionDate} ${estimatedCompletionTime}`,
//       image,
//     };
//     onUpdate(updatedIssue);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg w-full max-w-md">
//         {/* Popup Title */}
//         <h2 className="text-xl font-bold mb-4">Update Progress</h2>

//         <form onSubmit={handleSubmit}>
//           {/* Current Status Section */}
//           <div className="space-y-4">
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Current Status</h3>
//               <div className="flex space-x-4">
//                 {/* In Progress Radio Button */}
//                 <label className="flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     value="in progress"
//                     checked={status === "in progress"}
//                     onChange={() => handleStatusChange("in progress")}
//                     className="hidden"
//                   />
//                   <span
//                     className={`text-2xl cursor-pointer ${
//                       status === "in progress" ? "opacity-900" : "opacity-40"
//                     }`}
//                   >
//                     🕒
//                   </span>
//                   <span>In Progress</span>
//                 </label>

//                 {/* Delayed Radio Button */}
//                 <label className="flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     value="delayed"
//                     checked={status === "delayed"}
//                     onChange={() => handleStatusChange("delayed")}
//                     className="hidden"
//                   />
//                   <span
//                     className={`text-2xl cursor-pointer ${
//                       status === "delayed" ? "opacity-900" : "opacity-40"
//                     }`}
//                   >
//                     ⚠️
//                   </span>
//                   <span>Delayed</span>
//                 </label>

//                 {/* Completed Radio Button */}
//                 <label className="flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     value="completed"
//                     checked={status === "completed"}
//                     onChange={() => handleStatusChange("completed")}
//                     className="hidden"
//                   />
//                   <span
//                     className={`text-2xl cursor-pointer ${
//                       status === "completed" ? "opacity-900" : "opacity-30"
//                     }`}
//                   >
//                     ✅
//                   </span>
//                   <span>Completed</span>
//                 </label>
//               </div>
//             </div>

//             {/* Progress Bar */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Estimated Completion Progress
//               </label>
//               {/* <div className="w-full bg-gray-200 rounded-full h-2.5">
//                 <div
//                   className="bg-blue-500 h-2.5 rounded-full"
//                   style={{ width: `${progress}%` }}
//                 ></div>
//               </div> */}
//               <p className="text-sm text-gray-500 mt-1">
//                 Progress: {progress}%
//               </p>
//               {/* Show range input only for "In Progress" or "Delayed" */}
//               { (
//                 <input
//                   type="range"
//                   min="0"
//                   max="100"
//                   value={progress}
//                   onChange={handleProgressChange}
//                   className="w-full mt-2"
//                 />
//               )}
//             </div>

//             {/* Estimated Completion Date and Time */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Estimated Completion Time
//               </label>
//               <div className="flex space-x-4">
//                 <input
//                   type="date"
//                   value={estimatedCompletionDate}
//                   onChange={(e) => setEstimatedCompletionDate(e.target.value)}
//                   className="w-1/2 p-2 border border-gray-300 rounded"
//                 />
//                 <input
//                   type="time"
//                   value={estimatedCompletionTime}
//                   onChange={(e) => setEstimatedCompletionTime(e.target.value)}
//                   className="w-1/2 p-2 border border-gray-300 rounded"
//                 />
//               </div>
//             </div>

//             {/* Upload Image Section */}
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Upload Image
//               </label>
//               <input
//                 type="file"
//                 onChange={(e) => setImage(e.target.files[0])}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//           </div>

//           {/* Submit and Cancel Buttons */}
//           <div className="mt-6 flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-200 rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }





"use client";

import { useState } from "react";

export default function Popup({ issue, onClose, onUpdate }) {
  const [status, setStatus] = useState(issue.status);
  const [progress, setProgress] = useState(issue.progress || 30); // Default progress based on status
  const [estimatedCompletionDate, setEstimatedCompletionDate] = useState("");
  const [estimatedCompletionTime, setEstimatedCompletionTime] = useState("");
  const [images, setImages] = useState([]); // Array to store multiple images

  // Handle status change
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    if (newStatus === "completed") {
      setProgress(100); // Automatically set progress to 100% for "Completed"
    }
  };

  // Handle progress change (only for "In Progress" and "Delayed")
  const handleProgressChange = (e) => {
    if (status !== "completed") {
      setProgress(Number(e.target.value));
    }
  };

  // Handle multiple image uploads
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    setImages((prevImages) => [...prevImages, ...files]);
  };

  // Handle image removal
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedIssue = {
      ...issue,
      status,
      progress,
      estimatedCompletion: `${estimatedCompletionDate} ${estimatedCompletionTime}`,
      images, // Include uploaded images
    };
    onUpdate(updatedIssue); // Pass the updated issue to the parent component
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        {/* Popup Title */}
        <h2 className="text-xl font-bold mb-4">Update Progress</h2>

        <form onSubmit={handleSubmit}>
          {/* Current Status Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Current Status</h3>
              <div className="flex space-x-4">
                {/* In Progress Radio Button */}
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="in progress"
                    checked={status === "in progress"}
                    onChange={() => handleStatusChange("in progress")}
                    className="hidden"
                  />
                  <span
                    className={`text-2xl cursor-pointer ${
                      status === "in progress" ? "opacity-900" : "opacity-40"
                    }`}
                  >
                    🕒
                  </span>
                  <span>In Progress</span>
                </label>

                {/* Delayed Radio Button */}
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="delayed"
                    checked={status === "delayed"}
                    onChange={() => handleStatusChange("delayed")}
                    className="hidden"
                  />
                  <span
                    className={`text-2xl cursor-pointer ${
                      status === "delayed" ? "opacity-900" : "opacity-40"
                    }`}
                  >
                    ⚠️
                  </span>
                  <span>Delayed</span>
                </label>

                {/* Completed Radio Button */}
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="completed"
                    checked={status === "completed"}
                    onChange={() => handleStatusChange("completed")}
                    className="hidden"
                  />
                  <span
                    className={`text-2xl cursor-pointer ${
                      status === "completed" ? "opacity-900" : "opacity-30"
                    }`}
                  >
                    ✅
                  </span>
                  <span>Completed</span>
                </label>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Estimated Completion Progress
              </label>
            
              <p className="text-sm text-gray-500 mt-1">
                Progress: {progress}%
              </p> 
              {/* Show range input only for "In Progress" or "Delayed" */}
              { (
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full mt-2"
                />
              )}
            </div>

            {/* Estimated Completion Date and Time */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Estimated Completion Time
              </label>
              <div className="flex space-x-4">
                <input
                  type="date"
                  value={estimatedCompletionDate}
                  onChange={(e) => setEstimatedCompletionDate(e.target.value)}
                  className="w-1/2 p-2 border border-gray-300 rounded"
                />
                <input
                  type="time"
                  value={estimatedCompletionTime}
                  onChange={(e) => setEstimatedCompletionTime(e.target.value)}
                  className="w-1/2 p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            {/* Upload Image Section */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Images
              </label>
              <input
                type="file"
                multiple // Allow multiple file uploads
                onChange={handleImageUpload}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {/* Display uploaded images */}
              <div className="mt-2 space-y-2">
                {images.map((image, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{image.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
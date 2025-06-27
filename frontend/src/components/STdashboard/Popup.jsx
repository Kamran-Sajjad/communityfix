

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



















// "use client";

// import { useState } from "react";

// export default function Popup({ issue, onClose, onUpdate }) {
//   const [status, setStatus] = useState(issue.status);
//   const [progress, setProgress] = useState(issue.progress || 30); // Default progress based on status
//   const [estimatedCompletionDate, setEstimatedCompletionDate] = useState("");
//   const [estimatedCompletionTime, setEstimatedCompletionTime] = useState("");
//   const [images, setImages] = useState([]); // Array to store multiple images

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

//   // Handle multiple image uploads
//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files); // Convert FileList to an array
//     setImages((prevImages) => [...prevImages, ...files]);
//   };

//   // Handle image removal
//   const handleRemoveImage = (index) => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedIssue = {
//       ...issue,
//       status,
//       progress,
//       estimatedCompletion: `${estimatedCompletionDate} ${estimatedCompletionTime}`,
//       images, // Include uploaded images
//     };
//     onUpdate(updatedIssue); // Pass the updated issue to the parent component
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
//                 Upload Images
//               </label>
//               <input
//                 type="file"
//                 multiple // Allow multiple file uploads
//                 onChange={handleImageUpload}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//               {/* Display uploaded images */}
//               <div className="mt-2 space-y-2">
//                 {images.map((image, index) => (
//                   <div key={index} className="flex items-center justify-between">
//                     <span className="text-sm">{image.name}</span>
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveImage(index)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ))}
//               </div>
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

import { useState, useRef } from "react";
import { X, Upload, Trash2 } from "lucide-react";

export default function Popup({ issue, onClose, onUpdate }) {
  const [status, setStatus] = useState(issue.status || "pending");
  const [progress, setProgress] = useState(issue.progress || 0);
  const [completionDate, setCompletionDate] = useState("");
  const [completionTime, setCompletionTime] = useState("");
  const [images, setImages] = useState([]);
  const [notes, setNotes] = useState(issue.notes || "");
  const fileInputRef = useRef(null);

  const statusOptions = [
    { value: "pending", label: "Pending", emoji: "🕒" },
    { value: "in_progress", label: "In Progress", emoji: "⚙️" },
    { value: "delayed", label: "Delayed", emoji: "⚠️" },
    { value: "completed", label: "Completed", emoji: "✅" }
  ];

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    if (newStatus === "completed") {
      setProgress(100);
      setCompletionDate(new Date().toISOString().split('T')[0]);
      setCompletionTime(new Date().toTimeString().substring(0, 5));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const validImages = files.filter(file => 
      file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024
    );
    setImages(prev => [...prev, ...validImages]);
  };

  const handleRemoveImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedIssue = {
      ...issue,
      status,
      progress,
      completionDate: status === "completed" ? new Date().toISOString() : `${completionDate}T${completionTime}:00`,
      images,
      notes,
      updatedAt: new Date().toISOString()
    };

    onUpdate(updatedIssue);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Update Issue Progress</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Status Selection */}
            <div>
              <h3 className="font-medium mb-2">Current Status</h3>
              <div className="grid grid-cols-2 gap-2">
                {statusOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleStatusChange(option.value)}
                    className={`flex items-center justify-center p-3 rounded-lg border transition-colors ${
                      status === option.value
                        ? "bg-blue-50 border-blue-200 text-blue-600"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-xl mr-2">{option.emoji}</span>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="font-medium">Progress</label>
                <span className="text-gray-600">{progress}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(parseInt(e.target.value))}
                disabled={status === "completed"}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Completion Time */}
            {status !== "completed" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Completion Date</label>
                  <input
                    type="date"
                    value={completionDate}
                    onChange={(e) => setCompletionDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Completion Time</label>
                  <input
                    type="time"
                    value={completionTime}
                    onChange={(e) => setCompletionTime(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            )}

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium mb-1">Work Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any notes about the work done..."
                className="w-full p-2 border border-gray-300 rounded-md min-h-[80px]"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium mb-1">Upload Images</label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                multiple
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={triggerFileInput}
                className="w-full p-3 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center hover:border-blue-400 transition-colors"
              >
                <Upload className="w-5 h-5 mb-1 text-gray-400" />
                <span className="text-sm text-gray-500">Click to upload images</span>
                <span className="text-xs text-gray-400">(Max 5MB each)</span>
              </button>
              
              {/* Image Previews */}
              {images.length > 0 && (
                <div className="mt-3 space-y-2">
                  {images.map((image, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                      <div className="flex items-center truncate">
                        <img 
                          src={URL.createObjectURL(image)} 
                          alt={`Preview ${index}`}
                          className="w-10 h-10 object-cover rounded mr-3"
                        />
                        <span className="text-sm truncate">{image.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
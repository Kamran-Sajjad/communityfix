// import React from "react";

// const ReportCard = ({ report }) => (
//   <div className="w-full bg-white p-6 rounded-lg shadow-sm mb-4 border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
//     {report.image && (
//       <div className="w-full md:w-1/4 h-48 md:h-auto rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
//         <img 
//           src={report.image} 
//           alt={report.issueTitle || "Report image"}
//           className="w-full h-full object-cover"
//           onError={(e) => {
//             e.target.src = "/placeholder-image.svg";
//             e.target.className = "w-full h-full object-contain p-4";
//           }}
//         />
//       </div>
//     )}

//     {/* Content Section */}
//     <div className="flex-1 flex flex-col">
//       <div className="flex flex-wrap items-center gap-2">
//         <h3 className="text-lg font-bold text-gray-800">{report.name}</h3>
//         <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
//           {report.type === "societal" ? "Community" : "Household"}
//         </span>
//       </div>
      
//       <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
//         <span>📍 {report.address}</span>
//         <span>•</span>
//         <span>🕒 {report.age} {report.age === 1 ? "hour" : "hours"} ago</span>
//       </div>

//       <div className="mt-4">
//         <h4 className="text-md font-semibold text-gray-800">{report.issueTitle}</h4>
//         <p className="text-sm text-gray-600 mt-1">{report.issueDescription}</p>
//       </div>

//       {/* Bottom Section - Status, Recommendations and Buttons */}
//       <div className="mt-auto pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         {/* Status and Recommendations */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
//           <div>
//             <span className={`text-xs px-2 py-1 rounded-full ${
//               report.status === "completed" 
//                 ? "bg-green-100 text-green-800" 
//                 : "bg-yellow-100 text-yellow-800"
//             }`}>
//               {report.status === "completed" ? "Resolved" : "Pending"}
//             </span>
//           </div>
          
//           <div className="flex-1 sm:flex-initial min-w-[200px]">
//             <label className="text-xs text-gray-500 mb-1 block">Recommended Action</label>
//             <select className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition">
//               {report.recommendations?.map((rec, i) => (
//                 <option key={i} value={rec}>{rec}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-row sm:flex-col gap-2 sm:self-end">
//           <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded hover:bg-gray-50 transition flex items-center justify-center">
//             <span className="font-bold">✕</span>
//             <span className="ml-2 text-xs hidden sm:inline">Reject</span>
//           </button>
//           <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded hover:bg-gray-50 transition flex items-center justify-center">
//             <span className="font-bold">✓</span>
//             <span className="ml-2 text-xs hidden sm:inline">Approve</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default ReportCard;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ReportCard = ({ report, onApprove, onReject }) => {
  // Function to handle image error
  const handleImageError = (e) => {
    e.target.src = "/placeholder-image.svg";
    e.target.className = "w-full h-full object-contain p-4";
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-sm mb-4 border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
      {/* Image Gallery Section */}
      <div className="w-full md:w-1/4 h-48 md:h-auto rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
        {report.attachments?.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="h-full"
          >
            {report.attachments.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.url || image} // Supports both string URLs and object with url property
                  alt={`Report ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : report.image ? (
          <img 
            src={report.image} 
            alt={report.issueTitle || "Report image"}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-center p-4">
              <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">No images available</p>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-bold text-gray-800">{report.name || "Anonymous"}</h3>
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
            {report.type === "societal" ? "Community" : "Household"}
          </span>
        </div>
        
        <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
          <span>📍 {report.address || "Location not specified"}</span>
          <span>•</span>
          <span>🕒 {report.age || 0} {report.age === 1 ? "hour" : "hours"} ago</span>
        </div>

        <div className="mt-4">
          <h4 className="text-md font-semibold text-gray-800">{report.issueTitle || "Untitled Issue"}</h4>
          <p className="text-sm text-gray-600 mt-1">
            {report.issueDescription || "No description provided"}
          </p>
        </div>

        {/* Bottom Section - Status, Recommendations and Buttons */}
        <div className="mt-auto pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Status and Recommendations */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
            <div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                report.status === "completed" 
                  ? "bg-green-100 text-green-800" 
                  : report.status === "rejected"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}>
                {report.status === "completed" 
                  ? "Resolved" 
                  : report.status === "rejected"
                  ? "Rejected"
                  : "Pending"}
              </span>
            </div>
            
            {report.recommendations?.length > 0 && (
              <div className="flex-1 sm:flex-initial min-w-[200px]">
                <label className="text-xs text-gray-500 mb-1 block">Recommended Action</label>
                <select 
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition"
                  defaultValue=""
                >
                  <option value="" disabled>Select action</option>
                  {report.recommendations.map((rec, i) => (
                    <option key={i} value={rec}>{rec}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {report.status === "pending" && (
            <div className="flex flex-row sm:flex-col gap-2 sm:self-end">
              <button 
                onClick={() => onReject(report._id)}
                className="px-4 py-2 bg-white text-red-600 border border-red-200 rounded hover:bg-red-50 transition flex items-center justify-center"
              >
                <span className="font-bold">✕</span>
                <span className="ml-2 text-xs hidden sm:inline">Reject</span>
              </button>
              <button 
                onClick={() => onApprove(report._id)}
                className="px-4 py-2 bg-white text-green-600 border border-green-200 rounded hover:bg-green-50 transition flex items-center justify-center"
              >
                <span className="font-bold">✓</span>
                <span className="ml-2 text-xs hidden sm:inline">Approve</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
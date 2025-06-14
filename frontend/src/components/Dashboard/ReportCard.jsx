import React from "react";

const ReportCard = ({ report }) => (
  <div className="w-full bg-white p-6 rounded-lg shadow-sm mb-4 border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
    {/* Image Section */}
    {report.image && (
      <div className="w-full md:w-1/4 h-48 md:h-auto rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
        <img 
          src={report.image} 
          alt={report.issueTitle || "Report image"}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "/placeholder-image.svg";
            e.target.className = "w-full h-full object-contain p-4";
          }}
        />
      </div>
    )}

    {/* Content Section */}
    <div className="flex-1 flex flex-col">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-bold text-gray-800">{report.name}</h3>
        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
          {report.type === "societal" ? "Community" : "Household"}
        </span>
      </div>
      
      <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
        <span>📍 {report.address}</span>
        <span>•</span>
        <span>🕒 {report.age} {report.age === 1 ? "hour" : "hours"} ago</span>
      </div>

      <div className="mt-4">
        <h4 className="text-md font-semibold text-gray-800">{report.issueTitle}</h4>
        <p className="text-sm text-gray-600 mt-1">{report.issueDescription}</p>
      </div>

      {/* Bottom Section - Status, Recommendations and Buttons */}
      <div className="mt-auto pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Status and Recommendations */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
          <div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              report.status === "completed" 
                ? "bg-green-100 text-green-800" 
                : "bg-yellow-100 text-yellow-800"
            }`}>
              {report.status === "completed" ? "Resolved" : "Pending"}
            </span>
          </div>
          
          <div className="flex-1 sm:flex-initial min-w-[200px]">
            <label className="text-xs text-gray-500 mb-1 block">Recommended Action</label>
            <select className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition">
              {report.recommendations?.map((rec, i) => (
                <option key={i} value={rec}>{rec}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row sm:flex-col gap-2 sm:self-end">
          <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded hover:bg-gray-50 transition flex items-center justify-center">
            <span className="font-bold">✕</span>
            <span className="ml-2 text-xs hidden sm:inline">Reject</span>
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded hover:bg-gray-50 transition flex items-center justify-center">
            <span className="font-bold">✓</span>
            <span className="ml-2 text-xs hidden sm:inline">Approve</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ReportCard;
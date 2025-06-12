import React from "react";

const ReportCard = ({ report }) => {
  return (
    <div className="w-full bg-gray-200 p-6 rounded-lg shadow-md mb-4 border border-gray-300 flex flex-wrap md:flex-nowrap justify-between items-start gap-4">
      {/* Left Section: Address, Name, Age, Issue Details */}
      <div className="flex-1 min-w-[200px]">
        {/* Name and Address in the same line */}
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-bold text-gray-700">{report.name}</h3>
          <p className="text-sm text-gray-600">{report.location}</p>
        </div>

        {/* Age */}
        <p className="text-sm text-gray-600 mt-1">
          {report.age} {report.age === 1 ? "hour" : "hours"} or days old
        </p>

        {/* Issue Title and Description */}
        <p className="text-sm text-gray-700 mt-2 font-semibold">{report.issueTitle}</p>
        <p className="text-sm text-gray-600 mt-1">{report.issueDescription}</p>

        {/* Recommended Dropdown */}
        <div className="mt-4">
          <p className="text-sm text-gray-700 font-semibold">
            Recommended:
            <select className="border border-gray-400 rounded px-2 py-1 ml-2 text-sm text-gray-700 bg-gray-100 focus:ring focus:ring-gray-300 transition">
              {report.recommendations.map((rec, index) => (
                <option key={index} value={rec}>
                  {rec}
                </option>
              ))}
            </select>
          </p>
        </div>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex items-center gap-2 md:gap-4 mt-4 md:mt-0">
        <button className="px-4 py-2 bg-black-50 text-white rounded hover:bg-red-700 transition duration-200 border border-red-500">
          X
        </button>
        <button className="px-4 py-2 bg-grey-600 text-green-600 rounded hover:bg-green-700 transition duration-200 border border-green-500">
          ✓
        </button>
      </div>
    </div>
  );
};

export default ReportCard;

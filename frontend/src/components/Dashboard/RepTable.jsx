import React from "react";
import { Link } from "react-router-dom";
import reports from "../../hooks/ReportsData.json"; // Import JSON data

export const RepTable = () => {
  // Get only the latest 4 reports (assuming latest are at the end of the array)
  const latestReports = reports.slice(-4).reverse();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Reports</h2>
        <Link
          to="/admin/reports"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          History
        </Link>
      </div>

      {/* Reports Table */}
      <div className="overflow-x-auto w-full">
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
            {latestReports.map((report) => (
              <tr key={report.id} className="border-b">
                <td className="py-3 px-4">{report.name}</td>
                <td className="px-4">{report.address}</td>
                <td className="px-4">{report.issue}</td>
                <td
                  className={`px-4 ${
                    report.status === "Completed"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {report.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

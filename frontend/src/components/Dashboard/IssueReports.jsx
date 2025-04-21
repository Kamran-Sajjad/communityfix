import React, { useState } from "react";
import reportsDataJson from "../../hooks/ReportsData.json";

const IssueReports = () => {
  const [reportsData] = useState(reportsDataJson);
  const [expandedId, setExpandedId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [sortByLatest, setSortByLatest] = useState(false);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredReports = reportsData
    .filter((report) =>
      report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.issue.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((report) =>
      filterType === "all" ? true : report.type === filterType
    )
    .filter((report) =>
      filterStatus === "all"
        ? true
        : filterStatus === "completed"
        ? report.status === "completed"
        : report.status !== "completed"
    )
    .filter((report) => {
      if (!fromDate && !toDate) return true;
      const reportDate = new Date(report.date);
      const from = fromDate ? new Date(fromDate) : null;
      const to = toDate ? new Date(toDate) : null;
      return (!from || reportDate >= from) && (!to || reportDate <= to);
    });

  if (sortByLatest) {
    filteredReports.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Search & Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search name, address or issue"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="all">All Types</option>
          <option value="household">Household</option>
          <option value="societal">Societal</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="all">All Status</option>
          <option value="completed">Completed</option>
          <option value="not_completed">Not Completed</option>
        </select>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={sortByLatest}
            onChange={() => setSortByLatest(!sortByLatest)}
          />
          <span className="text-sm">Sort by Latest</span>
        </label>
      </div>

      {/* Date Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
      </div>

      <p className="mb-4 text-gray-600 font-medium">
        Showing {filteredReports.length} response(s)
      </p>

      <div className="overflow-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full min-w-[640px]">
          <thead className="bg-gray-100">
            <tr>
              {["Name", "Address", "Issue", "Type", "Status", ""].map((header, index) => (
                <th
                  key={index}
                  className="text-left py-3 px-4 font-medium text-gray-700"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredReports.map((report) => (
              <React.Fragment key={report.id}>
                <tr
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => toggleExpand(report.id)}
                >
                  <td className="py-3 px-4">{report.name}</td>
                  <td className="py-3 px-4">{report.address}</td>
                  <td className="py-3 px-4">{report.issue}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="mr-2">
                        {report.type === "household" ? "🏠" : "👥"}
                      </span>
                      <span className="capitalize">{report.type}</span>
                    </div>
                  </td>
                  <td
                    className={`py-3 px-4 flex items-center ${
                      report.status === "completed"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    <span className="mr-2">
                      {report.status === "completed" ? "✓" : "✗"}
                    </span>
                    {report.status === "completed"
                      ? "Completed"
                      : "Not Completed"}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {expandedId === report.id ? "▲" : "▼"}
                  </td>
                </tr>

                {expandedId === report.id && (
                  <tr className="bg-gray-50">
                    <td colSpan={6} className="p-0">
                      <div className="flex flex-col md:flex-row gap-6 p-4">
                        {/* Details Section */}
                        <div className="flex-1 space-y-2">
                          <h3 className="text-lg font-semibold">{report.issue} Details</h3>
                          <p className="text-gray-700">{report.description}</p>
                          <p className="flex items-center text-sm text-gray-600">
                            🕒 <span className="ml-1">Reported on: {report.date}</span>
                          </p>
                          <p className="flex items-center text-sm text-gray-600">
                            📍 <span className="ml-1">{report.address}</span>
                          </p>
                        </div>

                        {/* Image & Map */}
                        <div className="flex-1">
                          <div className="h-48 md:h-64 w-full rounded-lg overflow-hidden border border-gray-200">
                            <img
                              src={report.image || "/placeholder.svg"}
                              alt={report.issue}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          {report.type === "societal" && report.location && (
                            <a
                              href={`https://maps.google.com?q=${report.location.lat},${report.location.lng}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full text-center"
                            >
                              📍 Navigate to Location ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueReports;

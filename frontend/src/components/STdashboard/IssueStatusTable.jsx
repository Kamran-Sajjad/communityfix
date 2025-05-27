"use client";

import { Filter } from "lucide-react";

const IssueStatusTable = ({ issues = [] }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg lg:text-xl font-bold">Issue status</h2>
        <button className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-md text-sm">
          <span>Filter & Sort</span>
          <Filter className="w-4 h-4" />
        </button>
      </div>
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="pb-3">Name</th>
            <th className="pb-3">Address</th>
            <th className="pb-3">Age</th>
            <th className="pb-3">Issue</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id} className="border-t border-gray-100">
              <td className="py-3">{issue.name}</td>
              <td className="py-3">{issue.address}</td>
              <td className="py-3">{issue.age}</td>
              <td className="py-3">{issue.issue}</td>
              <td className={`py-3 ${issue.status === "not completed" ? "text-red-500" : "text-green-500"}`}>
                {issue.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueStatusTable;
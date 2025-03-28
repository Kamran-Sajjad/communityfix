import React from "react";

export const RepTable = () => {
  return (
    <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Reports</h2>
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
          History
        </button>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-sm text-gray-500">
              <th className="pb-2">Name</th>
              <th className="pb-2">Address</th>
              <th className="pb-2">Issue</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b py-3">
              <td className="py-3">Hasnain</td>
              <td>Street 4 House 38</td>
              <td>Cleaning</td>
              <td className="text-red-500">not completed</td>
            </tr>
            <tr className="border-b py-3">
              <td className="py-3">Rafay</td>
              <td>Street 26 House 57</td>
              <td>Renovation</td>
              <td className="text-green-500">Completed</td>
            </tr>
            <tr className="border-b py-3">
              <td className="py-3">Anas</td>
              <td>Street 8 House 14</td>
              <td>Construction</td>
              <td className="text-red-500">not completed</td>
            </tr>
            <tr className="py-3">
              <td className="py-3">Umer</td>
              <td>Street 13 House 11</td>
              <td>Mechanic</td>
              <td className="text-green-500">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
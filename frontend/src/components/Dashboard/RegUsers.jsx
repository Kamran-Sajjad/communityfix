import React from "react";
import { Link } from "react-router-dom";
export const RegUsers = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-purple-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">Registered Users</h3>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">Status:</span>
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Online</span>
        </div>
      </div>
      <div className="mt-4 flex">
        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center -mr-2">
          <span className="text-sm">U</span>
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center -mr-2">
          <span className="text-sm">K</span>
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center -mr-2">
          <span className="text-sm">J</span>
        </div>
        <span className="ml-2 text-sm font-medium">17 guests . kamran.jani. 1more...</span>
      </div>
      <Link to="/regUsers">
     <button className="mt-4 w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
        Check Community now
      </button>
   </Link>
    </div>
  );
};
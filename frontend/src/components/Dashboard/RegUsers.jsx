import React from "react";
import { Link } from "react-router-dom";

export const RegUsers = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Header Section */}
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 text-purple-700"
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
        <h3 className="text-lg sm:text-xl font-bold">Registered Users</h3>
      </div>

      {/* Status Section */}
      <div className="mt-3 sm:mt-4">
        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-base font-medium">Status:</span>
          <span className="px-2 py-1 text-xs sm:text-sm bg-green-100 text-green-800 rounded">
            Online
          </span>
        </div>
      </div>

      {/* Users Avatars Section */}
      <div className="mt-3 sm:mt-4 flex items-center">
        <div className="flex -space-x-2">
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white">
            <span className="text-xs sm:text-sm">B</span>
          </div>
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white">
            <span className="text-xs sm:text-sm">N</span>
          </div>
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-white">
            <span className="text-xs sm:text-sm">K</span>
          </div>
        </div>
        <span className="ml-2 text-xs sm:text-sm font-medium">
          Basit, Nizam, kam...
        </span>
      </div>

      {/* Button Section */}
      <Link to="../admin/requestedusers" className="block mt-3 sm:mt-4">
      {/* <Link to="/admin/regUsers" className="block mt-3 sm:mt-4"> */}
        <button className="w-full px-3 py-2 sm:px-4 sm:py-2 bg-black text-white text-sm sm:text-base rounded hover:bg-gray-800 transition-colors duration-300">
          Check Community now
        </button>
      </Link>
    </div>
  );
};
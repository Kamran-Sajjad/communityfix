import React from "react";

export const AdHeader = ({ title = "Dashboard, Admin" }) => {
  return (
    <header className="mb-6 flex items-center justify-between">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex items-center gap-4">
        {/* Fullscreen Button */}
        <button className="p-2 rounded-full bg-white hover:bg-gray-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16v16H4z" />
          </svg>
        </button>

        {/* Notification Bell Button */}
        <button className="p-2 rounded-full bg-white hover:bg-gray-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-lg font-bold">U</span>
          </div>
          <div>
            <h2 className="font-bold">Usman</h2>
            <p className="text-sm text-gray-500">Society Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
};

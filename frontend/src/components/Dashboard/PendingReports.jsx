import React from "react";

export const PendingReports = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg shadow-cyan-200">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Pending requests</h3>
          <div className="flex items-center gap-4 mt-2">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold">20%</span>
              </div>
              <svg className="h-full w-full" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#333" strokeWidth="1" />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#a3e635"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="80"
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                />
              </svg>
            </div>
            <div>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14.5C6.99 14.5 2.91 17.86 2.91 22C2.91 22.28 3.13 22.5 3.41 22.5H20.59C20.87 22.5 21.09 22.28 21.09 22C21.09 17.86 17.01 14.5 12 14.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 7H17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
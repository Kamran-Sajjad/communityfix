import React from "react";

export const WorkProgress= () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg shadow-purple-200">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Working progress</h3>
          <div className="flex items-center gap-4 mt-2">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold">85%</span>
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
                  strokeDashoffset="15"
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
                  d="M16 12H8M12 16V8M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
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
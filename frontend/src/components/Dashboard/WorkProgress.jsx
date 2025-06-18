import React, { useEffect, useState } from "react";
import axios from "axios";

export const WorkProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/issues/progress");
        if (data.success) {
          setProgress(data.progress);
        }
      } catch (error) {
        console.error("Failed to fetch progress:", error);
      }
    };

    fetchProgress();
  }, []);

  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg shadow-purple-200">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Working Progress</h3>
          <div className="flex items-center gap-4 mt-2">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold">{progress}%</span>
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
                  strokeDashoffset={100 - progress}
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

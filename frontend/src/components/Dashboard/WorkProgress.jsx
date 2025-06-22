// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export const WorkProgress = () => {
//   const [progress, setProgress] = useState(0);
// useEffect(() => {
//   const fetchProgress = async () => {
//     try {
//       const token = localStorage.getItem("token"); // Get token from localStorage
//       const { data } = await axios.get("http://localhost:5000/api/issues", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (data.success) {
//         setProgress(data.progress);
//       }
//     } catch (error) {
//       console.error("Failed to fetch progress:", error);
//     }
//   };

//   fetchProgress();
// }, []);  // Circle config
//   const radius = 16;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (progress / 100) * circumference;

//   return (
//     <div className="bg-black text-white p-6 rounded-lg shadow-lg shadow-purple-200 w-full max-w-sm mx-auto">
//       <div className="flex items-center justify-between">
//         <div>
//           <h3 className="text-lg font-medium">Working Progress</h3>
//           <div className="flex items-center gap-4 mt-4">
//             <div className="relative h-16 w-16">
//               <svg
//                 className="h-full w-full"
//                 viewBox="0 0 36 36"
//                 role="progressbar"
//                 aria-valuenow={progress}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               >
//                 <circle
//                   cx="18"
//                   cy="18"
//                   r={radius}
//                   fill="none"
//                   stroke="#333"
//                   strokeWidth="2"
//                 />
//                 <circle
//                   cx="18"
//                   cy="18"
//                   r={radius}
//                   fill="none"
//                   stroke="#a3e635"
//                   strokeWidth="3"
//                   strokeDasharray={circumference}
//                   strokeDashoffset={offset}
//                   strokeLinecap="round"
//                   transform="rotate(-90 18 18)"
//                 />
//               </svg>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-sm font-bold">{progress}%</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import axios from "axios";

export const WorkProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const token = localStorage.getItem("token");

        const { data } = await axios.get("http://localhost:5000/api/issues/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (data.success && typeof data.progress === "number") {
          setProgress(data.progress);
        } else {
          setProgress(0); // fallback if response is invalid
        }
      } catch (error) {
        console.error("Failed to fetch progress:", error);
        setProgress(0); // fallback if error occurs
      }
    };

    fetchProgress();
  }, []);

  // Circle drawing logic
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = isNaN(progress)
    ? circumference
    : circumference - (progress / 100) * circumference;

  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg shadow-purple-200 w-full max-w-sm mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Working Progress</h3>
          <div className="flex items-center gap-4 mt-4">
            <div className="relative h-16 w-16">
              <svg
                className="h-full w-full"
                viewBox="0 0 36 36"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {/* Background circle */}
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
                {/* Foreground progress circle */}
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  fill="none"
                  stroke="#a3e635"
                  strokeWidth="3"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold">{progress}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

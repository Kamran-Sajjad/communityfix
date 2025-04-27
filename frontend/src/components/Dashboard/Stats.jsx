// import React, { useState } from "react";

// export const Stats = () => {
//   const [selectedDays, setSelectedDays] = useState("7");

//   return (
//     <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <h3 className="text-lg font-medium">Statistics</h3>
//           <div className="flex items-center">
//             <button className="p-2 hover:bg-gray-100 rounded">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M15 18l-6-6 6-6" />
//               </svg>
//             </button>
//             <span className="mx-2">2024</span>
//             <button className="p-2 hover:bg-gray-100 rounded">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M9 18l6-6-6-6" />
//               </svg>
//             </button>
//           </div>
//         </div>
//         <select
//           value={selectedDays}
//           onChange={(e) => setSelectedDays(e.target.value)}
//           className="border border-gray-300 rounded px-2 py-1"
//         >
//           <option value="7">7 days</option>
//           <option value="14">14 days</option>
//           <option value="30">30 days</option>
//         </select>
//       </div>
//       <div className="mt-4 h-[200px] w-full">
//         {/* Chart placeholder */}
//         <svg viewBox="0 0 500 200" className="h-full w-full">
//           <path
//             d="M0,150 C50,100 100,180 150,120 C200,60 250,120 300,80 C350,40 400,100 450,60 L450,200 L0,200 Z"
//             fill="none"
//             stroke="#4f46e5"
//             strokeWidth="2"
//           />
//           <path
//             d="M0,180 C50,150 100,100 150,130 C200,160 250,80 300,120 C350,160 400,100 450,60"
//             fill="none"
//             stroke="#e11d48"
//             strokeWidth="2"
//             strokeDasharray="5,5"
//           />
//           <circle cx="260" cy="95" r="6" fill="#1e293b" />
//           <text x="270" y="82" textAnchor="middle" fontSize="12" fill="#1e293b" fontWeight="bold">
//             21%
//           </text>
//         </svg>
//       </div>
//     </div>
//   );
// };





import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const Stats = () => {
  const [selectedDays, setSelectedDays] = useState("7");

  // Sample dummy data
  const data = [
    { day: "Mon", value: 20 },
    { day: "Tue", value: 35 },
    { day: "Wed", value: 18 },
    { day: "Thu", value: 50 },
    { day: "Fri", value: 40 },
    { day: "Sat", value: 59 },
    { day: "Sun", value: 35 },
  ];

  return (
    <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
      {/* Title and dropdown container */}
      {/* <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-4"> */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
  {/* Title and year navigation */}
  <div className="flex items-center gap-2">
    <h3 className="text-lg font-medium">Statistics</h3>
    <div className="flex items-center">
      <button className="p-2 hover:bg-gray-100 rounded">
        <ChevronLeft className="w-4 h-4" />
      </button>
      <span className="mx-2">2024</span>
      <button className="p-2 hover:bg-gray-100 rounded">
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </div>

  {/* Dropdown */}
  <div className="md:w-auto">
    <select
      value={selectedDays}
      onChange={(e) => setSelectedDays(e.target.value)}
      className="border border-gray-300 rounded px-2 py-1 sm:w-auto"
    >
      <option value="7">7 days</option>
      <option value="14">14 days</option>
      <option value="30">30 days</option>
    </select>
  </div>
</div>


      {/* Responsive chart section */}
      <div className="mt-4 h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};



// export default function ProgressCard({ title, subTitle, progress, onContinue }) {
//     const radius = 20; // Radius of the circle
//     const circumference = 2 * Math.PI * radius; // Circumference of the circle
//     const offset = circumference - (progress / 100) * circumference; // Dynamic offset for the progress
  
//     return (
//       <div className="bg-gray-100 rounded-lg p-4 md:p-6">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 md:space-y-0">
//           <div className="flex items-center">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
//               <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded-lg relative">
//                 <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-black rounded-full border-2 border-white"></div>
//               </div>
//             </div>
//             <div>
//               <div className="font-bold text-sm md:text-base">{title}</div>
//               <div className="text-xs md:text-sm text-gray-600">{subTitle}</div>
//             </div>
//           </div>
  
//           <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto">
//             {/* Dynamic Progress Circle */}
//             <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center">
//               <svg className="w-full h-full" viewBox="0 0 50 50">
//                 <circle
//                   cx="25"
//                   cy="25"
//                   r={radius}
//                   fill="none"
//                   stroke="#e2e8f0" // Background circle color
//                   strokeWidth="4"
//                 />
//                 <circle
//                   cx="25"
//                   cy="25"
//                   r={radius}
//                   fill="none"
//                   stroke="#000" // Progress circle color
//                   strokeWidth="4"
//                   strokeDasharray={circumference}
//                   strokeDashoffset={offset}
//                   strokeLinecap="round"
//                   transform="rotate(-90 25 25)"
//                 />
//               </svg>
//               <span className="absolute text-xs md:text-sm font-medium">{progress}%</span>
//             </div>
  
//             <button
//               onClick={onContinue}
//               className="bg-black text-white px-3 py-1.5 md:px-6 md:py-2 rounded-md mr-3 md:mr-4 text-sm md:text-base"
//             >
//               Continue
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }


// export default function ProgressCard({ title, subTitle, progress, icon, onContinue }) {
//     const radius = 20; // Radius of the circle
//     const circumference = 2 * Math.PI * radius; // Circumference of the circle
//     const offset = circumference - (progress / 100) * circumference; // Dynamic offset for the progress
  
//     return (
//       <div className="bg-gray-100 rounded-lg p-4 md:p-6">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 md:space-y-0">
//           <div className="flex items-center">
//             {/* Icon from the complaint */}
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
//               {icon}
//             </div>
//             <div>
//               <div className="font-bold text-sm md:text-base">{title}</div>
//               <div className="text-xs md:text-sm text-gray-600">{subTitle}</div>
//             </div>
//           </div>
  
//           <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto">
//             {/* Dynamic Progress Circle */}
//             <div className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center">
//               <svg className="w-full h-full" viewBox="0 0 50 50">
//                 <circle
//                   cx="25"
//                   cy="25"
//                   r={radius}
//                   fill="none"
//                   stroke="#e2e8f0" // Background circle color
//                   strokeWidth="4"
//                 />
//                 <circle
//                   cx="25"
//                   cy="25"
//                   r={radius}
//                   fill="none"
//                   stroke="#000" // Progress circle color
//                   strokeWidth="4"
//                   strokeDasharray={circumference}
//                   strokeDashoffset={offset}
//                   strokeLinecap="round"
//                   transform="rotate(-90 25 25)"
//                 />
//               </svg>
//               <span className="absolute text-xs md:text-sm font-medium">{progress}%</span>
//             </div>
  
//             <button
//               onClick={onContinue}
//               className="bg-black text-white px-3 py-1.5 md:px-6 md:py-2 rounded-md mr-3 md:mr-4 text-sm md:text-base"
//             >
//               Continue
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }























// import ProgressCircle from "./ProgressCircle";

// export default function ProgressCard({ title, subTitle, progress, icon }) {
//   return (
//     <div className="bg-gray-100 rounded-lg p-4 md:p-6">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 md:space-y-0">
//         <div className="flex items-center">
//           {/* Updated icon size (w-6 h-6) */}
//           <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
//             {React.cloneElement(icon, { className: "w-6 h-6" })}
//           </div>
//           <div>
//             <div className="font-bold text-sm md:text-base">{title}</div>
//             <div className="text-xs md:text-sm text-gray-600">{subTitle}</div>
//           </div>
//         </div>
//         <ProgressCircle progress={progress} />
//       </div>
//     </div>
//   );
// }



// import ProgressCircle from "./ProgressCircle";

// export default function ProgressCard({ title, subTitle, progress, icon }) {
//   return (
//     <div className="bg-gray-100 rounded-lg p-4 md:p-6">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 md:space-y-0">
//         <div className="flex items-center">
//           {/* Icon with increased size */}
//           <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
//             <div className="w-8 h-8 md:w-10 md:h-10">
//               {icon}
//             </div>
//           </div>
//           <div>
//             <div className="font-bold text-sm md:text-base">{title}</div>
//             <div className="text-xs md:text-sm text-gray-600">{subTitle}</div>
//           </div>
//         </div>

//         {/* Progress Circle */}
//         <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto">
//           <ProgressCircle progress={progress} size={48} strokeWidth={4} />
//         </div>
//       </div>
//     </div>
//   );
// }


import ProgressCircle from "./ProgressCircle";

export default function ProgressCard({ title, subTitle, progress, icon }) {
  return (
    <div className="bg-gray-100 rounded-lg p-2 sm:p-3 md:p-4 lg:p-5">
      <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
        {/* Left side - Icon and Text */}
        <div className="flex items-center min-w-0 flex-1">
          {/* Icon container */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
            {/* Icon itself */}
            <div >
              {icon}
            </div>
          </div>
          
          {/* Text content */}
          <div className="min-w-0">
            <div className="font-bold text-xs sm:text-sm md:text-base truncate">
              {title}
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 truncate">
              {subTitle}
            </div>
          </div>
        </div>

        {/* Right side - Progress Circle */}
        <div className="flex-shrink-0 ml-2">
          <ProgressCircle 
            progress={progress} 
            size={36}
            smSize={40}
            mdSize={44}
            strokeWidth={3}
          />
        </div>
      </div>
    </div>
  );
}
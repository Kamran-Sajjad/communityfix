// export default function StatsCard({ value, label, subLabel }) {
//     return (
//       <div className="bg-gray-100 rounded-lg p-3 md:p-6 flex-1">
//         <div className="flex items-center">
//           <div className="text-4xl md:text-6xl font-bold">{value}</div>
//           <div className="ml-2 md:ml-4">
//             <div className="text-xs md:text-sm text-gray-600">{subLabel}</div>
//             <div className="text-sm md:text-base">{label}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }


// export default function StatsCard({ value, label, subLabel }) {
//   return (
//     <div className="bg-gray-100 rounded-lg p-3 md:p-6 flex-1">
//       <div className="flex items-center">
//         <div className="text-3xl sm:text-4xl md:text-5xl font-bold">{value}</div>
//         <div className="ml-2 sm:ml-4">
//           <div className="text-xs sm:text-sm text-gray-600">{subLabel}</div>
//           <div className="text-sm sm:text-base">{label}</div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function StatsCard({ value, label, subLabel }) {
//   return (
//     <div className="bg-gray-100 rounded-lg p-2 sm:p-3 md:p-4 lg:p-6 flex-1">
//       <div className="flex items-center">
//         {/* Value with responsive font sizes */}
//         <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
//           {value}
//         </div>
        
//         {/* Labels container with responsive margins */}
//         <div className="ml-2 xs:ml-3 sm:ml-4">
//           {/* SubLabel with responsive font sizes */}
//           <div className="text-[10px] xs:text-xs sm:text-sm text-gray-600">
//             {subLabel}
//           </div>
          
//           {/* Main Label with responsive font sizes */}
//           <div className="text-xs xs:text-sm sm:text-base">
//             {label}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










export default function StatsCard({ value, label, subLabel }) {
  return (
    // ✅ Fixed height + responsive flex direction
    <div className="bg-gray-100 rounded-lg p-4 flex-1 min-h-[150px] flex items-center justify-center sm:justify-start sm:items-start sm:flex-row flex-col text-center sm:text-left">
      <div className="flex items-center sm:items-start flex-col sm:flex-row">
        {/* Value */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {value}
        </div>

        {/* Labels */}
        <div className="mt-1 sm:mt-0 sm:ml-4">
          <div className="text-xs sm:text-sm text-gray-600">
            {subLabel}
          </div>
          <div className="text-sm sm:text-base">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

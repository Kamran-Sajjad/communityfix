// // NEW: Dynamic progress circle component
// export default function ProgressCircle({ radius = 20, progress = 0, strokeColor = "black", bgColor = "#e2e8f0" }) {
//     const circumference = 2 * Math.PI * radius;
//     const offset = circumference - (progress / 100) * circumference;
  
//     return (
//       <div className="relative flex items-center justify-center">
//         <svg className="w-full h-full" viewBox={`0 0 ${radius * 2 + 10} ${radius * 2 + 10}`}>
//           <circle
//             cx={radius + 5}
//             cy={radius + 5}
//             r={radius}
//             fill="none"
//             stroke={bgColor}
//             strokeWidth="4"
//           />
//           <circle
//             cx={radius + 5}
//             cy={radius + 5}
//             r={radius}
//             fill="none"
//             stroke={strokeColor}
//             strokeWidth="4"
//             strokeDasharray={circumference}
//             strokeDashoffset={offset}
//             strokeLinecap="round"
//             transform={`rotate(-90 ${radius + 5} ${radius + 5})`}
//           />
//         </svg>
//         <span className="absolute text-xs md:text-sm font-medium">{progress}%</span>
//       </div>
//     );
//   }




// export default function ProgressCircle({ progress, size = 40, strokeWidth = 4 }) {
//     const radius = (size - strokeWidth) / 2;
//     const circumference = 2 * Math.PI * radius;
//     const offset = circumference - (progress / 100) * circumference;
  
//     return (
//       <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
//         <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
//           <circle
//             cx={size / 2}
//             cy={size / 2}
//             r={radius}
//             fill="none"
//             stroke="#e2e8f0"
//             strokeWidth={strokeWidth}
//           />
//           <circle
//             cx={size / 2}
//             cy={size / 2}
//             r={radius}
//             fill="none"
//             stroke="#000"
//             strokeWidth={strokeWidth}
//             strokeDasharray={circumference}
//             strokeDashoffset={offset}
//             strokeLinecap="round"
//             transform={`rotate(-90 ${size / 2} ${size / 2})`}
//           />
//         </svg>
//         <span className="absolute text-xs font-medium">{progress}%</span>
//       </div>
//     );
//   }

export default function ProgressCircle({ 
  progress, 
  size = 36,
  smSize = 40,
  mdSize = 44,
  strokeWidth = 3
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={`relative flex items-center justify-center 
      w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11`}>
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#000"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="absolute text-[10px] sm:text-xs font-medium">
        {progress}%
      </span>
    </div>
  );
}
// "use client";

// import { X, Check } from "lucide-react";

// const ReportCard = ({ 
//   name, 
//   location, 
//   title, 
//   description,
//   onAccept, 
//   onReject 
// }) => {
//   return (
//     <div className="bg-gray-200 rounded-lg p-6">
//       <div className="flex justify-between mb-2">
//         <h3 className="text-xl font-bold">{name}</h3>
//         <span className="text-gray-600">{location}</span>
//       </div>

//       <div className="mb-4">
//         <h4 className="font-bold">{title}</h4>
//         <p className="text-gray-700">{description}</p>
//       </div>

//       <div className="flex justify-end space-x-4">
//         {/* Reject Button (Red X) */}
//         <button 
//           onClick={onReject}
//           className="cursor-pointer w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors"
//         >
//           <X className="w-6 h-6 text-red-500" />
//         </button>
        
//         {/* Accept Button (Green Check) */}
//         <button 
//           onClick={onAccept}
//           className="cursor-pointer w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-green-50 transition-colors"
//         >
//           <Check className="w-6 h-6 text-green-500" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;






import React from "react";

const ReportCard = ({ name, location, title, description, onAccept, onReject }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">By: {name}</p>
      <p className="text-sm text-gray-600 mb-4">Location: {location}</p>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between">
        <button
          onClick={onAccept}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Accept
        </button>
        <button
          onClick={onReject}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ReportCard;

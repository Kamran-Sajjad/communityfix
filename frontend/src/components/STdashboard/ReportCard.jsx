// // // "use client";

// // // import { X, Check } from "lucide-react";

// // // const ReportCard = ({ 
// // //   name, 
// // //   location, 
// // //   title, 
// // //   description,
// // //   onAccept, 
// // //   onReject 
// // // }) => {
// // //   return (
// // //     <div className="bg-gray-200 rounded-lg p-6">
// // //       <div className="flex justify-between mb-2">
// // //         <h3 className="text-xl font-bold">{name}</h3>
// // //         <span className="text-gray-600">{location}</span>
// // //       </div>

// // //       <div className="mb-4">
// // //         <h4 className="font-bold">{title}</h4>
// // //         <p className="text-gray-700">{description}</p>
// // //       </div>

// // //       <div className="flex justify-end space-x-4">
// // //         {/* Reject Button (Red X) */}
// // //         <button 
// // //           onClick={onReject}
// // //           className="cursor-pointer w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors"
// // //         >
// // //           <X className="w-6 h-6 text-red-500" />
// // //         </button>
        
// // //         {/* Accept Button (Green Check) */}
// // //         <button 
// // //           onClick={onAccept}
// // //           className="cursor-pointer w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-green-50 transition-colors"
// // //         >
// // //           <Check className="w-6 h-6 text-green-500" />
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ReportCard;
// //  import { X, Check } from "lucide-react";
// // const ReportCard = ({ 
// //   name, 
// //   location, 
// //   title, 
// //   description,
// //   image,
// //   onAccept, 
// //   onReject 
// // }) => {
// //   return (
// //     <div className="bg-gray-200 rounded-lg p-6 shadow-md">
// //       <div className="flex justify-between mb-2">
// //         <h3 className="text-xl font-bold">{name}</h3>
// //         <span className="text-gray-600">{location}</span>
// //       </div>

// //       {image && (
// //         <img
// //           src={image}
// //           alt="Report"
// //           className="w-full h-48 object-cover rounded-md mb-4"
// //         />
// //       )}

// //       <div className="mb-4">
// //         <h4 className="font-bold">{title}</h4>
// //         <p className="text-gray-700">{description}</p>
// //       </div>

// //       <div className="flex justify-end space-x-4">
// //         <button 
// //           onClick={onReject}
// //           className="cursor-pointer w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors"
// //         >
// //           <X className="w-6 h-6 text-red-500" />
// //         </button>
        
// //         <button 
// //           onClick={onAccept}
// //           className="cursor-pointer w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-green-50 transition-colors"
// //         >
// //           <Check className="w-6 h-6 text-green-500" />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };
// // export default ReportCard;
// import { X, Check } from "lucide-react";

// const ReportCard = ({ 
//   name, 
//   location, 
//   title, 
//   description,
//   image,
//   onAccept, 
//   onReject 
// }) => {
//   return (
//     <div className="bg-gray-100 rounded-xl p-4 shadow-md flex items-center space-x-6">
//       {/* Left: Circular Image */}
//       <div className="flex-shrink-0">
//         {image ? (
//           <img
//             src={image}
//             alt="Report"
//             className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
//           />
//         ) : (
//           <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-xl">
//             No Image
//           </div>
//         )}
//       </div>

//       {/* Right: Details and Buttons */}
//       <div className="flex-1">
//         <div className="flex justify-between items-start mb-2">
//           <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
//           <span className="text-sm text-gray-500">{location}</span>
//         </div>

//         <div className="mb-2">
//           <h4 className="text-lg font-semibold text-gray-700">{title}</h4>
//           <p className="text-gray-600 text-sm">{description}</p>
//         </div>

//         <div className="flex justify-end space-x-4 mt-4">
//           {/* Reject Button */}
//           <button 
//             onClick={onReject}
//             className="cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center border hover:bg-red-100 transition-colors"
//           >
//             <X className="w-5 h-5 text-red-500" />
//           </button>

//           {/* Accept Button */}
//           <button 
//             onClick={onAccept}
//             className="cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center border hover:bg-green-100 transition-colors"
//           >
//             <Check className="w-5 h-5 text-green-500" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;

import { X, Check } from "lucide-react";

const ReportCard = ({ 
  name, 
  location, 
  title, 
  description,
  image,
  onAccept, 
  onReject 
}) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow-md flex items-center space-x-6">
      {/* Left: Radial Square Image */}
      <div className="flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt="Report"
            className="w-32 h-32 object-cover rounded-xl border-4 border-white shadow-md"
          />
        ) : (
          <div className="w-32 h-32 rounded-xl bg-gray-300 flex items-center justify-center text-gray-500 text-xl">
            No Image
          </div>
        )}
      </div>

      {/* Right: Details and Buttons */}
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
          <span className="text-sm text-gray-500">{location}</span>
        </div>

        <div className="mb-2">
          <h4 className="text-lg font-semibold text-gray-700">{title}</h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <div className="flex justify-end space-x-4 mt-4">
          {/* Reject Button */}
          <button 
            onClick={onReject}
            className="cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center border hover:bg-red-100 transition-colors"
          >
            <X className="w-5 h-5 text-red-500" />
          </button>

          {/* Accept Button */}
          <button 
            onClick={onAccept}
            className="cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center border hover:bg-green-100 transition-colors"
          >
            <Check className="w-5 h-5 text-green-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;

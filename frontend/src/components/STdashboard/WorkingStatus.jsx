// // components/WorkingStatus.jsx
// import { CircleDashed, ChevronLeft, ChevronRight } from "lucide-react";

// export default function WorkingStatus() {
//   return (
//     <div className="mb-8">
//       <h2 className="text-xl font-bold mb-4">Working status</h2>
//       <div className="flex items-center bg-gray-50 p-4 rounded-lg">
//         <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
//           <CircleDashed className="w-6 h-6" />
//         </div>
//         <div className="flex-1">
//           <h3 className="font-semibold">Solar installations</h3>
//           <p className="text-gray-500 text-sm">working..</p>
//         </div>
//         <div className="flex items-center mr-4">
//           <div className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center">
//             <span className="text-sm font-medium">90%</span>
//           </div>
//         </div>
//         <button className="bg-black text-white px-4 py-2 rounded-md mr-4">Review</button>
//         <div className="flex space-x-2">
//           <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/WorkingStatus.jsx
// components/WorkingStatus.jsx
// components/WorkingStatus.jsx
import { CircleDashed, ChevronLeft, ChevronRight } from "lucide-react";

export default function WorkingStatus() {
  return (
    <div className="mb-8">
      <h2 className="text-lg lg:text-xl font-bold mb-4">Working status</h2>
      <div className="flex items-center bg-gray-50 p-4 rounded-lg">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
          <CircleDashed className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">Solar installations</h3>
          <p className="text-gray-500 text-sm">working..</p>
        </div>
        <div className="flex items-center mr-4">
          <div className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center">
            <span className="text-sm font-medium">90%</span>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md mr-4">Review</button>
        <div className="flex space-x-2">
          <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
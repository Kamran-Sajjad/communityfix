// // === src/components/STdashboard/ReviewCard.jsx ===
// import StarRating from "./StarRating";

// export default function ReviewCard({ title, description, author, rating, imageUrl }) {
//   const cleanedTitle = title?.trim() || "General Feedback";

//   return (
//     <div className="w-full bg-gray-200 rounded-lg p-6 flex items-center justify-between flex-col md:flex-row">
      
//       {/* Left side: Feedback text */}
//       <div className="flex-1 pr-4">
//         <div className="text-5xl text-gray-500 mb-1 mt-[-8px]">❝</div> {/* Slightly pulled quote up */}
//         <h3 className="text-lg font-bold mb-1 -mt-2">{cleanedTitle}</h3> {/* Pull title up */}
//         <p className="mb-4 text-gray-700">{description}</p> {/* Reduced bottom margin */}
//         <div className="flex justify-between items-center">
//           <span className="font-bold text-lg">{author}</span>
//           <StarRating rating={rating} />
//         </div>
//       </div>

//       {/* Right side: Circular Image */}
//       {imageUrl && (
//         <div className="w-32 h-32 mt-4 md:mt-0">
//           <img
//             src={imageUrl}
//             alt="feedback"
//             className="w-full h-full rounded-full object-cover object-center border-2 border-white shadow-md"
//           />
//         </div>
//       )}
//     </div>
//   );
// }










// // === src/components/STdashboard/ReviewCard.jsx ===
// import StarRating from "./StarRating";

// export default function ReviewCard({ title, description, author, rating, imageUrl }) {
//   const cleanedTitle = title?.trim() || "General Feedback";

//   return (
//     <div className="w-full bg-gray-200 rounded-lg p-6 space-y-4 md:space-y-0 flex flex-col md:flex-row md:items-start md:justify-between md:space-x-6">
      
//       {/* Top Section (Name, Image, Title) for small screens */}
//       <div className="flex items-center justify-between md:hidden">
//         {/* Left: Image + Name */}
//         <div className="flex items-center space-x-3">
//           {imageUrl && (
//             <div className="w-12 h-12">
//               <img
//                 src={imageUrl}
//                 alt="feedback"
//                 className="w-full h-full rounded-full object-cover object-center border-2 border-white shadow"
//               />
//             </div>
//           )}
//           <span className="font-bold text-sm">{author}</span>
//         </div>

//         {/* Right: Title */}
//         <h3 className="text-sm font-semibold text-gray-800">{cleanedTitle}</h3>
//       </div>

//       {/* Main Section (for medium and up screens) */}
//       <div className="hidden md:flex flex-1 w-full text-left space-x-6">
//         {/* Left: Text */}
//         <div className="flex-1">
//           <div className="text-5xl text-gray-500 mb-1 mt-[-8px]">❝</div>
//           <h3 className="text-lg font-bold mb-1 -mt-2">{cleanedTitle}</h3>
//           <p className="mb-4 text-gray-700">{description}</p>
//           <div className="flex justify-between items-center">
//             <span className="font-bold text-lg">{author}</span>
//             <StarRating rating={rating} />
//           </div>
//         </div>

//         {/* Right: Image */}
//         {imageUrl && (
//           <div className="w-32 h-32 shrink-0">
//             <img
//               src={imageUrl}
//               alt="feedback"
//               className="w-full h-full rounded-full object-cover object-center border-2 border-white shadow-md"
//             />
//           </div>
//         )}
//       </div>

//       {/* Description for small screens */}
//       <div className="md:hidden text-left">
//         <p className="text-gray-700 mb-2">{description}</p>
//         <StarRating rating={rating} />
//       </div>
//     </div>
//   );
// }













// === src/components/STdashboard/ReviewCard.jsx ===
import StarRating from "./StarRating";

export default function ReviewCard({ title, description, author, rating, imageUrl }) {
  const cleanedTitle = title?.trim() || "General Feedback";

  return (
    <div className="w-full bg-gray-200 rounded-lg p-6 space-y-4 md:space-y-0 flex flex-col md:flex-row md:items-start md:justify-between md:space-x-6">
      
      {/* Top Section: Small screen only */}
      <div className="flex items-center justify-between md:hidden">
        {/* Left: Image + Name */}
        <div className="flex items-center space-x-3">
          {imageUrl && (
            <div className="w-12 h-12">
              <img
                src={imageUrl}
                alt="feedback"
                className="w-full h-full rounded-full object-cover object-center border-2 border-white shadow"
              />
            </div>
          )}
          <span className="font-bold text-sm">{author}</span>
        </div>

        {/* Right: Title */}
        <h3 className="text-sm font-semibold text-gray-800">{cleanedTitle}</h3>
      </div>

      {/* Medium+ Layout */}
      <div className="hidden md:flex flex-1 w-full text-left space-x-6">
        {/* Left: Text */}
        <div className="flex-1">
          <div className="text-5xl text-gray-500 mb-1 mt-[-8px]">❝</div>
          <h3 className="text-lg font-bold mb-1 -mt-2">{cleanedTitle}</h3>
          <p className="mb-4 text-gray-700">{description}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">{author}</span>
            <StarRating rating={rating} />
          </div>
        </div>

        {/* Right: Image */}
        {imageUrl && (
          <div className="w-32 h-32 shrink-0">
            <img
              src={imageUrl}
              alt="feedback"
              className="w-full h-full rounded-full object-cover object-center border-2 border-white shadow-md"
            />
          </div>
        )}
      </div>

      {/* Description + Stars for small screens */}
      <div className="md:hidden text-left">
        <p className="text-gray-700 mb-2">{description}</p>
        <div className="flex justify-end">
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
}

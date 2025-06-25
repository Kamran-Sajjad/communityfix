// === src/components/STdashboard/ReviewCard.jsx ===
import StarRating from "./StarRating";

export default function ReviewCard({ title, description, author, rating, imageUrl }) {
  const cleanedTitle = title?.trim() || "General Feedback";

  return (
    <div className="w-full bg-gray-200 rounded-lg p-6 flex items-center justify-between flex-col md:flex-row">
      
      {/* Left side: Feedback text */}
      <div className="flex-1 pr-4">
        <div className="text-5xl text-gray-500 mb-1 mt-[-8px]">❝</div> {/* Slightly pulled quote up */}
        <h3 className="text-lg font-bold mb-1 -mt-2">{cleanedTitle}</h3> {/* Pull title up */}
        <p className="mb-4 text-gray-700">{description}</p> {/* Reduced bottom margin */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">{author}</span>
          <StarRating rating={rating} />
        </div>
      </div>

      {/* Right side: Circular Image */}
      {imageUrl && (
        <div className="w-32 h-32 mt-4 md:mt-0">
          <img
            src={imageUrl}
            alt="feedback"
            className="w-full h-full rounded-full object-cover object-center border-2 border-white shadow-md"
          />
        </div>
      )}
    </div>
  );
}

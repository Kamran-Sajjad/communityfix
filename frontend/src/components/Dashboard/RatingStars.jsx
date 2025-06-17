"use client";
import { Star } from "lucide-react";

const RatingStars = ({ rating, onRatingChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold mb-2">
        Share your experience
      </label>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
          type="button"
            key={star}
            onClick={() => onRatingChange(star)}
            className="focus:outline-none"
          >
            <Star
              className={`w-6 h-6 md:w-7 md:h-7 ${
                star <= rating ? "fill-current text-black" : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingStars;
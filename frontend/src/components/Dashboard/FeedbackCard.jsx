import React from "react";

const FeedbackCard = ({ feedback }) => {
  // Fallback for missing user avatar
  const renderUserAvatar = () => {
    if (feedback.userAvatar) {
      return (
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={feedback.userAvatar}
          alt={feedback.userName}
          onError={(e) => {
            e.target.style.display = "none"; // Hide the broken image
          }}
        />
      );
    } else {
      // Display initials if no avatar is found
      const initials = feedback.userName
        ? feedback.userName
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase()
        : "U";
      return (
        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-lg font-bold">{initials}</span>
        </div>
      );
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:p-6 flex flex-col lg:flex-row gap-4 w-full transition-all duration-200 hover:shadow-lg">
      {/* Left Section: User Details, Feedback Message, and Rating */}
      <div className="flex-1 space-y-4 min-w-0">
        {/* User Details */}
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">{renderUserAvatar()}</div>
          <div className="min-w-0">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 truncate">
              {feedback.userName || "Anonymous User"}
            </h3>
            <p className="text-xs md:text-sm text-gray-500">
              {feedback.date || "No date provided"}
            </p>
          </div>
        </div>

        {/* Feedback Message - Scrollable if content is too long */}
        <div className="max-h-32 overflow-y-auto pr-2">
          <p className="text-gray-700 text-sm md:text-base break-words">
            {feedback.message || "No feedback message provided"}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-xs md:text-sm text-gray-500">Rating:</span>
          <span className="text-yellow-500 font-medium">
            {feedback.rating ? `${feedback.rating}/5` : "Not rated"}
          </span>
        </div>
      </div>

      {/* Right Section: Issue Image and Name - Only shows if issue exists */}
      {(feedback.issue || feedback.issueImage) && (
        <div className="lg:w-[200px] xl:w-[250px] flex flex-col gap-2 lg:border-l lg:pl-4 lg:ml-2">
          <div className="aspect-video w-full rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
            {feedback.issueImage ? (
              <img
                src={feedback.issueImage}
                alt={feedback.issue || "Issue image"}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none"; // Hide the broken image
                }}
              />
            ) : (
              <span className="text-xs md:text-sm text-gray-500">No Image Available</span>
            )}
          </div>
          <div className="text-center">
            <h2 className="text-sm md:text-base font-semibold truncate">
              {feedback.issue || "No issue specified"}
            </h2>
            <p className="text-xs text-gray-500">Issue</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackCard;
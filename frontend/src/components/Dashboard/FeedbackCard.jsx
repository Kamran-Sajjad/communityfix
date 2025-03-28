import React from "react";

const FeedbackCard = ({ feedback }) => {
  // Fallback for missing user avatar
  const renderUserAvatar = () => {
    if (feedback.userAvatar) {
      return (
        <img
          className="h-10 w-10 rounded-full"
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
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase();
      return (
        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-lg font-bold">{initials}</span>
        </div>
      );
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4 flex justify-between">
      {/* Left Section: User Details, Feedback Message, and Rating */}
      <div className="flex-1 pr-4">
        {/* User Details */}
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">{renderUserAvatar()}</div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{feedback.userName}</h3>
            <p className="text-sm text-gray-500">{feedback.date}</p>
          </div>
        </div>

        {/* Feedback Message */}
        <p className="text-gray-700 mt-2">{feedback.message}</p>

        {/* Rating */}
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-sm text-gray-500">Rating:</span>
          <span className="text-yellow-500">{feedback.rating}/5</span>
        </div>
      </div>

      {/* Right Section: Issue Image and Name */}
      <div className="w-[250px] h-full flex flex-col justify-center items-center border-l pl-4">
        <div className="h-full w-full rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden">
          {feedback.issueImage ? (
            <img
              src={feedback.issueImage}
              alt={feedback.issue}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.style.display = "none"; // Hide the broken image
              }}
            />
          ) : (
            <span className="text-sm text-gray-500">No Image</span>
          )}
        </div>
        <div className="mt-2 text-center">
          <h2 className="font-bold">{feedback.issue}</h2>
          <p className="text-sm text-gray-500">Issue</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
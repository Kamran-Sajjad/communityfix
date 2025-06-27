import React, { useRef, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const FeedbackCard = ({ feedback }) => {
  const {
    name = "Anonymous",
    address = "Not Provided",
    issueType:issue = "No Issue Specified",
    comment = "No comment available.",
    rating = 0,
    imageUrl = "",
    createdAt = new Date().toISOString(),
  } = feedback;

  const initials = name?.charAt(0).toUpperCase();

  // Ref to get the card height
  const cardRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      // Set image height to card height - 10px margin
      setImageHeight(cardRef.current.clientHeight - 10);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-4 m-1 bg-white rounded-xl shadow-md flex flex-row gap-4"
      style={{ alignItems: "flex-start" }}
    >
      {/* Left side: User info and feedback details */}
      <div className="flex flex-col flex-1 gap-2">
        {/* User info */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-xl">
            {initials}
          </div>
          <div>
            <div className="font-semibold text-lg">{name}</div>
            <div className="text-sm text-gray-500">
              {new Date(createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="text-sm text-gray-600">
          <strong>Address:</strong> {address}
        </div>

        {/* Issue */}
        <div className="text-sm">
          <strong>Issue:</strong> {issue}
        </div>

        {/* Comment */}
        <div className="text-gray-800 mt-2">{comment}</div>

        {/* Rating */}
       
        <div className="flex mt-1">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} className={i < rating ? "text-yellow-500" : "text-gray-400"} />
          ))}
          {rating === 0 && (
            <span className="text-sm text-gray-400">Not rated</span>
          )}
        </div>
      </div>

      {imageUrl ? (
  <div
    className="ml-auto rounded-[20%] overflow-hidden shadow"
    style={{
      width: imageHeight,
      height: imageHeight,
      minWidth: 100,
      minHeight: 100,
      backgroundColor: "#f0f0f0",
      flexShrink: 0,
    }}
  >
    <img
      src={imageUrl}
      alt="Feedback"
      className="w-full h-full object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/default-placeholder.jpg";
      }}
    />
  </div>
) : (
  <div
    className="ml-auto text-gray-500 italic rounded-[20%] flex items-center justify-center"
    style={{
      width: imageHeight,
      height: imageHeight,
      minWidth: 100,
      minHeight: 100,
      backgroundColor: "#f9fafb",
      flexShrink: 0,
    }}
  >
    No image
  </div>
)}

    </div>
  );
};

export default FeedbackCard;

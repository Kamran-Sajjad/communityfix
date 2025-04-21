import React from "react";
import { Link } from "react-router-dom";

export const FeedBack = () => {
  return (
    <div className="bg-gray-500 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold">Feedbacks</h3>
      <p className="text-xl mt-2">check reviews</p>
      <p className="mt-2">Completed works</p>
      <Link to="/feedbackhistory">
      <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
        Reviews
      </button>
      </Link>
    </div>
  );
};
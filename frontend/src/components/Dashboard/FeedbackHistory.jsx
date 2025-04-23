import React, { useState, useEffect } from "react";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import FeedbackCard from "../../components/Dashboard/FeedbackCard";
import { AdHeader } from "../../components/Dashboard/AdHeader";
import Image from "../../assets/logo.png";

// Placeholder for data.json (replace with actual import tomorrow)
const feedbackData = [
  {
    id: 1,
    issue: "Solar Installation",
    issueImage: "", 
    userName: "Hamza Raza ",
    userAvatar: "",
    date: "2023-10-01",
    message: "Great service! Very satisfied with the support.",
    rating: 5,
  },
  {
    id: 2,
    issue: "Electricity Issue",
    issueImage: "", // Add issue image URL
    userName: "Sami Ullah",
    userAvatar: "", // Invalid URL to test fallback
    date: "2023-10-02",
    message: "The product could be better, but overall a good experience.",
    rating: 4,
  },
];

const FeedbackHistory = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    // Simulate fetching data from data.json
    setFeedback(feedbackData);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:relative transition-all duration-300 ease-in-out bg-black ${
          isSidebarExpanded ? "w-64" : "w-16"
        }`}
      >
        <AdSideBare isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-4 sm:p-6 md:p-8 transition-all duration-300 ${
          isSidebarExpanded ? "ml-64" : "ml-16"
        }`}
      >
        {/* Header Section */}
        <AdHeader className="ml-2" title="Feedback History" />

        {/* Feedback List */}
        <div className="mx-auto max-w-full md:max-w-7xl space-y-4">
          {feedback.length > 0 ? (
            feedback.map((feedbackItem) => (
              <FeedbackCard key={feedbackItem.id} feedback={feedbackItem} />
            ))
          ) : (
            <p className="text-center text-gray-500">No feedback available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackHistory;
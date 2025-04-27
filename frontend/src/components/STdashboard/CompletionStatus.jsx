"use client";

import { useState } from 'react';
import { Car, ChevronLeft, ChevronRight, CheckCircle, Wrench, Plug, Droplet } from "lucide-react";

const CompletionStatus = ({ issues = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Filter completed issues
  const completedIssues = issues.filter(issue => issue?.status === "completed");
  
  if (completedIssues.length === 0) {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Completion status</h2>
        <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-500">
          No completed tasks yet
        </div>
      </div>
    );
  }

  const currentIssue = completedIssues[currentIndex];
  
  // Get icon based on issue type
  const getIssueIcon = (issue) => {
    if (issue.includes("Car")) return <Car className="w-6 h-6" />;
    if (issue.includes("Solar")) return <Wrench className="w-6 h-6" />;
    if (issue.includes("Ups")) return <Plug className="w-6 h-6" />;
    if (issue.includes("Pipe")) return <Droplet className="w-6 h-6" />;
    return <CheckCircle className="w-6 h-6" />;
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === completedIssues.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? completedIssues.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Completion status</h2>
      <div className="flex items-center bg-gray-50 p-4 rounded-lg">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
          {getIssueIcon(currentIssue.issue)}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{currentIssue.issue}</h3>
          <p className="text-gray-500 text-sm">completed</p>
        </div>
        <div className="flex items-center mr-4">
          <div className="relative w-12 h-12">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              {/* Full black circle for completed tasks */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                fill="none"
                stroke="#000000"
                strokeWidth="3"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
              100%
            </span>
          </div>
        </div>
        {/* <button className="bg-black text-white px-4 py-2 rounded-md mr-4">Review</button> */}
        {completedIssues.length > 1 && (
          <div className="flex space-x-2">
            <button 
              onClick={goToPrev}
              className="cursor-pointer w-10 h-10 rounded-full border border-black flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={goToNext}
              className="cursor-pointer w-10 h-10 rounded-full border border-black flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompletionStatus;
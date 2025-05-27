"use client";

import { X, Check } from "lucide-react";

const ReportCard = ({ 
  name, 
  location, 
  title, 
  description,
  onAccept, 
  onReject 
}) => {
  return (
    <div className="bg-gray-200 rounded-lg p-6">
      <div className="flex justify-between mb-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <span className="text-gray-600">{location}</span>
      </div>

      <div className="mb-4">
        <h4 className="font-bold">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>

      <div className="flex justify-end space-x-4">
        {/* Reject Button (Red X) */}
        <button 
          onClick={onReject}
          className="cursor-pointer w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors"
        >
          <X className="w-6 h-6 text-red-500" />
        </button>
        
        {/* Accept Button (Green Check) */}
        <button 
          onClick={onAccept}
          className="cursor-pointer w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-green-50 transition-colors"
        >
          <Check className="w-6 h-6 text-green-500" />
        </button>
      </div>
    </div>
  );
};

export default ReportCard;
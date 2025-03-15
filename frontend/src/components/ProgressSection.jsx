import React from "react";
import "../styles/ProgressSection.css";

const ProgressSection = ({ progressData }) => {
  if (!progressData) return null; // Hide section if no progress is selected

  return (
    <div className="progress-section">
      <h3>Progress Details</h3>
      <div className="progress-info">
        <h4>{progressData.title}</h4>
        <p>Status: {progressData.status}</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressData.percentage}%` }}>
            {progressData.percentage}%
          </div>
        </div>
        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
};

export default ProgressSection;

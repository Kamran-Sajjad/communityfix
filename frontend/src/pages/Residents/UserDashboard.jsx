import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import StatsCard from "../../components/StatsCard";
import ComplaintsList from "../../components/ComplaintsList";
import WorkStatistics from "../../components/WorkStatistics";
import ChatBox from "../../components/ChatBox";
import ProgressSection from "../../components/ProgressSection";
import "../../styles/UserDashboard.css";

const UserDashboard = () => {
  const [progressData, setProgressData] = useState(null);

  const handleViewProgress = (complaint) => {
    // This will be replaced with real API data later
    const progressDetails = {
      title: complaint.title,
      status: "In Progress...",
      percentage: Math.floor(Math.random() * (95 - 50) + 50), // Simulated data
    };
    setProgressData(progressDetails);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h2>Hello Kamran!</h2>
          <p>It's good to see you again.</p>
        </header>

        <div className="dashboard-main">
          <StatsCard />
          <ProgressSection progressData={progressData} />
          <ComplaintsList onViewProgress={handleViewProgress} />
          <WorkStatistics />
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

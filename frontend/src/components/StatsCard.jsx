import React, { useState, useEffect } from "react";
import "../styles/StatsCard.css";

const StatsCard = () => {
  const [stats, setStats] = useState({ workCompleted: 0, workInProgress: 0 });

  useEffect(() => {
    // Simulated API Call (Replace with actual API call later)
    const fetchStats = async () => {
      // Example API: await fetch("/api/stats").then(res => res.json()).then(data => setStats(data));
      setTimeout(() => {
        setStats({ workCompleted: 11, workInProgress: 4 });
      }, 1000);
    };
    fetchStats();
  }, []);

  return (
    <div className="stats-container">
      <div className="stat-card completed">
        <h3>Work Completed</h3>
        <p>{stats.workCompleted}</p>
      </div>
      <div className="stat-card in-progress">
        <h3>Work in Progress</h3>
        <p>{stats.workInProgress}</p>
      </div>
    </div>
  );
};

export default StatsCard;

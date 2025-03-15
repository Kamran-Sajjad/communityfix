import React, { useEffect, useState } from "react";
import "../styles/WorkStatistics.css";

const WorkStatistics = () => {
  const [statistics, setStatistics] = useState({ totalComplaints: 0, resolved: 0, pending: 0 });

  useEffect(() => {
    // Simulated API Call (Replace with actual API later)
    const fetchStatistics = async () => {
      setTimeout(() => {
        setStatistics({
          totalComplaints: 150,
          resolved: 120,
          pending: 30,
        });
      }, 1000);
    };

    fetchStatistics();
  }, []);

  return (
    <div className="work-statistics">
      <h3>Work Statistics</h3>
      <div className="stats">
        <div className="stat-item total">
          <h4>Total Complaints</h4>
          <p>{statistics.totalComplaints}</p>
        </div>
        <div className="stat-item resolved">
          <h4>Resolved Complaints</h4>
          <p>{statistics.resolved}</p>
        </div>
        <div className="stat-item pending">
          <h4>Pending Complaints</h4>
          <p>{statistics.pending}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkStatistics;

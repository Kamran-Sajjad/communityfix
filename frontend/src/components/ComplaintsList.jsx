import React, { useState, useEffect } from "react";
import "../styles/ComplaintsList.css";

const ComplaintsList = ({ onViewProgress }) => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Simulated API Call (Replace with actual API later)
    const fetchComplaints = async () => {
      setTimeout(() => {
        setComplaints([
          { id: 1, title: "Electric Repairs", category: "by home technicians", timeLeft: "6h 30min", priority: 49 },
          { id: 2, title: "Construction", category: "by society management", timeLeft: "13d 21hrs", priority: 47 },
          { id: 3, title: "Water Supply Issue", category: "by municipal team", timeLeft: "2d 15hrs", priority: 50 },
        ]);
      }, 1000);
    };

    fetchComplaints();
  }, []);

  return (
    <div className="complaints-list">
      <h3>Complaints</h3>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint.id} className="complaint-item">
            <div className="complaint-details">
              <h4>{complaint.title}</h4>
              <p>{complaint.category}</p>
              <p>Time Left: {complaint.timeLeft}</p>
              <p>Priority Level: {complaint.priority}</p>
            </div>
            <button onClick={() => onViewProgress(complaint)}>View Progress</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComplaintsList;

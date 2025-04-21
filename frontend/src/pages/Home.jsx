// import React from "react";

// const Home = () => {
//   return <h1>Welcome to CommunityFix</h1>;
// };

// export default Home;



import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleButtonClick = () => {
    navigate("/residents/dashboard"); // Navigate to the dashboard page
  };

  const handleSTButtonClick = () => {
    navigate("/serviceTeam/MechanicDashboard"); // Navigate to the dashboard page
    // navigate("/serviceTeam/mechanic-dashboard"); // Navigate to the dashboard page
  };
  const handleListedIssuesButtonClick = () => {
    navigate("/serviceTeam/ReportsPage"); // Navigate to the dashboard page
    // navigate("/serviceTeam/mechanic-dashboard"); // Navigate to the dashboard page
  };
  const handleAssignedIssuesButtonClick = () => {
    navigate("/serviceTeam/AssignedIssuesPage"); // Navigate to the dashboard page
    // navigate("/serviceTeam/mechanic-dashboard"); // Navigate to the dashboard page
  };
  const handleListedIssuesPageButtonClick = () => {
    navigate("/residents/ListedIssuesPage"); // Navigate to the dashboard page
    // navigate("/serviceTeam/mechanic-dashboard"); // Navigate to the dashboard page
  };
  const handleAddIssuesPageButtonClick = () => {
    navigate("/residents/AddIssuesPage"); // Navigate to the dashboard page
    // navigate("/serviceTeam/mechanic-dashboard"); // Navigate to the dashboard page
  };

  return (
    <div>
      <h1>Welcome to CommunityFix</h1>
      <button 
        onClick={handleButtonClick} 
        className="bg-black text-white py-2 px-4 rounded mt-4"
      >
        Go to User Dashboard
      </button>

      <button 
        onClick={handleSTButtonClick} 
        className="bg-black text-white py-2 px-4 rounded mt-4"
      >
        Service Team Dashboard
      </button>
      <button 
        onClick={handleListedIssuesButtonClick} 
        className="bg-black text-white py-2 px-4 rounded mt-4"
      >
        Listed Issues 
      </button>
      <button 
        onClick={handleAssignedIssuesButtonClick} 
        className="bg-black text-white py-2 px-4 rounded mt-4"
      >
        Assigned Issues 
      </button>
      <button 
        onClick={handleListedIssuesPageButtonClick} 
        className="bg-black text-white py-2 px-4 rounded mt-4"
      >
        Listed Issues Page  
      </button>
      <button 
        onClick={handleAddIssuesPageButtonClick} 
        className="bg-black text-white py-2 px-4 rounded mt-4"
      >
        Add Issues Page  
      </button>
    </div>
  );
};

export default Home;

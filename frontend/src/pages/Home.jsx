import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleButtonClick = () => {
    navigate("/residents/dashboard"); // Navigate to the dashboard page
  };
  const handleADButtonClick = () => {
    navigate("/admin/test"); // Navigate to the admin dashboard page
  };

  return (
    <div>
      <h1>Welcome to CommunityFix</h1>
      <button 
        onClick={handleButtonClick} 
        className="bg-black text-white py-2 px-4 rounded mt-4"
      >
        Resident Dashboard
      </button>
      <button 
        onClick={handleADButtonClick} 
        className="bg-black text-white py-2 px-4 rounded mt-4"
      >
        Admin Dashboard
      </button>
    </div>
  );
};

export default Home;

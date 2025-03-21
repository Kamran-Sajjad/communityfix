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
    navigate("/serviceTeam/mechanic-dashboard"); // Navigate to the dashboard page
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
        Go to Service Team Dashboard
      </button>
    </div>
  );
};

export default Home;

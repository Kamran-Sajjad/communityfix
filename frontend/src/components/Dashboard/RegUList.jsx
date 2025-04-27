import React from 'react';
import users from "../../hooks/data.json";
import RegUserCard from "../../components/Dashboard/RegUserCard"; // Updated import path

function RegUList() {
  return (
    <div className="p-4">
      {/* Header Section */}
      
      {/* User Cards Grid */}
      <div className="user-list-grid">
        {users.map((user) => (
          <div key={user.cnic} className="transition-transform duration-200 hover:scale-[1.02]">
            <RegUserCard user={user} />
          </div>
        ))}
      </div>


      </div>
   
  );
}

export default RegUList;
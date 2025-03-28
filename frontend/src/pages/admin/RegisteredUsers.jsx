import React, { useState } from "react";

import AdSideBare from "../../components/Dashboard/AdSideBare"; // Corrected component name (assuming it's AdSideBar)
import { AdHeader } from "../../components/Dashboard/AdHeader";
import RegUList from "../../components/Dashboard/RegUList";

const RegisteredUsers= () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev); // Use functional update for better state management
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed md:relative transition-all duration-300 ease-in-out bg-black ${
          isSidebarExpanded ? "w-64" : "w-16"
        }`}
      >
        <AdSideBare isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-16"
        }`}
      >
        {/* Header Section */}
        <AdHeader className="ml-2" title="Registered Users" />

        {/* User List Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mx-2 md:mx-5">
          <RegUList />
        </div>
      </div>
    </div>
  );
};

export default RegisteredUsers;
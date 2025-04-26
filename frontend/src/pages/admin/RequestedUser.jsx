import React, { useState } from "react";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import { AdHeader } from "../../components/Dashboard/AdHeader";
import UserList from "./UserList";

const RequestedUser = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 z-30`} 
        // className={`fixed md:relative z-50 h-full
        //  md:block`}
      >
        <AdSideBare
          isExpanded={isSidebarExpanded}
          toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
        />
        
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 md:ml-12 ${
          isSidebarExpanded ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <AdHeader title="Requested Users" />
        </div>

        {/* User List */}
        <div className="bg-white rounded-lg shadow-md p-6 mx-2 md:mx-5 mt-4">
          <UserList isSidebarExpanded={isSidebarExpanded} />
        </div>
      </div>
    </div>
  );
};

export default RequestedUser;

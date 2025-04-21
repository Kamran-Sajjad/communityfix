import React, { useState } from "react";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import {AdHeader} from "../../components/Dashboard/AdHeader";
import UserList from "./UserList";

const RequestedUser = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
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
        className={`flex-1 p-4 transition-all duration-300 ease-in-out md:ml-16 ${
          isSidebarExpanded ? "ml-64" : "ml-16"
        }`}
      >
        {/* Header Section */}
        <AdHeader className="ml-2" title="Requested Users" />

        {/* User List Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mx-2 md:mx-5">
          <UserList isSidebarExpanded={isSidebarExpanded} />
        </div>
      </div>
    </div>
  );
};

export default RequestedUser;

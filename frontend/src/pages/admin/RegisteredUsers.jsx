import React, { useState } from "react";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import { AdHeader } from "../../components/Dashboard/AdHeader";
import RegUList from "../../components/Dashboard/RegUList";

const RegisteredUsers = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={toggleMobileSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-md shadow-lg"
      >
        {isMobileSidebarOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-40 transition-all duration-300 ease-in-out bg-black ${
          isSidebarExpanded ? "w-64" : "w-16"
        } ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <AdSideBare 
          isExpanded={isSidebarExpanded} 
          toggleSidebar={toggleSidebar} 
          onMobileClose={() => setIsMobileSidebarOpen(false)}
        />
      </div>

      {/* Overlay for mobile sidebar */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out min-h-screen ${
          isSidebarExpanded ? "md:ml-64" : "md:ml-16"
        }`}
      >
        {/* Header Section */}
        <div className="sticky top-0 z-20 bg-white shadow-sm">
          <AdHeader title="Registered Users" />
        </div>

        {/* User List Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mx-2 md:mx-5">
          
            <RegUList isSidebarExpanded={isSidebarExpanded} />
          </div>
        
      </div>
    </div>
  );
};

export default RegisteredUsers;
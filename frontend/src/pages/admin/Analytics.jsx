
import React, { useState } from "react";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import { AdHeader } from "../../components/Dashboard/AdHeader";
import { Stats } from "../../components/Dashboard/Stats";
import { UserStats } from "../../components/Dashboard/UserStats"; // Import the new component

const Analytics = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gray-100 relative">
      <div className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 z-30`}>
        <AdSideBare
          isExpanded={isSidebarExpanded}
          toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
        />
      </div>

      <div className={`flex flex-col flex-1 w-full transition-all duration-300 md:ml-12 ${isSidebarExpanded ? "ml-0" : "ml-0"}`}>
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <AdHeader title="Analytics" />
        </div>

        <div className="p-4 space-y-6">
          {/* Stats Component */}
          <div className="w-full">
            <Stats />
          </div>

          {/* User Stats Pie Chart */}
          <div className="w-full">
            <UserStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

import React, { useState } from "react";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import { AdHeader } from "../../components/Dashboard/AdHeader";
import { Stats } from "../../components/Dashboard/Stats";

const Analytics = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const stats = [
    { title: "Registered Users", value: "17" },
    { title: "Pending requests", value: "14" },
    { title: "Completed requests", value: "12" },
    { title: "Unregistered Workers", value: "05" },
    { title: "Registered Workers", value: "19" },
    { title: "Total task completed", value: "34" }
  ];

  return (
    <div className="flex min-h-screen w-full bg-gray-100 relative">
      {/* Sidebar - on top of everything */}
      {/* <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 z-30 ${
          isSidebarExpanded ? "w-64" : "w-16"
        }`}
      >
        <AdSideBare
          isExpanded={isSidebarExpanded}
          toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
        />
      </div> */}
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
        className={`flex flex-col flex-1 w-full transition-all duration-300 md:ml-12 ${
          isSidebarExpanded ? "ml-0" : "ml-0"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <AdHeader title="Analytics" />
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Stats Component */}
          <div className="w-full">
            <Stats />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                <p className="text-3xl font-bold mt-2 text-gray-800">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;



// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import Sidebar from "../../components/Dashboard/Sidebar";
// import Header from "../../components/Rdashboard/Header";
// import WelcomeSection from "../../components/Rdashboard/WelcomeSection";
// import ProgressCard from "../../components/Rdashboard/ProgressCard";
// import StatsCard from "../../components/Rdashboard/StatsCard";
// import ComplaintsSection from "../../components/Rdashboard/ComplaintsSection";
// import Chart from "../../components/Rdashboard/Chart";
// import ChatWidget from "../../components/Rdashboard/ChatWidget";
// import { complaints } from "../../components/data/complaints";

// export default function Dashboard() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [selectedComplaint, setSelectedComplaint] = useState(null);

//   const handleViewProgress = (complaint) => {
//     setSelectedComplaint(complaint);
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen w-full bg-white overflow-hidden">
//       {/* Sidebar - hidden on mobile unless toggled */}
//       <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block fixed md:relative z-50`}>
//         <Sidebar />
//       </div>

//       {/* Overlay for mobile menu */}
//       {mobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={() => setMobileMenuOpen(false)}
//         />
//       )}

//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
//         <div className="flex-1 ml-0 md:ml-14 p-4 md:p-6 overflow-auto">
//           <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
//             {/* Left Column - Welcome and Stats */}
//             <div className="w-full lg:w-1/2">
//               <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-6 lg:space-y-0">
//                 <div className="w-full lg:w-1/2">
//                   <WelcomeSection />
//                 </div>
//                 <div className="w-full lg:w-1/2 flex space-x-4 md:space-x-6">
//                   <StatsCard value="11" label="completed" subLabel="work" />
//                   <StatsCard value="4" label="in progress" subLabel="Work" />
//                 </div>
//               </div>

//               {/* Progress Card and Complaints */}
//               <div className="mt-6 space-y-6">
//                 {selectedComplaint ? (
//                   <ProgressCard
//                     title={selectedComplaint.title}
//                     subTitle={selectedComplaint.subTitle}
//                     progress={selectedComplaint.progress}
//                     icon={selectedComplaint.icon}
//                   />
//                 ) : (
//                   <ProgressCard
//                     title={complaints[0].title}
//                     subTitle={complaints[0].subTitle}
//                     progress={complaints[0].progress}
//                     icon={complaints[0].icon}
//                   />
//                 )}

//                 <ComplaintsSection complaints={complaints} onViewProgress={handleViewProgress} />
//               </div>
//             </div>

//             {/* Right Column - Stats (lg), Chart and Chat */}
//             <div className="w-full lg:w-1/2 space-y-6 hidden md:block">
//               <div>
//                 <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Work statistics</h2>
//                 <div className="flex border-b mb-4 md:mb-6 overflow-x-auto">
//                   <button className="pb-2 px-3 md:px-4 border-b-2 border-black font-bold text-sm md:text-base whitespace-nowrap">
//                     Working Hours
//                   </button>
//                   <button className="pb-2 px-3 md:px-4 text-gray-400 text-sm md:text-base whitespace-nowrap">
//                     My work
//                   </button>
//                   <div className="ml-auto">
//                     <button className="flex items-center bg-gray-100 px-2 py-1 md:px-3 md:py-1 rounded-md text-xs md:text-sm">
//                       Weekly <ChevronDown className="w-3 h-3 md:w-4 md:h-4 ml-1" />
//                     </button>
//                   </div>
//                 </div>
//                 <Chart />
//               </div>

//               <ChatWidget />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "../../components/Rdashboard/Sidebar";
import Header from "../../components/Rdashboard/Header";
import WelcomeSection from "../../components/Rdashboard/WelcomeSection";
import ProgressCard from "../../components/Rdashboard/ProgressCard";
import StatsCard from "../../components/Rdashboard/StatsCard";
import ComplaintsSection from "../../components/Rdashboard/ComplaintsSection";
import Chart from "../../components/Rdashboard/WorkStatisticsChart";
// import Chart from "../../components/Rdashboard/Chart";
// import ChatWidget from "../../components/Rdashboard/ChatWidget";
import { complaints } from "../../components/data/complaints";
import ContactWidget from "../../components/Rdashboard/ContactWidget";

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const handleViewProgress = (complaint) => {
    setSelectedComplaint(complaint);
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Sidebar - fixed width and properly positioned */}
      <div
        className={`fixed md:relative z-50 h-full ${
          mobileMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <Sidebar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden md:ml-16">
        <Header
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />

        <div className="flex-1 p-4 md:p-6 overflow-auto">
          {/* Top Section - Welcome and Stats */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-4 lg:space-y-0">
            {/* Welcome Section - takes 2/3 space on large screens */}
            <div className="w-full lg:w-2/3">
              <WelcomeSection />
            </div>

            {/* Stats Cards - takes 1/3 space on large screens */}
            {/* <div className="w-full lg:w-1/3 flex space-x-4">
              <StatsCard value="11" label="completed" subLabel="work" />
              <StatsCard value="4" label="in progress" subLabel="Work" />
            </div> */}
            <div className="w-full lg:w-1/3 flex space-x-2 sm:space-x-3 md:space-x-4">
              <StatsCard value="11" label="completed" subLabel="work" />
              <StatsCard value="4" label="in progress" subLabel="Work" />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row lg:space-x-6 mt-6 space-y-6 lg:space-y-0">
            {/* Left Column - Progress and Complaints */}
            <div className="w-full lg:w-2/3 space-y-6">
              {selectedComplaint ? (
                <ProgressCard
                  title={selectedComplaint.title}
                  subTitle={selectedComplaint.subTitle}
                  progress={selectedComplaint.progress}
                  icon={selectedComplaint.icon}
                />
              ) : (
                <ProgressCard
                  title={complaints[0].title}
                  subTitle={complaints[0].subTitle}
                  progress={complaints[0].progress}
                  icon={complaints[0].icon}
                />
              )}

              <ComplaintsSection
                complaints={complaints}
                onViewProgress={handleViewProgress}
              />
            </div>

            {/* Right Column - Chart and Chat (hidden on mobile) */}
            <div className="w-full lg:w-1/3 space-y-6 ">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Work statistics
                </h2>
              
                <Chart />
              {/* <ChatWidget /> */}
              </div>
              
              <ContactWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

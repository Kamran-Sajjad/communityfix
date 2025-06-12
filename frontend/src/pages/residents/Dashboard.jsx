


// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import Sidebar from "../../components/Rdashboard/Sidebar";
// import Header from "../../components/Rdashboard/Header";
// import WelcomeSection from "../../components/Rdashboard/WelcomeSection";
// import ProgressCard from "../../components/Rdashboard/ProgressCard";
// import StatsCard from "../../components/Rdashboard/StatsCard";
// import ComplaintsSection from "../../components/Rdashboard/ComplaintsSection";
// import Chart from "../../components/Rdashboard/WorkStatisticsChart";
// // import Chart from "../../components/Rdashboard/Chart";
// // import ChatWidget from "../../components/Rdashboard/ChatWidget";
// import { complaints } from "../../components/data/complaints";
// import ContactWidget from "../../components/Rdashboard/ContactWidget";

// export default function Dashboard() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [selectedComplaint, setSelectedComplaint] = useState(null);

//   const handleViewProgress = (complaint) => {
//     setSelectedComplaint(complaint);
//   };

//   return (
//     <div className="flex h-screen w-full bg-white overflow-hidden">
//       {/* Sidebar - fixed width and properly positioned */}
//       <div
//         className={`fixed md:relative z-50 h-full ${
//           mobileMenuOpen ? "block" : "hidden"
//         } md:block`}
//       >
//         <Sidebar
//           mobileMenuOpen={mobileMenuOpen}
//           setMobileMenuOpen={setMobileMenuOpen}
//           isExpanded={isExpanded}
//           setIsExpanded={setIsExpanded}
//         />
//       </div>

//       {/* Overlay for mobile menu */}
//       {mobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={() => setMobileMenuOpen(false)}
//         />
//       )}

//       {/* Main content area */}
//       <div className="flex-1 flex flex-col overflow-hidden md:ml-16">
//         <Header
//           setMobileMenuOpen={setMobileMenuOpen}
//           mobileMenuOpen={mobileMenuOpen}
//         />

//         <div className="flex-1 p-4 md:p-6 overflow-auto">
//           {/* Top Section - Welcome and Stats */}
//           <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-4 lg:space-y-0">
//             {/* Welcome Section - takes 2/3 space on large screens */}
//             <div className="w-full lg:w-2/3">
//               <WelcomeSection />
//             </div>

//             {/* Stats Cards - takes 1/3 space on large screens */}
//             {/* <div className="w-full lg:w-1/3 flex space-x-4">
//               <StatsCard value="11" label="completed" subLabel="work" />
//               <StatsCard value="4" label="in progress" subLabel="Work" />
//             </div> */}
//             <div className="w-full lg:w-1/3 flex space-x-2 sm:space-x-3 md:space-x-4">
//               <StatsCard value="11" label="completed" subLabel="work" />
//               <StatsCard value="4" label="in progress" subLabel="Work" />
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="flex flex-col lg:flex-row lg:space-x-6 mt-6 space-y-6 lg:space-y-0">
//             {/* Left Column - Progress and Complaints */}
//             <div className="w-full lg:w-2/3 space-y-6">
//               {selectedComplaint ? (
//                 <ProgressCard
//                   title={selectedComplaint.title}
//                   subTitle={selectedComplaint.subTitle}
//                   progress={selectedComplaint.progress}
//                   icon={selectedComplaint.icon}
//                 />
//               ) : (
//                 <ProgressCard
//                   title={complaints[0].title}
//                   subTitle={complaints[0].subTitle}
//                   progress={complaints[0].progress}
//                   icon={complaints[0].icon}
//                 />
//               )}

//               <ComplaintsSection
//                 complaints={complaints}
//                 onViewProgress={handleViewProgress}
//               />
//             </div>

//             {/* Right Column - Chart and Chat (hidden on mobile) */}
//             <div className="w-full lg:w-1/3 space-y-6 ">
//               <div>
//                 <h2 className="text-xl md:text-2xl font-bold mb-4">
//                   Work statistics
//                 </h2>
              
//                 <Chart />
//               {/* <ChatWidget /> */}
//               </div>
              
//               <ContactWidget />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






















































"use client";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { ChevronDown } from "lucide-react";
import Sidebar from "../../components/Rdashboard/Sidebar";
import Header from "../../components/Rdashboard/Header";
import WelcomeSection from "../../components/Rdashboard/WelcomeSection";
import ProgressCard from "../../components/Rdashboard/ProgressCard";
import StatsCard from "../../components/Rdashboard/StatsCard";
import ComplaintsSection from "../../components/Rdashboard/ComplaintsSection";
import Chart from "../../components/Rdashboard/WorkStatisticsChart";
import ContactWidget from "../../components/Rdashboard/ContactWidget";
import { complaints } from "../../components/data/complaints";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const handleViewProgress = (complaint) => {
    setSelectedComplaint(complaint);
  };

  // Extract first name from fullName
  const firstName = user?.fullName.split(' ')[0] || 'Resident';

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Sidebar */}
      <div className={`fixed md:relative z-50 h-full ${mobileMenuOpen ? "block" : "hidden"} md:block`}>
        <Sidebar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          user={user}
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
          user={user}
        />

        <div className="flex-1 p-4 md:p-6 overflow-auto">
          {/* Top Section - Welcome and Stats */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-4 lg:space-y-0">
            <div className="w-full lg:w-2/3">
              <WelcomeSection firstName={firstName} />
            </div>
            <div className="w-full lg:w-1/3 flex space-x-2 sm:space-x-3 md:space-x-4">
              <StatsCard value="11" label="completed" subLabel="work" />
              <StatsCard value="4" label="in progress" subLabel="Work" />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row lg:space-x-6 mt-6 space-y-6 lg:space-y-0">
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

            <div className="w-full lg:w-1/3 space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Work statistics
                </h2>
                <Chart />
              </div>
              <ContactWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
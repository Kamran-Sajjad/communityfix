


// "use client";
// import { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
// import { ChevronDown } from "lucide-react";
// import Sidebar from "../../components/Rdashboard/Sidebar";
// import Header from "../../components/Rdashboard/Header";
// import WelcomeSection from "../../components/Rdashboard/WelcomeSection";
// import ProgressCard from "../../components/Rdashboard/ProgressCard";
// import StatsCard from "../../components/Rdashboard/StatsCard";
// import ComplaintsSection from "../../components/Rdashboard/ComplaintsSection";
// import Chart from "../../components/Rdashboard/WorkStatisticsChart";
// import ContactWidget from "../../components/Rdashboard/ContactWidget";
// import axios from 'axios';

// export default function Dashboard() {
//   const { user } = useSelector((state) => state.auth);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [selectedComplaint, setSelectedComplaint] = useState(null);
//   const [complaints, setComplaints] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserIssues = async () => {
//       try {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         };
        
//         const response = await axios.get('/api/issues/myissues', config);
        
//         // Transform the API data to match your frontend structure
//         const transformedComplaints = response.data.issues.map(issue => ({
//           id: issue._id,
//           title: issue.title,
//           subTitle: issue.description.length>25 ? issue.description.slice(0,25)+ "...":issue.description,
//           // subTitle: issue.issueCategory,
//           icon: getIconForIssueType(issue.issueType),
//           time: calculateTimeSince(issue.createdAt),
//           count: issue.upvotes,
//           progress: calculateProgress(issue.status),
//           status: issue.status,
//           issueType: issue.issueType
//         }));
        
//         setComplaints(transformedComplaints);
//         setLoading(false);
//       } catch (err) {
//         setError(err.response?.data?.message || 'Failed to fetch issues');
//         setLoading(false);
//         console.error('Error fetching issues:', err);
//       }
//     };

//     if (user?.token) {
//       fetchUserIssues();
//     }
//   }, [user]);

//   const getIconForIssueType = (issueType) => {
//     const icons = {
//       societal: (
//         <span role="img" aria-label="Society" className="text-3xl md:text-4xl">
//           🏘️
//         </span>
//       ),
//       household: (
//         <span role="img" aria-label="Home" className="text-3xl md:text-4xl">
//           🏠
//         </span>
//       )
//     };
//     return icons[issueType] || (
//       <span role="img" aria-label="Issue" className="text-3xl md:text-4xl">
//         ❓
//       </span>
//     );
//   };

//   const calculateTimeSince = (createdAt) => {
//     const now = new Date();
//     const createdDate = new Date(createdAt);
//     const diffInHours = Math.floor((now - createdDate) / (1000 * 60 * 60));
    
//     if (diffInHours == 0) {
//       let min=diffInHours*60;
//       return `${min}m ago`;
//       // return `few mins ago`;
//     } 
//     else if (diffInHours < 24) {
//       return `${diffInHours}h ago`;
//     } else {
//       const diffInDays = Math.floor(diffInHours / 24);
//       return `${diffInDays}d ago`;
//     }
//     // if (diffInHours < 24) {
//     //   return `${diffInHours}h ago`;
//     // } else {
//     //   const diffInDays = Math.floor(diffInHours / 24);
//     //   return `${diffInDays}d ago`;
//     // }
//   };

//   const calculateProgress = (status) => {
//     switch (status) {
//       case 'pending':
//         return 20;
//       case 'in_progress':
//         return 50;
//       case 'resolved':
//         return 100;
//       default:
//         return 0;
//     }
//   };

//   const handleViewProgress = (complaint) => {
//     setSelectedComplaint(complaint);
//   };

//   // Calculate stats for the StatsCard components
//   const completedCount = complaints.filter(c => c.status === 'resolved').length;
//   const inProgressCount = complaints.filter(c => c.status === 'in_progress').length;

//   // Extract first name from fullName
//   const firstName = user?.fullName || 'Resident';
//   // const firstName = user?.fullName?.split(' ')[0] || 'Resident';

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }

//   if (error) {
//     return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
//   }

//   return (
//     <div className="flex h-screen w-full bg-white overflow-hidden">
//       {/* Sidebar */}
//       <div className={`fixed md:relative z-50 h-full ${mobileMenuOpen ? "block" : "hidden"} md:block`}>
//         <Sidebar
//           mobileMenuOpen={mobileMenuOpen}
//           setMobileMenuOpen={setMobileMenuOpen}
//           isExpanded={isExpanded}
//           setIsExpanded={setIsExpanded}
//           user={user}
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
//           user={user}
//         />

//         <div className="flex-1 p-4 md:p-6 overflow-auto">
//           {/* Top Section - Welcome and Stats */}
//           <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-4 lg:space-y-0">
//             <div className="w-full lg:w-2/3">
//               <WelcomeSection firstName={firstName} />
//             </div>
//             <div className="w-full lg:w-1/3 flex space-x-2 sm:space-x-3 md:space-x-4">
//               <StatsCard value={completedCount.toString()} label="Resolved" subLabel="Complaints" />
//               <StatsCard value={inProgressCount.toString()} label="in progress" subLabel="Complaints" />
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="flex flex-col lg:flex-row lg:space-x-6 mt-6 space-y-6 lg:space-y-0">
//             <div className="w-full lg:w-2/3 space-y-6">
//               {selectedComplaint ? (
//                 <ProgressCard
//                   title={selectedComplaint.title}
//                   subTitle={selectedComplaint.subTitle}
//                   progress={selectedComplaint.progress}
//                   icon={selectedComplaint.icon}
//                 />
//               ) : complaints.length > 0 ? (
//                 <ProgressCard
//                   title={complaints[0].title}
//                   subTitle={complaints[0].subTitle}
//                   progress={complaints[0].progress}
//                   icon={complaints[0].icon}
//                 />
//               ) : (
//                 <div className="bg-gray-100 rounded-lg p-6 text-center">
//                   No complaints found. Report an issue to see progress here.
//                 </div>
//               )}

//               <ComplaintsSection
//                 complaints={complaints}
//                 onViewProgress={handleViewProgress}
//               />
//             </div>

//             <div className="w-full lg:w-1/3 space-y-6">
//               <div>
//                 <h2 className="text-xl md:text-2xl font-bold mb-4">
//                   Work statistics
//                 </h2>
//                 <Chart />
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
import { useState, useEffect } from "react";
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
import axios from 'axios';

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserIssues = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        
        const response = await axios.get('/api/issues/myissues', config);
        
        const transformedComplaints = response.data.issues.map(issue => ({
          id: issue._id,
          title: issue.title,
          subTitle: issue.description.length > 25 ? issue.description.slice(0, 25) + "..." : issue.description,
          icon: issue.attachments && issue.attachments.length > 0
            ? issue.attachments
            : [getIconForIssueType(issue.issueType)],
          time: calculateTimeSince(issue.createdAt),
          count: issue.upvotes,
          progress: calculateProgress(issue.status),
          status: issue.status,
          issueType: issue.issueType
        }));
        
        
        setComplaints(transformedComplaints);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch issues');
        setLoading(false);
        console.error('Error fetching issues:', err);
      }
    };

    if (user?.token) {
      fetchUserIssues();
    }
  }, [user]);

  const getIconForIssueType = (issueType) => {
    const icons = {
      societal: (
        <span role="img" aria-label="Society" className="text-3xl md:text-4xl">
          🏘️
        </span>
      ),
      household: (
        <span role="img" aria-label="Home" className="text-3xl md:text-4xl">
          🏠
        </span>
      )
    };
    return icons[issueType] || (
      <span role="img" aria-label="Issue" className="text-3xl md:text-4xl">
        ❓
      </span>
    );
  };

  const calculateTimeSince = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffInHours = Math.floor((now - createdDate) / (1000 * 60 * 60));
    // const diffInHours = Math.ceil((now - createdDate) / (1000 * 60 * 60));
    
    if (diffInHours == 0) {
      let min=diffInHours*60;
      // return `${min}m ago`;
      return `few mins ago`;
    } 
    else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }

  };

  const calculateProgress = (status) => {
    switch (status) {
      case 'pending':
        return 20;
      case 'in_progress':
        return 50;
      case 'resolved':
        return 100;
      default:
        return 0;
    }
  };

  const handleViewProgress = (complaint) => {
    setSelectedComplaint(complaint);
  };

  // Calculate stats for the StatsCard components
  const completedCount = complaints.filter(c => c.status === 'resolved').length;
  // const inProgressCount = complaints.filter(c => c.status === 'in_progress').length;
  const inProgressCount = complaints.filter(c => c.status === 'pending').length;

  // Extract first name from fullName
  const firstName = user?.fullName || 'Resident';
  // const firstName = user?.fullName?.split(' ')[0] || 'Resident';

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

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
              <StatsCard value={completedCount.toString()} label="Resolved" subLabel="Complaints" />
              {/* <StatsCard value={inProgressCount.toString()} label="in progress" subLabel="Complaints" /> */}
              <StatsCard value={inProgressCount.toString()} label="Pending" subLabel="Complaints" />
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
                  // icon={selectedComplaint.attachments}
                />
              ) : complaints.length > 0 ? (
                <ProgressCard
                  title={complaints[0].title}
                  subTitle={complaints[0].subTitle}
                  progress={complaints[0].progress}
                  icon={complaints[0].icon}
                  
                />
              ) : (
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  No complaints found. Report an issue to see progress here.
                </div>
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
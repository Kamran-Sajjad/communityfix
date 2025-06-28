



// "use client";
// import { useState, useEffect, useCallback } from "react";
// import { useSelector } from 'react-redux';
// import { ChevronDown } from "lucide-react";
// import Sidebar from "../../components/Rdashboard/Sidebar";
// import Header from "../../components/Rdashboard/Header";
// import WelcomeSection from "../../components/Rdashboard/WelcomeSection";
// import ProgressCard from "../../components/Rdashboard/ProgressCard";
// import StatsCard from "../../components/Rdashboard/StatsCard";
// import ComplaintsSection from "../../components/Rdashboard/ComplaintsSection";
// import axios from 'axios';
// import ChatWindow from '../../components/Chat/ChatWindow';
// import { 
//   connectSocket, 
//   disconnectSocket, 
//   getSocket,
//   onConnect,
//   onDisconnect
// } from '../../utils/socket';
// import { toast } from 'react-toastify';

// export default function Dashboard() {
//   const { user } = useSelector((state) => state.auth);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [selectedComplaint, setSelectedComplaint] = useState(null);
//   const [complaints, setComplaints] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [socketConnected, setSocketConnected] = useState(false);

//   // Memoized calculation functions
//   const calculateProgress = useCallback((status) => {
//     switch (status) {
//       case 'pending': return 20;
//       case 'in_progress': return 50;
//       case 'completed': return 100;
//       default: return 0;
//     }
//   }, []);

//   const getStatusText = useCallback((status) => {
//     switch (status) {
//       case 'pending': return 'Pending';
//       case 'in_progress': return 'In Progress';
//       case 'completed': return 'Completed';
//       default: return status;
//     }
//   }, []);

//   // Socket connection management
//   useEffect(() => {
//     if (!user?._id) return;

  

//     connectSocket(user._id);
//     // onConnect(handleConnect);
//     // onDisconnect(handleDisconnect);

//     return () => {
//       disconnectSocket(true);
//       const socket = getSocket();
//       // socket?.off('connect', handleConnect);
//       // socket?.off('disconnect', handleDisconnect);
//     };
//   }, [user?._id]);

//   // Real-time updates listener
//   useEffect(() => {
//     const socket = getSocket();
//     if (!socket) return;

//     const handleIssueUpdate = (updatedIssue) => {
//       setComplaints(prev => 
//         prev.map(complaint => 
//           complaint.id === updatedIssue._id ? {
//             ...complaint,
//             progress: calculateProgress(updatedIssue.status),
//             status: updatedIssue.status,
//             updatedAt: updatedIssue.updatedAt
//           } : complaint
//         )
//       );

//       if (selectedComplaint?.id === updatedIssue._id) {
//         setSelectedComplaint(prev => ({
//           ...prev,
//           progress: calculateProgress(updatedIssue.status),
//           status: updatedIssue.status,
//           updatedAt: updatedIssue.updatedAt
//         }));
//       }

//       toast.success(`Status updated: ${updatedIssue.title} is now ${getStatusText(updatedIssue.status)}`);
//     };

//     socket.on('issueUpdated', handleIssueUpdate);

//     return () => {
//       socket.off('issueUpdated', handleIssueUpdate);
//     };
//   }, [selectedComplaint, calculateProgress, getStatusText]);

//   // Fetch user issues
//   useEffect(() => {
//     const fetchUserIssues = async () => {
//       try {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         };

//         const response = await axios.get('/api/issues/myissues', config);
        
//         const transformIssue = (issue) => ({
//           id: issue._id,
//           title: issue.title,
//           description: issue.description,
//           subTitle: issue.description.length > 25
//             ? `${issue.description.slice(0, 25)}...`
//             : issue.description,
//           icon: issue.attachments?.length
//             ? issue.attachments
//             : getIconForIssueType(issue.issueType),
//           time: calculateTimeSince(issue.createdAt),
//           count: issue.upvotes,
//           progress: calculateProgress(issue.status),
//           status: issue.status,
//           issueType: issue.issueType,
//           createdAt: issue.createdAt,
//           updatedAt: issue.updatedAt
//         });

//         setComplaints(response.data.issues.map(transformIssue));
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
//   }, [user, calculateProgress]);

//   // Helper functions
//   const getIconForIssueType = (issueType) => {
//     const icons = {
//       societal: <span role="img" aria-label="Society">🏘️</span>,
//       household: <span role="img" aria-label="Home">🏠</span>
//     };
//     return icons[issueType] || <span role="img" aria-label="Issue">❓</span>;
//   };

//   const calculateTimeSince = (dateString) => {
//     const now = new Date();
//     const date = new Date(dateString);
//     const diffInMs = now - date;
//     const diffInMins = Math.floor(diffInMs / (1000 * 60));
//     const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
//     const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

//     if (diffInMins < 1) return "Just now";
//     if (diffInMins < 60) return `${diffInMins}m ago`;
//     if (diffInHours < 24) return `${diffInHours}h ago`;
//     if (diffInDays === 1) return "Yesterday";
//     return `${diffInDays}d ago`;
//   };

//   const handleViewProgress = useCallback((complaint) => {
//     setSelectedComplaint(complaint);
//   }, []);

//   // Stats calculations
//   const completedCount = complaints.filter(c => c.status === 'completed').length;
//   const pendingCount = complaints.filter(c => c.status !== 'completed').length;
//   const firstName = user?.fullName?.split(' ')[0] || 'Resident';

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen text-red-500">
//         {error}
//       </div>
//     );
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
//           socketConnected={socketConnected}
//         />
//       </div>

//       {/* Overlay for mobile */}
//       {mobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={() => setMobileMenuOpen(false)}
//         />
//       )}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden md:ml-16">
//         <Header
//           setMobileMenuOpen={setMobileMenuOpen}
//           mobileMenuOpen={mobileMenuOpen}
//           user={user}
//           socketConnected={socketConnected}
//         />

//         <div className="flex-1 p-4 md:p-6 overflow-auto">
//           <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-4 lg:space-y-0">
//             <div className="w-full lg:w-2/3">
//               <WelcomeSection firstName={firstName} />
//             </div>
//             <div className="w-full lg:w-1/3 flex space-x-2 sm:space-x-3 md:space-x-4">
//               <StatsCard 
//                 value={completedCount.toString()} 
//                 label="Resolved" 
//                 subLabel="Complaints" 
//                 trend="up"
//               />
//               <StatsCard 
//                 value={pendingCount.toString()} 
//                 label="Pending" 
//                 subLabel="Complaints" 
//                 trend="down"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row lg:space-x-6 mt-6 space-y-6 lg:space-y-0">
//             <div className="w-full space-y-6">
//               {selectedComplaint ? (
//                 <ProgressCard {...selectedComplaint} />
//               ) : complaints.length > 0 ? (
//                 <ProgressCard {...complaints[0]} />
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
//           </div>
//         </div>
//       </div>
//       <ChatWindow userId={user?._id} />
//     </div>
//   );
// }











"use client";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from 'react-redux';
import { ChevronDown } from "lucide-react";
import Sidebar from "../../components/Rdashboard/Sidebar";
import Header from "../../components/Rdashboard/Header";
import WelcomeSection from "../../components/Rdashboard/WelcomeSection";
import ProgressCard from "../../components/Rdashboard/ProgressCard";
import StatsCard from "../../components/Rdashboard/StatsCard";
import ComplaintsSection from "../../components/Rdashboard/ComplaintsSection";
import axios from 'axios';
import ChatWindow from '../../components/Chat/ChatWindow';
import { 
  connectSocket, 
  disconnectSocket, 
  getSocket,
  onConnect,
  onDisconnect
} from '../../utils/socket';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);

  // Memoized calculation functions
  const calculateProgress = useCallback((status) => {
    switch (status) {
      case 'pending': return 20;
      case 'in_progress': return 50;
      case 'completed': return 100;
      default: return 0;
    }
  }, []);

  const getStatusText = useCallback((status) => {
    switch (status) {
      case 'pending': return 'Pending';
      case 'in_progress': return 'In Progress';
      case 'completed': return 'Completed';
      default: return status;
    }
  }, []);

  // Socket connection management
  useEffect(() => {
    if (!user?._id) return;

  

    connectSocket(user._id);
    // onConnect(handleConnect);
    // onDisconnect(handleDisconnect);

    return () => {
      disconnectSocket(true);
      const socket = getSocket();
      // socket?.off('connect', handleConnect);
      // socket?.off('disconnect', handleDisconnect);
    };
  }, [user?._id]);

  // Real-time updates listener
  useEffect(() => {
    const socket = getSocket();
    if (!socket) return;

    const handleIssueUpdate = (updatedIssue) => {
      setComplaints(prev => 
        prev.map(complaint => 
          complaint.id === updatedIssue._id ? {
            ...complaint,
            progress: calculateProgress(updatedIssue.status),
            status: updatedIssue.status,
            updatedAt: updatedIssue.updatedAt
          } : complaint
        )
      );

      if (selectedComplaint?.id === updatedIssue._id) {
        setSelectedComplaint(prev => ({
          ...prev,
          progress: calculateProgress(updatedIssue.status),
          status: updatedIssue.status,
          updatedAt: updatedIssue.updatedAt
        }));
      }

      toast.success(`Status updated: ${updatedIssue.title} is now ${getStatusText(updatedIssue.status)}`);
    };

    socket.on('issueUpdated', handleIssueUpdate);

    return () => {
      socket.off('issueUpdated', handleIssueUpdate);
    };
  }, [selectedComplaint, calculateProgress, getStatusText]);

  // Fetch user issues
  useEffect(() => {
    const fetchUserIssues = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        const response = await axios.get('/api/issues/myissues', config);
        
        const transformIssue = (issue) => ({
          id: issue._id,
          title: issue.title,
          description: issue.description,
          subTitle: issue.description.length > 25
            ? `${issue.description.slice(0, 25)}...`
            : issue.description,
          icon: issue.attachments?.length
            ? issue.attachments
            : getIconForIssueType(issue.issueType),
          time: calculateTimeSince(issue.createdAt),
          count: issue.upvotes,
          progress:issue.progress ?? calculateProgress(issue.status),
          // progress:issue.progress?? calculateProgress(issue.status),
          status: issue.status,
          issueType: issue.issueType,
          createdAt: issue.createdAt,
          updatedAt: issue.updatedAt
        });

        setComplaints(response.data.issues.map(transformIssue));
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
  }, [user, calculateProgress]);

  // Helper functions
  const getIconForIssueType = (issueType) => {
    const icons = {
      societal: <span role="img" aria-label="Society">🏘️</span>,
      household: <span role="img" aria-label="Home">🏠</span>
    };
    return icons[issueType] || <span role="img" aria-label="Issue">❓</span>;
  };

  const calculateTimeSince = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMs = now - date;
    const diffInMins = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMins < 1) return "Just now";
    if (diffInMins < 60) return `${diffInMins}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays === 1) return "Yesterday";
    return `${diffInDays}d ago`;
  };

  const handleViewProgress = useCallback((complaint) => {
    setSelectedComplaint(complaint);
  }, []);

  // Stats calculations
  const completedCount = complaints.filter(c => c.status === 'completed').length;
  const pendingCount = complaints.filter(c => c.status !== 'completed').length;
  const firstName = user?.fullName?.split(' ')[0] || 'Resident';

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
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
          socketConnected={socketConnected}
        />
      </div>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden md:ml-16">
        <Header
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
          user={user}
          socketConnected={socketConnected}
        />

        <div className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-4 lg:space-y-0">
            <div className="w-full lg:w-2/3">
              <WelcomeSection firstName={firstName} />
            </div>
            <div className="w-full lg:w-1/3 flex space-x-2 sm:space-x-3 md:space-x-4">
              <StatsCard 
                value={completedCount.toString()} 
                label="Resolved" 
                subLabel="Complaints" 
                trend="up"
              />
              <StatsCard 
                value={pendingCount.toString()} 
                label="Pending" 
                subLabel="Complaints" 
                trend="down"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-6 mt-6 space-y-6 lg:space-y-0">
            <div className="w-full space-y-6">
              {selectedComplaint ? (
                <ProgressCard {...selectedComplaint} />
              ) : complaints.length > 0 ? (
                <ProgressCard {...complaints[0]} />
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
          </div>
        </div>
      </div>
      <ChatWindow userId={user?._id} />
    </div>
  );
}
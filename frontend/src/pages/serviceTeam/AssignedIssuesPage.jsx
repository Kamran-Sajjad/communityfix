
// With local storage
// "use client";

// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import useIssues from "../../hooks/useIssues";
// import Button from "../../components/STdashboard/Button";
// import { Users } from "lucide-react";
// import { useState, useEffect } from "react";

// export default function AssignedIssuesPage() {
//   const { issues: initialIssues } = useIssues();
//   const [issues, setIssues] = useState([]);
//   const [filter, setFilter] = useState("all"); // "all", "pending", or "completed"

//   // Update issues state when initialIssues changes
//   useEffect(() => {
//     const localIssues = JSON.parse(localStorage.getItem('assignedIssues') || '[]'); // Fixed missing quote
//     const combinedIssues = [...initialIssues, ...localIssues];
//     setIssues(combinedIssues);
//   }, [initialIssues]);

//   // Filter issues based on the selected filter
//   const filteredIssues = issues.filter((issue) => {
//     if (filter === "all") return true;
//     return issue.status === filter;
//   });

//   // Handle updating an issue
//   const handleUpdateIssue = (updatedIssue) => {
//     const updatedIssues = issues.map((issue) =>
//       issue.id === updatedIssue.id ? updatedIssue : issue
//     );
//     setIssues(updatedIssues);
    
//     // Update localStorage if it's a locally added issue
//     const localIssues = updatedIssues.filter(issue => 
//       !initialIssues.some(initIssue => initIssue.id === issue.id)
//     );
//     localStorage.setItem('assignedIssues', JSON.stringify(localIssues));
//   };

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Welcome back Arslan" />
//         </div>
//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Assigned issues</h2>
//           </div>
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">Completed/Pending Issues</h3>
//               <div className="flex space-x-2">
//                 <Button 
//                   active={filter === "all"}
//                   onClick={() => setFilter("all")}
//                 >
//                   All
//                 </Button>
//                 <Button 
//                   active={filter === "pending"}
//                   onClick={() => setFilter("pending")}
//                 >
//                   Pending
//                 </Button>
//                 <Button 
//                   active={filter === "completed"}
//                   onClick={() => setFilter("completed")}
//                 >
//                   Completed
//                 </Button>
//               </div>
//             </div>
//             <IssueTable 
//               issues={filteredIssues} 
//               onUpdateIssue={handleUpdateIssue} 
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }














// // without local storage

// "use client";

// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import useIssues from "../../hooks/useIssues";
// import Button from "../../components/STdashboard/Button";
// import { Users } from "lucide-react";
// import { useState, useEffect } from "react";

// export default function AssignedIssuesPage() {
//   // Load only from the useIssues hook (no localStorage)
//   const { issues: initialIssues } = useIssues();
//   const [issues, setIssues] = useState([]);
//   const [filter, setFilter] = useState("all");

//   // Initialize with only the API data
//   useEffect(() => {
//     setIssues(initialIssues);
//   }, [initialIssues]);

//   const filteredIssues = issues.filter((issue) => {
//     if (filter === "all") return true;
//     return issue.status === filter;
//   });

//   const handleUpdateIssue = (updatedIssue) => {
//     setIssues(prevIssues => 
//       prevIssues.map(issue => 
//         issue.id === updatedIssue.id ? updatedIssue : issue
//       )
//     );
//     // No localStorage persistence
//   };

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Welcome back Arslan" />
//         </div>
//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Assigned issues</h2>
//           </div>
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">Completed/Pending Issues</h3>
//               <div className="flex space-x-2">
//                 <Button 
//                   active={filter === "all"}
//                   onClick={() => setFilter("all")}
//                 >
//                   All
//                 </Button>
//                 <Button 
//                   active={filter === "pending"}
//                   onClick={() => setFilter("pending")}
//                 >
//                   Pending
//                 </Button>
//                 <Button 
//                   active={filter === "completed"}
//                   onClick={() => setFilter("completed")}
//                 >
//                   Completed
//                 </Button>
//               </div>
//             </div>
//             <IssueTable 
//               issues={filteredIssues} 
//               onUpdateIssue={handleUpdateIssue} 
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




















// "use client";

// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import Button from "../../components/STdashboard/Button";
// import { Users } from "lucide-react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export default function AssignedIssuesPage() {
//   const [issues, setIssues] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);

//   // Fetch only issues accepted by service team
//   useEffect(() => {
//     const fetchAcceptedIssues = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("/api/issues/service/accepted", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setIssues(response.data.issues);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching accepted issues:", error);
//         toast.error("Failed to load issues");
//         setLoading(false);
//       }
//     };

//     fetchAcceptedIssues();
//   }, []);

//   const filteredIssues = issues.filter((issue) => {
//     if (filter === "all") return true;
//     return issue.status === filter;
//   });

//   const handleUpdateIssue = (updatedIssue) => {
//     setIssues((prevIssues) =>
//       prevIssues.map((issue) =>
//         issue.id === updatedIssue.id ? updatedIssue : issue
//       )
//     );
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Welcome back Arslan" />
//         </div>
//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Assigned issues</h2>
//           </div>
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">Completed/Pending Issues</h3>
//               <div className="flex space-x-2">
//                 <Button
//                   active={filter === "all"}
//                   onClick={() => setFilter("all")}
//                 >
//                   All
//                 </Button>
//                 <Button
//                   active={filter === "pending"}
//                   onClick={() => setFilter("pending")}
//                 >
//                   Pending
//                 </Button>
//                 <Button
//                   active={filter === "completed"}
//                   onClick={() => setFilter("completed")}
//                 >
//                   Completed
//                 </Button>
//               </div>
//             </div>
//             <IssueTable
//               issues={filteredIssues}
//               onUpdateIssue={handleUpdateIssue}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }















// "use client";

// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import Button from "../../components/STdashboard/Button";
// import { Users } from "lucide-react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export default function AssignedIssuesPage() {
//   const [issues, setIssues] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);

//   // Fetch only issues accepted by service team
//   useEffect(() => {
//     const fetchAcceptedIssues = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("/api/issues/service/accepted", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
        
//         // Transform data to include title and proper status
//         const formattedIssues = response.data.issues.map(issue => ({
//           ...issue,
//           status: issue.status === 'in_progress' ? 'pending' : issue.status
//         }));
        
//         setIssues(formattedIssues);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching accepted issues:", error);
//         toast.error("Failed to load issues");
//         setLoading(false);
//       }
//     };

//     fetchAcceptedIssues();
//   }, []);

//   const filteredIssues = issues.filter((issue) => {
//     if (filter === "all") return true;
//     return issue.status === filter;
//   });

//   const handleUpdateIssue = (updatedIssue) => {
//     setIssues((prevIssues) =>
//       prevIssues.map((issue) =>
//         issue.id === updatedIssue.id ? updatedIssue : issue
//       )
//     );
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Welcome back Arslan" />
//         </div>
//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Assigned issues</h2>
//           </div>
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">Completed/Pending Issues</h3>
//               <div className="flex space-x-2">
//                 <Button
//                   active={filter === "all"}
//                   onClick={() => setFilter("all")}
//                 >
//                   All
//                 </Button>
//                 <Button
//                   active={filter === "pending"}
//                   onClick={() => setFilter("pending")}
//                 >
//                   Pending
//                 </Button>
//                 <Button
//                   active={filter === "completed"}
//                   onClick={() => setFilter("completed")}
//                 >
//                   Completed
//                 </Button>
//               </div>
//             </div>
//             <IssueTable
//               issues={filteredIssues}
//               onUpdateIssue={handleUpdateIssue}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }














// "use client";

// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import Button from "../../components/STdashboard/Button";
// import { Users } from "lucide-react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export default function AssignedIssuesPage() {
//   const [issues, setIssues] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAcceptedIssues = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("/api/issues/service/accepted", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setIssues(response.data.issues);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching accepted issues:", error);
//         toast.error("Failed to load issues");
//         setLoading(false);
//       }
//     };
//     fetchAcceptedIssues();
//   }, []);

//   const filteredIssues = issues.filter((issue) => {
//     if (filter === "all") return true;
//     return issue.status === filter;
//   });

//   const handleUpdateIssue = async (updatedIssue) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.put(
//         `/api/issues/${updatedIssue.id}/status`,
//         { status: updatedIssue.status },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setIssues(prevIssues =>
//         prevIssues.map(issue =>
//           issue.id === updatedIssue.id ? response.data.issue : issue
//         )
//       );
//       toast.success("Issue status updated successfully");
//     } catch (error) {
//       console.error("Error updating issue:", error);
//       toast.error("Failed to update issue status");
//     }
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Welcome back" />
//         </div>
//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Assigned issues</h2>
//           </div>
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">Issues</h3>
//               <div className="flex space-x-2">
//                 <Button active={filter === "all"} onClick={() => setFilter("all")}>
//                   All
//                 </Button>
//                 <Button active={filter === "pending"} onClick={() => setFilter("pending")}>
//                   Pending
//                 </Button>
//                 <Button active={filter === "completed"} onClick={() => setFilter("completed")}>
//                   Completed
//                 </Button>
//               </div>
//             </div>
//             <IssueTable issues={filteredIssues} onUpdateIssue={handleUpdateIssue} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
























// "use client";

// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import Button from "../../components/STdashboard/Button";
// import { Users } from "lucide-react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export default function AssignedIssuesPage() {
//   const [issues, setIssues] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAcceptedIssues = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("/api/issues/service/accepted", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setIssues(response.data.issues);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching accepted issues:", error);
//         toast.error("Failed to load issues");
//         setLoading(false);
//       }
//     };
//     fetchAcceptedIssues();
//   }, []);

//   const filteredIssues = issues.filter((issue) => {
//     if (filter === "all") return true;
//     return issue.status === filter;
//   });

//   const handleUpdateIssue = async (updatedIssue) => {
//     try {
//       const token = localStorage.getItem("token");
      
//       // Make sure we have a valid ID
//       if (!updatedIssue._id && !updatedIssue.id) {
//         throw new Error("Invalid issue ID");
//       }
      
//       const issueId = updatedIssue._id || updatedIssue.id;
      
//       const response = await axios.put(
//         `/api/issues/${issueId}/status`,
//         { 
//           status: updatedIssue.status,
//           progress: updatedIssue.progress,
//           notes: updatedIssue.notes,
//           images: updatedIssue.images
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setIssues(prevIssues =>
//         prevIssues.map(issue =>
//           (issue._id === issueId || issue.id === issueId) ? response.data.issue : issue
//         )
//       );
//       toast.success("Issue status updated successfully");
//     } catch (error) {
//       console.error("Error updating issue:", error);
//       toast.error(error.response?.data?.message || "Failed to update issue status");
//     }
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Welcome back" />
//         </div>
//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Assigned issues</h2>
//           </div>
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">Issues</h3>
//               <div className="flex space-x-2">
//                 <Button active={filter === "all"} onClick={() => setFilter("all")}>
//                   All
//                 </Button>
//                 <Button active={filter === "pending"} onClick={() => setFilter("pending")}>
//                   Pending
//                 </Button>
//                 <Button active={filter === "completed"} onClick={() => setFilter("completed")}>
//                   Completed
//                 </Button>
//               </div>
//             </div>
//             <IssueTable issues={filteredIssues} onUpdateIssue={handleUpdateIssue} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




























// "use client";

// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import Button from "../../components/STdashboard/Button";
// import { Users } from "lucide-react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export default function AssignedIssuesPage() {
//   const [issues, setIssues] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAcceptedIssues = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("/api/issues/service/accepted", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setIssues(response.data.issues);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching accepted issues:", error);
//         toast.error("Failed to load issues");
//         setLoading(false);
//       }
//     };
//     fetchAcceptedIssues();
//   }, []);

//   const filteredIssues = issues.filter((issue) => {
//     if (filter === "all") return true;
//     if (filter === "pending") return issue.status !== "completed";
//     if (filter === "completed") return issue.status === "completed";
//     return true;
//   });

//   const handleUpdateIssue = async (updatedIssue) => {
//     try {
//       const token = localStorage.getItem("token");
//       const issueId = updatedIssue._id || updatedIssue.id;
      
//       const response = await axios.put(
//         `/api/issues/${issueId}/status`,
//         { 
//           status: updatedIssue.status,
//           progress: updatedIssue.progress,
//           notes: updatedIssue.notes,
//           images: updatedIssue.images
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setIssues(prevIssues =>
//         prevIssues.map(issue =>
//           (issue._id === issueId || issue.id === issueId) ? response.data.issue : issue
//         )
//       );
//       toast.success("Issue status updated successfully");
//     } catch (error) {
//       console.error("Error updating issue:", error);
//       toast.error(error.response?.data?.message || "Failed to update issue status");
//     }
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Welcome back" />
//         </div>
//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Assigned issues</h2>
//           </div>
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-bold">Issues</h3>
//               <div className="flex space-x-2">
//                 <Button active={filter === "all"} onClick={() => setFilter("all")}>
//                   All
//                 </Button>
//                 <Button active={filter === "pending"} onClick={() => setFilter("pending")}>
//                   Pending
//                 </Button>
//                 <Button active={filter === "completed"} onClick={() => setFilter("completed")}>
//                   Completed
//                 </Button>
//               </div>
//             </div>
//             <IssueTable issues={filteredIssues} onUpdateIssue={handleUpdateIssue} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



























// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Users } from "lucide-react";
// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import Button from "../../components/STdashboard/Button";
// // import LoadingSpinner from "../../components/LoadingSpinner";

// export default function AssignedIssuesPage() {
//   const [issues, setIssues] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);
//   const [updatingId, setUpdatingId] = useState(null);

//   useEffect(() => {
//     const fetchAcceptedIssues = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           throw new Error("No authentication token found");
//         }

//         const response = await axios.get("/api/issues/service/accepted", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           timeout: 10000 // 10 second timeout
//         });

//         if (!response.data?.issues) {
//           throw new Error("Invalid response format");
//         }

//         setIssues(response.data.issues);
//       } catch (error) {
//         console.error("Error fetching accepted issues:", error);
//         toast.error(error.response?.data?.message || "Failed to load issues");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAcceptedIssues();
//   }, []);

//   const filteredIssues = issues.filter((issue) => {
//     if (filter === "all") return true;
//     if (filter === "pending") return issue.status !== "completed";
//     if (filter === "completed") return issue.status === "completed";
//     return false;
//   });

//   const handleUpdateIssue = async (updatedIssue) => {
//     const issueId = updatedIssue._id || updatedIssue.id;
//     if (!issueId) {
//       toast.error("Invalid issue ID");
//       return;
//     }

//     setUpdatingId(issueId);
    
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }

//       // Validate status
//       const validStatuses = ["pending", "in_progress", "completed"];
//       if (!validStatuses.includes(updatedIssue.status)) {
//         throw new Error("Invalid status value");
//       }

//       // Validate progress
//       if (updatedIssue.progress && 
//           (updatedIssue.progress < 0 || updatedIssue.progress > 100)) {
//         throw new Error("Progress must be between 0-100");
//       }

//       const response = await axios.put(
//         `/api/issues/${issueId}/status`,
//         { 
//           status: updatedIssue.status,
//           progress: updatedIssue.progress,
//           notes: updatedIssue.notes,
//           images: updatedIssue.images
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json"
//           },
//           timeout: 10000
//         }
//       );

//       if (!response.data?.issue) {
//         throw new Error("Invalid response format");
//       }

//       setIssues(prevIssues =>
//         prevIssues.map(issue =>
//           (issue._id === issueId || issue.id === issueId) ? response.data.issue : issue
//         )
//       );

//       toast.success("Issue status updated successfully");
//     } catch (error) {
//       console.error("Error updating issue:", error);
//       const errorMessage = error.response?.data?.message || 
//                          error.message || 
//                          "Failed to update issue status";
//       toast.error(errorMessage);
//     } finally {
//       setUpdatingId(null);
//     }
//   };

//   // if (loading) {
//   //   return (
//   //     <div className="flex justify-center items-center h-screen">
//   //       <LoadingSpinner size="lg" />
//   //     </div>
//   //   );
//   // }

//   return (
//     <div className="flex h-screen w-full bg-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Assigned Issues" />
//         </div>
//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Your Assigned Issues</h2>
//           </div>
          
//           <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//               <h3 className="text-lg font-bold">Issue Management</h3>
//               <div className="flex flex-wrap gap-2">
//                 <Button 
//                   active={filter === "all"} 
//                   onClick={() => setFilter("all")}
//                   disabled={loading}
//                 >
//                   All ({issues.length})
//                 </Button>
//                 <Button 
//                   active={filter === "pending"} 
//                   onClick={() => setFilter("pending")}
//                   disabled={loading}
//                 >
//                   Pending ({issues.filter(i => i.status !== "completed").length})
//                 </Button>
//                 <Button 
//                   active={filter === "completed"} 
//                   onClick={() => setFilter("completed")}
//                   disabled={loading}
//                 >
//                   Completed ({issues.filter(i => i.status === "completed").length})
//                 </Button>
//               </div>
//             </div>
            
//             <IssueTable 
//               issues={filteredIssues} 
//               onUpdateIssue={handleUpdateIssue}
//               updatingId={updatingId}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




























// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Users } from "lucide-react";
// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import IssueTable from "../../components/STdashboard/IssueTable";
// import Button from "../../components/STdashboard/Button";

// export default function AssignedIssuesPage() {
//   const [issues, setIssues] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);
//   const [updatingId, setUpdatingId] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAcceptedIssues = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) throw new Error("No authentication token found");

//         const response = await axios.get("/api/issues/service/accepted", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!response.data?.issues) throw new Error("Invalid response format");

//         setIssues(response.data.issues);
//         setError(null);
//       } catch (err) {
//         console.error("Error fetching issues:", err);
//         setError(err.response?.data?.message || "Failed to load issues");
//         toast.error(err.response?.data?.message || "Failed to load issues");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAcceptedIssues();
//   }, []);

//   const filteredIssues = issues.filter((issue) => {
//     if (filter === "all") return true;
//     if (filter === "pending") return issue.status !== "completed";
//     if (filter === "completed") return issue.status === "completed";
//     return false;
//   });

//   const handleUpdateIssue = async (updatedIssue) => {
//     const issueId = updatedIssue._id;
//     if (!issueId) return toast.error("Invalid issue ID");

//     setUpdatingId(issueId);

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) throw new Error("No authentication token found");

//       if (!updatedIssue.status) throw new Error("Status is required");

//       const validStatuses = ["pending", "in_progress", "completed"];
//       if (!validStatuses.includes(updatedIssue.status))
//         throw new Error("Invalid status");

//       const payload = {
//         status: updatedIssue.status,
//         progress: updatedIssue.progress,
//         notes: updatedIssue.notes || "",
//         images: updatedIssue.images || [],
//       };

//       const response = await axios.put(`/api/issues/${issueId}/status`, payload, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.data?.issue) throw new Error("Invalid response");

//       setIssues((prev) =>
//         prev.map((i) => (i._id === issueId ? response.data.issue : i))
//       );

//       toast.success("Status updated");
//     } catch (error) {
//       console.error("Update error:", error);
//       const msg = error.response?.data?.message || error.message || "Update failed";
//       toast.error(msg);
//     } finally {
//       setUpdatingId(null);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-red-500 text-lg">{error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen w-full bg-white overflow-hidden">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header title="Assigned Issues" />
//         <main className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <Users className="w-6 h-6 mr-2 text-blue-600" />
//             <h2 className="text-xl font-bold text-gray-800">Your Assigned Issues</h2>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//               <h3 className="text-lg font-bold text-gray-700">Issue Management</h3>
//               <div className="flex flex-wrap gap-2">
//                 <Button active={filter === "all"} onClick={() => setFilter("all")}>
//                   All ({issues.length})
//                 </Button>
//                 <Button
//                   active={filter === "pending"}
//                   onClick={() => setFilter("pending")}
//                 >
//                   Pending ({issues.filter((i) => i.status !== "completed").length})
//                 </Button>
//                 <Button
//                   active={filter === "completed"}
//                   onClick={() => setFilter("completed")}
//                 >
//                   Completed ({issues.filter((i) => i.status === "completed").length})
//                 </Button>
//               </div>
//             </div>

//             {filteredIssues.length === 0 ? (
//               <div className="text-center py-8 text-gray-500">
//                 No issues found matching your filters
//               </div>
//             ) : (
//               <IssueTable
//                 issues={filteredIssues}
//                 onUpdateIssue={handleUpdateIssue}
//                 updatingId={updatingId}
//               />
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


















"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // ✅ NEW
import axios from "axios";
import { toast } from "react-toastify";
import { Users } from "lucide-react";
import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import IssueTable from "../../components/STdashboard/IssueTable";
import Button from "../../components/STdashboard/Button";

export default function AssignedIssuesPage() {
  const [issues, setIssues] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [error, setError] = useState(null);

  const { user } = useSelector((state) => state.auth); // ✅ NEW
  const firstName = user?.fullName?.split(" ")[0] || "User"; // ✅ NEW

  useEffect(() => {
    const fetchAcceptedIssues = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No authentication token found");

        const response = await axios.get("/api/issues/service/accepted", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.data?.issues) throw new Error("Invalid response format");

        setIssues(response.data.issues);
        setError(null);
      } catch (err) {
        console.error("Error fetching issues:", err);
        setError(err.response?.data?.message || "Failed to load issues");
        toast.error(err.response?.data?.message || "Failed to load issues");
      } finally {
        setLoading(false);
      }
    };

    fetchAcceptedIssues();
  }, []);

  const filteredIssues = issues.filter((issue) => {
    if (filter === "all") return true;
    if (filter === "pending") return issue.status !== "completed";
    if (filter === "completed") return issue.status === "completed";
    return false;
  });

  const handleUpdateIssue = async (updatedIssue) => {
    const issueId = updatedIssue._id;
    if (!issueId) return toast.error("Invalid issue ID");

    setUpdatingId(issueId);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");

      if (!updatedIssue.status) throw new Error("Status is required");

      const validStatuses = ["pending", "in_progress", "completed"];
      if (!validStatuses.includes(updatedIssue.status))
        throw new Error("Invalid status");

      const payload = {
        status: updatedIssue.status,
        progress: updatedIssue.progress,
        notes: updatedIssue.notes || "",
        images: updatedIssue.images || [],
      };

      const response = await axios.put(`/api/issues/${issueId}/status`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.data?.issue) throw new Error("Invalid response");

      setIssues((prev) =>
        prev.map((i) => (i._id === issueId ? response.data.issue : i))
      );

      toast.success("Status updated");
    } catch (error) {
      console.error("Update error:", error);
      const msg = error.response?.data?.message || error.message || "Update failed";
      toast.error(msg);
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Assigned Issues" firstName={firstName} /> {/* ✅ UPDATED */}
        <main className="flex-1 lg:ml-[250px] p-6 overflow-auto">
          <div className="flex items-center mb-8">
            <Users className="w-6 h-6 mr-2 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-800">Your Assigned Issues</h2>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h3 className="text-lg font-bold text-gray-700">Issue Management</h3>
              <div className="flex flex-wrap gap-2">
                <Button active={filter === "all"} onClick={() => setFilter("all")}>
                  All ({issues.length})
                </Button>
                <Button
                  active={filter === "pending"}
                  onClick={() => setFilter("pending")}
                >
                  Pending ({issues.filter((i) => i.status !== "completed").length})
                </Button>
                <Button
                  active={filter === "completed"}
                  onClick={() => setFilter("completed")}
                >
                  Completed ({issues.filter((i) => i.status === "completed").length})
                </Button>
              </div>
            </div>

            {filteredIssues.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No issues found matching your filters
              </div>
            ) : (
              <IssueTable
                issues={filteredIssues}
                onUpdateIssue={handleUpdateIssue}
                updatingId={updatingId}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

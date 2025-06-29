

// // /residents/ReviewsAndComments



// import { useState, useEffect } from "react";
// import Sidebar from "../../components/Rdashboard/Sidebar";
// import Header from "../../components/Rdashboard/Header";
// import PageHeader from "../../components/Rdashboard/PageHeader";
// import IssueCard from "../../components/Rdashboard/IssueCard";
// import useMobileMenu from "../../hooks/useMobileMenu";
// // import { issues } from "../../components/data/issues";
// import axios from "axios";


// export default function ListedIssuesPage() {
//   const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [issues, setIssues] = useState([]);
//   const [filteredIssues, setFilteredIssues] = useState([]);
//   const [filterStatus, setFilterStatus] = useState('All Issues');

//   useEffect(() => {
//     const fetchFilteredIssues = async () => {
//       try {
//         let endpoint = "http://localhost:5000/api/issues/list";
//         if (filterStatus !== "All Issues") {
//           endpoint = `http://localhost:5000/api/issues/status/${filterStatus.toLowerCase().replace(" ", "_")}`;
//         }

//         const res = await axios.get(endpoint, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         setFilteredIssues(res.data.issues);
//       } catch (error) {
//         console.error("Error fetching filtered issues", error);
//       }
//     };

//     fetchFilteredIssues();
//   }, [filterStatus]);
//   useEffect(() => {
//     if (filterStatus === 'All Issues') {
//       setFilteredIssues(issues);
//     } else {
//       setFilteredIssues(issues.filter(issue => issue.status === filterStatus));
//     }
//   }, [filterStatus, issues]);

//   // useEffect(() => {
//   //   const fetchIssues = async () => {
//   //     try {
//   //       const res = await axios.get("http://localhost:5000/api/issues/list", {
//   //         headers: {
//   //           Authorization: `Bearer ${localStorage.getItem("token")}`
//   //         }
//   //       });
//   //       setIssues(res.data.issues);
//   //       setFilteredIssues(res.data.issues);
//   //     } catch (error) {
//   //       console.error("Error fetching issues", error);
//   //     }
//   //   };

//   //   fetchIssues();
//   // }, []);
//   // useEffect(() => {
//   //   if (filterStatus === 'All Issues') {
//   //     setFilteredIssues(issues);
//   //   } else {
//   //     setFilteredIssues(issues.filter(issue => issue.status === filterStatus));
//   //   }
//   // }, [filterStatus, issues]);


//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <Sidebar
//         mobileMenuOpen={mobileMenuOpen}
//         setMobileMenuOpen={setMobileMenuOpen}
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//       />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <Header
//           setMobileMenuOpen={setMobileMenuOpen}
//           mobileMenuOpen={mobileMenuOpen}
//         />

//         {/* Page Content */}
//         <main className="flex-1 overflow-y-auto md:ml-14">
//           <PageHeader />

//           <div className="p-4 md:p-6 space-y-6 ">
//             {/* Filters/Search (can be expanded later) */}
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm text-gray-500">
//                 Showing {filteredIssues.length} issues
//               </div>
//               <div>
//                 {/* Placeholder for filter dropdown */}
//                 <select className="border border-gray-300 rounded-md px-3 py-1 text-sm" onChange={(e) => setFilterStatus(e.target.value)}
//                   value={filterStatus}>
//                   <option value="All Issues">All Issues</option>
//                   <option value="pending">Pending</option>
//                   <option value="in_progress">In Progress</option>
//                   <option value="resolved">Resolved</option>
//                   <option value="closed">Closed</option>
//                   {/* <option>All Issues</option>
//                   <option>Pending</option>
//                   <option>In Progress</option>
//                   <option>Resolved</option> */}
//                 </select>
//               </div>
//             </div>

//             {/* Issues List */}
//             <div className="space-y-4">
//               {filteredIssues.map((issue) => (
//                 <IssueCard
//                   key={issue._id}
//                   issue={issue}
//                 />
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }














// // /residents/ReviewsAndComments

// import { useState, useEffect } from "react";
// import Sidebar from "../../components/Rdashboard/Sidebar";
// import Header from "../../components/Rdashboard/Header";
// import PageHeader from "../../components/Rdashboard/PageHeader";
// import IssueCard from "../../components/Rdashboard/IssueCard";
// import useMobileMenu from "../../hooks/useMobileMenu";
// // import { issues } from "../../components/data/issues";
// import axios from "axios";


// export default function ListedIssuesPage() {
//   const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [issues, setIssues] = useState([]);
//   const [filteredIssues, setFilteredIssues] = useState([]);
//   const [filterStatus, setFilterStatus] = useState('All Issues');

//   useEffect(() => {
//     const fetchFilteredIssues = async () => {
//       try {
//         let endpoint = "http://localhost:5000/api/issues/list";
//         if (filterStatus !== "All Issues") {
//           endpoint = `http://localhost:5000/api/issues/status/${filterStatus.toLowerCase().replace(" ", "_")}`;
//         }

//         const res = await axios.get(endpoint, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         setFilteredIssues(res.data.issues);
//       } catch (error) {
//         console.error("Error fetching filtered issues", error);
//       }
//     };

//     fetchFilteredIssues();
//   }, [filterStatus]);
//   useEffect(() => {
//     if (filterStatus === 'All Issues') {
//       setFilteredIssues(issues);
//     } else {
//       setFilteredIssues(issues.filter(issue => issue.status === filterStatus));
//     }
//   }, [filterStatus, issues]);

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <Sidebar
//         mobileMenuOpen={mobileMenuOpen}
//         setMobileMenuOpen={setMobileMenuOpen}
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//       />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <Header
//           setMobileMenuOpen={setMobileMenuOpen}
//           mobileMenuOpen={mobileMenuOpen}
//         />

//         {/* Page Content */}
//         <main className="flex-1 overflow-y-auto md:ml-14">
//           <PageHeader />

//           <div className="p-4 md:p-6 space-y-6 ">
//             {/* Filters/Search (can be expanded later) */}
//             <div className="flex justify-between items-center mb-4">
//               <div className="text-sm text-gray-500">
//                 Showing {filteredIssues.length} issues
//               </div>
//               <div>
//                 {/* Placeholder for filter dropdown */}
//                 <select className="border border-gray-300 rounded-md px-3 py-1 text-sm" onChange={(e) => setFilterStatus(e.target.value)}
//                   value={filterStatus}>
//                   <option value="All Issues">All Issues</option>
//                   <option value="pending">Pending</option>
//                   <option value="in_progress">In Progress</option>
//                   <option value="resolved">Resolved</option>
//                   <option value="closed">Closed</option>
//                   {/* <option>All Issues</option>
//                   <option>Pending</option>
//                   <option>In Progress</option>
//                   <option>Resolved</option> */}
//                 </select>
//               </div>
//             </div>

//             {/* Issues List */}
//             <div className="space-y-4">
//               {filteredIssues.map((issue) => (
//                 <IssueCard
//                   key={issue._id}
//                   issue={issue}
//                 />
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }











import { useState, useEffect } from "react";
import Sidebar from "../../components/Rdashboard/Sidebar";
import Header from "../../components/Rdashboard/Header";
import PageHeader from "../../components/Rdashboard/PageHeader";
import IssueCard from "../../components/Rdashboard/IssueCard";
import useMobileMenu from "../../hooks/useMobileMenu";
import axios from "axios";

export default function ListedIssuesPage() {
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  const [isExpanded, setIsExpanded] = useState(false);
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All Issues');

  useEffect(() => {
    const fetchFilteredIssues = async () => {
      try {
        // First fetch all societal issues
        const societalRes = await axios.get("http://localhost:5000/api/issues/list?issueType=societal", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        
        // Then apply status filter if needed
        let filtered = societalRes.data.issues;
        if (filterStatus !== "All Issues") {
          filtered = filtered.filter(issue => issue.status === filterStatus.toLowerCase().replace(" ", "_"));
        }

        setFilteredIssues(filtered);
      } catch (error) {
        console.error("Error fetching filtered issues", error);
      }
    };

    fetchFilteredIssues();
  }, [filterStatus]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto md:ml-14">
          <PageHeader />

          <div className="p-4 md:p-6 space-y-6 ">
            {/* Filters/Search (can be expanded later) */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-500">
                Showing {filteredIssues.length} societal issues
              </div>
              <div>
                <select 
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm" 
                  onChange={(e) => setFilterStatus(e.target.value)}
                  value={filterStatus}
                >
                  <option value="All Issues">All Issues</option>
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>

            {/* Issues List */}
            <div className="space-y-4">
              {filteredIssues.map((issue) => (
                <IssueCard
                  key={issue._id}
                  issue={issue}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
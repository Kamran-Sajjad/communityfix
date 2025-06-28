




// import { useState } from "react";
// import ComplaintCard from "./ComplaintCard";

// export default function ComplaintsSection({ complaints, onViewProgress }) {
//   const [activeTab, setActiveTab] = useState("all");
//   const [page, setPage] = useState(0);

//   // Filter based on tab
//   const filtered = complaints.filter(complaint => {
//     if (activeTab === "Societal") return complaint.issueType === "societal";
//     if (activeTab === "HouseHold") return complaint.issueType === "household";
//     return true;
//   });

//   // Pagination logic
//   const complaintsPerPage = 5;
//   const totalPages = Math.ceil(filtered.length / complaintsPerPage);
//   const paginatedComplaints = filtered.slice(page * complaintsPerPage, (page + 1) * complaintsPerPage);

//   const handlePrev = () => {
//     if (page > 0) setPage(prev => prev - 1);
//   };

//   const handleNext = () => {
//     if ((page + 1) < totalPages) setPage(prev => prev + 1);
//   };

//   const setTab = (tab) => {
//     setActiveTab(tab);
//     setPage(0); // Reset to first page when tab changes
//   };

//   return (
//     <div>
//       <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Complaints</h2>

//       <div className="flex border-b mb-4 md:mb-6 overflow-x-auto">
//         <button
//           className={`pb-2 cursor-pointer px-3 md:px-4 whitespace-nowrap text-sm md:text-base ${activeTab === "all" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
//           onClick={() => setTab("all")}
//         >
//           All complaints
//         </button>
//         <button
//           className={`pb-2 px-3 cursor-pointer md:px-4 whitespace-nowrap text-sm md:text-base ${activeTab === "Societal" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
//           onClick={() => setTab("Societal")}
//         >
//           Societal
//         </button>
//         <button
//           className={`pb-2 px-3 md:px-4 cursor-pointer whitespace-nowrap text-sm md:text-base ${activeTab === "HouseHold" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
//           onClick={() => setTab("HouseHold")}
//         >
//           HouseHold
//         </button>
//       </div>

//       <div className="space-y-3 md:space-y-4">
//         {paginatedComplaints.map((complaint) => (
//           <ComplaintCard
//             key={complaint.id}
//             title={complaint.title}
//             subTitle={complaint.subTitle}
//             icon={complaint.icon}
//             time={complaint.time}
//             count={complaint.count}
//             onViewProgress={() => onViewProgress(complaint)}
//           />
//         ))}
//       </div>

//       {filtered.length > complaintsPerPage && (
//         <div className="flex justify-end space-x-4 mt-4">
//           <button
//             onClick={handlePrev}
//             disabled={page === 0}
//             className={`px-4 py-2 border rounded-md ${page === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"}`}
//           >
//             ← Prev
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={page + 1 >= totalPages}
//             className={`px-4 py-2 border rounded-md ${page + 1 >= totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"}`}
//           >
//             Next →
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }




























import { useState } from "react";
import ComplaintCard from "./ComplaintCard";

export default function ComplaintsSection({ complaints, onViewProgress }) {
  const [activeTab, setActiveTab] = useState("all");
  const [page, setPage] = useState(0);
  const [statusFilter, setStatusFilter] = useState("all");

  // Combined filter based on tab and status
  const filtered = complaints.filter(complaint => {
    // Tab filtering
    const tabMatch = 
      activeTab === "all" || 
      (activeTab === "Societal" && complaint.issueType === "societal") ||
      (activeTab === "HouseHold" && complaint.issueType === "household");
    
    // Status filtering
    const statusMatch = 
      statusFilter === "all" ||
      (statusFilter === "pending" && complaint.status !== "completed") ||
      (statusFilter === "completed" && complaint.status === "completed");
    
    return tabMatch && statusMatch;
  });

  // Pagination logic
  const complaintsPerPage = 5;
  const totalPages = Math.ceil(filtered.length / complaintsPerPage);
  const paginatedComplaints = filtered.slice(
    page * complaintsPerPage, 
    (page + 1) * complaintsPerPage
  );

  const handlePrev = () => page > 0 && setPage(prev => prev - 1);
  const handleNext = () => (page + 1) < totalPages && setPage(prev => prev + 1);

  const setTab = (tab) => {
    setActiveTab(tab);
    setPage(0);
  };

  const setStatus = (status) => {
    setStatusFilter(status);
    setPage(0);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3 md:mb-4">
        <h2 className="text-xl md:text-2xl font-bold">Complaints</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 hidden sm:inline">Filter:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatus(e.target.value)}
            className="text-sm border rounded-md px-2 py-1 bg-white"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="flex border-b mb-4 md:mb-6 overflow-x-auto">
        <button
          className={`pb-2 cursor-pointer px-3 md:px-4 whitespace-nowrap text-sm md:text-base ${
            activeTab === "all" 
              ? "border-b-2 border-blue-500 font-medium text-blue-600" 
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setTab("all")}
        >
          All complaints
        </button>
        <button
          className={`pb-2 px-3 cursor-pointer md:px-4 whitespace-nowrap text-sm md:text-base ${
            activeTab === "Societal" 
              ? "border-b-2 border-blue-500 font-medium text-blue-600" 
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setTab("Societal")}
        >
          Societal
        </button>
        <button
          className={`pb-2 px-3 md:px-4 cursor-pointer whitespace-nowrap text-sm md:text-base ${
            activeTab === "HouseHold" 
              ? "border-b-2 border-blue-500 font-medium text-blue-600" 
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setTab("HouseHold")}
        >
          HouseHold
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-500">
          No complaints found matching your filters
        </div>
      ) : (
        <>
          <div className="space-y-3 md:space-y-4">
            {paginatedComplaints.map((complaint) => (
              <ComplaintCard
                key={complaint.id}
                title={complaint.title}
                subTitle={complaint.subTitle}
                icon={complaint.icon}
                time={complaint.time}
                count={complaint.count}
                status={complaint.status}
                progress={complaint.progress}
                onViewProgress={() => onViewProgress(complaint)}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handlePrev}
                disabled={page === 0}
                className={`px-4 py-2 rounded-md ${
                  page === 0 
                    ? "text-gray-400 cursor-not-allowed" 
                    : "text-blue-600 hover:bg-blue-50"
                }`}
              >
                ← Previous
              </button>
              
              <span className="text-sm text-gray-500">
                Page {page + 1} of {totalPages}
              </span>
              
              <button
                onClick={handleNext}
                disabled={page + 1 >= totalPages}
                className={`px-4 py-2 rounded-md ${
                  page + 1 >= totalPages 
                    ? "text-gray-400 cursor-not-allowed" 
                    : "text-blue-600 hover:bg-blue-50"
                }`}
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
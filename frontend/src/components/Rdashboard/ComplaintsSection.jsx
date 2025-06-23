




import { useState } from "react";
import ComplaintCard from "./ComplaintCard";

export default function ComplaintsSection({ complaints, onViewProgress }) {
  const [activeTab, setActiveTab] = useState("all");
  const [page, setPage] = useState(0);

  // Filter based on tab
  const filtered = complaints.filter(complaint => {
    if (activeTab === "Societal") return complaint.issueType === "societal";
    if (activeTab === "HouseHold") return complaint.issueType === "household";
    return true;
  });

  // Pagination logic
  const complaintsPerPage = 5;
  const totalPages = Math.ceil(filtered.length / complaintsPerPage);
  const paginatedComplaints = filtered.slice(page * complaintsPerPage, (page + 1) * complaintsPerPage);

  const handlePrev = () => {
    if (page > 0) setPage(prev => prev - 1);
  };

  const handleNext = () => {
    if ((page + 1) < totalPages) setPage(prev => prev + 1);
  };

  const setTab = (tab) => {
    setActiveTab(tab);
    setPage(0); // Reset to first page when tab changes
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Complaints</h2>

      <div className="flex border-b mb-4 md:mb-6 overflow-x-auto">
        <button
          className={`pb-2 cursor-pointer px-3 md:px-4 whitespace-nowrap text-sm md:text-base ${activeTab === "all" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
          onClick={() => setTab("all")}
        >
          All complaints
        </button>
        <button
          className={`pb-2 px-3 cursor-pointer md:px-4 whitespace-nowrap text-sm md:text-base ${activeTab === "Societal" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
          onClick={() => setTab("Societal")}
        >
          Societal
        </button>
        <button
          className={`pb-2 px-3 md:px-4 cursor-pointer whitespace-nowrap text-sm md:text-base ${activeTab === "HouseHold" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
          onClick={() => setTab("HouseHold")}
        >
          HouseHold
        </button>
      </div>

      <div className="space-y-3 md:space-y-4">
        {paginatedComplaints.map((complaint) => (
          <ComplaintCard
            key={complaint.id}
            title={complaint.title}
            subTitle={complaint.subTitle}
            icon={complaint.icon}
            time={complaint.time}
            count={complaint.count}
            onViewProgress={() => onViewProgress(complaint)}
          />
        ))}
      </div>

      {filtered.length > complaintsPerPage && (
        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className={`px-4 py-2 border rounded-md ${page === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"}`}
          >
            ← Prev
          </button>
          <button
            onClick={handleNext}
            disabled={page + 1 >= totalPages}
            className={`px-4 py-2 border rounded-md ${page + 1 >= totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"}`}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

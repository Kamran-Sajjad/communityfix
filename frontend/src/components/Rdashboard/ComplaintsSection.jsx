import { useState } from "react";
import ComplaintCard from "./ComplaintCard";

export default function ComplaintsSection({ complaints, onViewProgress }) {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Complaints</h2>

      <div className="flex border-b mb-4 md:mb-6 overflow-x-auto">
        <button
          className={`pb-2 px-3 md:px-4 whitespace-nowrap text-sm md:text-base ${activeTab === "all" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
          onClick={() => setActiveTab("all")}
        >
          All complaints
        </button>
        <button
          className={`pb-2 px-3 md:px-4 whitespace-nowrap text-sm md:text-base ${activeTab === "departments" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
          onClick={() => setActiveTab("departments")}
        >
          Departments
        </button>
        <button
          className={`pb-2 px-3 md:px-4 whitespace-nowrap text-sm md:text-base ${activeTab === "admin" ? "border-b-2 border-black font-bold" : "text-gray-400"}`}
          onClick={() => setActiveTab("admin")}
        >
          Admin reports
        </button>
      </div>

      <div className="space-y-3 md:space-y-4">
        {complaints.map((complaint) => (
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
    </div>
  );
}
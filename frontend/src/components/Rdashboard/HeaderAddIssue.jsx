import { ArrowLeft } from "lucide-react";

export default function HeaderAddIssue({ title, onBack }) {
  return (
    <div className="flex items-center p-4 md:p-6">
      <button onClick={onBack} className="mr-4">
        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <div className="flex items-center">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center mr-2">
          <span className="text-lg md:text-xl">👤</span>
        </div>
        <span className="text-lg md:text-xl font-semibold">{title}</span>
      </div>
    </div>
  );
}
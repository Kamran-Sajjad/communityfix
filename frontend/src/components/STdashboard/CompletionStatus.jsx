// components/CompletionStatus.jsx
import { Car, ChevronLeft, ChevronRight } from "lucide-react";

const CompletionStatus=()=> {
// export default function CompletionStatus() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Completion status</h2>
      <div className="flex items-center bg-gray-50 p-4 rounded-lg">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
          <Car className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">Auto repairs</h3>
          <p className="text-gray-500 text-sm">completed</p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md mr-4">Review</button>
        <div className="flex space-x-2">
          <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default CompletionStatus;
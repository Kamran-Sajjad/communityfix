import { Clipboard } from "lucide-react";

export default function PageHeader() {
  return (
    <div className="flex items-center p-4 md:p-6 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <Clipboard className="w-6 h-6 md:w-7 md:h-7 mr-3 text-gray-600" />
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Listed Issues</h1>
      </div>
    </div>
  );
}
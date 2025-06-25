import { X, Check } from "lucide-react";

const HouseReportCard = ({ 
  name, 
  location, 
  title, 
  description,
  image,
  onAccept, 
  onReject 
}) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow-md flex items-center space-x-6">
      {/* Left: Image */}
      <div className="flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt="Report"
            className="w-32 h-32 object-cover rounded-xl border-4 border-white shadow"
          />
        ) : (
          <div className="w-32 h-32 rounded-xl bg-gray-300 flex items-center justify-center text-gray-500 text-xl">
            No Image
          </div>
        )}
      </div>

      {/* Right: Info and Actions */}
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
          <span className="text-sm text-gray-500">{location}</span>
        </div>

        <h4 className="text-lg font-semibold text-gray-700">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>

        <div className="flex justify-end space-x-4 mt-4">
          <button 
            onClick={onReject}
            className="cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center border hover:bg-red-100 transition"
          >
            <X className="w-5 h-5 text-red-500" />
          </button>
          <button 
            onClick={onAccept}
            className="cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center border hover:bg-green-100 transition"
          >
            <Check className="w-5 h-5 text-green-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseReportCard;

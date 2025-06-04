
"use client";
// import toast from "react-hot-toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function SaveButton({ onClick, data }) {
  const handleClick = async () => {
    try {
      const result = await onClick();


      if (result && result.success === true) {
        toast.success("Data has been updated successfully!");
      } else {
        toast.error("Something went wrong while updating!");
      }
    } catch (error) {
      toast.error("An error occurred during update!");
    }
  };

  return (
    <div className="flex justify-center mt-6 sm:mt-8">
      <button
        onClick={handleClick}
        className="bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm md:text-base hover:bg-gray-800 transition-colors"
      >
        {data}
      </button>
    </div>
  );
}

import React from 'react';
import { Link } from "react-router-dom";
import useDashboardData from '../../hooks/useDashboardData';


const Test = () => {
  const { userName } = useDashboardData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Link to="/admindb">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
          Admin Board
        </button>
     </Link>

      <p className="bg-yellow-500 text-black text-lg font-semibold w-full text-center py-2 mt-4">
        Hello, I am Basit
      </p>
    </div>
  );
};

export default Test;
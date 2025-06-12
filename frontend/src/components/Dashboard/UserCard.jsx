import React from 'react';
import myImage from "../../assets/blue.avif";

const UserCard = ({ user }) => {
  return (
    <details className="rounded-lg p-4 my-2 w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Summary Section */}
      <summary className="flex items-center cursor-pointer list-none">
        <img
          src={user.image || myImage}
          alt={user.name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div className="flex-grow text-left">
          <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.address}</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-300">
            Accept
          </button>
          <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-300">
            Remove
          </button>
        </div>
      </summary>

      {/* Details Section */}
      <div className="mt-4 pt-4">
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <strong>Phone:</strong> {user.phone}
          </div>
          <div>
            <strong>Area:</strong> {user.area}
          </div>
          <div>
            <strong>Block:</strong> {user.block}
          </div>
          <div>
            <strong>City:</strong> {user.city}
          </div>
          <div className="col-span-2">
            <strong>CNIC:</strong> {user.cnic}
          </div>
        </div>
      </div>
    </details>
  );
};

export default UserCard;
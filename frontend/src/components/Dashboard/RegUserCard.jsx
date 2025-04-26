import React from 'react';
import defaultAvatar from "../../assets/blue.avif";

const RegUserCard = ({ user }) => {
  return (
    <div className="w-full mb-4">
      <details className="w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 overflow-hidden">
        {/* Summary Section */}
        <summary className="flex flex-col sm:flex-row items-center p-4 cursor-pointer list-none">
          {/* User Info Section - takes available space */}
          <div className="flex items-center w-full sm:flex-1 mb-3 sm:mb-0">
            <div className="relative mr-4">
              <img
                src={user.image || defaultAvatar}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                onError={(e) => {
                  e.target.src = defaultAvatar;
                }}
              />
              <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                user.status === 'active' 
                  ? 'bg-green-500' 
                  : user.status === 'suspended' 
                    ? 'bg-yellow-500' 
                    : 'bg-red-500'
              }`}></span>
            </div>
            <div className="flex-grow sm:flex-grow-0 sm:w-48 mr-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{user.name}</h3>
              <p className="text-sm text-gray-500 truncate">{user.address}</p>
            </div>
            
            {/* Status Badge - moved inside user info section */}
            <span className={`px-3 py-1 rounded-full text-xs ${
              user.status === 'active' 
                ? 'bg-gray-100 text-gray-800 border border-gray-300' 
                : user.status === 'suspended' 
                  ? 'bg-gray-100 text-gray-800 border border-gray-300' 
                  : 'bg-gray-100 text-gray-800 border border-gray-300'
            }`}>
              {user.status ? user.status.charAt(0).toUpperCase() + user.status.slice(1) : 'Inactive'}
            </span>
          </div>
          
          {/* Action Buttons - pushed to the end */}
          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm font-medium whitespace-nowrap shadow-sm">
              {user.status === 'suspended' ? 'Unsuspend' : 'Suspend'}
            </button>
            <button className="px-4 py-2 bg-black text-white border border-black rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium whitespace-nowrap shadow-sm">
              {user.status === 'blocked' ? 'Unblock User' : 'Block User'}
            </button>
          </div>
        </summary>

        {/* Details Section remains the same */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-700">
            <div>
              <strong className="text-gray-600 block mb-1">Phone:</strong>
              <span className="text-gray-800">{user.phone || 'N/A'}</span>
            </div>
            <div>
              <strong className="text-gray-600 block mb-1">Area:</strong>
              <span className="text-gray-800">{user.area || 'N/A'}</span>
            </div>
            <div>
              <strong className="text-gray-600 block mb-1">Block:</strong>
              <span className="text-gray-800">{user.block || 'N/A'}</span>
            </div>
            <div>
              <strong className="text-gray-600 block mb-1">City:</strong>
              <span className="text-gray-800">{user.city || 'N/A'}</span>
            </div>
            <div>
              <strong className="text-gray-600 block mb-1">CNIC:</strong>
              <span className="text-gray-800">{user.cnic || 'N/A'}</span>
            </div>
            <div>
              <strong className="text-gray-600 block mb-1">Join Date:</strong>
              <span className="text-gray-800">{user.joinDate || 'N/A'}</span>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default RegUserCard;
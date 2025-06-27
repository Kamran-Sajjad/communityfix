


// // Updated UserCard.jsx with status-based background and toast support
// import React from "react";
// import toast from "react-hot-toast";

// const UserCard = ({ user, onSuspend, onDeactivate }) => {
//   const getInitial = (name) => name?.charAt(0)?.toUpperCase() || "N";

//   const handleSuspend = () => {
//     onSuspend();
//     toast.success(`${user.fullName} has been suspended.`);
//   };

//   const handleDeactivate = () => {
//     onDeactivate();
//     toast.success(`${user.fullName} has been deactivated.`);
//   };

//   let cardBg = "bg-white";
//   if (user.status === "suspended") cardBg = "bg-yellow-50";
//   if (user.status === "deactivated") cardBg = "bg-gray-100";

//   return (
//     <details className={`rounded-lg p-4 my-2 w-full ${cardBg} shadow-sm hover:shadow-md transition-shadow duration-300`}>
//       <summary className="flex items-center cursor-pointer list-none">
//         {user.profileImage ? (
//           <img
//             src={user.profileImage}
//             alt={user.fullName}
//             className="w-12 h-12 rounded-full mr-4 object-cover"
//           />
//         ) : (
//           <div className="w-12 h-12 rounded-full mr-4 bg-blue-200 text-blue-800 flex items-center justify-center text-lg font-bold">
//             {getInitial(user.fullName)}
//           </div>
//         )}
//         <div className="flex-grow text-left">
//           <h3 className="text-lg font-semibold text-gray-800">{user.fullName}</h3>
//           <p className="text-sm text-gray-500">{user.address}</p>
//         </div>
//         <div className="flex gap-2">
//           <button
//             onClick={handleSuspend}
//             className="px-4 py-2 bg-yellow-200 rounded-lg hover:bg-yellow-300 transition-colors duration-300"
//           >
//             Suspend
//           </button>
//           <button
//             onClick={handleDeactivate}
//             className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
//           >
//             Deactivate
//           </button>
//         </div>
//       </summary>

//       <div className="mt-4 pt-4">
//         <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
//           <div>
//             <strong>Phone:</strong> {user.phoneNumber}
//           </div>
//           <div>
//             <strong>Email:</strong> {user.email}
//           </div>
//           <div>
//             <strong>House No:</strong> {user.houseNo}
//           </div>
//            <div >
//             <strong>CNIC:</strong> {user.cnic}
//           </div>
//           <div>
//             <strong>Account Type:</strong> {user.accountType}
//           </div>
//           <div>
//             <strong>Status:</strong> {user.status}
//           </div>
         
//         </div>
//       </div>
//     </details>
//   );
// };

// export default UserCard;














// // Updated UserCard.jsx with working toast and auto UI refresh
// import React from "react";
// import toast from "react-hot-toast";

// const UserCard = ({ user, onSuspend, onDeactivate }) => {
//   const getInitial = (name) => name?.charAt(0)?.toUpperCase() || "N";

//   const handleSuspend = async () => {
//     await onSuspend();
//     console.log(`${user.fullName} has been suspended.`);
//     toast.success(`${user.fullName} has been suspended.`);
//   };

//   const handleDeactivate = async () => {
//     await onDeactivate();
//     console.log(`${user.fullName} has been deactivated.`);
//     toast.success(`${user.fullName} has been deactivated.`);
//   };

//   let cardBg = "bg-white";
//   if (user.status === "suspended") cardBg = "bg-yellow-50";
//   if (user.status === "deactivated") cardBg = "bg-gray-100";

//   return (
//     <details className={`rounded-lg p-4 my-2 w-full ${cardBg} shadow-sm hover:shadow-md transition-shadow duration-300`}>
//       <summary className="flex items-center cursor-pointer list-none">
//         {user.profileImage ? (
//           <img
//             src={user.profileImage}
//             alt={user.fullName}
//             className="w-12 h-12 rounded-full mr-4 object-cover"
//           />
//         ) : (
//           <div className="w-12 h-12 rounded-full mr-4 bg-blue-200 text-blue-800 flex items-center justify-center text-lg font-bold">
//             {getInitial(user.fullName)}
//           </div>
//         )}
//         <div className="flex-grow text-left">
//           <h3 className="text-lg font-semibold text-gray-800">{user.fullName}</h3>
//           <p className="text-sm text-gray-500">{user.address}</p>
//         </div>
//         <div className="flex gap-2">
//           <button
//             onClick={handleSuspend}
//             className="px-4 py-2 bg-yellow-200 rounded-lg hover:bg-yellow-300 transition-colors duration-300"
//           >
//             Suspend
//           </button>
//           <button
//             onClick={handleDeactivate}
//             className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
//           >
//             Deactivate
//           </button>
//         </div>
//       </summary>

//       <div className="mt-4 pt-4">
//         <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
//           <div>
//             <strong>Phone:</strong> {user.phoneNumber}
//           </div>
//           <div>
//             <strong>Email:</strong> {user.email}
//           </div>
//           <div>
//             <strong>House No:</strong> {user.houseNo}
//           </div>
//           <div>
//             <strong>CNIC:</strong> {user.cnic}
//           </div>
//           <div>
//             <strong>Account Type:</strong> {user.accountType}
//           </div>
//           <div>
//             <strong>Status:</strong> {user.status}
//           </div>
//         </div>
//       </div>
//     </details>
//   );
// };

// export default UserCard;














// Updated UserCard.jsx with working toast and activate option for suspended/deactivated users
import React from "react";
// import toast from "react-hot-toast";
import { showSuccessToast } from "../../../../backend/utils/toastUtils";


const UserCard = ({ user, onSuspend, onDeactivate, onActivate }) => {
  const getInitial = (name) => name?.charAt(0)?.toUpperCase() || "N";

  const handleSuspend = async () => {
    await onSuspend();
    showSuccessToast(`${user.fullName} has been suspended.`);
  };

  const handleDeactivate = async () => {
    await onDeactivate();
    showSuccessToast(`${user.fullName} has been deactivated.`);
  };

  const handleActivate = async () => {
    await onActivate();
    showSuccessToast(`${user.fullName} has been activated.`);
  };

  let cardBg = "bg-white";
  if (user.status === "suspended") cardBg = "bg-yellow-50";
  if (user.status === "deactivated") cardBg = "bg-gray-100";
  if (user.status === "active") cardBg = "bg-white";

  return (
    <details className={`rounded-lg p-4 my-2 w-full ${cardBg} shadow-sm hover:shadow-md transition-shadow duration-300`}>
      <summary className="flex items-center cursor-pointer list-none">
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.fullName}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full mr-4 bg-blue-200 text-blue-800 flex items-center justify-center text-lg font-bold">
            {getInitial(user.fullName)}
          </div>
        )}
        <div className="flex-grow text-left">
          <h3 className="text-lg font-semibold text-gray-800">{user.fullName}</h3>
          <p className="text-sm text-gray-500">{user.address}</p>
        </div>
        <div className="flex gap-2">
          {user.status === "suspended" || user.status === "deactivated" ? (
            <button
              onClick={handleActivate}
              className="px-4 py-2 bg-green-200 text-green-900 rounded-lg hover:bg-green-300 transition-colors duration-300"
            >
              Activate
            </button>
          ) : (
            <>
              <button
                onClick={handleSuspend}
                className="px-4 py-2 bg-yellow-200 rounded-lg hover:bg-yellow-300 transition-colors duration-300"
              >
                Suspend
              </button>
              <button
                onClick={handleDeactivate}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300"
              >
                Deactivate
              </button>
            </>
          )}
        </div>
      </summary>

      <div className="mt-4 pt-4">
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <strong>Phone:</strong> {user.phoneNumber}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          <div>
            <strong>House No:</strong> {user.houseNo}
          </div>
          <div>
            <strong>CNIC:</strong> {user.cnic}
          </div>
          <div>
            <strong>Account Type:</strong> {user.accountType}
          </div>
          <div>
            <strong>Status:</strong> {user.status}
          </div>
        </div>
      </div>
    </details>
  );
};

export default UserCard;

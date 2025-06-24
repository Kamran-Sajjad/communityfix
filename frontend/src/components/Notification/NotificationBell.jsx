

















// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import api from "../../utils/api";
// import { useAuth } from "../../context/AuthContext";

// const NotificationBell = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [unreadCount, setUnreadCount] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);
//   const { user } = useAuth();

//   // Fetch notifications every 30 seconds
//   useEffect(() => {
//     const fetchNotifications = async () => {
//       if (!user?._id) return;
      
//       try {
//         const res = await api.get("/notifications");
//         const newNotifications = res.data.filter(
//           n => !notifications.some(existing => existing._id === n._id)
//         );
        
//         // Show toast for new notifications
//         newNotifications.forEach(n => {
//           toast.info(n.message, {
//             onClick: () => {
//               if (n.issue) {
//                 window.location.href = `/issues/${n.issue}`;
//               }
//             },
//             autoClose: 5000
//           });
//         });

//         setNotifications(res.data);
//         setUnreadCount(res.data.filter(n => !n.isRead).length);
//       } catch (err) {
//         console.error("Failed to fetch notifications", err);
//       }
//     };

//     fetchNotifications();
//     const interval = setInterval(fetchNotifications, 30000);
//     return () => clearInterval(interval);
//   }, [user, notifications]);

//   const handleMarkAsRead = async (id) => {
//     try {
//     //   await api.patch(`/notifications/${id}/read`);
//       await api.patch(`/notifications/${id}/read`);
//       setNotifications(prev => 
//         prev.map(n => n._id === id ? { ...n, isRead: true } : n)
//       );
//       setUnreadCount(prev => prev - 1);
//     } catch (err) {
//       console.error("Failed to mark as read", err);
//     }
//   };

//   return (
//     <div className="relative">
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-2 relative"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//         //   className="h-6 w-6 text-white"
//           className="h-6 w-6 text-black"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//           />
//         </svg>
//         {unreadCount > 0 && (
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//             {unreadCount}
//           </span>
//         )}
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 border border-gray-200">
//           <div className="p-3 border-b border-gray-200">
//             <h3 className="font-semibold text-gray-800">Notifications</h3>
//           </div>
//           <div className="max-h-60 overflow-y-auto">
//             {notifications.length === 0 ? (
//               <p className="p-4 text-gray-500 text-center">No notifications</p>
//             ) : (
//               notifications.map(notification => (
//                 <div
//                   key={notification._id}
//                   className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
//                     !notification.isRead ? "bg-blue-50" : ""
//                   }`}
//                   onClick={() => {
//                     handleMarkAsRead(notification._id);
//                     setIsOpen(false);
//                     if (notification.issue) {
//                       window.location.href = `/issues/${notification.issue}`;
//                     }
//                   }}
//                 >
//                   <p className="text-sm text-gray-800">{notification.message}</p>
//                   <p className="text-xs text-gray-500 mt-1">
//                     {new Date(notification.createdAt).toLocaleString()}
//                   </p>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotificationBell;


















// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import api from "../../utils/api";
// import { useAuth } from "../../context/AuthContext";

// const NotificationBell = ({color="white"}) => {
//   const [notifications, setNotifications] = useState([]);
//   const [unreadCount, setUnreadCount] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);
//   const { user } = useAuth();

//   // Fetch notifications every 30 seconds
//   useEffect(() => {
//     const fetchNotifications = async () => {
//       if (!user?._id) return;
      
//       try {
//         const res = await api.get("/notifications");
//         const newNotifications = res.data.filter(
//           n => !notifications.some(existing => existing._id === n._id)
//         );
        
//         // Show toast for new notifications
//         newNotifications.forEach(n => {
//           toast.info(n.message, {
//             onClick: () => {
//               if (n.issue) {
//                 window.location.href = `/issues/${n.issue}`;
//               }
//             },
//             autoClose: 5000
//           });
//         });

//         setNotifications(res.data);
//         setUnreadCount(res.data.filter(n => !n.isRead).length);
//       } catch (err) {
//         console.error("Failed to fetch notifications", err);
//       }
//     };

//     fetchNotifications();
//     const interval = setInterval(fetchNotifications, 30000);
//     return () => clearInterval(interval);
//   }, [user, notifications]);

//   const handleMarkAsRead = async (id) => {
//     try {
//     //   await api.patch(`/notifications/${id}/read`);
//       await api.patch(`/notifications/${id}/read`);
//       setNotifications(prev => 
//         prev.map(n => n._id === id ? { ...n, isRead: true } : n)
//       );
//       setUnreadCount(prev => prev - 1);
//     } catch (err) {
//       console.error("Failed to mark as read", err);
//     }
//   };

//   return (
//     <div className="relative">
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-2 relative"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//         //   className="h-6 w-6 text-white"
//           className={`cursor-pointer h-6 w-6 text-${color}`}
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//           />
//         </svg>
//         {unreadCount > 0 && (
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//             {unreadCount}
//           </span>
//         )}
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 border border-gray-200">
//           <div className="p-3 border-b border-gray-200">
//             <h3 className="font-semibold text-gray-800">Notifications</h3>
//           </div>
//           <div className="max-h-60 overflow-y-auto">
//             {notifications.length === 0 ? (
//               <p className="p-4 text-gray-500 text-center">No notifications</p>
//             ) : (
//               notifications.map(notification => (
//                 <div
//                   key={notification._id}
//                   className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
//                     !notification.isRead ? "bg-blue-50" : ""
//                   }`}
//                   onClick={() => {
//                     handleMarkAsRead(notification._id);
//                     setIsOpen(false);
//                     if (notification.issue) {
//                       window.location.href = `/issues/${notification.issue}`;
//                     }
//                   }}
//                 >
//                   <p className="text-sm text-gray-800">{notification.message}</p>
//                   <p className="text-xs text-gray-500 mt-1">
//                     {new Date(notification.createdAt).toLocaleString()}
//                   </p>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotificationBell;













// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom"; // Add this import
// import "react-toastify/dist/ReactToastify.css";
// import api from "../../utils/api";
// import { useAuth } from "../../context/AuthContext";

// const NotificationBell = ({ color = "white" }) => {
//   const [notifications, setNotifications] = useState([]);
//   const [unreadCount, setUnreadCount] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);
//   const { user } = useAuth();
//   const navigate = useNavigate(); // Initialize the navigate function

//   // Fetch notifications every 30 seconds
//   useEffect(() => {
//     const fetchNotifications = async () => {
//       if (!user?._id) return;
      
//       try {
//         const res = await api.get("/notifications");
//         const newNotifications = res.data.filter(
//           n => !notifications.some(existing => existing._id === n._id)
//         );
        
//         // Show toast for new notifications
//         // newNotifications.forEach(n => {
//         //   toast.info(n.message, {
//         //     autoClose: 1000
//         //   });
//         // });

//         setNotifications(res.data);
//         setUnreadCount(res.data.filter(n => !n.isRead).length);
//       } catch (err) {
//         console.error("Failed to fetch notifications", err);
//       }
//     };

//     fetchNotifications();
//     const interval = setInterval(fetchNotifications, 30000);
//     return () => clearInterval(interval);
//   }, [user, notifications, navigate]); // Add navigate to dependencies

// //   const handleMarkAsRead = async (id) => {
// //     try {
// //       await api.patch(`/notifications/${id}/read`);
// //       setNotifications(prev => 
// //         prev.map(n => n._id === id ? { ...n, isRead: true } : n)
// //       );
// //       setUnreadCount(prev => prev - 1);
// //     } catch (err) {
// //       console.error("Failed to mark as read", err);
// //     }
// //   };
//   const handleMarkAsRead = async (id) => {
//     try {
//       await api.patch(`/notifications/${id}/read`);
//       setNotifications(prev => 
//         prev.map(n => n._id === id ? { ...n, isRead: true } : n)
//       );
//       setUnreadCount(prev => prev - 1);
//     } catch (err) {
//       console.error("Failed to mark as read", err);
//     }
//   };

//   const handleNotificationClick = (notification) => {
//     handleMarkAsRead(notification._id);
//     setIsOpen(false);
//     if (notification.issue) {
//     //   navigate(`/issues/${notification.issue}`); // Use navigate here too
//     //   navigate(`../residents/ListedIssuesPage`); // Use navigate here too
//     }
//   };

//   return (
//     <div className="relative">
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-2 relative"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className={`cursor-pointer h-6 w-6 text-${color}`}
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//           />
//         </svg>
//         {unreadCount > 0 && (
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//             {unreadCount}
//           </span>
//         )}
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 border border-gray-200">
//           <div className="p-3 border-b border-gray-200">
//             <h3 className="font-semibold text-gray-800">Notifications</h3>
//           </div>
//           <div className="max-h-60 overflow-y-auto">
//             {notifications.length === 0 ? (
//               <p className="p-4 text-gray-500 text-center">No notifications</p>
//             ) : (
//               notifications.map(notification => (
//                 <div
//                   key={notification._id}
//                   className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
//                     !notification.isRead ? "bg-blue-50" : ""
//                   }`}
//                   onClick={() => handleNotificationClick(notification)}
//                 >
//                   <p className="text-sm text-gray-800">{notification.message}</p>
//                   <p className="text-xs text-gray-500 mt-1">
//                     {new Date(notification.createdAt).toLocaleString()}
//                   </p>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotificationBell;













import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Add this import
import "react-toastify/dist/ReactToastify.css";
import api from "../../utils/api";
import { useAuth } from "../../context/AuthContext";



const NotificationBell = ({ color = "white" }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate(); // Initialize the navigate function

  // Fetch notifications every 30 seconds
  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user?._id) return;
      
      try {
        const res = await api.get("/notifications");
        const newNotifications = res.data.filter(
          n => !notifications.some(existing => existing._id === n._id)
        );
        
        setNotifications(res.data);
        setUnreadCount(res.data.filter(n => !n.isRead).length);
      } catch (err) {
        console.error("Failed to fetch notifications", err);
      }
    };

    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, [user, notifications, navigate]);

  const handleMarkAsRead = async (id) => {
    try {
      // Mark the notification as read in the backend
      const updatedNotification = await api.patch(`/notifications/${id}/read`);
      // Update the state with the new notification data
      setNotifications(prev => 
        prev.map(n => n._id === id ? { ...n, isRead: true } : n)
      );
      setUnreadCount(prev => prev - 1); // Decrease unread count
    } catch (err) {
      console.error("Failed to mark as read", err);
    }
  };

  const handleNotificationClick = (notification) => {
    handleMarkAsRead(notification._id);
    setIsOpen(false);
    if (notification.issue) {
    //   navigate(`/issues/${notification.issue}`); // Use navigate here for redirection
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`cursor-pointer h-6 w-6 text-${color}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          <div className="p-3 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800">Notifications</h3>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="p-4 text-gray-500 text-center">No notifications</p>
            ) : (
              notifications.map(notification => (
                <div
                  key={notification._id}
                  className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                    !notification.isRead ? "bg-blue-50" : ""
                  }`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <p className="text-sm text-gray-800">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(notification.createdAt).toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;

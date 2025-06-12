"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bell, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Notification = ({
  initialNotifications = [],
  navigateTo = "/serviceTeam/ReportsPage",
  markAllAsReadCallback,
  notificationClickCallback,
}) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const notificationRef = useRef(null);

  // Close notifications when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update notifications if initialNotifications prop changes
  useEffect(() => {
    setNotifications(initialNotifications);
  }, [initialNotifications]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((n) => ({ ...n, read: true }));
    setNotifications(updatedNotifications);
    
    // Call the callback if provided
    if (markAllAsReadCallback) {
      markAllAsReadCallback(updatedNotifications);
    }
  };

  const handleNotificationClick = (id) => {
    const updatedNotifications = notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    );
    setNotifications(updatedNotifications);
    
    // Call the callback if provided
    if (notificationClickCallback) {
      notificationClickCallback(id, updatedNotifications);
    } else {
      // Default behavior if no callback provided
      navigate(navigateTo);
    }
    
    setShowNotifications(false);
  };

  return (
    <div className="relative" ref={notificationRef}>
      <button
        className="cursor-pointer p-2 rounded-full bg-white hover:bg-gray-100 transition relative"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        )}
      </button>

      {showNotifications && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-3 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold">Notifications</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={markAllAsRead}
                className="cursor-pointer text-xs text-blue-600 hover:text-blue-800"
              >
                Mark all read
              </button>
              <button
                onClick={() => setShowNotifications(false)}
                className="cursor-pointer text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                    !notification.read ? "bg-blue-50" : ""
                  }`}
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  <p className="text-sm">{notification.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                No new notifications
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
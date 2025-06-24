// import { io } from "socket.io-client";

// let socket;

// export const connectSocket = (userId) => {
//   socket = io(import.meta.env.VITE_BACKEND_URL || "http://localhost:5000", {
//     transports: ["websocket"],
//   });
//   socket.emit("authenticate", userId);
// };

// export const disconnectSocket = () => {
//   if (socket && socket.connected) {
//     socket.disconnect();
//     console.log("Socket disconnected.");
//   } else {
//     console.log("Socket not connected. Skipping disconnect.");
//   }
// };

// export const getSocket = () => socket;







// socket.js
import { io } from "socket.io-client";

let socket = null;

export const connectSocket = (userId) => {
  if (!socket || !socket.connected) {
    socket = io(import.meta.env.VITE_BACKEND_URL || "http://localhost:5000", {
      transports: ["websocket"],
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    socket.on("connect", () => {
      console.log("✅ Socket connected:", socket.id);
      socket.emit("authenticate", userId);
    });

    socket.on("connect_error", (err) => {
      console.error("❌ Socket connection error:", err.message);
    });

    socket.on("disconnect", () => {
      console.log("⚠️ Socket disconnected");
    });
  }
};

export const disconnectSocket = () => {
  if (socket && socket.connected) {
    socket.disconnect();
    console.log("🔌 Socket disconnected.");
  } else {
    console.log("⚠️ Socket not connected. Skipping disconnect.");
  }
};

export const sendMessage = (message) => {
  if (socket && socket.connected) {
    socket.emit("send-message", message);
  } else {
    console.error("❌ Cannot send message: Socket not connected.");
  }
};

export const setupMessageListener = (callback) => {
  if (socket) {
    socket.on("receive-message", callback);
  }
};

export const getSocket = () => socket;

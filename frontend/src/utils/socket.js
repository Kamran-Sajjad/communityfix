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







// // socket.js
// import { io } from "socket.io-client";

// let socket = null;

// export const connectSocket = (userId) => {
//   if (!socket || !socket.connected) {
//     socket = io(import.meta.env.VITE_BACKEND_URL || "http://localhost:5000", {
//       transports: ["websocket"],
//       reconnectionAttempts: 5,
//       reconnectionDelay: 1000,
//     });

//     socket.on("connect", () => {
//       console.log("✅ Socket connected:", socket.id);
//       socket.emit("authenticate", userId);
//     });

//     socket.on("connect_error", (err) => {
//       console.error("❌ Socket connection error:", err.message);
//     });

//     socket.on("disconnect", () => {
//       console.log("⚠️ Socket disconnected");
//     });
//   }
// };

// export const disconnectSocket = () => {
//   if (socket && socket.connected) {
//     socket.disconnect();
//     console.log("🔌 Socket disconnected.");
//   } else {
//     console.log("⚠️ Socket not connected. Skipping disconnect.");
//   }
// };

// export const sendMessage = (message) => {
//   if (socket && socket.connected) {
//     socket.emit("send-message", message);
//   } else {
//     console.error("❌ Cannot send message: Socket not connected.");
//   }
// };

// export const setupMessageListener = (callback) => {
//   if (socket) {
//     socket.on("receive-message", callback);
//   }
// };

// export const getSocket = () => socket;

















// src/utils/socket.js
import { io } from "socket.io-client";

let socket = null;
let connectionListeners = [];
let disconnectListeners = [];

/**
 * Initialize and connect the socket
 * @param {string} userId - The current user's ID
 * @param {object} [options] - Additional socket options
 */
export const connectSocket = (userId, options = {}) => {
  if (socket && socket.connected) {
    console.log("ℹ️ Socket already connected");
    return socket;
  }

  const socketOptions = {
    transports: ["websocket"],
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    auth: { userId },
    ...options
  };

  socket = io(import.meta.env.VITE_BACKEND_URL || "http://localhost:5000", socketOptions);

  // Connection handlers
  socket.on("connect", () => {
    console.log("✅ Socket connected:", socket.id);
    connectionListeners.forEach(cb => cb(socket));
  });

  socket.on("connect_error", (err) => {
    console.error("❌ Connection error:", err.message);
    // Attempt reconnect after delay
    setTimeout(() => socket.connect(), 5000);
  });

  socket.on("disconnect", (reason) => {
    console.log("⚠️ Disconnected:", reason);
    disconnectListeners.forEach(cb => cb(reason));
  });

  socket.on("reconnect", (attempt) => {
    console.log(`♻️ Reconnected after ${attempt} attempts`);
  });

  socket.on("reconnect_failed", () => {
    console.error("❌ Failed to reconnect");
  });

  return socket;
};

/**
 * Disconnect the socket
 * @param {boolean} [permanent=false] - If true, prevents auto-reconnect
 */
export const disconnectSocket = (permanent = false) => {
  if (socket) {
    if (permanent) {
      socket.disconnect();
      socket = null;
      console.log("🔌 Socket permanently disconnected");
    } else if (socket.connected) {
      socket.disconnect();
      console.log("🔌 Socket temporarily disconnected (may auto-reconnect)");
    }
  }
};

/**
 * Get current socket instance
 * @returns {Socket | null}
 */
export const getSocket = () => socket;

/**
 * Check if socket is connected
 * @returns {boolean}
 */
export const isConnected = () => socket?.connected || false;

/**
 * Register connection listener
 * @param {(socket: Socket) => void} callback
 */
export const onConnect = (callback) => {
  if (typeof callback === 'function') {
    connectionListeners.push(callback);
    if (socket?.connected) callback(socket);
  }
};

/**
 * Register disconnect listener
 * @param {(reason: string) => void} callback
 */
export const onDisconnect = (callback) => {
  if (typeof callback === 'function') {
    disconnectListeners.push(callback);
  }
};

/**
 * Remove all listeners
 */
export const cleanupListeners = () => {
  connectionListeners = [];
  disconnectListeners = [];
};

/**
 * Send a message through socket
 * @param {string} event - Event name
 * @param {any} data - Message data
 * @param {(err?: Error) => void} [ack] - Callback for acknowledgement
 */
export const emit = (event, data, ack) => {
  if (!socket || !socket.connected) {
    console.error("❌ Cannot emit: Socket not connected");
    if (ack) ack(new Error("Socket not connected"));
    return false;
  }

  socket.emit(event, data, ack);
  return true;
};

/**
 * Listen to socket events
 * @param {string} event - Event name
 * @param {(data: any) => void} callback - Event handler
 */
export const on = (event, callback) => {
  if (socket) {
    socket.on(event, callback);
  }
};

/**
 * Remove socket event listener
 * @param {string} event - Event name
 * @param {(data: any) => void} [callback] - Specific callback to remove
 */
export const off = (event, callback) => {
  if (socket) {
    if (callback) {
      socket.off(event, callback);
    } else {
      socket.off(event);
    }
  }
};

// Message-specific helpers (keep your existing interface)
export const sendMessage = (message) => emit("send-message", message);
export const setupMessageListener = (callback) => on("receive-message", callback);
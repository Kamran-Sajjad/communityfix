import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_BACKEND_URL, {
  withCredentials: true,
});

export const connectSocket = (userId) => {
  if (socket && userId) {
    socket.emit("setup", userId);
  }
};

export const sendMessage = (message) => {
  if (socket) {
    socket.emit("send-message", message);
  }
};

export const receiveMessage = (callback) => {
  if (socket) {
    socket.on("receive-message", (message) => {
      callback(message);
    });
  }
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
};

export default socket;
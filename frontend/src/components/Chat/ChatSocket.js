import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_BACKEND_URL, {
  withCredentials: true,
  autoConnect: false,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export const connectSocket = (userId) => {
    console.log('Connecting to socket with user ID:', userId);

  if (!socket.connected) {
    socket.auth = { userId };
    socket.connect();
    console.log('Connecting socket for user:', userId);
  }
};

export const sendMessage = (message) => {
  if (socket.connected) {
    socket.emit('send-message', message);
  } else {
    console.error('Socket not connected');
  }
};

export const setupMessageListener = (callback) => {
  socket.on('receive-message', callback);
};

export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
  }
};

export default socket;
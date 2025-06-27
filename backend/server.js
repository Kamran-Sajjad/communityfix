




// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import connectDB from './config/db.js';
// import cors from 'cors';
// import path from 'path';

// // Models
// import Message from './models/Message.js';
// import User from './models/User.js';

// // Routes
// import authRoutes from './routes/authRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import issueRoutes from './routes/issueRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';
// import userReviewRoutes from './routes/admin/userReviewRoutes.js';
// import feedbackRoutes from './routes/feedback.js';
// import aiRoutes from './routes/aiRoutes.js';
// import conciseAiRoutes from './routes/conciseAiRoutes.js';
// import chatRoutes from './routes/chatRoutes.js';
// import notificationRoutes from "./routes/notificationRoutes.js";

// // Connect DB
// connectDB();

// // App setup
// const app = express();
// const __dirname = path.resolve();
// const httpServer = createServer(app);

// // CORS config
// const corsOptions = {
//   origin: [
//     process.env.FRONTEND_URL,
//     "http://localhost:3000",
//     "http://localhost:5173"
//   ],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// };

// app.use(cors(corsOptions));
// app.options('*', cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// // Create Socket.IO server
// const io = new Server(httpServer, {
//   cors: corsOptions,
//   pingTimeout: 60000,
//   connectionStateRecovery: {
//     maxDisconnectionDuration: 2 * 60 * 1000,
//     skipMiddlewares: true,
//   }
// });

// // ✅ Export io to use in notificationController.js and others
// export { io };

// // ✅ Routes
// app.use('/api/users', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/issues', issueRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/admin', userReviewRoutes);
// app.use('/api/feedback', feedbackRoutes); // ✅ Feedback route
// app.use('/api/ai', aiRoutes);
// app.use('/api/ai', conciseAiRoutes);
// app.use('/api/chat', chatRoutes(io)); // Pass io to chat routes
// app.use('/api/notifications', notificationRoutes);

// // Health check
// app.get('/', (req, res) => {
//   res.send('CommunityFix Backend Running...');
// });

// // ✅ SOCKET.IO setup
// io.on('connection', (socket) => {
//   console.log('🔌 New client connected:', socket.id);

//   // Authenticate user and join personal room
//   socket.on('authenticate', async (userId) => {
//     try {
//       socket.join(userId);
//       console.log(`✅ User ${userId} joined socket room`);
//       await User.findByIdAndUpdate(userId, {
//         online: true,
//         socketId: socket.id
//       });
//     } catch (error) {
//       console.error('❌ Authentication error:', error);
//     }
//   });

//   socket.on('send-message', async (message) => {
//     try {
//       const { fromUserId, toUserId, text } = message;

//       const newMessage = new Message({
//         fromUserId,
//         toUserId,
//         text
//       });
//       await newMessage.save();

//       io.to(toUserId).emit('receive-message', newMessage);
//       console.log(`💬 Message sent from ${fromUserId} to ${toUserId}`);
//     } catch (error) {
//       console.error('❌ Message handling error:', error);
//       socket.emit('message-error', {
//         error: 'Failed to send message',
//         originalMessage: message
//       });
//     }
//   });

//   socket.on('typing', (data) => {
//     socket.to(data.toUserId).emit('typing-indicator', {
//       fromUserId: data.fromUserId,
//       isTyping: data.isTyping
//     });
//   });

//   socket.on('disconnect', async () => {
//     try {
//       const user = await User.findOne({ socketId: socket.id });
//       if (user) {
//         await User.findByIdAndUpdate(user._id, {
//           online: false,
//           socketId: null
//         });
//       }
//       console.log('❎ Client disconnected:', socket.id);
//     } catch (error) {
//       console.error('❌ Disconnection error:', error);
//     }
//   });

//   socket.on('error', (error) => {
//     console.error('🔥 Socket error:', error);
//   });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// httpServer.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`🌐 Allowed origins: ${corsOptions.origin.filter(Boolean).join(', ')}\n`);
// });





import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDB from './config/db.js';
import cors from 'cors';
import path from 'path';

// Models
import Message from './models/Message.js';
import User from './models/User.js';

// Routes
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import issueRoutes from './routes/issueRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import userReviewRoutes from './routes/admin/userReviewRoutes.js';
import feedbackRoutes from './routes/feedback.js';
import aiRoutes from './routes/aiRoutes.js';
import conciseAiRoutes from './routes/conciseAiRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import notificationRoutes from "./routes/notificationRoutes.js";

// Connect DB
connectDB();

// App setup
const app = express();
const __dirname = path.resolve();
const httpServer = createServer(app);

// CORS config
const corsOptions = {
  origin: [
    process.env.FRONTEND_URL,
    "http://localhost:3000",
    "http://localhost:5173"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Create Socket.IO server
const io = new Server(httpServer, {
  cors: corsOptions,
  pingTimeout: 60000,
  connectionStateRecovery: {
    maxDisconnectionDuration: 2 * 60 * 1000,
    skipMiddlewares: true,
  }
});

// ✅ Export io to use in notificationController.js and others
export { io };

// ✅ Routes
app.use('/api/users', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin', userReviewRoutes);
app.use('/api/feedback', feedbackRoutes); // ✅ Feedback route
app.use('/api/ai', aiRoutes);
app.use('/api/ai', conciseAiRoutes);
app.use('/api/chat', chatRoutes(io)); // Pass io to chat routes
app.use('/api/notifications', notificationRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('CommunityFix Backend Running...');
});

// ✅ SOCKET.IO setup
io.on('connection', (socket) => {
  console.log('🔌 New client connected:', socket.id);

  // Authenticate user and join personal room
  socket.on('authenticate', async (userId) => {
    try {
      socket.join(userId);
      console.log(`✅ User ${userId} joined socket room`);
      await User.findByIdAndUpdate(userId, {
        online: true,
        socketId: socket.id
      });
    } catch (error) {
      console.error('❌ Authentication error:', error);
    }
  });

  socket.on('send-message', async (message) => {
    try {
      const { fromUserId, toUserId, text } = message;

      const newMessage = new Message({
        fromUserId,
        toUserId,
        text
      });
      await newMessage.save();

      io.to(toUserId).emit('receive-message', newMessage);
      console.log(`💬 Message sent from ${fromUserId} to ${toUserId}`);
    } catch (error) {
      console.error('❌ Message handling error:', error);
      socket.emit('message-error', {
        error: 'Failed to send message',
        originalMessage: message
      });
    }
  });

  socket.on('typing', (data) => {
    socket.to(data.toUserId).emit('typing-indicator', {
      fromUserId: data.fromUserId,
      isTyping: data.isTyping
    });
  });

  socket.on('disconnect', async () => {
    try {
      const user = await User.findOne({ socketId: socket.id });
      if (user) {
        await User.findByIdAndUpdate(user._id, {
          online: false,
          socketId: null
        });
      }
      console.log('❎ Client disconnected:', socket.id);
    } catch (error) {
      console.error('❌ Disconnection error:', error);
    }
  });

  socket.on('error', (error) => {
    console.error('🔥 Socket error:', error);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Allowed origins: ${corsOptions.origin.filter(Boolean).join(', ')}\n`);
});

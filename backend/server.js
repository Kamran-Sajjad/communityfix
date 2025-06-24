// // server.js
// import dotenv from 'dotenv';
// dotenv.config();
// import express from 'express';
// import connectDB from './config/db.js';
// import cors from 'cors';
// import path from 'path';


// import authRoutes from './routes/authRoutes.js';
// import issueRoutes from './routes/issueRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';
// import userReviewRoutes from "./routes/admin/userReviewRoutes.js";
// import userRoutes from './routes/userRoutes.js';
// import feedbackRoutes from './routes/feedback.js';
// import aiRoutes from './routes/aiRoutes.js';
// import conciseAiRoutes from './routes/conciseAiRoutes.js';


// // Connect to MongoDB
// connectDB();

// const app = express();
// const __dirname = path.resolve();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// // Routes
// app.use('/api/users', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/issues', issueRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/admin', userReviewRoutes);
// app.use('/api/feedback', feedbackRoutes);
// // <<<<<<< Ai/nizam
// app.use('/api/ai', aiRoutes);
// app.use('/api/ai', conciseAiRoutes);
// // =======
// app.use("/api/auth", authRoutes);


// // >>>>>>> feature/nizam

// // Root Route
// app.get('/', (req, res) => {
//   res.send('CommunityFix Backend Running...');
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




// // server.js
// import dotenv from 'dotenv';
// dotenv.config();
// import express from 'express';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import connectDB from './config/db.js';
// import cors from 'cors';
// import path from 'path';

// // Import routes
// import authRoutes from './routes/authRoutes.js';
// import issueRoutes from './routes/issueRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';
// import userReviewRoutes from "./routes/admin/userReviewRoutes.js";
// import userRoutes from './routes/userRoutes.js';
// import feedbackRoutes from './routes/feedback.js';
// import aiRoutes from './routes/aiRoutes.js';
// import conciseAiRoutes from './routes/conciseAiRoutes.js';
// import chatRoutes from './routes/chatRoutes.js'; // New chat routes

// // Connect to MongoDB
// connectDB();

// const app = express();
// const __dirname = path.resolve();
// const httpServer = createServer(app);

// // Configure Socket.IO
// const io = new Server(httpServer, {
//   cors: {
//     origin: process.env.FRONTEND_URL || "http://localhost:3000",
//     methods: ["GET", "POST"],
//     credentials: true
//   },
//   pingTimeout: 60000
// });

// // Middleware
// app.use(cors({
//   origin: process.env.FRONTEND_URL || "http://localhost:3000",
//   credentials: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// // Routes
// app.use('/api/users', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/issues', issueRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/admin', userReviewRoutes);
// app.use('/api/feedback', feedbackRoutes);
// app.use('/api/ai', aiRoutes);
// app.use('/api/ai', conciseAiRoutes);
// app.use("/api/auth", authRoutes);
// app.use('/api/chat', chatRoutes); // New chat routes

// // Root Route
// app.get('/', (req, res) => {
//   res.send('CommunityFix Backend Running...');
// });

// // Socket.IO connection handler
// io.on('connection', (socket) => {
//   console.log('New client connected:', socket.id);

//   // Join user to their own room
//   socket.on('setup', (userId) => {
//     socket.join(userId);
//     console.log(`User ${userId} connected with socket ${socket.id}`);
//   });

//   // Handle sending messages
//   socket.on('send-message', (message) => {
//     const { toUserId } = message;
//     socket.to(toUserId).emit('receive-message', message);
//     console.log(`Message sent from ${message.fromUserId} to ${toUserId}`);
//   });

//   // Handle typing indicators
//   socket.on('typing', (data) => {
//     socket.to(data.toUserId).emit('typing', data.fromUserId);
//   });

//   // Handle disconnect
//   socket.on('disconnect', () => {
//     console.log('Client disconnected:', socket.id);
//   });

//   // Error handling
//   socket.on('error', (error) => {
//     console.error('Socket error:', error);
//   });
// });

// const PORT = process.env.PORT || 5000;

// httpServer.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });













// import dotenv from 'dotenv';
// dotenv.config();
// import express from 'express';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import connectDB from './config/db.js';
// import cors from 'cors';
// import path from 'path';

// // Route imports
// import authRoutes from './routes/authRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import issueRoutes from './routes/issueRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';
// import userReviewRoutes from './routes/admin/userReviewRoutes.js';
// import feedbackRoutes from './routes/feedback.js';
// import aiRoutes from './routes/aiRoutes.js';
// import conciseAiRoutes from './routes/conciseAiRoutes.js';
// import chatRoutes from './routes/chatRoutes.js';

// // Connect to MongoDB
// connectDB();

// const app = express();
// const __dirname = path.resolve();
// const httpServer = createServer(app);

// // Enhanced CORS configuration
// const corsOptions = {
//   origin: [
//     process.env.FRONTEND_URL, 
//     "http://localhost:3000", 
//     "http://localhost:5173"
//   ],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// };

// // Middleware
// app.use(cors(corsOptions));
// app.options('*', cors()); // Handle preflight requests
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// // API Routes
// app.use('/api/users', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/issues', issueRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/admin', userReviewRoutes);
// app.use('/api/feedback', feedbackRoutes);
// app.use('/api/ai', aiRoutes);
// app.use('/api/ai', conciseAiRoutes);
// app.use('/api/chat', chatRoutes);

// // Health check endpoint
// app.get('/', (req, res) => {
//   res.send('CommunityFix Backend Running...');
// });

// // Socket.IO Configuration
// const io = new Server(httpServer, {
//   cors: corsOptions,
//   pingTimeout: 60000,
//   connectionStateRecovery: {
//     maxDisconnectionDuration: 2 * 60 * 1000, // 2 minutes
//     skipMiddlewares: true,
//   }
// });

// // Socket.IO Event Handlers
// io.on('connection', (socket) => {
//   console.log('New client connected:', socket.id);

//   // User authentication and room joining
//   socket.on('authenticate', (userId) => {
//     socket.join(userId);
//     console.log(`User ${userId} connected with socket ${socket.id}`);
//   });

//   // Message handling
//   socket.on('send-message', (message) => {
//     const { toUserId } = message;
//     socket.to(toUserId).emit('receive-message', message);
//     console.log(`Message routed from ${message.fromUserId} to ${toUserId}`);
//   });

//   // Disconnection handling
//   socket.on('disconnect', () => {
//     console.log('Client disconnected:', socket.id);
//   });

//   // Error handling
//   socket.on('error', (error) => {
//     console.error('Socket error:', error);
//   });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// httpServer.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   console.log(`Allowed origins: ${corsOptions.origin.filter(Boolean).join(', ')}`);
// });











// import dotenv from 'dotenv';
// dotenv.config();
// import express from 'express';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import connectDB from './config/db.js';
// import cors from 'cors';
// import path from 'path';

// // Route imports
// import authRoutes from './routes/authRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import issueRoutes from './routes/issueRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';
// import userReviewRoutes from './routes/admin/userReviewRoutes.js';
// import feedbackRoutes from './routes/feedback.js';
// import aiRoutes from './routes/aiRoutes.js';
// import conciseAiRoutes from './routes/conciseAiRoutes.js';
// import chatRoutes from './routes/chatRoutes.js';

// // Connect to MongoDB
// connectDB();

// const app = express();
// const __dirname = path.resolve();
// const httpServer = createServer(app);

// // Enhanced CORS configuration
// const corsOptions = {
//   origin: [
//     process.env.FRONTEND_URL, 
//     "http://localhost:3000", 
//     "http://localhost:5173"
//   ],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// };

// // Middleware
// app.use(cors(corsOptions));
// app.options('*', cors()); // Handle preflight requests
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// // API Routes
// app.use('/api/users', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/issues', issueRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/admin', userReviewRoutes);
// app.use('/api/feedback', feedbackRoutes);
// app.use('/api/ai', aiRoutes);
// app.use('/api/ai', conciseAiRoutes);
// app.use('/api/chat', chatRoutes);

// // Health check endpoint
// app.get('/', (req, res) => {
//   res.send('CommunityFix Backend Running...');
// });

// // ✅ Diagnostic: Log All Registered Routes (to catch invalid patterns like /:)
// function logRegisteredRoutes(app) {
//   console.log('\n🔍 Scanning registered routes:\n');
//   app._router.stack.forEach((middleware) => {
//     if (middleware.route) {
//       const methods = Object.keys(middleware.route.methods).join(', ').toUpperCase();
//       console.log(`✅ ${methods} ${middleware.route.path}`);
//     } else if (middleware.name === 'router' && middleware.handle.stack) {
//       middleware.handle.stack.forEach((handler) => {
//         const route = handler.route;
//         if (route) {
//           const methods = Object.keys(route.methods).join(', ').toUpperCase();
//           console.log(`✅ ${methods} ${route.path}`);
//         }
//       });
//     }
//   });
// }
// logRegisteredRoutes(app);

// // Socket.IO Configuration
// const io = new Server(httpServer, {
//   cors: corsOptions,
//   pingTimeout: 60000,
//   connectionStateRecovery: {
//     maxDisconnectionDuration: 2 * 60 * 1000, // 2 minutes
//     skipMiddlewares: true,
//   }
// });

// // Socket.IO Event Handlers
// io.on('connection', (socket) => {
//   console.log('New client connected:', socket.id);

//   // User authentication and room joining
//   socket.on('authenticate', (userId) => {
//     socket.join(userId);
//     console.log(`User ${userId} connected with socket ${socket.id}`);
//   });

//   // Message handling
//   socket.on('send-message', (message) => {
//     const { toUserId } = message;
//     socket.to(toUserId).emit('receive-message', message);
//     console.log(`Message routed from ${message.fromUserId} to ${toUserId}`);
//   });

//   // Disconnection handling
//   socket.on('disconnect', () => {
//     console.log('Client disconnected:', socket.id);
//   });

//   // Error handling
//   socket.on('error', (error) => {
//     console.error('Socket error:', error);
//   });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// httpServer.listen(PORT, () => {
//   console.log(`\n🚀 Server running on port ${PORT}`);
//   console.log(`🌍 Allowed origins: ${corsOptions.origin.filter(Boolean).join(', ')}\n`);
// });











// import dotenv from 'dotenv';
// dotenv.config();
// import express from 'express';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import connectDB from './config/db.js';
// import cors from 'cors';
// import path from 'path';
// import Message from './models/Message.js'; // Add this import

// // Route imports
// import authRoutes from './routes/authRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import issueRoutes from './routes/issueRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';
// import userReviewRoutes from './routes/admin/userReviewRoutes.js';
// import feedbackRoutes from './routes/feedback.js';
// import aiRoutes from './routes/aiRoutes.js';
// import conciseAiRoutes from './routes/conciseAiRoutes.js';
// import chatRoutes from './routes/chatRoutes.js';

// // Connect to MongoDB
// connectDB();

// const app = express();
// const __dirname = path.resolve();
// const httpServer = createServer(app);

// // Enhanced CORS configuration
// const corsOptions = {
//   origin: [
//     process.env.FRONTEND_URL, 
//     "http://localhost:3000", 
//     "http://localhost:5173"
//   ],
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// };

// // Middleware
// app.use(cors(corsOptions));
// app.options('*', cors()); // Handle preflight requests
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// // API Routes
// app.use('/api/users', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/issues', issueRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/admin', userReviewRoutes);
// app.use('/api/feedback', feedbackRoutes);
// app.use('/api/ai', aiRoutes);
// app.use('/api/ai', conciseAiRoutes);
// app.use('/api/chat', chatRoutes(io));

// // Health check endpoint
// app.get('/', (req, res) => {
//   res.send('CommunityFix Backend Running...');
// });

// // Socket.IO Configuration
// const io = new Server(httpServer, {
//   cors: corsOptions,
//   pingTimeout: 60000,
//   connectionStateRecovery: {
//     maxDisconnectionDuration: 2 * 60 * 1000, // 2 minutes
//     skipMiddlewares: true,
//   }
// });

// // Enhanced Socket.IO Event Handlers with Message Persistence
// io.on('connection', (socket) => {
//   console.log('New client connected:', socket.id);

//   // User authentication and room joining
//   socket.on('authenticate', async (userId) => {
//     try {
//       socket.join(userId);
//       console.log(`User ${userId} connected with socket ${socket.id}`);
      
//       // Mark user as online in database
//       await User.findByIdAndUpdate(userId, { 
//         online: true,
//         socketId: socket.id 
//       });
      
//     } catch (error) {
//       console.error('Authentication error:', error);
//     }
//   });

//   // Message handling with persistence
//   socket.on('send-message', async (message) => {
//     try {
//       const { fromUserId, toUserId, text } = message;
      
//       // Save message to database
//       const newMessage = new Message({
//         fromUserId,
//         toUserId,
//         text
//       });
//       await newMessage.save();

//       // Emit to recipient
//       socket.to(toUserId).emit('receive-message', newMessage);
//       console.log(`Message saved and routed from ${fromUserId} to ${toUserId}`);

//     } catch (error) {
//       console.error('Message handling error:', error);
//       socket.emit('message-error', {
//         error: 'Failed to send message',
//         originalMessage: message
//       });
//     }
//   });

//   // Handle typing indicators
//   socket.on('typing', (data) => {
//     socket.to(data.toUserId).emit('typing-indicator', {
//       fromUserId: data.fromUserId,
//       isTyping: data.isTyping
//     });
//   });

//   // Disconnection handling
//   socket.on('disconnect', async () => {
//     try {
//       // Mark user as offline in database
//       const user = await User.findOne({ socketId: socket.id });
//       if (user) {
//         await User.findByIdAndUpdate(user._id, { 
//           online: false,
//           socketId: null 
//         });
//       }
//       console.log('Client disconnected:', socket.id);
//     } catch (error) {
//       console.error('Disconnection error:', error);
//     }
//   });

//   // Error handling
//   socket.on('error', (error) => {
//     console.error('Socket error:', error);
//   });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// httpServer.listen(PORT, () => {
//   console.log(`\n🚀 Server running on port ${PORT}`);
//   console.log(`🌍 Allowed origins: ${corsOptions.origin.filter(Boolean).join(', ')}\n`);
// });












import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDB from './config/db.js';
import cors from 'cors';
import path from 'path';
import Message from './models/Message.js';
import User from './models/User.js'; // ✅ Missing earlier

// Route imports
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import issueRoutes from './routes/issueRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import userReviewRoutes from './routes/admin/userReviewRoutes.js';
import feedbackRoutes from './routes/feedback.js';
import aiRoutes from './routes/aiRoutes.js';
import conciseAiRoutes from './routes/conciseAiRoutes.js';
import chatRoutes from './routes/chatRoutes.js'; // 👈 must be passed `io` later
import notificationRoutes from "./routes/notificationRoutes.js";


// Connect to MongoDB
connectDB();

const app = express();
const __dirname = path.resolve();
const httpServer = createServer(app);

// CORS
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

// Create Socket.IO instance BEFORE chatRoutes
const io = new Server(httpServer, {
  cors: corsOptions,
  pingTimeout: 60000,
  connectionStateRecovery: {
    maxDisconnectionDuration: 2 * 60 * 1000,
    skipMiddlewares: true,
  }
});

// API Routes (pass io to chatRoutes)
app.use('/api/users', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin', userReviewRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/ai', conciseAiRoutes);
app.use('/api/chat', chatRoutes(io)); // ✅ Pass socket instance
app.use("/api/notifications", notificationRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('CommunityFix Backend Running...');
});

// SOCKET.IO
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('authenticate', async (userId) => {
    try {
      socket.join(userId);
      console.log(`User ${userId} connected with socket ${socket.id}`);
      await User.findByIdAndUpdate(userId, {
        online: true,
        socketId: socket.id
      });
    } catch (error) {
      console.error('Authentication error:', error);
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
      console.log(`Message saved and routed from ${fromUserId} to ${toUserId}`);
    } catch (error) {
      console.error('Message handling error:', error);
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
      console.log('Client disconnected:', socket.id);
    } catch (error) {
      console.error('Disconnection error:', error);
    }
  });

  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });
});

// START
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`🌍 Allowed origins: ${corsOptions.origin.filter(Boolean).join(', ')}\n`);
});

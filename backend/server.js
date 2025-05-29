//kamran
// // server.js
// import dotenv from 'dotenv';
// dotenv.config();
// import express from 'express';
// import connectDB from './config/db.js';
// import cors from 'cors';
// import authRoutes from './routes/authRoutes.js';
// import issueRoutes from './routes/issueRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';
// // const adminRoutes = require('./routes/adminRoutes');

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/users', authRoutes);
// app.use('/api/issues', issueRoutes);
// app.use('/api/admin', adminRoutes);
// // Root Route
// app.get('/', (req, res) => {
//   res.send('CommunityFix Backend Running...');
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



//nizam

import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import morgan from 'morgan';
import colors from 'colors';
import { errorHandler } from './middlewares/ServiceTeam/errorMiddleware.js';

// Route imports
import authRoutes from './routes/authRoutes.js';
import issueRoutes from './routes/issueRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import serviceTeamRoutes from './routes/ServiceTeam/serviceTeamRoutes.js';
import serviceTeamIssueRoutes from './routes/ServiceTeam/issueRoutes.js';
import serviceTeamReportRoutes from './routes/ServiceTeam/reportRoutes.js';
import serviceTeamReviewRoutes from './routes/ServiceTeam/reviewRoutes.js';
import serviceTeamMessageRoutes from './routes/ServiceTeam/messageRoutes.js';
import serviceTeamNotificationRoutes from './routes/ServiceTeam/notificationRoutes.js';

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/users', authRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/admin', adminRoutes);

// Service Team Routes
app.use('/api/serviceteam', serviceTeamRoutes);
app.use('/api/serviceteam/issues', serviceTeamIssueRoutes);
app.use('/api/serviceteam/reports', serviceTeamReportRoutes);
app.use('/api/serviceteam/reviews', serviceTeamReviewRoutes);
app.use('/api/serviceteam/messages', serviceTeamMessageRoutes);
app.use('/api/serviceteam/notifications', serviceTeamNotificationRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('CommunityFix Backend Running...');
});

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});



// server.js
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import issueRoutes from './routes/issueRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';
import feedbackRoutes from './routes/feedback.js';

import path from 'path';
// Connect to MongoDB
connectDB();

const app = express();

const __dirname = path.resolve();


// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Routes
app.use('/api/users', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/admin', adminRoutes);
app.use(express.urlencoded({ extended: true }));

app.use('/api/feedback', feedbackRoutes);
// Root Route
app.get('/', (req, res) => {
  res.send('CommunityFix Backend Running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});







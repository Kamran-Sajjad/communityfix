// server.js
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import issueRoutes from './routes/issueRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
// const adminRoutes = require('./routes/adminRoutes');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', authRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/admin', adminRoutes);
// Root Route
app.get('/', (req, res) => {
  res.send('CommunityFix Backend Running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});







// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import cors from 'cors';
// import authRoutes from './routes/authRoutes.js';
// import issueRoutes from './routes/issueRoutes.js';

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Parse JSON bodies

// // Routes
// app.use('/api/users', authRoutes);
// app.use('/api/issues', issueRoutes);

// // Error handling
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

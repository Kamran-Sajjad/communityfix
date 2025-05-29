import express from 'express';
import { 
  getDashboardStats, 
  getProfile, 
  updateProfile,
  getAllServiceTeams,
  registerServiceTeam,
  loginServiceTeam
} from '../../controllers/ServiceTeam/serviceTeamController.js';
import { protect, admin } from '../../middlewares/ServiceTeam/protect.js';

const router = express.Router();

// Public routes
router.post('/login', loginServiceTeam);

// Protected routes
router.get('/dashboard', protect, getDashboardStats);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

// Admin routes
router.get('/', protect, admin, getAllServiceTeams);
router.post('/register', protect, admin, registerServiceTeam);

export default router;

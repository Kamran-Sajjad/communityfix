import express from 'express';
import { 
  getNotifications, 
  markAsRead, 
  markAllAsRead
} from '../../controllers/ServiceTeam/notificationController.js';
import { protect } from '../../middlewares/ServiceTeam/protect.js';

const router = express.Router();

// Protected routes
router.get('/', protect, getNotifications);
router.put('/:id', protect, markAsRead);
router.put('/', protect, markAllAsRead);

export default router;

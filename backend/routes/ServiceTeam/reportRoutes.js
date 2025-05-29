import express from 'express';
import { 
  getReports, 
  acceptReport, 
  rejectReport,
  createReport
} from '../../controllers/ServiceTeam/reportController.js';
import { protect, admin } from '../../middlewares/ServiceTeam/protect.js';

const router = express.Router();

// Protected routes
router.get('/', protect, getReports);
router.put('/:id/accept', protect, acceptReport);
router.put('/:id/reject', protect, rejectReport);

// Admin routes
router.post('/', protect, admin, createReport);

export default router;

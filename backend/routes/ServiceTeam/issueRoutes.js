import express from 'express';
import { 
  getIssues, 
  getIssueById, 
  updateIssue,
  createIssue,
  deleteIssue
} from '../../controllers/ServiceTeam/issueController.js';

import { protect, admin } from '../../middlewares/ServiceTeam/protect.js';

const router = express.Router();

// Protected routes
router.get('/', protect, getIssues);
router.get('/:id', protect, getIssueById);
router.put('/:id', protect, updateIssue);

// Admin routes
router.post('/', protect, admin, createIssue);
router.delete('/:id', protect, admin, deleteIssue);

export default router;

import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { createIssue, getIssues } from '../controllers/issueController.js';

const router = express.Router();

router.route('/')
  .post(protect, createIssue)  // Only logged-in users can create
  .get(protect, getIssues);    // Only logged-in users can view

export default router;
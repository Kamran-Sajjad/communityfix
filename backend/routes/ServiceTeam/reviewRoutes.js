import express from 'express';
import { 
  getReviews, 
  getReviewById,
  createReview
} from '../../controllers/ServiceTeam/reviewController.js';
import { protect, admin } from '../../middlewares/ServiceTeam/protect.js';

const router = express.Router();

// Protected routes
router.get('/', protect, getReviews);
router.get('/:id', protect, getReviewById);

// Admin routes
router.post('/', protect, admin, createReview);

export default router;

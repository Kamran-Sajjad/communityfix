import express from 'express';
import { getBERTResponse } from '../controllers/aiController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, getBERTResponse);

export default router;
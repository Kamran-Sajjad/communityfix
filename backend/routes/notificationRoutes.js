import express from "express";
import { 
  getUserNotifications,
  markAsRead
} from "../controllers/notificationController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getUserNotifications);
router.patch("/:id/read", protect, markAsRead);

export default router;
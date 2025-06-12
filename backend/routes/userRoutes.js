import express from 'express';
import { updateProfile, changePassword ,getUserProfile} from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/upload.js';
// import { updateProfileImage } from '../controllers/userController.js';

const router = express.Router();

// Route to update the user's profile
router.put('/profile', protect,upload.single("profileImage"), updateProfile);

// Route to change the user's password
router.put('/password', protect, changePassword);
router.get("/profile", protect, getUserProfile);
// Route to upload/update profile image
// router.put("/profile/image", protect, upload.single("image"), updateProfileImage);

export default router;

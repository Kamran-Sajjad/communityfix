





// // // New routes in userRoutes.js for suspend and deactivate actions
// // import express from 'express';
// // import { updateProfile, changePassword, getUserProfile } from '../controllers/userController.js';
// // import { protect } from '../middlewares/authMiddleware.js';
// // import upload from '../middlewares/upload.js';
// // import User from '../models/User.js';

// // const router = express.Router();

// // // Existing routes
// // router.put('/profile', protect, upload.single("profileImage"), updateProfile);
// // router.put('/password', protect, changePassword);
// // router.get("/profile", protect, getUserProfile);

// // // Suspend user account
// // router.post('/suspended', async (req, res) => {
// //   const { userId } = req.body;
// //   try {
// //     const user = await User.findById(userId);
// //     if (!user) return res.status(404).json({ message: 'User not found' });
// //     user.status = 'suspended';
// //     await user.save();
// //     res.status(200).json({ message: 'User suspended successfully' });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error suspending user' });
// //   }
// // });

// // // Deactivate user account
// // router.post('/deactivated', async (req, res) => {
// //   const { userId } = req.body;
// //   try {
// //     const user = await User.findById(userId);
// //     if (!user) return res.status(404).json({ message: 'User not found' });
// //     user.status = 'deactivated';
// //     await user.save();
// //     res.status(200).json({ message: 'User deactivated successfully' });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error deactivating user' });
// //   }
// // });

// // export default router;






// // Cleaned userRoutes.js using controller logic only
// import express from 'express';
// import { getUserStats } from '../controllers/userController.js';
// import {
//   updateProfile,
//   changePassword,
//   getUserProfile,
//   suspendUser,
//   deactivateUser,
//   activateUser
// } from '../controllers/userController.js';
// import { protect } from '../middlewares/authMiddleware.js';
// import upload from '../middlewares/upload.js';

// const router = express.Router();

// router.put('/profile', protect, upload.single("profileImage"), updateProfile);
// router.put('/password', protect, changePassword);
// router.get("/profile", protect, getUserProfile);

// router.post("/suspended", suspendUser);
// router.post("/deactivated", deactivateUser);
// router.post("/active", activateUser);
// router.get("/stats", getUserStats);

// export default router;
import express from 'express';
import {
  updateProfile,
  changePassword,
  suspendUser,
  deactivateUser,
  activateUser,
  getUserStats,
  getAdminProfile // ✅ renamed here
} from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/upload.js';
// <<<<<<< Graph/dv
import { getUserStatistics } from "../controllers/userController.js";
// import { updateProfileImage } from '../controllers/userController.js';
// =======
// >>>>>>> resident/backend
import{ getUserProfile } from '../controllers/userController.js';
const router = express.Router();

router.put('/profile', protect, upload.single("profileImage"), updateProfile);
router.put('/password', protect, changePassword);
// <<<<<<< Graph/dv
router.get("/profile", protect, getUserProfile);
router.get('/statistics', protect, getUserStatistics);
// Route to upload/update profile image
// router.put("/profile/image", protect, upload.single("image"), updateProfileImage);
// =======
router.get("/profile", protect, getAdminProfile); 
router.post("/suspended", suspendUser);
router.post("/deactivated", deactivateUser);
router.post("/active", activateUser);
router.get("/stats", getUserStats);
// >>>>>>> resident/backend

export default router;

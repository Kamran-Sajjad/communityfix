

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


















// import express from 'express';
// import {
//   updateProfile,
//   changePassword,
//   suspendUser,
//   deactivateUser,
//   activateUser,
//   getUserStats,
//   getAdminProfile // ✅ renamed here
// } from '../controllers/userController.js';
// import { protect } from '../middlewares/authMiddleware.js';
// import upload from '../middlewares/upload.js';
// // <<<<<<< Graph/dv
// import { getUserStatistics } from "../controllers/userController.js";
// // import { updateProfileImage } from '../controllers/userController.js';
// // =======
// // >>>>>>> resident/backend

// const router = express.Router();

// router.put('/profile', protect, upload.single("profileImage"), updateProfile);
// router.put('/password', protect, changePassword);
// // <<<<<<< Graph/dv
// router.get("/profile", protect, getUserProfile);
// router.get('/statistics', protect, getUserStatistics);
// // Route to upload/update profile image
// // router.put("/profile/image", protect, upload.single("image"), updateProfileImage);
// // =======
// router.get("/profile", protect, getAdminProfile); 
// router.post("/suspended", suspendUser);
// router.post("/deactivated", deactivateUser);
// router.post("/active", activateUser);
// router.get("/stats", getUserStats);
// // >>>>>>> resident/backend

// export default router;











import express from 'express';
import {
  updateProfile,
  changePassword,
  suspendUser,
  deactivateUser,
  activateUser,
  getUserStats,
  getUserProfile,
  getAdminProfile // ✅ renamed here
} from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/upload.js';
// <<<<<<< Graph/dv
import { getUserStatistics } from "../controllers/userController.js";
// import { updateProfileImage } from '../controllers/userController.js';
// =======
// >>>>>>> resident/backend

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
router.get("/profile", protect, getUserProfile,
); 
router.post("/suspended", suspendUser);
router.post("/deactivated", deactivateUser);
router.post("/active", activateUser);
router.get("/stats", getUserStats);
// >>>>>>> resident/backend

export default router;

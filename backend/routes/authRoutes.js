// import express from "express";
// import {
//   registerUser,
//   loginUser,
//   forgotPassword,
//   verifyOtp,
//   resetPassword,
//   precheckEmail,
//   sendSignupOtp,
//   verifySignupOtp,
//   createAdmin,
// } from "../controllers/authController.js";
// import { protect } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// router.post("/signup", registerUser);
// router.post("/login", loginUser);
// router.post("/precheck-email", precheckEmail);
// router.post("/forgot-password", forgotPassword);
// router.post("/verify-otp", verifyOtp);
// router.post("/reset-password", resetPassword);
// router.post("/send-signup-otp", sendSignupOtp);
// router.post("/verify-signup-otp", verifySignupOtp);

// router.post("/create-admin", protect , adminOnly, createAdmin);


// export default router;












import express from "express";
import {
  registerUser,
  loginUser,
  forgotPassword,
  verifyOtp,
  resetPassword,
  precheckEmail,
  sendSignupOtp,
  verifySignupOtp,
  createAdmin,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/precheck-email", precheckEmail);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);
router.post("/send-signup-otp", sendSignupOtp);
router.post("/verify-signup-otp", verifySignupOtp);

router.post("/create-admin", protect , createAdmin);
// router.post("/create-admin", protect ,adminOnly, createAdmin);


router.use((req, res, next) => {
  console.log(`[AUTH ROUTE] ${req.method} ${req.originalUrl}`);
  next();
});


export default router;

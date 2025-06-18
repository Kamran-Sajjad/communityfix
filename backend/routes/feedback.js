

// import express from "express";
// import multer from "multer";
// import { submitFeedback, getAllFeedback } from "../controllers/feedbackController.js";
// import { protect } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// router.post("/", protect, upload.single("attachment"), submitFeedback);
// router.get("/", getAllFeedback);

// export default router; // ✅ Use default export here






// use it 
import express from "express";
import upload from "../middlewares/upload.js"; // ✅ use the configured one
import { submitFeedback, getAllFeedback } from "../controllers/feedbackController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, upload.single("attachment"), submitFeedback);
router.get("/", getAllFeedback);

export default router;


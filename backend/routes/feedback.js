// // // import express from "express";
// // // import upload from "../middlewares/upload.js";
// // // import Feedback from "../models/Feedback.js";

// // // const router = express.Router();

// // // router.post("/submit", upload.single("file"), async (req, res) => {
// // //   try {
// // //     const { name, address, issue, comment, rating } = req.body;
// // //     const uploadedFile = req.file;
// // //     console.log("Uploaded file:", req.file);

// // //     if (!name || !address || !issue || !comment) {
// // //       return res
// // //         .status(400)
// // //         .json({ message: "All required fields must be filled." });
// // //     }

// // //     const imageUrl = uploadedFile?.path || "";

// // //     const newFeedback = new Feedback({
// // //       name,
// // //       address,
// // //       issue,
// // //       comment,
// // //       rating,
// // //       imageUrl,
// // //     });

// // //     await newFeedback.save();

// // //     return res.status(200).json({
// // //       message: "Feedback submitted and stored successfully!",
// // //       data: newFeedback,
// // //     });
// // //   } catch (error) {
// // //     console.error("Save Error:", error.message);
// // //     return res.status(500).json({ message: "Server Error" });
// // //   }
// // // });

// // // export default router;










// // import express from 'express';
// // import upload from '../middlewares/upload.js';
// // import Feedback from '../models/Feedback.js';
// // import { protect } from '../middlewares/authMiddleware.js';
// // import Issue from '../models/Issue.js';

// // const router = express.Router();

// // router.post('/submit', upload.single('file'), async (req, res) => {
// //   try {
// //     const { name, address, issue, comment, rating } = req.body;
// //     const uploadedFile = req.file;

// //     if (!name || !address || !issue || !comment) {
// //       return res.status(400).json({ message: 'All required fields must be filled.' });
// //     }

// //     // Optional: check if rating is a number
// //     const numericRating = Number(rating);

// //     // Optional: serve full URL
// //     const imageUrl = uploadedFile
// //       ? `${req.protocol}://${req.get('host')}/uploads/${uploadedFile.filename}`
// //       : '';

// //     const newFeedback = new Feedback({
// //       name,
// //       address,
// //       issue,
// //       comment,
// //       rating: numericRating,
// //       imageUrl,
// //     });

// //     await newFeedback.save();

// //     return res.status(200).json({
// //       message: 'Feedback submitted and stored successfully!',
// //       data: newFeedback,
// //     });
// //   } catch (error) {
// //     console.error('Save Error:', error.message);
// //     return res.status(500).json({ message: 'Server Error' });
// //   }
// // });





// // // router.get("/myissues", protect, async (req, res) => {
// // //   try {
// // //     const userId = req.user.id; // or req.user._id
// // //     const issues = await issueSchema.find({ userId }); // or user: userId
// // //     res.status(200).json(issues);
// // //   } catch (error) {
// // //     console.error("Failed to get issues:", error);
// // //     res.status(500).json({ message: "Failed to get issue" });
// // //   }
// // // });


// // router.get("/myissues", protect, async (req, res) => {
// //   try {
// //     const userId = req.user._id;
// //     const issues = await Issue.find({ createdBy: userId }).select('title');
// //     res.status(200).json(issues);
// //   } catch (error) {
// //     console.error("Failed to get issues:", error);
// //     res.status(500).json({ message: "Failed to get issue" });
// //   }
// // });




// // export default router;
// // backend/routes/admin/feedbackRoutes.js
// import express from "express";
// import multer from "multer";
// import { submitFeedback, getAllFeedback } from "../../controllers/admin/feedbackController.js";
// import { protect } from "../../middlewares/admin/authMiddleware.js";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// router.post("/", protect, upload.single("attachment"), submitFeedback);
// router.get("/", getAllFeedback);

// export default router;
// backend/routes/feedback.js
import express from "express";
import multer from "multer";
import { submitFeedback, getAllFeedback } from "../controllers/feedbackController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/", protect, upload.single("attachment"), submitFeedback);
router.get("/", getAllFeedback);

export default router; // ✅ Use default export here

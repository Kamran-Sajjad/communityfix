// import express from 'express';
// import { protect } from '../middlewares/authMiddleware.js';
// import { createIssue, getIssues } from '../controllers/issueController.js';

// const router = express.Router();

// router.route('/')
//   .post(protect, createIssue)  // Only logged-in users can create
//   .get(protect, getIssues);    // Only logged-in users can view

// export default router;







import express from "express";
import { createIssue } from "../controllers/issueController.js";
import upload from "../middlewares/upload.js";
// import upload from "../middlewares/multer.js";
import { protect } from "../middlewares/authMiddleware.js"; // ✅ import protect
const router = express.Router();

router.post("/report", protect, upload.array("attachments", 3), createIssue);
// router.post("/report", createIssue);


export default router;

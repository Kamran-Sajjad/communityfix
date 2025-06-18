

// // import express from "express";
// // import { createIssue ,  getAllIssues, upvoteIssue, commentOnIssue,getIssueById,getUserIssues, getIssuesByStatus} from "../controllers/issueController.js";
// // import upload from "../middlewares/upload.js";
// // import { protect } from "../middlewares/authMiddleware.js"; 
// // const router = express.Router();

// // router.post("/report", protect, upload.array("attachments", 3), createIssue);
// // router.get("/list", protect, getAllIssues);
// // router.post("/:id/upvote", protect, upvoteIssue);
// // router.post("/:issueId/comment", protect, commentOnIssue);
// // router.get("/myissues", protect, getUserIssues);
// // router.get("/:id", protect, getIssueById);
// // router.get("/status/:status", protect, getIssuesByStatus);
// // router.get('/user', protect, getUserIssues);



// // export default router;






// import express from "express";
// import { createIssue ,  getAllIssues, upvoteIssue, commentOnIssue,getIssueById,getUserIssues, getIssuesByStatus} from "../controllers/issueController.js";
// import upload from "../middlewares/upload.js";
// import { protect } from "../middlewares/authMiddleware.js"; 
// const router = express.Router();

// router.post("/report", protect, upload.array("attachments", 3), createIssue);

// router.get('/api/issues', issueController.getIssues);

// router.post("/:id/upvote", protect, upvoteIssue);
// router.post("/:issueId/comment", protect, commentOnIssue);
// router.get("/myissues", protect, getUserIssues);
// router.get("/:id", protect, getIssueById);
// router.get("/status/:status", protect, getIssuesByStatus);
// // router.get('/list', protect, getUserIssues);



// export default router;

import express from "express";
import { getWorkProgress } from "../controllers/issueController.js";
import {
  createIssue,
  getAllIssues,
  upvoteIssue,
  commentOnIssue,
  getIssueById,
  getUserIssues,
  getIssuesByStatus,
} from "../controllers/issueController.js";
import upload from "../middlewares/upload.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// POST - create an issue
router.post("/report", protect, upload.array("attachments", 3), createIssue);

// GET - all issues (for admin)
router.get("/", getAllIssues);

// POST - upvote issue
router.post("/:id/upvote", protect, upvoteIssue);

// POST - comment on an issue
router.post("/:issueId/comment", protect, commentOnIssue);

// GET - issues created by a specific user
router.get("/myissues", protect, getUserIssues);

// GET - issue by id
router.get("/:id", protect, getIssueById);

// GET - issues by status (pending, in_progress, resolved)
router.get("/status/:status", protect, getIssuesByStatus);
router.get("/progress", getWorkProgress);

export default router;

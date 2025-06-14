





import express from "express";
import { createIssue ,  getAllIssues, upvoteIssue, commentOnIssue,getIssueById,getUserIssues, getIssuesByStatus} from "../controllers/issueController.js";
import upload from "../middlewares/upload.js";
import { protect } from "../middlewares/authMiddleware.js"; 
const router = express.Router();

router.post("/report", protect, upload.array("attachments", 3), createIssue);
router.get("/list", protect, getAllIssues);
router.post("/:id/upvote", protect, upvoteIssue);
router.post("/:issueId/comment", protect, commentOnIssue);
router.get("/myissues", protect, getUserIssues);
router.get("/:id", protect, getIssueById);
router.get("/status/:status", protect, getIssuesByStatus);




// export default router;
// import express from 'express';
// import { createIssue, getAllIssues, getIssueById, commentOnIssue, upvoteIssue, getUserIssues } from '../controllers/issueController.js';
// import upload from '../middlewares/upload.js';
// import { protect } from '../middlewares/authMiddleware.js';

// const router = express.Router();

// router.post('/', protect, upload.array('attachments'), createIssue);
// router.get('/', getAllIssues);
// router.get('/:id', getIssueById);
// router.post('/:issueId/comment', protect, commentOnIssue);
// router.post('/:id/upvote', protect, upvoteIssue);
// router.get('/user', protect, getUserIssues);
// export default router;

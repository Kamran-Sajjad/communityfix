





import express from "express";
import { createIssue ,  getAllIssues, upvoteIssue, commentOnIssue,getIssueById,getUserIssues, getIssuesByStatus} from "../controllers/issueController.js";
import upload from "../middlewares/upload.js";
import { protect } from "../middlewares/authMiddleware.js"; // ✅ import protect
const router = express.Router();

router.post("/report", protect, upload.array("attachments", 3), createIssue);
router.get("/list", protect, getAllIssues);
router.post("/:id/upvote", protect, upvoteIssue);
router.post("/:issueId/comment", protect, commentOnIssue);
// router.post("/:id/comment", protect, commentOnIssue);
router.get("/myissues", protect, getUserIssues);
router.get("/:id", protect, getIssueById);
router.get("/status/:status", protect, getIssuesByStatus);

export default router;



// import express from "express";
// import { getWorkProgress } from "../controllers/issueController.js";

// import {
//   createIssue,
//   getAllIssues,
//   upvoteIssue,
//   commentOnIssue,
//   getIssueById,
//   getUserIssues,
//   getIssuesByStatus,
// } from "../controllers/issueController.js";
// import upload from "../middlewares/upload.js";
// import { protect } from "../middlewares/authMiddleware.js";

// const router = express.Router();
// import { getIssueStatistics } from "../controllers/issueController.js";

// // <<<<<<< Graph/dv
// router.get('/statistics', protect, getIssueStatistics);
// // =======
// // POST - create an issue
// // >>>>>>> resident/backend
// router.post("/report", protect, upload.array("attachments", 3), createIssue);

// // GET - all issues (for admin)
// router.get("/", getAllIssues);

// // POST - upvote issue
// router.post("/:id/upvote", protect, upvoteIssue);

// // POST - comment on an issue
// router.post("/:issueId/comment", protect, commentOnIssue);

// // GET - issues created by a specific user
// router.get("/myissues", protect, getUserIssues);

// // GET - issue by id
// router.get("/:id", protect, getIssueById);

// // GET - issues by status (pending, in_progress, resolved)
// router.get("/status/:status", protect, getIssuesByStatus);

// export default router;














// <<<<<<< ST/basit
// import express from "express";
// import  {getWorkProgress}  from "../controllers/issueController.js";
// =======
// >>>>>>> admin/kamran






// import express from "express";
// import { getWorkProgress } from "../controllers/issueController.js";

// import {
//   createIssue,
//   getAllIssues,
//   upvoteIssue,
//   commentOnIssue,
//   getIssueById,
//   getUserIssues,
//   getIssuesByStatus,
// } from "../controllers/issueController.js";
// import upload from "../middlewares/upload.js";
// import { protect } from "../middlewares/authMiddleware.js";

// const router = express.Router();
// import { getIssueStatistics } from "../controllers/issueController.js";

// // <<<<<<< Graph/dv
// router.get('/statistics', protect, getIssueStatistics);
// // =======
// // POST - create an issue
// // >>>>>>> resident/backend
// router.post("/report", protect, upload.array("attachments", 3), createIssue);

// // GET - all issues (for admin)
// router.get("/", getAllIssues);

// // POST - upvote issue
// router.post("/:id/upvote", protect, upvoteIssue);

// // POST - comment on an issue
// router.post("/:issueId/comment", protect, commentOnIssue);

// // GET - issues created by a specific user
// router.get("/myissues", protect, getUserIssues);

// // GET - issue by id
// router.get("/:id", protect, getIssueById);

// // GET - issues by status (pending, in_progress, resolved)
// router.get("/status/:status", protect, getIssuesByStatus);

// export default router;









// import express from "express";
// import upload from "../middlewares/upload.js";
// import { protect } from "../middlewares/authMiddleware.js";
// import {
//   createIssue,
//   getAllIssues,
//   upvoteIssue,
//   commentOnIssue,
//   getIssueById,
//   getUserIssues,
//   getIssuesByStatus,
//   getWorkProgress,
//   getIssueStatistics,
// } from "../controllers/issueController.js";

// const router = express.Router();

// // GET - statistics
// router.get("/statistics", protect, getIssueStatistics);

// // POST - create an issue
// router.post("/report", protect, upload.array("attachments", 3), createIssue);

// // GET - all issues (for admin)
// router.get("/", getAllIssues);

// // GET - issues created by a specific user
// router.get("/myissues", protect, getUserIssues);

// // GET - issues by status (pending, in_progress, resolved)
// router.get("/status/:status", protect, getIssuesByStatus);

// // POST - upvote issue
// router.post("/:id/upvote", protect, upvoteIssue);

// // POST - comment on an issue
// router.post("/:issueId/comment", protect, commentOnIssue);

// // GET - issue by ID (keep this last to avoid route conflict)
// router.get("/:id", protect, getIssueById);

// export default router;








import express from "express";
import {
  createIssue,
  getAllIssues,
  upvoteIssue,
  commentOnIssue,
  getIssueById,
  getUserIssues,
  // getMyIssues,
  getIssuesByStatus,
  // <<<<<<< chat/system
  // getIssueStatistics,
  getWorkProgress,
  // =======
  acceptIssue,
  rejectIssue
  // >>>>>>> resident/backend
} from "../controllers/issueController.js";
import upload from "../middlewares/upload.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
// <<<<<<< chat/system

// Properly formatted routes:
router.post("/report", protect, upload.array("attachments", 3), createIssue);
router.get("/", protect, getAllIssues);
router.get("/statistics", protect, getIssueStatistics);
router.get("/progress", protect, getWorkProgress);
router.get("/myissues", protect, getUserIssues);
router.get("/user/:userId", protect, getUserIssues);
router.get("/status/:status", protect, getIssuesByStatus);
router.get("/:issueId", protect, getIssueById);
router.post("/:issueId/upvote", protect, upvoteIssue);
router.post("/:issueId/comment", protect, commentOnIssue);
// =======
import { getIssueStatistics } from "../controllers/issueController.js";
import Issue from "../models/Issue.js";
import { getAcceptedSocietalIssues } from "../controllers/issueController.js";
import { getAcceptedHouseholdIssues } from "../controllers/issueController.js";

router.get("/work-progress", protect, getWorkProgress);

router.get("/household/accepted", protect, getAcceptedHouseholdIssues);

router.get("/societal/accepted", protect, getAcceptedSocietalIssues);

router.get('/statistics', protect, getIssueStatistics);

router.post("/report", protect, upload.array("attachments", 3), createIssue);

// to fetch issues in residents
router.get("/list", getAllIssues);
// to fetch issues in admin
router.get("/", protect, getAllIssues);


// router.post("/:issueId/upvote", protect, upvoteIssue);
router.post("/:id/upvote", protect, upvoteIssue);


router.post("/:issueId/comment", protect, commentOnIssue);


router.get("/myissues", protect, getUserIssues);

// router.post("/:id/accept", protect, acceptIssue);  

// router.post("/:id/reject", protect, rejectIssue); 
router.post("/:issueId/accept", protect, acceptIssue);

router.post("/:issueId/reject", protect, rejectIssue);

router.get("/:id", protect, getIssueById);

router.get("/status/:status", protect, getIssuesByStatus);
// Fetch the list of voters and their priorities
router.get("/:issueId/voters", protect, async (req, res) => {
  const { issueId } = req.params;

  try {
    const issue = await Issue.findById(issueId).populate('voters.userId', 'fullName email');  // Populate user details

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    // Prepare response data
    const votersData = issue.voters.map((voter) => ({
      user: voter.userId,
      priority: voter.priority,
    }));

    res.status(200).json({ success: true, voters: votersData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to fetch voters" });
  }
});

// >>>>>>> resident/backend



export default router;


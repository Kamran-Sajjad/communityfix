

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
   acceptIssue,  
  rejectIssue 
} from "../controllers/issueController.js";
import upload from "../middlewares/upload.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
import { getIssueStatistics } from "../controllers/issueController.js";
import Issue from "../models/Issue.js";


router.get('/statistics', protect, getIssueStatistics);

router.post("/report", protect, upload.array("attachments", 3), createIssue);

// to fetch issues in residents
router.get("/list", getAllIssues);
// to fetch issues in admin
router.get("/", protect, getAllIssues);


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


export default router;

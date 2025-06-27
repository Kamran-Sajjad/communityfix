



// import express from "express";
// import {
//   createIssue,
//   getAllIssues,
//   upvoteIssue,
//   commentOnIssue,
//   getIssueById,
//   getUserIssues,
//   // getMyIssues,
//   getIssuesByStatus,

//   // getIssueStatistics,
//   getWorkProgress,
//   acceptIssue,
//   rejectIssue
//   } from "../controllers/issueController.js";
// import upload from "../middlewares/upload.js";
// import { protect } from "../middlewares/authMiddleware.js";

// const router = express.Router();
// // <<<<<<< chat/system

// // Properly formatted routes:
// router.post("/report", protect, upload.array("attachments", 3), createIssue);
// router.get("/", protect, getAllIssues);
// router.get("/statistics", protect, getIssueStatistics);
// router.get("/progress", protect, getWorkProgress);
// router.get("/myissues", protect, getUserIssues);
// router.get("/user/:userId", protect, getUserIssues);
// router.get("/status/:status", protect, getIssuesByStatus);
// router.get("/:issueId", protect, getIssueById);
// router.post("/:issueId/upvote", protect, upvoteIssue);
// router.post("/:issueId/comment", protect, commentOnIssue);
// // =======
// import { getIssueStatistics } from "../controllers/issueController.js";
// import Issue from "../models/Issue.js";
// import { getAcceptedSocietalIssues } from "../controllers/issueController.js";
// import { getAcceptedHouseholdIssues } from "../controllers/issueController.js";

// router.get("/work-progress", protect, getWorkProgress);

// router.get("/household/accepted", protect, getAcceptedHouseholdIssues);

// router.get("/societal/accepted", protect, getAcceptedSocietalIssues);

// router.get('/statistics', protect, getIssueStatistics);

// router.post("/report", protect, upload.array("attachments", 3), createIssue);

// // to fetch issues in residents
// router.get("/list", getAllIssues);
// // to fetch issues in admin
// router.get("/", protect, getAllIssues);


// // router.post("/:issueId/upvote", protect, upvoteIssue);
// router.post("/:id/upvote", protect, upvoteIssue);


// router.post("/:issueId/comment", protect, commentOnIssue);


// router.get("/myissues", protect, getUserIssues);

// // router.post("/:id/accept", protect, acceptIssue);  

// // router.post("/:id/reject", protect, rejectIssue); 
// router.post("/:issueId/accept", protect, acceptIssue);

// router.post("/:issueId/reject", protect, rejectIssue);

// router.get("/:id", protect, getIssueById);

// router.get("/status/:status", protect, getIssuesByStatus);
// // Fetch the list of voters and their priorities
// router.get("/:issueId/voters", protect, async (req, res) => {
//   const { issueId } = req.params;

//   try {
//     const issue = await Issue.findById(issueId).populate('voters.userId', 'fullName email');  // Populate user details

//     if (!issue) {
//       return res.status(404).json({ message: "Issue not found" });
//     }

//     // Prepare response data
//     const votersData = issue.voters.map((voter) => ({
//       user: voter.userId,
//       priority: voter.priority,
//     }));

//     res.status(200).json({ success: true, voters: votersData });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Failed to fetch voters" });
//   }
// });



// export default router;



















// import express from "express";
// import {
//   createIssue,
//   getAllIssues,
//   upvoteIssue,
//   commentOnIssue,
//   getIssueById,
//   getUserIssues,
//   getIssuesByStatus,
//   getWorkProgress,
//   acceptIssue,
//   rejectIssue,
//   acceptIssueByServiceTeam,
//   rejectIssueByServiceTeam
// } from "../controllers/issueController.js";
// import upload from "../middlewares/upload.js";
// import { protect } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// router.post("/report", protect, upload.array("attachments", 3), createIssue);
// router.get("/list", protect, getAllIssues);
// router.get("/statistics", protect, getIssueStatistics);
// router.get("/progress", protect, getWorkProgress);
// router.get("/myissues", protect, getUserIssues);
// router.get("/user/:userId", protect, getUserIssues);
// router.get("/status/:status", protect, getIssuesByStatus);
// router.get("/:issueId", protect, getIssueById);
// router.post("/:issueId/upvote", protect, upvoteIssue);
// router.post("/:issueId/comment", protect, commentOnIssue);
// // =======
// import { getIssueStatistics } from "../controllers/issueController.js";
// import Issue from "../models/Issue.js";
// import { getAcceptedSocietalIssues } from "../controllers/issueController.js";
// import { getAcceptedHouseholdIssues } from "../controllers/issueController.js";

// router.get("/work-progress", protect, getWorkProgress);

// router.get("/household/accepted", protect, getAcceptedHouseholdIssues);

// router.get("/societal/accepted", protect, getAcceptedSocietalIssues);

// router.get('/statistics', protect, getIssueStatistics);

// router.post("/report", protect, upload.array("attachments", 3), createIssue);



// // to fetch issues in residents
// router.get("/list", getAllIssues);
// // to fetch issues in admin
// router.get("/", protect, getAllIssues);


// // router.post("/:issueId/upvote", protect, upvoteIssue);
// router.post("/:id/upvote", protect, upvoteIssue);


// router.post("/:issueId/comment", protect, commentOnIssue);


// router.get("/myissues", protect, getUserIssues);


// router.post("/:issueId/accept", protect, acceptIssue);

// router.post("/:issueId/reject", protect, rejectIssue);

// router.get("/:id", protect, getIssueById);


// router.post("/:issueId/accept/service", protect, acceptIssueByServiceTeam);
// router.post("/:issueId/reject/service", protect, rejectIssueByServiceTeam);


// router.get("/status/:status", protect, getIssuesByStatus);
// // Fetch the list of voters and their priorities
// router.get("/:issueId/voters", protect, async (req, res) => {
//   const { issueId } = req.params;

//   try {
//     const issue = await Issue.findById(issueId).populate('voters.userId', 'fullName email');  // Populate user details

//     if (!issue) {
//       return res.status(404).json({ message: "Issue not found" });
//     }

//     // Prepare response data
//     const votersData = issue.voters.map((voter) => ({
//       user: voter.userId,
//       priority: voter.priority,
//     }));

//     res.status(200).json({ success: true, voters: votersData });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Failed to fetch voters" });
//   }
// });



// export default router;





















// import express from "express";
// import {
//   createIssue,
//   getAllIssues,
//   upvoteIssue,
//   commentOnIssue,
//   getIssueById,
//   getUserIssues,
//   getIssuesByStatus,
//   getWorkProgress,
//   acceptIssue,
//   rejectIssue,
//   acceptIssueByServiceTeam,
//   rejectIssueByServiceTeam,
//   getServiceTeamAcceptedIssues, // Add this import
//   getIssueStatistics,
//   getAcceptedSocietalIssues,
//   getAcceptedHouseholdIssues
// } from "../controllers/issueController.js";
// import upload from "../middlewares/upload.js";
// import { protect } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// // Existing routes
// router.post("/report", protect, upload.array("attachments", 3), createIssue);
// router.get("/list", protect, getAllIssues);
// router.get("/statistics", protect, getIssueStatistics);
// router.get("/progress", protect, getWorkProgress);
// router.get("/myissues", protect, getUserIssues);
// router.get("/user/:userId", protect, getUserIssues);
// router.get("/status/:status", protect, getIssuesByStatus);
// router.get("/:issueId", protect, getIssueById);
// router.post("/:issueId/upvote", protect, upvoteIssue);
// router.post("/:issueId/comment", protect, commentOnIssue);

// // Service team routes
// router.get("/service/accepted", protect, getServiceTeamAcceptedIssues); // This is your new route
// router.post("/:issueId/accept/service", protect, acceptIssueByServiceTeam);
// router.post("/:issueId/reject/service", protect, rejectIssueByServiceTeam);

// // Societal and household issues
// router.get("/household/accepted", protect, getAcceptedHouseholdIssues);
// router.get("/societal/accepted", protect, getAcceptedSocietalIssues);


// router.put("/:id/status", protect, updateIssueStatus);

// // Voters route
// router.get("/:issueId/voters", protect, async (req, res) => {
//   const { issueId } = req.params;

//   try {
//     const issue = await Issue.findById(issueId).populate('voters.userId', 'fullName email');

//     if (!issue) {
//       return res.status(404).json({ message: "Issue not found" });
//     }

//     const votersData = issue.voters.map((voter) => ({
//       user: voter.userId,
//       priority: voter.priority,
//     }));

//     res.status(200).json({ success: true, voters: votersData });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Failed to fetch voters" });
//   }
// });

// export default router;























import express from "express";
import {
  createIssue,
  getAllIssues,
  upvoteIssue,
  commentOnIssue,
  getIssueById,
  getUserIssues,
  getIssuesByStatus,
  getWorkProgress,
  acceptIssue,
  rejectIssue,
  acceptIssueByServiceTeam,
  rejectIssueByServiceTeam,
  getServiceTeamAcceptedIssues,
  getIssueStatistics,
  getAcceptedSocietalIssues,
  getAcceptedHouseholdIssues,
  updateIssueStatus
} from "../controllers/issueController.js";
import upload from "../middlewares/upload.js";
import { protect } from "../middlewares/authMiddleware.js";
import Issue from "../models/Issue.js";

const router = express.Router();

// Issue reporting and management
router.post("/report", protect, upload.array("attachments", 3), createIssue);
router.get("/list", protect, getAllIssues);
router.get("/", protect, getAllIssues);
router.get("/statistics", protect, getIssueStatistics);
router.get("/progress", protect, getWorkProgress);
router.get("/myissues", protect, getUserIssues);
router.get("/user/:userId", protect, getUserIssues);
router.get("/status/:status", protect, getIssuesByStatus);
// router.get("/:issueId", protect, getIssueById);
router.get("/:id", protect, getIssueById);
// router.post("/:issueId/upvote", protect, upvoteIssue);
router.post("/:id/upvote", protect, upvoteIssue);
router.post("/:issueId/comment", protect, commentOnIssue);

// Admin approval routes
router.post("/:issueId/accept", protect, acceptIssue);
router.post("/:issueId/reject", protect, rejectIssue);

// Service team routes
router.get("/service/accepted", protect, getServiceTeamAcceptedIssues);
router.post("/:issueId/accept/service", protect, acceptIssueByServiceTeam);
router.post("/:issueId/reject/service", protect, rejectIssueByServiceTeam);
router.put("/:id/status", protect, updateIssueStatus);

// Societal and household issues
router.get("/household/accepted", protect, getAcceptedHouseholdIssues);
router.get("/societal/accepted", protect, getAcceptedSocietalIssues);

// Voters route
router.get("/:issueId/voters", protect, async (req, res) => {
  const { issueId } = req.params;

  try {
    const issue = await Issue.findById(issueId).populate('voters.userId', 'fullName email');

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

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
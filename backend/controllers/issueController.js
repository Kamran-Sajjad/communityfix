


import { JSDOM } from "jsdom";
import createDOMPurify from "dompurify";
const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);
import Issue from "../models/Issue.js";
import { cloudinary, storage } from "../config/cloudinary.js";
// import issueSchema from "../models/Issue.js";

// Create a new issue
export const createIssue = async (req, res) => {
  try {
    const {
      title,name,description,issueCategory,address,contact,issueType,} = req.body;

    // Sanitize the description before saving it
    const sanitizedDescription = DOMPurify.sanitize(description);

    const files = req.files;
    let attachments = [];

    if (files && files.length > 0) {
      for (const file of files) {
        const uploaded = await cloudinary.uploader.upload(file.path, {
          folder: "communityfix/issues",
        });

        attachments.push({
          url: uploaded.secure_url,
          public_id: uploaded.public_id,
        });
      }
    }

    const newIssue = new Issue({
      title,
      name,
      description: sanitizedDescription, // Save the sanitized description
      issueCategory,
      address,
      contact,
      issueType,
      attachments,
      createdBy: req.user._id,
    });

    await newIssue.save();

    res
      .status(201)
      .json({ success: true, message: "Issue reported", issue: newIssue });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get all issues
export const getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, issues });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to fetch issues" });
  }
};

// Upvote issue
export const upvoteIssue = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ message: "Issue not found" });

    // Check if already voted
    if (issue.voters.includes(req.user._id)) {
      return res.status(400).json({ message: "You already upvoted" });
    }

    issue.voters.push(req.user._id);
    issue.upvotes += 1;
    await issue.save();

    res.status(200).json({ success: true, message: "Upvoted", issue });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to upvote" });
  }
};

// backend/controllers/issueController.js

export const commentOnIssue = async (req, res) => {
  try {
    const { text } = req.body; // Get the comment text
    const { issueId } = req.params; // Get the issueId from the URL params

    // Ensure the text is not empty
    if (!text || text.trim().length === 0) {
      return res.status(400).json({ message: "Comment text cannot be empty" });
    }
    const sanitizedText = DOMPurify.sanitize(text);

    // Find the issue by ID
    const issue = await Issue.findById(issueId).populate(
      "comments.user",
      "fullName avatar"
    );

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    // Add the new comment to the issue
    issue.comments.push({
      user: req.user._id, // Assuming you have a user object on the request (via authentication middleware)
      text: sanitizedText,
      createdAt: new Date(),
    });

    // Save the updated issue with the new comment
    await issue.save();

    // Return the updated issue with the new comment
    res.status(201).json({ success: true, issue }); // Send the updated issue back
  } catch (error) {
    console.error("Failed to post comment:", error);
    res.status(500).json({ success: false, message: "Failed to post comment" });
  }
};

// Get issue by ID
export const getIssueById = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id)
      .populate("comments.user", "fullName avatar")
      .populate("voters", "user");
    if (!issue) return res.status(404).json({ message: "Issue not found" });

    res.status(200).json({ success: true, issue });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to get issue" });
  }
};



// import Issue from '../models/Issue.js';

export const getUserIssues = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      console.log("No user ID found in req.user");
      return res.status(400).json({ success: false, message: 'User not authenticated' });
    }

    const issues = await Issue.find({ createdBy: userId }).select('title description issueType status upvotes createdAt attachments');
    // const issues = await Issue.find({ createdBy: userId }).select('title');

    return res.status(200).json({ success: true, issues });
  } catch (error) {
    console.error("Error in getUserIssues:", error);
    return res.status(500).json({ success: false, message: 'Failed to get issue' });
  }
};



// Get issues by status
export const getIssuesByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    // Validate status
    const validStatuses = ['pending', 'in_progress', 'resolved', 'closed'];
    if (!validStatuses.includes(status.toLowerCase())) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }

    const issues = await Issue.find({ status: status.toLowerCase() }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, issues });
  } catch (err) {
    console.error("Failed to fetch issues by status:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
export const getIssueStatistics = async (req, res) => {
  try {
    const { year, month, timeRange } = req.query;
    const yearNum = parseInt(year) || new Date().getFullYear();
    const monthNum = month ? parseInt(month) : new Date().getMonth() + 1;

    if (timeRange === 'monthly') {
      // Monthly statistics logic (same as before)
      const result = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        totalIssues: Array(12).fill(0),
        pendingIssues: Array(12).fill(0)
      };

      const stats = await Issue.aggregate([
        {
          $match: {
            createdAt: {
              $gte: new Date(yearNum, 0, 1),
              $lt: new Date(yearNum + 1, 0, 1)
            }
          }
        },
        {
          $group: {
            _id: { $month: "$createdAt" },
            total: { $sum: 1 },
            pending: {
              $sum: { $cond: [{ $eq: ["$status", "pending"] }, 1, 0] }
            }
          }
        },
        { $sort: { "_id": 1 } }
      ]);

      stats.forEach(stat => {
        const monthIndex = stat._id - 1;
        if (monthIndex >= 0 && monthIndex < 12) {
          result.totalIssues[monthIndex] = stat.total || 0;
          result.pendingIssues[monthIndex] = stat.pending || 0;
        }
      });

      return res.json({ success: true, data: result });

    } else {
      // DAILY STATISTICS - IMPROVED VERSION
      const daysInMonth = new Date(yearNum, monthNum, 0).getDate();
      
      // Create complete days array for the selected month
      const result = {
        labels: Array.from({length: daysInMonth}, (_, i) => {
          const day = i + 1;
          return `${monthNum}/${day}/${yearNum}`; // Format: MM/DD/YYYY
        }),
        totalIssues: Array(daysInMonth).fill(0),
        pendingIssues: Array(daysInMonth).fill(0),
        resolvedIssues: Array(daysInMonth).fill(0) // Added resolved issues count
      };

      // Get daily statistics for the selected month
      const stats = await Issue.aggregate([
        {
          $match: {
            createdAt: {
              $gte: new Date(yearNum, monthNum - 1, 1),
              $lt: new Date(yearNum, monthNum, 1)
            }
          }
        },
        {
          $project: {
            day: { $dayOfMonth: "$createdAt" },
            status: 1,
            createdAt: 1
          }
        },
        {
          $group: {
            _id: "$day",
            total: { $sum: 1 },
            pending: {
              $sum: { $cond: [{ $eq: ["$status", "pending"] }, 1, 0] }
            },
            resolved: {
              $sum: { $cond: [{ $eq: ["$status", "resolved"] }, 1, 0] }
            }
          }
        },
        { $sort: { "_id": 1 } }
      ]);

      // Merge database results with our complete days structure
      stats.forEach(stat => {
        const dayIndex = stat._id - 1;
        if (dayIndex >= 0 && dayIndex < daysInMonth) {
          result.totalIssues[dayIndex] = stat.total || 0;
          result.pendingIssues[dayIndex] = stat.pending || 0;
          result.resolvedIssues[dayIndex] = stat.resolved || 0;
        }
      });

      return res.json({ 
        success: true, 
        data: result,
        meta: {
          timeRange: 'daily',
          month: monthNum,
          year: yearNum,
          daysInMonth: daysInMonth
        }
      });
    }

  } catch (err) {
    console.error("Error in getIssueStatistics:", err);
    
    // Create appropriate empty response based on timeRange
    const emptyData = timeRange === 'monthly' 
      ? { 
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], 
          totalIssues: Array(12).fill(0), 
          pendingIssues: Array(12).fill(0) 
        }
      : { 
          labels: Array.from({length: new Date().getDate()}, (_, i) => (i + 1).toString()),
          totalIssues: Array(new Date().getDate()).fill(0),
          pendingIssues: Array(new Date().getDate()).fill(0),
          resolvedIssues: Array(new Date().getDate()).fill(0)
        };
    
    return res.status(500).json({ 
      success: false, 
      message: "Error fetching statistics",
      data: emptyData
    });
  }
};
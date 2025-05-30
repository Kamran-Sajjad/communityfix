

import Issue from "../models/Issue.js";
import { cloudinary, storage } from "../config/cloudinary.js";

export const createIssue = async (req, res) => {
  try {
    const {
      title,
      name,
      description,
      issueCategory,
      address,
      contact,
      issueType,
    } = req.body;

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
      description,
      issueCategory,
      address,
      contact,
      issueType,
      attachments,
      createdBy: req.user._id,
    });

    await newIssue.save(); // ✅ Make sure you're using newIssue here

    res.status(201).json({ success: true, message: "Issue reported", issue: newIssue });
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

    issue.upvotes += 1;
    issue.voters.push(req.user._id);
    await issue.save();

    res.status(200).json({ success: true, message: "Upvoted", issue });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to upvote" });
  }
};

// Add comment
export const commentOnIssue = async (req, res) => {
  try {
    const { text } = req.body;
    const issue = await Issue.findById(req.params.id);

    if (!issue) return res.status(404).json({ message: "Issue not found" });

    issue.comments.push({
      user: req.user._id,
      text,
    });

    await issue.save();
    res.status(201).json({ success: true, message: "Comment added", issue });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to add comment" });
  }
};

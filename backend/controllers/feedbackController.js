import Feedback from "../models/Feedback.js";
import Issue from "../models/Issue.js";

export const submitFeedback = async (req, res) => {
  const { name, address, issueId, issueType, comment, rating, attachment } = req.body;

  try {
    const issue = await Issue.findById(issueId);
    const attachment = req.file ? req.file.filename : null;

    if (!issue) return res.status(404).json({ message: "Issue not found" });
    if (issue.userId.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Unauthorized to give feedback on this issue" });

    const feedback = new Feedback({
      userId: req.user._id,
      issueId,
      name,
      address,
      issueType,
      comment,
      rating,
      attachment
    });

    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("userId issueId");
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve feedback" });
  }
};

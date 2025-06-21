




import Feedback from "../models/Feedback.js";

export const submitFeedback = async (req, res) => {
  try {
    const { name, address, issue, comment, rating } = req.body;

    // ✅ Cloudinary gives a full image URL via `req.file.path`
    const imageUrl = req.file?.path || "";
  
    const feedback = new Feedback({
      name,
      address,
      issueType: issue, // if you’re saving the title, use this
      comment,
      rating,
      imageUrl,
    });

    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Feedback Submit Error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch feedback" });
  }
};

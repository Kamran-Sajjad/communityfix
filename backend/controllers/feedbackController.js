




// import Feedback from "../models/Feedback.js";

// export const submitFeedback = async (req, res) => {
//   try {
//     const { name, address, issue, comment, rating } = req.body;

//     // ✅ Cloudinary gives a full image URL via `req.file.path`
//     const imageUrl = req.file?.path || "";
  
//     const feedback = new Feedback({
//       name,
//       address,
//       issueType: issue, // if you’re saving the title, use this
//       comment,
//       rating,
//       imageUrl,
//     });

//     await feedback.save();
//     res.status(201).json({ message: "Feedback submitted successfully" });
//   } catch (error) {
//     console.error("Feedback Submit Error:", error);
//     res.status(500).json({ message: "Server Error", error });
//   }
// };

// export const getAllFeedback = async (req, res) => {
//   try {
//     const feedbacks = await Feedback.find();
//     res.status(200).json(feedbacks);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch feedback" });
//   }
// };




















import Feedback from "../models/Feedback.js";
import { notifyFeedbackSubmitted } from "./notificationController.js"; // ✅ Import notification logic

export const submitFeedback = async (req, res) => {
  try {
    const { name, address, issue, comment, rating } = req.body;
    const imageUrl = req.file?.path || "";

    const feedback = new Feedback({
      userId: req.user._id, // associate the user
      name,
      address,
      issueType: issue,
      comment,
      rating,
      imageUrl,
    });

    await feedback.save();

    // ✅ Trigger notification
    await notifyFeedbackSubmitted(feedback, req.user);
    console.log("feedback", feedback,req.user);
    console.log("feedback name", feedback,req.user.name);
    console.log("feedback name", feedback,req.userId);

    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Feedback Submit Error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("userId", "fullName email");
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch feedback" });
  }
};

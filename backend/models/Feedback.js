import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: String,
  image: String,
  issueType: String,
  feedbackText: String,
  rating: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;

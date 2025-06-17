// import mongoose from "mongoose";

import mongoose from "mongoose";

// const feedbackSchema = new mongoose.Schema({
//   name: String,
//   image: String,
//   issueType: String,
//   feedbackText: String,
//   rating: Number,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Feedback = mongoose.model("Feedback", feedbackSchema);

// export default Feedback;




const feedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  issueId: { type: mongoose.Schema.Types.ObjectId, ref: "Issue" },
  name: String,
  address: String,
  imageUrl:String,
  issueType: String,
  comment: String,
  rating: Number,
  // attachment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
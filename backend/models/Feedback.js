// import mongoose from "mongoose";

// const feedbackSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "User"
//   },
//   issueId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "Issue"
//   },
//   name: String,
//   address: String,
//   issueType: String,
//   comment: String,
//   rating: { type: Number, min: 1, max: 5 },
//   attachment: String, // You can store filename or URL
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // export default mongoose.model("Feedback", feedbackSchema);
// export default feedbackSchema;









import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    issue: {
      type: String,
      required: true,
      enum: ['plumbing', 'electrical', 'renovation', 'cleaning', 'construction', 'security', 'other'],
    },
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 3,
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const Feedback= mongoose.model('Feedback', feedbackSchema);
export default Feedback;

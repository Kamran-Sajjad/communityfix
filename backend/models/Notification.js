import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    recipient: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    sender: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User" 
    },
    message: { 
      type: String, 
      required: true 
    },
    issue: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Issue" 
    },
    isRead: { 
      type: Boolean, 
      default: false 
    },
    notificationType: {
      type: String,
      enum: ["issue_reported", "issue_accepted", "feedback_submitted"],
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);
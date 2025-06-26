





import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    issueCategory: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    issueType: { type: String, enum: ["societal", "household"], required: true },
    status: { type: String, enum: ['pending', 'in_progress', 'resolved'], default: 'pending' },
    attachments: [{ url: String, public_id: String }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    upvotes: { type: Number, default: 0 },
    voters: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, priority: { type: String, enum: ["low", "medium", "high", "extremely-high"] } }],
    comments: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, text: String, createdAt: { type: Date, default: Date.now } }],
    
    // New Fields
    adminAccepted: { type: Boolean, default: false },  // Tracks if admin accepts the issue
    assignedToServiceTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },  // Service Team Member Assigned (empty for now)
  },
  { timestamps: true }
);


const Issue = mongoose.model("Issue", issueSchema);

export default Issue;
import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Please provide location'],
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Please provide report title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide report description'],
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceTeam',
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Report = mongoose.model('Report', reportSchema);

export default Report;
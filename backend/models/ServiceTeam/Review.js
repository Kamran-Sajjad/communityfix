import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide review title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide review description'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Please provide author name'],
    trim: true
  },
  rating: {
    type: Number,
    required: [true, 'Please provide rating'],
    min: 1,
    max: 5
  },
  issueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Issue'
  },
  serviceTeamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceTeam'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
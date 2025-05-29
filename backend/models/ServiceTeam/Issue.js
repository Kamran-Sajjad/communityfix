// import mongoose from 'mongoose';

// const issueSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Please provide customer name'],
//     trim: true
//   },
//   address: {
//     type: String,
//     required: [true, 'Please provide customer address'],
//     trim: true
//   },
//   age: {
//     type: Number,
//     default: 30
//   },
//   issue: {
//     type: String,
//     required: [true, 'Please provide issue description'],
//     trim: true
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'in progress', 'delayed', 'completed'],
//     default: 'pending'
//   },
//   progress: {
//     type: Number,
//     default: 0,
//     min: 0,
//     max: 100
//   },
//   assignedTo: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'ServiceTeam'
//   },
//   estimatedCompletion: {
//     type: String,
//     default: ''
//   },
//   images: [{
//     type: String
//   }],
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// }, {
//   timestamps: true
// });

// const Issue = mongoose.model('Issue', issueSchema);

// export default Issue;

import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide customer name'],
    trim: true
  },
  address: {
    type: String,
    required: [true, 'Please provide customer address'],
    trim: true
  },
  age: {
    type: Number,
    default: 30
  },
  issue: {
    type: String,
    required: [true, 'Please provide issue description'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'in progress', 'delayed', 'completed'],
    default: 'pending'
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceTeam'
  },
  estimatedCompletion: {
    type: String,
    default: ''
  },
  images: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Fix OverwriteModelError by checking if model already exists
const Issue = mongoose.models.Issue || mongoose.model('Issue', issueSchema);

export default Issue;

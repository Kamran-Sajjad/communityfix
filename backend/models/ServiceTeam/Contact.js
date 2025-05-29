import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'userModel',
    required: true
  },
  userModel: {
    type: String,
    required: true,
    enum: ['Admin', 'ServiceTeam', 'User']
  },
  contactId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'contactModel',
    required: true
  },
  contactModel: {
    type: String,
    required: true,
    enum: ['Admin', 'ServiceTeam', 'User']
  },
  name: {
    type: String,
    required: true
  },
  lastMessage: {
    type: String,
    default: ''
  },
  unreadCount: {
    type: Number,
    default: 0
  },
  lastInteraction: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
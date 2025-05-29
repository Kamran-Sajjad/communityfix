import Message from '../../models/ServiceTeam/Message.js';
import Contact from '../../models/ServiceTeam/Contact.js';
import Notification from '../../models/ServiceTeam/Notification.js';
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';

// @desc    Get all messages between two users
// @route   GET /api/serviceteam/messages/:receiverId/:receiverModel
// @access  Private
const getMessages = asyncHandler(async (req, res) => {
  const { receiverId, receiverModel } = req.params;
  const senderId = req.user._id;
  const senderModel = 'ServiceTeam';

  if (!mongoose.Types.ObjectId.isValid(receiverId)) {
    res.status(400);
    throw new Error('Invalid receiver ID');
  }

  if (!['Admin', 'ServiceTeam', 'User'].includes(receiverModel)) {
    res.status(400);
    throw new Error('Invalid receiver model');
  }

  const messages = await Message.find({
    $or: [
      { sender: senderId, senderModel, receiver: receiverId, receiverModel },
      { sender: receiverId, senderModel: receiverModel, receiver: senderId, receiverModel: senderModel }
    ]
  }).sort({ time: 1 });

  await Message.updateMany(
    {
      sender: receiverId,
      senderModel: receiverModel,
      receiver: senderId,
      receiverModel: senderModel,
      isRead: false
    },
    { isRead: true }
  );

  await Contact.findOneAndUpdate(
    {
      userId: senderId,
      userModel: senderModel,
      contactId: receiverId,
      contactModel: receiverModel
    },
    { unreadCount: 0 }
  );

  res.status(200).json({
    success: true,
    count: messages.length,
    data: messages
  });
});

// @desc    Send a message
// @route   POST /api/serviceteam/messages
// @access  Private
const sendMessage = asyncHandler(async (req, res) => {
  const { receiverId, receiverModel, content } = req.body;
  const sender = req.user._id;
  const senderModel = 'ServiceTeam';

  if (!mongoose.Types.ObjectId.isValid(receiverId)) {
    res.status(400);
    throw new Error('Invalid receiver ID');
  }

  if (!['Admin', 'ServiceTeam', 'User'].includes(receiverModel)) {
    res.status(400);
    throw new Error('Invalid receiver model');
  }

  const message = await Message.create({
    sender,
    senderModel,
    receiver: receiverId,
    receiverModel,
    content,
    time: Date.now()
  });

  const senderContact = await Contact.findOne({
    userId: sender,
    userModel: senderModel,
    contactId: receiverId,
    contactModel: receiverModel
  });

  if (senderContact) {
    senderContact.lastMessage = content;
    senderContact.lastInteraction = Date.now();
    await senderContact.save();
  } else {
    let receiverName = 'Contact';

    if (receiverModel === 'Admin') {
      const { default: Admin } = await import('../../models/Admin.js');
      const admin = await Admin.findById(receiverId);
      if (admin) receiverName = admin.fullName || 'Admin';
    } else if (receiverModel === 'ServiceTeam') {
      const { default: ServiceTeam } = await import('../../models/ServiceTeam/ServiceTeam.js');
      const serviceTeam = await ServiceTeam.findById(receiverId);
      if (serviceTeam) receiverName = serviceTeam.fullName;
    } else if (receiverModel === 'User') {
      const User = mongoose.model('User');
      const user = await User.findById(receiverId);
      if (user) receiverName = user.fullName || user.name || 'User';
    }

    await Contact.create({
      userId: sender,
      userModel: senderModel,
      contactId: receiverId,
      contactModel: receiverModel,
      name: receiverName,
      lastMessage: content,
      lastInteraction: Date.now()
    });
  }

  const receiverContact = await Contact.findOne({
    userId: receiverId,
    userModel: receiverModel,
    contactId: sender,
    contactModel: senderModel
  });

  if (receiverContact) {
    receiverContact.lastMessage = content;
    receiverContact.unreadCount += 1;
    receiverContact.lastInteraction = Date.now();
    await receiverContact.save();
  } else {
    const { default: ServiceTeam } = await import('../../models/ServiceTeam/ServiceTeam.js');
    const serviceTeam = await ServiceTeam.findById(sender);
    const senderName = serviceTeam ? serviceTeam.fullName : 'Service Team';

    await Contact.create({
      userId: receiverId,
      userModel: receiverModel,
      contactId: sender,
      contactModel: senderModel,
      name: senderName,
      lastMessage: content,
      unreadCount: 1,
      lastInteraction: Date.now()
    });
  }

  await Notification.create({
    recipient: receiverId,
    recipientModel: receiverModel,
    text: `New message from ${req.user.fullName || 'Service Team'}`,
    type: 'message',
    relatedId: message._id,
    relatedModel: 'Message'
  });

  res.status(201).json({
    success: true,
    data: message
  });
});

// @desc    Delete a message
// @route   DELETE /api/serviceteam/messages/:id
// @access  Private
const deleteMessage = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(404);
    throw new Error('Message not found');
  }

  if (
    message.sender.toString() !== req.user._id.toString() ||
    message.senderModel !== 'ServiceTeam'
  ) {
    res.status(401);
    throw new Error('Not authorized to delete this message');
  }

  message.isDeleted = true;
  await message.save();

  res.status(200).json({
    success: true,
    data: message
  });
});

// @desc    Get all contacts
// @route   GET /api/serviceteam/contacts
// @access  Private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({
    userId: req.user._id,
    userModel: 'ServiceTeam'
  }).sort({ lastInteraction: -1 });

  res.status(200).json({
    success: true,
    count: contacts.length,
    data: contacts
  });
});

export {
  getMessages,
  sendMessage,
  deleteMessage,
  getContacts
};

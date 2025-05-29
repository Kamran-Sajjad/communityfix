import Notification from '../../models/ServiceTeam/Notification.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all notifications for a user
// @route   GET /api/serviceteam/notifications
// @access  Private
export const getNotifications = asyncHandler(async (req, res) => {
  const notifications = await Notification.find({
    recipient: req.user._id,
    recipientModel: 'ServiceTeam'
  }).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: notifications.length,
    data: notifications
  });
});

// @desc    Mark notification as read
// @route   PUT /api/serviceteam/notifications/:id
// @access  Private
export const markAsRead = asyncHandler(async (req, res) => {
  const notification = await Notification.findById(req.params.id);

  if (!notification) {
    res.status(404);
    throw new Error('Notification not found');
  }

  if (
    notification.recipient.toString() !== req.user._id.toString() ||
    notification.recipientModel !== 'ServiceTeam'
  ) {
    res.status(401);
    throw new Error('Not authorized to update this notification');
  }

  notification.read = true;
  await notification.save();

  res.status(200).json({
    success: true,
    data: notification
  });
});

// @desc    Mark all notifications as read
// @route   PUT /api/serviceteam/notifications
// @access  Private
export const markAllAsRead = asyncHandler(async (req, res) => {
  await Notification.updateMany(
    {
      recipient: req.user._id,
      recipientModel: 'ServiceTeam',
      read: false
    },
    { read: true }
  );

  res.status(200).json({
    success: true,
    message: 'All notifications marked as read'
  });
});

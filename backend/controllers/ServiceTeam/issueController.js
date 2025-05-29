import Issue from '../../models/ServiceTeam/Issue.js';
import ServiceTeam from '../../models/ServiceTeam/ServiceTeam.js';
import Notification from '../../models/ServiceTeam/Notification.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all issues
// @route   GET /api/serviceteam/issues
// @access  Private
const getIssues = asyncHandler(async (req, res) => {
  const issues = await Issue.find({ assignedTo: req.user._id }).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: issues.length,
    data: issues
  });
});

// @desc    Get issue by ID
// @route   GET /api/serviceteam/issues/:id
// @access  Private
const getIssueById = asyncHandler(async (req, res) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    res.status(404);
    throw new Error('Issue not found');
  }

  if (issue.assignedTo.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to access this issue');
  }

  res.status(200).json({
    success: true,
    data: issue
  });
});

// @desc    Update issue
// @route   PUT /api/serviceteam/issues/:id
// @access  Private
const updateIssue = asyncHandler(async (req, res) => {
  let issue = await Issue.findById(req.params.id);

  if (!issue) {
    res.status(404);
    throw new Error('Issue not found');
  }

  if (issue.assignedTo.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to update this issue');
  }

  const { status, progress, estimatedCompletion, images } = req.body;

  if (status === 'completed') {
    req.body.progress = 100;
  }

  issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  await Notification.create({
    recipient: process.env.ADMIN_ID || '000000000000000000000000',
    recipientModel: 'Admin',
    text: `Issue ${issue.issue} has been updated to ${status}`,
    type: 'issue',
    relatedId: issue._id,
    relatedModel: 'Issue'
  });

  res.status(200).json({
    success: true,
    data: issue
  });
});

// @desc    Create new issue
// @route   POST /api/serviceteam/issues
// @access  Private/Admin
const createIssue = asyncHandler(async (req, res) => {
  const { name, address, age, issue, description, status, progress, assignedTo } = req.body;

  if (assignedTo) {
    const serviceTeam = await ServiceTeam.findById(assignedTo);
    if (!serviceTeam) {
      res.status(404);
      throw new Error('Service team member not found');
    }
  }

  const newIssue = await Issue.create({
    name,
    address,
    age,
    issue,
    description,
    status: status || 'pending',
    progress: progress || 0,
    assignedTo
  });

  if (assignedTo) {
    await ServiceTeam.findByIdAndUpdate(
      assignedTo,
      { $push: { assignedIssues: newIssue._id } }
    );

    await Notification.create({
      recipient: assignedTo,
      recipientModel: 'ServiceTeam',
      text: `New issue assigned: ${issue}`,
      type: 'issue',
      relatedId: newIssue._id,
      relatedModel: 'Issue'
    });
  }

  res.status(201).json({
    success: true,
    data: newIssue
  });
});

// @desc    Delete issue
// @route   DELETE /api/serviceteam/issues/:id
// @access  Private/Admin
const deleteIssue = asyncHandler(async (req, res) => {
  const issue = await Issue.findById(req.params.id);

  if (!issue) {
    res.status(404);
    throw new Error('Issue not found');
  }

  if (issue.assignedTo) {
    await ServiceTeam.findByIdAndUpdate(
      issue.assignedTo,
      { $pull: { assignedIssues: issue._id } }
    );
  }

  await issue.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});

export {
  getIssues,
  getIssueById,
  updateIssue,
  createIssue,
  deleteIssue
};

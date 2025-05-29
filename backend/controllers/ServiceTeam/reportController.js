import Report from '../../models/ServiceTeam/Report.js';
import Issue from '../../models/ServiceTeam/Issue.js';
import Notification from '../../models/ServiceTeam/Notification.js';
import ServiceTeam from '../../models/ServiceTeam/ServiceTeam.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all reports
// @route   GET /api/serviceteam/reports
// @access  Private
export const getReports = asyncHandler(async (req, res) => {
  const reports = await Report.find({ status: 'pending' }).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: reports.length,
    data: reports
  });
});

// @desc    Accept report
// @route   PUT /api/serviceteam/reports/:id/accept
// @access  Private
export const acceptReport = asyncHandler(async (req, res) => {
  const report = await Report.findById(req.params.id);

  if (!report) {
    res.status(404);
    throw new Error('Report not found');
  }

  if (report.status !== 'pending') {
    res.status(400);
    throw new Error('Report has already been processed');
  }

  report.status = 'accepted';
  report.assignedTo = req.user._id;
  await report.save();

  const newIssue = await Issue.create({
    name: report.name,
    address: report.location,
    issue: report.title,
    description: report.description,
    status: 'pending',
    progress: 0,
    assignedTo: req.user._id
  });

  await Notification.create({
    recipient: process.env.ADMIN_ID || '000000000000000000000000',
    recipientModel: 'Admin',
    text: `Report ${report.title} has been accepted by ${req.user.fullName}`,
    type: 'report',
    relatedId: report._id,
    relatedModel: 'Report'
  });

  res.status(200).json({
    success: true,
    data: {
      report,
      issue: newIssue
    }
  });
});

// @desc    Reject report
// @route   PUT /api/serviceteam/reports/:id/reject
// @access  Private
export const rejectReport = asyncHandler(async (req, res) => {
  const report = await Report.findById(req.params.id);

  if (!report) {
    res.status(404);
    throw new Error('Report not found');
  }

  if (report.status !== 'pending') {
    res.status(400);
    throw new Error('Report has already been processed');
  }

  report.status = 'rejected';
  await report.save();

  await Notification.create({
    recipient: process.env.ADMIN_ID || '000000000000000000000000',
    recipientModel: 'Admin',
    text: `Report ${report.title} has been rejected by ${req.user.fullName}`,
    type: 'report',
    relatedId: report._id,
    relatedModel: 'Report'
  });

  res.status(200).json({
    success: true,
    data: report
  });
});

// @desc    Create new report (for testing)
// @route   POST /api/serviceteam/reports
// @access  Private/Admin
export const createReport = asyncHandler(async (req, res) => {
  const { name, location, title, description } = req.body;

  const report = await Report.create({
    name,
    location,
    title,
    description,
    status: 'pending'
  });

  const serviceTeams = await ServiceTeam.find();

  const notifications = serviceTeams.map(team => ({
    recipient: team._id,
    recipientModel: 'ServiceTeam',
    text: `New report: ${title}`,
    type: 'report',
    relatedId: report._id,
    relatedModel: 'Report'
  }));

  await Notification.insertMany(notifications);

  res.status(201).json({
    success: true,
    data: report
  });
});

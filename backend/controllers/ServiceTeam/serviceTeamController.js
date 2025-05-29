import ServiceTeam from '../../models/ServiceTeam/ServiceTeam.js';
import Issue from '../../models/ServiceTeam/Issue.js';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

// @desc    Get service team dashboard stats
// @route   GET /api/serviceteam/dashboard
// @access  Private
export const getDashboardStats = asyncHandler(async (req, res) => {
  const serviceTeamId = req.user._id;

  // Get assigned issues
  const issues = await Issue.find({ assignedTo: serviceTeamId });

  // Calculate stats
  const totalHouseholders = issues.length;
  const completedWork = issues.filter(issue => issue.status === 'completed').length;
  const pendingRequests = issues.filter(issue => issue.status !== 'completed').length;

  res.status(200).json({
    success: true,
    data: {
      totalHouseholders,
      completedWork,
      pendingRequests,
      issues
    }
  });
});

// @desc    Get service team profile
// @route   GET /api/serviceteam/profile
// @access  Private
export const getProfile = asyncHandler(async (req, res) => {
  const serviceTeam = await ServiceTeam.findById(req.user._id).select('-password');

  if (!serviceTeam) {
    res.status(404);
    throw new Error('Service team member not found');
  }

  res.status(200).json({
    success: true,
    data: serviceTeam
  });
});

// @desc    Update service team profile
// @route   PUT /api/serviceteam/profile
// @access  Private
export const updateProfile = asyncHandler(async (req, res) => {
  const { fullName, email, phone, role, isAvailable, avatar } = req.body;

  const serviceTeam = await ServiceTeam.findById(req.user._id);

  if (!serviceTeam) {
    res.status(404);
    throw new Error('Service team member not found');
  }

  if (fullName) serviceTeam.fullName = fullName;
  if (email) serviceTeam.email = email;
  if (phone) serviceTeam.phone = phone;
  if (role) serviceTeam.role = role;
  if (isAvailable !== undefined) serviceTeam.isAvailable = isAvailable;
  if (avatar) serviceTeam.avatar = avatar;

  const updatedServiceTeam = await serviceTeam.save();

  res.status(200).json({
    success: true,
    data: updatedServiceTeam
  });
});

// @desc    Get all service team members
// @route   GET /api/serviceteam
// @access  Private/Admin
export const getAllServiceTeams = asyncHandler(async (req, res) => {
  const serviceTeams = await ServiceTeam.find({}).select('-password');

  res.status(200).json({
    success: true,
    count: serviceTeams.length,
    data: serviceTeams
  });
});

// @desc    Register a service team member
// @route   POST /api/serviceteam/register
// @access  Private/Admin
export const registerServiceTeam = asyncHandler(async (req, res) => {
  const { fullName, email, password, role, phone } = req.body;

  const serviceTeamExists = await ServiceTeam.findOne({ email });

  if (serviceTeamExists) {
    res.status(400);
    throw new Error('Service team member already exists');
  }

  const serviceTeam = await ServiceTeam.create({
    fullName,
    email,
    password,
    role,
    phone
  });

  if (serviceTeam) {
    res.status(201).json({
      success: true,
      data: {
        _id: serviceTeam._id,
        fullName: serviceTeam.fullName,
        email: serviceTeam.email,
        role: serviceTeam.role,
        token: generateToken(serviceTeam._id)
      }
    });
  } else {
    res.status(400);
    throw new Error('Invalid service team data');
  }
});

// @desc    Auth service team & get token
// @route   POST /api/serviceteam/login
// @access  Public
export const loginServiceTeam = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const serviceTeam = await ServiceTeam.findOne({ email }).select('+password');

  if (serviceTeam && (await serviceTeam.matchPassword(password))) {
    res.status(200).json({
      success: true,
      data: {
        _id: serviceTeam._id,
        fullName: serviceTeam.fullName,
        email: serviceTeam.email,
        role: serviceTeam.role,
        token: generateToken(serviceTeam._id)
      }
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

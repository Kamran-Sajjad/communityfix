import Review from '../../models/ServiceTeam/Review.js';
import Notification from '../../models/ServiceTeam/Notification.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all reviews for a service team member
// @route   GET /api/serviceteam/reviews
// @access  Private
export const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ serviceTeamId: req.user._id }).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: reviews.length,
    data: reviews
  });
});

// @desc    Get review by ID
// @route   GET /api/serviceteam/reviews/:id
// @access  Private
export const getReviewById = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (!review) {
    res.status(404);
    throw new Error('Review not found');
  }

  if (review.serviceTeamId.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to access this review');
  }

  res.status(200).json({
    success: true,
    data: review
  });
});

// @desc    Create new review (for testing)
// @route   POST /api/serviceteam/reviews
// @access  Private/Admin
export const createReview = asyncHandler(async (req, res) => {
  const { title, description, author, rating, issueId, serviceTeamId } = req.body;

  const review = await Review.create({
    title,
    description,
    author,
    rating,
    issueId,
    serviceTeamId
  });

  if (serviceTeamId) {
    await Notification.create({
      recipient: serviceTeamId,
      recipientModel: 'ServiceTeam',
      text: `New review from ${author}`,
      type: 'review',
      relatedId: review._id,
      relatedModel: 'Review'
    });
  }

  res.status(201).json({
    success: true,
    data: review
  });
});

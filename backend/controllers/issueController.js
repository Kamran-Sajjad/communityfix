import Issue from '../models/Issue.js';

// @desc    Create a new issue
// @route   POST /api/issues
// @access  Private (logged-in users)
export const createIssue = async (req, res) => {
  const { title, description, category, location } = req.body;

  try {
    const issue = await Issue.create({
      title,
      description,
      category,
      location,
      createdBy: req.user._id, // From authMiddleware
    });
    res.status(201).json(issue);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get all issues
// @route   GET /api/issues
// @access  Private
export const getIssues = async (req, res) => {
  try {
    const issues = await Issue.find().populate('createdBy', 'fullName email');
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
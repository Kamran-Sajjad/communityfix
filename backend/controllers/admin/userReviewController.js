// backend/controllers/admin/userReviewController.js
import User from '../../models/User.js';
import RegisteredUser from '../../models/admin/RegisteredUser.js';

// Get all pending users
export const getPendingUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

// Accept user
export const acceptUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await RegisteredUser.create({ ...user.toObject(), access: true });
    await user.deleteOne();
    res.status(200).json({ message: 'User accepted' });
  } catch (err) {
    res.status(500).json({ message: 'Error accepting user' });
  }
};

// Reject user
export const rejectUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await RegisteredUser.create({ ...user.toObject(), access: false });
    await user.deleteOne();
    res.status(200).json({ message: 'User rejected' });
  } catch (err) {
    res.status(500).json({ message: 'Error rejecting user' });
  }
};

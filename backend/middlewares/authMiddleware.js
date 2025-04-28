import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Protect routes (check if user is logged in)
export const protect = async (req, res, next) => {
  try {
    // 1. Get token from header
    const token = req.headers.authorization?.split(' ')[1]; // Format: "Bearer <token>"
    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Attach user to the request
    req.user = await User.findById(decoded.id).select('-password'); // Exclude password
    next();
  } catch (error) {
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

// Allow only admins to access a route
export const adminOnly = async (req, res, next) => {
  if (req.user && req.user.accountType === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Admin access required' });
  }
};
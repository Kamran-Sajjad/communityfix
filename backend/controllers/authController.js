


import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';

// @desc    Register a new user
// @route   POST /api/users/signup
// @access  Public
// export const registerUser = async (req, res) => {
//   const { fullName, email, password, accountType } = req.body;

//   console.log('[REGISTER] Attempting to register user:', { email, accountType });
//   console.log('[ENV CHECK] JWT_SECRET exists:', !!process.env.JWT_SECRET);
//   console.log('[ENV CHECK] MONGO_URI exists:', !!process.env.MONGO_URI);

//   try {
//     // 1. Check if user exists
//     console.log('[REGISTER] Checking for existing user...');
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       console.log('[REGISTER] User already exists:', email);
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // 2. Hash password
//     console.log('[REGISTER] Hashing password...');
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // 3. Create user
//     console.log('[REGISTER] Creating user...');
//     const user = await User.create({
//       fullName,
//       email,
//       password: hashedPassword,
//       accountType,
//       ...(accountType === 'resident' && { houseNo: req.body.houseNo }),
//       ...(accountType === 'serviceTeam' && { 
//         serviceCategory: req.body.serviceCategory,
//         serviceLocation: req.body.serviceLocation 
//       }),
//     });

//     // 4. Generate token
//     console.log('[REGISTER] Generating token...');
//     const token = generateToken(user._id);
//     console.log('[REGISTER] Generated token:', token ? 'Success' : 'Failed');

//     // 5. Return user + token
//     console.log('[REGISTER] Registration successful:', user._id);
//     res.status(201).json({
//       _id: user._id,
//       fullName: user.fullName,
//       email: user.email,
//       accountType: user.accountType,
//       token: token,
//     });
//   } catch (error) {
//     console.error('[REGISTER ERROR] Full error:', error);
//     console.error('[REGISTER ERROR] Error details:', {
//       message: error.message,
//       stack: error.stack,
//       name: error.name
//     });
//     res.status(500).json({ 
//       message: 'Server error',
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined
//     });
//   }
// };
export const registerUser = async (req, res) => {
  const { 
    fullName, 
    email, 
    password, 
    accountType,
    address, 
    phoneNumber, 
    cnic, 
    agreeToTerms,
    houseNo,
    serviceCategory,
    serviceLocation
  } = req.body;

  console.log('[REGISTER] Attempting to register user:', { email, accountType });

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      accountType,
      address,
      phoneNumber,
      cnic,
      agreeToTerms,
      ...(accountType === 'resident' && { houseNo }),
      ...(accountType === 'serviceTeam' && { 
        serviceCategory,
        serviceLocation
      }),
    });

    const token = generateToken(user._id);

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      accountType: user.accountType,
      token: token,
    });
  } catch (error) {
    console.error('[REGISTER ERROR]', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// @desc    Login user
// @route   POST /api/users/login
// @access  Public
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log('[LOGIN] Attempting login for:', email);
  console.log('[ENV CHECK] JWT_SECRET exists:', !!process.env.JWT_SECRET);

  try {
    // 1. Find user by email
    console.log('[LOGIN] Finding user...');
    const user = await User.findOne({ email });
    if (!user) {
      console.log('[LOGIN] User not found:', email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 2. Check password
    console.log('[LOGIN] Comparing passwords...');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('[LOGIN] Password mismatch for:', email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 3. Generate token
    console.log('[LOGIN] Generating token...');
    const token = generateToken(user._id);
    console.log('[LOGIN] Generated token:', token ? 'Success' : 'Failed');

    // 4. Return user + token
    console.log('[LOGIN] Login successful:', user._id);
    res.json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      accountType: user.accountType,
      token: token,
    });
  } catch (error) {
    console.error('[LOGIN ERROR] Full error:', error);
    console.error('[LOGIN ERROR] Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    res.status(500).json({ 
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};



import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';

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
      // console.log('[LOGIN] User not found:', email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }
// 🚫 Block suspended or deactivated users
    if (user.status === 'deactivated') {
      return res.status(403).json({
        message: `Your account is currently ${user.status}. Please contact the service center.`,
      });
    }
  

    // 2. Check password
    // console.log('[LOGIN] Comparing passwords...');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('[LOGIN] Password mismatch for:', email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 3. Generate token
    // console.log('[LOGIN] Generating token...');
    const token = generateToken(user._id);
    console.log('[LOGIN] Generated token:', token ? 'Success' : 'Failed');

    // 4. Return user + token
    // console.log('[LOGIN] Login successful:', user._id);
    res.json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      accountType: user.accountType,
      token: token,
      status: user.status,
      houseNo: user.houseNo, // For residents
      serviceCategory: user.serviceCategory
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


// ----------------------------------------------------------------






import crypto from 'crypto';
import nodemailer from 'nodemailer';

// Email transporter configuration (add at top of file)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// @desc    Forgot Password - Send OTP
// @route   POST /api/auth/forgot-password
// @access  Public
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // 1. Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'If this email exists, we will send a reset code'
      });
    }

    // 2. Generate 4-digit OTP (expires in 10 minutes)
    const otp = crypto.randomInt(1000, 9999).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    // 3. Save OTP and expiry to user
    user.resetPasswordOtp = otp;
    user.resetPasswordOtpExpiry = otpExpiry;
    await user.save();

    // 4. Send OTP via email
    const mailOptions = {
      from: `"Community Fix" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Password Reset OTP',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Password Reset Request</h2>
          <p>We received a request to reset your password. Use the following OTP to proceed:</p>
          <div style="background: #f4f4f4; padding: 10px; border-radius: 5px; text-align: center; margin: 20px 0;">
            <h3 style="margin: 0; font-size: 24px; letter-spacing: 2px;">${otp}</h3>
          </div>
          <p>This code will expire in 10 minutes.</p>
          <p>If you didn't request this, please ignore this email.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #777;">Community Fix Team</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true,
      message: 'OTP sent to email',
      email: email // Return email for frontend use
    });
  } catch (error) {
    console.error('[FORGOT PASSWORD ERROR]', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error' 
    });
  }
};

// @desc    Verify OTP
// @route   POST /api/auth/verify-otp
// @access  Public
// export const verifyOtp = async (req, res) => {
//   const { email, otp } = req.body;

//   try {
//     // 1. Find user and check OTP
//     const user = await User.findOne({ 
//       email,
//       resetPasswordOtp: otp,
//       resetPasswordOtpExpiry: { $gt: Date.now() } // Check expiry
//     });

//     if (!user) {
//       return res.status(400).json({ 
//         success: false,
//         message: 'Invalid or expired OTP' 
//       });
//     }

//     // 2. OTP is valid - return success
//     res.status(200).json({ 
//       success: true,
//       message: 'OTP verified successfully',
//       email: email
//     });
//   } catch (error) {
//     console.error('[VERIFY OTP ERROR]', error);
//     res.status(500).json({ 
//       success: false,
//       message: 'Server error' 
//     });
//   }
// };






























// export const verifyOtp = async (req, res) => {
//   const { email, otp } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ 
//         success: false,
//         message: 'User not found' 
//       });
//     }

//     // Ensure OTP is string and trimmed
//     const storedOtp = user.resetPasswordOtp?.toString().trim();
//     const inputOtp = otp?.toString().trim();
//     const isExpired = user.resetPasswordOtpExpiry < new Date();

//     if (storedOtp !== inputOtp || isExpired) {
//       return res.status(400).json({ 
//         success: false,
//         message: 'Invalid or expired OTP' 
//       });
//     }

//     res.status(200).json({ 
//       success: true,
//       message: 'OTP verified successfully',
//       email: email
//     });

//   } catch (error) {
//     console.error('[VERIFY OTP ERROR]', error);
//     res.status(500).json({ 
//       success: false,
//       message: 'Server error' 
//     });
//   }
// };



// Enhanced verifyOtp controller
export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'User not found' 
      });
    }

    // Convert both OTPs to string and trim whitespace
    const storedOtp = user.resetPasswordOtp?.toString().trim() || '';
    const inputOtp = otp?.toString().trim() || '';

    if (!storedOtp || !inputOtp) {
      return res.status(400).json({ 
        success: false,
        message: 'OTP required' 
      });
    }

    if (storedOtp !== inputOtp) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid OTP' 
      });
    }

    if (user.resetPasswordOtpExpiry < new Date()) {
      return res.status(400).json({ 
        success: false,
        message: 'OTP expired' 
      });
    }

    res.status(200).json({ 
      success: true,
      message: 'OTP verified successfully',
      email: email
    });

  } catch (error) {
    console.error('[VERIFY OTP ERROR]', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error' 
    });
  }
};
















// @desc    Reset Password
// @route   POST /api/auth/reset-password
// @access  Public
export const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    // 1. Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'User not found' 
      });
    }

    // 2. Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // 3. Update password and clear OTP fields
    user.password = hashedPassword;
    user.resetPasswordOtp = undefined;
    user.resetPasswordOtpExpiry = undefined;
    await user.save();

    res.status(200).json({ 
      success: true,
      message: 'Password reset successful' 
    });
  } catch (error) {
    console.error('[RESET PASSWORD ERROR]', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error' 
    });
  }
};


// @desc    Precheck if email is already registered before signup
// @route   POST /api/users/precheck-email
export const precheckEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};




export const sendSignupOtp = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    // Generate OTP
    const otp = crypto.randomInt(1000, 9999).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Save OTP to temp store or reuse User model fields (if user not yet created)
    // You can store this temporarily in DB, Redis, or a fake User placeholder

    // TEMP OPTION: store OTP in a global in-memory object (for test/demo only)
    global.signupOtps = global.signupOtps || {};
    global.signupOtps[email] = { otp, expiry: otpExpiry };

    // Send email
    const mailOptions = {
      from: `"Community Fix" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify Your Email - Signup OTP",
      html: `<p>Your verification OTP is:</p><h2>${otp}</h2><p>Expires in 10 minutes.</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "OTP sent to email" });

  } catch (error) {
    console.error('[SIGNUP OTP ERROR]', error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const verifySignupOtp = async (req, res) => {
  const { email, otp } = req.body;

  global.signupOtps = global.signupOtps || {};
  const record = global.signupOtps[email];

  if (!record || record.otp !== otp || record.expiry < new Date()) {
    return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
  }

  res.status(200).json({ success: true, message: "OTP verified" });
};













// Create admin account (only logged-in admins can do this)
export const createAdmin = async (req, res) => {
  const { fullName, email, password, address, phoneNumber, cnic, agreeToTerms } = req.body;

  console.log('[CREATE ADMIN] Attempting to create new admin:', { email });

  try {
    // Ensure logged-in user is admin
    if (req.user.accountType !== 'admin') {
      return res.status(403).json({ message: 'Admin access required to create another admin' });
    }

    // Check if email already exists
    const adminExists = await User.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password for security
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new admin
    const newAdmin = new User({
      fullName,
      email,
      password: hashedPassword,
      accountType: 'admin',
      address,
      phoneNumber,
      cnic,
      agreeToTerms,
    });

    // Save the new admin user
    await newAdmin.save();

    // Generate token for the new admin
    const token = generateToken(newAdmin._id);

    res.status(201).json({
      _id: newAdmin._id,
      fullName: newAdmin.fullName,
      email: newAdmin.email,
      accountType: newAdmin.accountType,
      token: token,
    });
  } catch (error) {
    console.error('[CREATE ADMIN ERROR]', error);
    res.status(500).json({ message: 'Server error' });
  }
};

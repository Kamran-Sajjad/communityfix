import User from '../models/User.js';
import bcrypt from 'bcryptjs';

// Update user profile
export const updateProfile = async (req, res) => {
  try {
    const { fullName, email, address, houseNo, phoneNumber, cnic } = req.body;
    const profileImage = req.file?.path;
    // Find user by ID
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields
    user.fullName = fullName || user.fullName;
    user.email = email || user.email;
    user.address = address || user.address;
    user.houseNo = houseNo || user.houseNo;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.cnic = cnic || user.cnic;
    if (profileImage) user.profileImage = profileImage || user.profileImage;

    await user.save();

    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        fullName: user.fullName,
        email: user.email,
        address: user.address,
        phoneNumber: user.phoneNumber,
        cnic: user.cnic,
        accountType: user.accountType,
        houseNo: user.houseNo,
        profileImage: user.profileImage,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};


// Change user password
export const changePassword = async (req, res) => {
    try {
      const { currentPassword, newPassword, confirmPassword } = req.body;
  
      // Find user by ID
      const user = await User.findById(req.user._id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if current password matches
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Current password is incorrect' });
      }
  
      // Check if new password and confirm password match
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
      }
  
      // Hash the new password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
  
      await user.save();
  
      return res.status(200).json({ success: true, message: 'Password updated successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  };
  
// @desc    Get logged-in user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// export const updateProfileImage = async (req, res) => {
//   try {
//     // Get the image path from cloudinary (via multer)
//     if (!req.file || !req.file.path) {
//       return res.status(400).json({ message: "No image file uploaded" });
//     }

//     const user = await User.findById(req.user._id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.profileImage = req.file.path; // Cloudinary secure_url
//     await user.save();

//     return res.status(200).json({
//       success: true,
//       message: "Profile image updated successfully",
//       profileImage: user.profileImage,
//     });
//   } catch (error) {
//     console.error("Error updating profile image:", error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };


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









export const getUserStatistics = async (req, res) => {
  try {
    const stats = await User.aggregate([
      {
        $group: {
          _id: "$accountType",
          count: { $sum: 1 }
        }
      }
    ]);

    const formattedStats = {
      labels: stats.map(item => {
        // Format account type names
        return item._id.charAt(0).toUpperCase() + item._id.slice(1);
      }),
      data: stats.map(item => item.count)
    };

    res.status(200).json({ success: true, data: formattedStats });
  } catch (err) {
    console.error("Error fetching user statistics:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};









// Suspend user account
export const suspendUser = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.status = 'suspended';
    await user.save();

    res.status(200).json({ message: 'User suspended successfully', status: user.status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error suspending user' });
  }
};








// Deactivate user account
export const deactivateUser = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.status = 'deactivated';
    await user.save();

    res.status(200).json({ message: 'User deactivated successfully', status: user.status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deactivating user' });
  }
};






// Activate user account
export const activateUser = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.status = 'active';
    await user.save();

    res.status(200).json({ message: 'User activated successfully', status: user.status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error activating user' });
  }
};








// @desc Get total and pending user stats
export const getUserStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments(); // all users in the collection
    const acceptedUsers = await User.countDocuments({ access: true }); // users accepted by admin
    const pendingUsers = totalUsers - acceptedUsers;

    const pendingPercentage = totalUsers > 0 
      ? Math.round((pendingUsers / totalUsers) * 100) 
      : 0;

    res.status(200).json({
      success: true,
      totalUsers,
      acceptedUsers,
      pendingUsers,
      pendingPercentage,
    });
  } catch (error) {
    console.error("Error fetching user stats:", error);
    res.status(500).json({ message: "Server error" });
  }
};







// Get admin or user profile
export const getAdminProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const profileData = {
      fullName: user.fullName,
      email: user.email,
      accountType: user.accountType,
    };

    // Special handling for admin@communityfix.com
    if (user.email === "admin@communityfix.com") {
      profileData.isAdmin = true; // Tell frontend to use local image
    } else {
      profileData.firstLetter = user.fullName?.charAt(0)?.toUpperCase() || "U";
      if (user.profileImage) {
        profileData.profileImage = user.profileImage;
      }
    }

    return res.status(200).json(profileData);
  } catch (error) {
    console.error("Error fetching profile:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
// >>>>>>> resident/backend

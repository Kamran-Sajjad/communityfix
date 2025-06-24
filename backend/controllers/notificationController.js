// import Notification from "../models/Notification.js";

// // Get user notifications
// export const getUserNotifications = async (req, res) => {
//   try {
//     const notifications = await Notification.find({ 
//       recipient: req.user._id 
//     })
//       .sort({ createdAt: -1 })
//       .limit(20)
//       .populate("sender", "fullName profileImage");

//     res.status(200).json(notifications);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Mark as read
// export const markAsRead = async (req, res) => {
//   try {
//     await Notification.findByIdAndUpdate(
//       req.params.id,
//       { isRead: true }
//     );
//     res.status(200).json({ success: true });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



import Notification from "../models/Notification.js";

// Get user notifications
export const getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ 
      recipient: req.user._id 
    })
      .sort({ createdAt: -1 })
      .limit(20)
      .populate("sender", "fullName profileImage");

    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // Mark as read
// export const markAsRead = async (req, res) => {
//   try {
//     await Notification.findByIdAndUpdate(
//       req.params.id,
//       { isRead: true }
//     );
//     res.status(200).json({ success: true });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


export const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true } // Ensure the updated document is returned
    );
    
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.status(200).json(notification); // Return the updated notification
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

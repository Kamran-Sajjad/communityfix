// import Message from "../models/Message.js";
// import User from "../models/User.js";

// export const getMessages = async (req, res) => {
//   try {
//     const { userId, toUserId } = req.body;

//     const messages = await Message.find({
//       $or: [
//         { $and: [{ fromUserId: userId }, { toUserId: toUserId }] },
//         { $and: [{ fromUserId: toUserId }, { toUserId: userId }] },
//       ],
//     }).sort({ createdAt: 1 });

//     res.status(200).json({ success: true, messages });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// export const getChatList = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const users = await User.find({
//       _id: { $ne: userId },
//       accountType: { $in: ["admin", "serviceTeam"] },
//     }).select("-password");

//     res.status(200).json({ success: true, users });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };






import Message from "../models/Message.js";
import User from "../models/User.js";
// import { NotFoundError, ValidationError } from "../utils/errors.js";
// import { NotFoundError, ValidationError } from "../utils/errors.js";


import { 
  NotFoundError, 
  ValidationError,
  AuthError,
  ForbiddenError,
  ServerError 
} from "../utils/errors.js";

// @desc    Get messages between two users
// @route   GET /api/chat/messages
// @access  Private
export const getMessages = async (req, res) => {
  try {
    const { userId, toUserId } = req.body;

    // Validate input
    if (!userId || !toUserId) {
      throw new ValidationError("Both user IDs are required");
    }

    // Verify users exist
    const [user, recipient] = await Promise.all([
      User.findById(userId),
      User.findById(toUserId)
    ]);

    if (!user || !recipient) {
      throw new NotFoundError("One or both users not found");
    }

    // Get messages with pagination
    const messages = await Message.find({
      $or: [
        { $and: [{ fromUserId: userId }, { toUserId: toUserId }] },
        { $and: [{ fromUserId: toUserId }, { toUserId: userId }] },
      ],
    })
    .sort({ createdAt: 1 })
    .populate('fromUserId', 'fullName profileImage')
    .populate('toUserId', 'fullName profileImage');

    res.status(200).json({ 
      success: true, 
      data: {
        messages,
        participants: {
          currentUser: {
            id: user._id,
            name: user.fullName,
            avatar: user.profileImage
          },
          recipient: {
            id: recipient._id,
            name: recipient.fullName,
            avatar: recipient.profileImage
          }
        }
      }
    });

  } catch (error) {
    console.error("Error fetching messages:", error);
    
    const status = error.statusCode || 500;
    const message = error.message || "Failed to fetch messages";
    
    res.status(status).json({ 
      success: false, 
      message,
      error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

// @desc    Get user's chat list
// @route   GET /api/chat/chatlist/:userId
// @access  Private
export const getChatList = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      throw new ValidationError("User ID is required");
    }

    const user = await User.findById(userId);
    if (!user) {
      throw new NotFoundError("User not found");
    }

    // Get chat participants with last message
    const participants = await User.aggregate([
      { 
        $match: { 
          _id: { $ne: user._id },
          accountType: { $in: ["admin", "serviceTeam"] }
        } 
      },
      {
        $lookup: {
          from: "messages",
          let: { participantId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $or: [
                    { 
                      $and: [
                        { $eq: ["$fromUserId", user._id] },
                        { $eq: ["$toUserId", "$$participantId"] }
                      ]
                    },
                    { 
                      $and: [
                        { $eq: ["$fromUserId", "$$participantId"] },
                        { $eq: ["$toUserId", user._id] }
                      ]
                    }
                  ]
                }
              }
            },
            { $sort: { createdAt: -1 } },
            { $limit: 1 },
            {
              $project: {
                _id: 1,
                message: 1,
                createdAt: 1,
                read: 1
              }
            }
          ],
          as: "lastMessage"
        }
      },
      {
        $project: {
          _id: 1,
          fullName: 1,
          profileImage: 1,
          accountType: 1,
          online: 1,
          lastMessage: { $arrayElemAt: ["$lastMessage", 0] },
          unreadCount: {
            $size: {
              $filter: {
                input: "$lastMessage",
                as: "msg",
                cond: { 
                  $and: [
                    { $eq: ["$$msg.read", false] },
                    { $eq: ["$$msg.fromUserId", "$$participantId"] }
                  ]
                }
              }
            }
          }
        }
      },
      { $sort: { "lastMessage.createdAt": -1 } }
    ]);

    res.status(200).json({ 
      success: true, 
      data: participants 
    });

  } catch (error) {
    console.error("Error fetching chat list:", error);
    
    const status = error.statusCode || 500;
    const message = error.message || "Failed to fetch chat list";
    
    res.status(status).json({ 
      success: false, 
      message,
      error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

// @desc    Mark messages as read
// @route   PATCH /api/chat/messages/read
// @access  Private
export const markMessagesAsRead = async (req, res) => {
  try {
    const { userId, senderId } = req.body;

    if (!userId || !senderId) {
      throw new ValidationError("Both user IDs are required");
    }

    await Message.updateMany(
      {
        fromUserId: senderId,
        toUserId: userId,
        read: false
      },
      { $set: { read: true } }
    );

    res.status(200).json({ 
      success: true, 
      message: "Messages marked as read"
    });

  } catch (error) {
    console.error("Error marking messages as read:", error);
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Failed to mark messages as read"
    });
  }
};
// import express from "express";
// import { protect } from "../middlewares/authMiddleware.js";
// import {
//   getMessages,
//   getChatList,
// } from "../controllers/chatController.js";

// const router = express.Router();

// router.post("/messages", protect, getMessages);
// router.get("/chatlist/:userId", protect, getChatList);

// export default router;






// import express from 'express';
// import { protect } from '../middlewares/authMiddleware.js';
// import { getChatList } from '../controllers/chatController.js';

// const router = express.Router();

// // Add this route
// router.get('/chatlist', protect, getChatList);
// router.get('/chatlist/:userId', protect, getChatList); // Alternative version

// export default router;





// import express from 'express';
// import { protect } from '../middlewares/authMiddleware.js';
// import {
//   getMessages,
//   getChatList,
//   markMessagesAsRead
// } from '../controllers/chatController.js';

// const router = express.Router();

// router.get('/messages', protect, getMessages);
// router.get('/chatlist/:userId', protect, getChatList);
// router.patch('/messages/read', protect, markMessagesAsRead);

// export default router;

// backend/routes/chatRoutes.js





// import express from 'express';
// import { protect } from '../middlewares/authMiddleware.js';
// import User from '../models/User.js';

// const router = express.Router();

// // Get contacts for chat
// router.get('/contacts', protect, async (req, res) => {
//   try {
//     const user = req.user;
    
//     // Residents can chat with admin and service team
//     if (user.accountType === 'resident') {
//       const contacts = await User.find({
//         accountType: { $in: ['admin', 'serviceTeam'] }
//       }).select('fullName email accountType profileImage');
      
//       return res.json(contacts);
//     }
    
//     // Admin and service team can chat with residents
//     const contacts = await User.find({
//       accountType: 'resident'
//     }).select('fullName email accountType profileImage');
    
//     res.json(contacts);
    
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// export default router;










// import express from 'express';
// import { protect } from '../middlewares/authMiddleware.js';
// import User from '../models/User.js';
// import Message from '../models/Message.js'; // You need this model defined

// const router = express.Router();

// // Get contacts for chat
// router.get('/contacts', protect, async (req, res) => {
//   try {
//     const user = req.user;

//     // Residents can chat with admin and service team
//     if (user.accountType === 'resident') {
//       const contacts = await User.find({
//         accountType: { $in: ['admin', 'serviceTeam'] }
//       }).select('fullName email accountType profileImage');
//       return res.json(contacts);
//     }

//     // Admin and service team can chat with residents
//     const contacts = await User.find({ accountType: 'resident' })
//       .select('fullName email accountType profileImage');

//     res.json(contacts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // ✅ Get messages with a specific user
// router.get('/messages/:id', protect, async (req, res) => {
//   try {
//     const messages = await Message.find({
//       $or: [
//         { from: req.user._id, to: req.params.id },
//         { from: req.params.id, to: req.user._id }
//       ]
//     }).sort({ createdAt: 1 });

//     res.json(messages);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to fetch messages' });
//   }
// });

// // ✅ Send a new message
// router.post('/messages', protect, async (req, res) => {
//   try {
//     const { to, text } = req.body;

//     const message = new Message({
//       from: req.user._id,
//       to,
//       text,
//     });

//     await message.save();
//     res.status(201).json(message);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to send message' });
//   }
// });

// export default router;













// import express from 'express';
// import { protect } from '../middlewares/authMiddleware.js';
// import Message from '../models/Message.js';
// import User from '../models/User.js';

// const router = express.Router();

// // ✅ Get contacts (same logic as before)
// router.get('/contacts', protect, async (req, res) => {
//   try {
//     const user = req.user;

//     if (user.accountType === 'resident') {
//       const contacts = await User.find({
//         accountType: { $in: ['admin', 'serviceTeam'] }
//       }).select('fullName email accountType profileImage');
//       return res.json(contacts);
//     }

//     const contacts = await User.find({ accountType: 'resident' })
//       .select('fullName email accountType profileImage');

//     res.json(contacts);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // ✅ Get messages with a user (fix field names: fromUserId, toUserId)
// router.get('/messages/:id', protect, async (req, res) => {
//   try {
//     const messages = await Message.find({
//       $or: [
//         { fromUserId: req.user._id, toUserId: req.params.id },
//         { fromUserId: req.params.id, toUserId: req.user._id }
//       ]
//     }).sort({ createdAt: 1 });

//     res.json(messages);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to fetch messages' });
//   }
// });

// // ✅ Send a new message (fix field names)
// router.post('/messages', protect, async (req, res) => {
//   try {
//     const { to, text } = req.body;

//     if (!to || !text) {
//       return res.status(400).json({ message: 'Recipient and message text are required' });
//     }

//     const message = new Message({
//       fromUserId: req.user._id,
//       toUserId: to,
//       text
//     });

//     await message.save();

//     res.status(201).json(message);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to send message' });
//   }
// });

// export default router;








// import express from 'express';
// import { protect } from '../middlewares/authMiddleware.js';
// import Message from '../models/Message.js';
// import User from '../models/User.js';

// export default function chatRoutes(io) {
//   const router = express.Router();

//   // ✅ Get contacts
//   router.get('/contacts', protect, async (req, res) => {
//     try {
//       const user = req.user;

//       if (user.accountType === 'resident') {
//         const contacts = await User.find({
//           accountType: { $in: ['admin', 'serviceTeam'] }
//         }).select('fullName email accountType profileImage');
//         return res.json(contacts);
//       }

//       const contacts = await User.find({ accountType: 'resident' })
//         .select('fullName email accountType profileImage');

//       res.json(contacts);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });

//   // ✅ Get messages between users
//   router.get('/messages/:id', protect, async (req, res) => {
//     try {
//       const messages = await Message.find({
//         $or: [
//           { fromUserId: req.user._id, toUserId: req.params.id },
//           { fromUserId: req.params.id, toUserId: req.user._id }
//         ]
//       }).sort({ createdAt: 1 });

//       res.json(messages);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to fetch messages' });
//     }
//   });

//   // ✅ Send message and emit via socket
//   router.post('/messages', protect, async (req, res) => {
//     try {
//       const { to, text } = req.body;

//       if (!to || !text) {
//         return res.status(400).json({ message: 'Recipient and message text are required' });
//       }

//       const message = new Message({
//         fromUserId: req.user._id,
//         toUserId: to,
//         text
//       });

//       await message.save();

//       // Emit real-time event to recipient via their user ID room
//       io.to(to.toString()).emit('new-message', {
//         ...message.toObject(),
//         from: req.user._id
//       });

//       res.status(201).json(message);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to send message' });
//     }
//   });

//   return router;
// }


// import express from 'express';
// import { protect } from '../middlewares/authMiddleware.js';
// import Message from '../models/Message.js';
// import User from '../models/User.js';

// export default function chatRoutes(io) {
//   const router = express.Router();

//   // ✅ Get contacts
//   router.get('/contacts', protect, async (req, res) => {
//     try {
//       const user = req.user;

//       if (user.accountType === 'resident') {
//         const contacts = await User.find({
//           accountType: { $in: ['admin', 'serviceTeam'] }
//         }).select('fullName email accountType profileImage');
//         return res.json(contacts);
//       }

//       const contacts = await User.find({ accountType: 'resident' })
//         .select('fullName email accountType profileImage');

//       res.json(contacts);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });

//   // ✅ Get messages between users
//   router.get('/messages/:id', protect, async (req, res) => {
//     try {
//       const messages = await Message.find({
//         $or: [
//           { fromUserId: req.user._id, toUserId: req.params.id },
//           { fromUserId: req.params.id, toUserId: req.user._id }
//         ]
//       }).sort({ createdAt: 1 });

//       res.json(messages);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to fetch messages' });
//     }
//   });

//   // ✅ Send message and emit via socket
//   router.post('/messages', protect, async (req, res) => {
//     try {
//       const { to, text } = req.body;

//       if (!to || !text) {
//         return res.status(400).json({ message: 'Recipient and message text are required' });
//       }

//       const message = new Message({
//         fromUserId: req.user._id,
//         toUserId: to,
//         text
//       });

//       await message.save();

//       // Emit real-time event to recipient via their user ID room
//       io.to(to.toString()).emit('new-message', {
//         ...message.toObject(),
//         from: req.user._id
//       });

//       res.status(201).json(message);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to send message' });
//     }
//   });

//   return router;
// }
























// chatRoutes.js
import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import Message from '../models/Message.js';
import User from '../models/User.js';

export default function chatRoutes(io) {
  const router = express.Router();

  // ✅ Get contacts
  router.get('/contacts', protect, async (req, res) => {
    try {
      const user = req.user;

      // If the user is a resident, they can see both admins and service team members
      if (user.accountType === 'resident') {
        const contacts = await User.find({
          accountType: { $in: ['admin', 'serviceTeam'] }
        }).select('fullName email accountType profileImage');
        return res.json(contacts);
      }

      // If the user is a service team member, they can only see admins and residents
      if (user.accountType === 'serviceTeam') {
        const contacts = await User.find({
          accountType: { $in: ['admin', 'resident'] }
        }).select('fullName email accountType profileImage');
        return res.json(contacts);
      }

      // If the user is an admin, they can see admins, service team members, and residents
      if (user.accountType === 'admin') {
        const contacts = await User.find({
          accountType: { $in: ['admin', 'serviceTeam', 'resident'] }
        }).select('fullName email accountType profileImage');
        return res.json(contacts);
      }

      // If accountType is not recognized, respond with an error
      return res.status(400).json({ message: 'Invalid user type' });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  // ✅ Get messages between users
  router.get('/messages/:id', protect, async (req, res) => {
    try {
      const messages = await Message.find({
        $or: [
          { fromUserId: req.user._id, toUserId: req.params.id },
          { fromUserId: req.params.id, toUserId: req.user._id }
        ]
      }).sort({ createdAt: 1 });

      res.json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch messages' });
    }
  });

  // ✅ Send message and emit via socket
  router.post('/messages', protect, async (req, res) => {
    try {
      const { to, text } = req.body;

      if (!to || !text) {
        return res.status(400).json({ message: 'Recipient and message text are required' });
      }

      const message = new Message({
        fromUserId: req.user._id,
        toUserId: to,
        text
      });

      await message.save();

      // Emit real-time event to recipient via their user ID room
      io.to(to.toString()).emit('new-message', {
        ...message.toObject(),
        from: req.user._id
      });

      res.status(201).json(message);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send message' });
    }
  });

  return router;
}

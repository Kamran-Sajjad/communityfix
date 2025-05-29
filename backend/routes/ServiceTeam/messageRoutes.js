import express from 'express';
import { 
  getMessages, 
  sendMessage, 
  deleteMessage,
  getContacts
} from '../../controllers/ServiceTeam/messageController.js';
import { protect } from '../../middlewares/ServiceTeam/protect.js';

const router = express.Router();

// Protected routes
router.get('/contacts', protect, getContacts);
router.get('/:receiverId/:receiverModel', protect, getMessages);
router.post('/', protect, sendMessage);
router.delete('/:id', protect, deleteMessage);

export default router;

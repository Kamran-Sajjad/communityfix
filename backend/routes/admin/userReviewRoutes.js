// // backend/routes/admin/userReviewRoutes.js
// import express from 'express';
// import {
//   getPendingUsers,
//   acceptUser,
//   rejectUser,
// } from '../../controllers/admin/userReviewController.js';

// const router = express.Router();

// router.get('/pending-users', getPendingUsers);
// router.post('/accept/:id', acceptUser);
// router.post('/reject/:id', rejectUser);

// export default router;




// backend/routes/admin/userReviewRoutes.js
import express from 'express';
import {
  getPendingUsers,
  acceptUser,
  rejectUser,
} from '../../controllers/admin/userReviewController.js';

const router = express.Router();

router.get('/users', getPendingUsers);
router.post('/users/accept', acceptUser);
router.post('/users/reject', rejectUser);

export default router;

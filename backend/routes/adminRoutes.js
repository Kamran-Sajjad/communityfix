// // routes/adminRoutes.js

// import express from "express";
// import bcrypt from "bcryptjs";
// import User from "../models/User.js";
// import createToken from "../utils/generateToken.js";

// const router = express.Router();
// // Protected admin registration (for Postman use only)
// router.post("/create-admin", async (req, res) => {
//   try {
//     const {
//       fullName,
//       email,
//       password,
//       societyName,
//       cnic,
//       houseNo,
//       address,
//       phoneNumber,
//       agreeToTerms,
//       accountType,
//     } = req.body;

//     // Protect with a secret key (you can define this in .env)
//     // if (secretKey !== process.env.ADMIN_SECRET_KEY) {
//     //   return res.status(401).json({ error: 'Unauthorized access' });
//     // }

//     // Check if admin already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Admin already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create admin user
//     const adminUser = await User.create({
//       fullName,
//       email,
//       password: hashedPassword,
//       societyName,
//       cnic,
//       houseNo,
//       address,
//       phoneNumber,
//       agreeToTerms,
//       accountType: "admin",
//     });

//     // Generate token
//     const token = createToken(adminUser._id, adminUser.accountType);

//     res.status(201).json({
//       _id: adminUser._id,
//       fullName: adminUser.fullName,
//       email: adminUser.email,
//       societyName: adminUser.societyName,
//       cnic: adminUser.cnic,
//       houseNo: adminUser.houseNo,
//       address: adminUser.address,
//       phoneNumber: adminUser.phoneNumber,
//       agreeToTerms: adminUser.agreeToTerms,
//       accountType: adminUser.accountType,
//       token,
//     });
//   } catch (error) {
//     console.error("Error creating admin:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });
// export default router;







// // routes/adminRoutes.js

// import express from "express";
// import bcrypt from "bcryptjs";
// import User from "../models/User.js";
// import createToken from "../utils/generateToken.js";
// import { notifyUserSuspended } from "../controllers/notificationController.js"; // ✅ Import this

// const router = express.Router();

// // -------------------- Create Admin --------------------
// router.post("/create-admin", async (req, res) => {
//   try {
//     const {
//       fullName,
//       email,
//       password,
//       societyName,
//       cnic,
//       houseNo,
//       address,
//       phoneNumber,
//       agreeToTerms,
//       accountType,
//     } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Admin already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const adminUser = await User.create({
//       fullName,
//       email,
//       password: hashedPassword,
//       societyName,
//       cnic,
//       houseNo,
//       address,
//       phoneNumber,
//       agreeToTerms,
//       accountType: "admin",
//     });

//     const token = createToken(adminUser._id, adminUser.accountType);

//     res.status(201).json({
//       _id: adminUser._id,
//       fullName: adminUser.fullName,
//       email: adminUser.email,
//       societyName: adminUser.societyName,
//       cnic: adminUser.cnic,
//       houseNo: adminUser.houseNo,
//       address: adminUser.address,
//       phoneNumber: adminUser.phoneNumber,
//       agreeToTerms: adminUser.agreeToTerms,
//       accountType: adminUser.accountType,
//       token,
//     });
//   } catch (error) {
//     console.error("Error creating admin:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // -------------------- Suspend User --------------------
// router.patch("/users/:id/suspend", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     user.isSuspended = true;
//     await user.save();

//     // ✅ Send suspension notification
//     await notifyUserSuspended(user);

//     res.status(200).json({ message: "User suspended and notified" });
//   } catch (error) {
//     console.error("Error suspending user:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// export default router;






// routes/adminRoutes.js

import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { notifyUserSuspended, notifyUserActivated } from "../controllers/notificationController.js"; // ✅ Import notification functions

const router = express.Router();

// -------------------- Create Admin --------------------
router.post("/create-admin", async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      societyName,
      cnic,
      houseNo,
      address,
      phoneNumber,
      agreeToTerms,
      accountType,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const adminUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      societyName,
      cnic,
      houseNo,
      address,
      phoneNumber,
      agreeToTerms,
      accountType: "admin",
    });

    const token = createToken(adminUser._id, adminUser.accountType);

    res.status(201).json({
      _id: adminUser._id,
      fullName: adminUser.fullName,
      email: adminUser.email,
      societyName: adminUser.societyName,
      cnic: adminUser.cnic,
      houseNo: adminUser.houseNo,
      address: adminUser.address,
      phoneNumber: adminUser.phoneNumber,
      agreeToTerms: adminUser.agreeToTerms,
      accountType: adminUser.accountType,
      token,
    });
  } catch (error) {
    console.error("Error creating admin:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// -------------------- Suspend User --------------------
router.patch("/users/:id/suspend", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.status = 'suspended'; // Update status to suspended
    await user.save();

    // Send suspension notification
    await notifyUserSuspended(user);

    res.status(200).json({ message: "User suspended and notified" });
  } catch (error) {
    console.error("Error suspending user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// -------------------- Activate User --------------------
router.patch("/users/:id/activate", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.status = 'active'; // Update status to active
    await user.save();

    // Send activation notification
    await notifyUserActivated(user);

    res.status(200).json({ message: "User activated and notified" });
  } catch (error) {
    console.error("Error activating user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;


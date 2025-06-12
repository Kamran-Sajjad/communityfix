// routes/adminRoutes.js

import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import createToken from "../utils/generateToken.js";

const router = express.Router();
// Protected admin registration (for Postman use only)
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

    // Protect with a secret key (you can define this in .env)
    // if (secretKey !== process.env.ADMIN_SECRET_KEY) {
    //   return res.status(401).json({ error: 'Unauthorized access' });
    // }

    // Check if admin already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin user
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

    // Generate token
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
export default router;

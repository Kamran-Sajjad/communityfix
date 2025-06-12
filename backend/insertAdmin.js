


// insertAdmin.js

import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import connectDB from './config/db.js';
import User from './models/User.js';

await connectDB();

async function insertAdmin() {
  try {
    const adminExists = await User.findOne({ accountType: 'admin' });
    if (adminExists) {
      console.log('⚠️ Admin already exists.');
      process.exit();
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);

    const admin = new User({
      fullName: 'Admin User',
      email: 'admin@communityfix.com',
      password: hashedPassword,
      accountType: 'admin',
      cnic: '00000-0000000-0',
      phoneNumber: '03000000000',
      houseNo: 'Admin House',
      address: 'Admin Panel',
      agreeToTerms: true,
    });

    await admin.save();
    console.log('✅ Admin inserted successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Error creating admin:', err);
    process.exit(1);
  }
}

insertAdmin();

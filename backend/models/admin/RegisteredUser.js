// backend/models/admin/RegisteredUser.js
import mongoose from "mongoose";

const registeredUserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  address: String,
  houseNo: String,
  phoneNumber: String,
  cnic: String,
  accountType: String,
  serviceCategory: String,
  serviceLocation: String,
  image: String,
  access: { type: Boolean, required: true },
}, { timestamps: true });

const RegisteredUser = mongoose.model("RegisteredUser", registeredUserSchema);
export default RegisteredUser;


// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    resetPasswordOtp: { type: String },
    resetPasswordOtpExpiry: { type: Date },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true,lowercase: true },
    address: { type: String, required: true },
    houseNo: {
      type: String,
      required: function () {
        return this.accountType === "resident";
      },
    },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    cnic: { type: String, required: true },
    profileImage: {
      type: String,
      default: '', 
    },
    accountType: {
      type: String,
      enum: ["resident", "serviceTeam", "admin"],
      default: "resident",
    },
    agreeToTerms: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

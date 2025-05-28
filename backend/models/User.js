


// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    resetPasswordOtp: { type: String },
    resetPasswordOtpExpiry: { type: Date },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
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
    accountType: {
      type: String,
      enum: ["resident", "serviceTeam", "admin"],
      default: "resident",
    },
    agreeToTerms: { type: Boolean, required: true },
  },
  { timestamps: true }
);

// Make sure this line comes AFTER the schema definition
const User = mongoose.model("User", userSchema);

export default User;

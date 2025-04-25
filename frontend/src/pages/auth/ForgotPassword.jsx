import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import logo from "../../assets/logo.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  // Initialize useNavigate hook
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setSuccessMessage("");

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Password reset code has been sent to your email");

      // After displaying the success message, redirect to /auth/OtpVerification
      setTimeout(() => {
        navigate("/auth/OtpVerification");
      }, 1500); // Redirect after 1.5 seconds
    }, 1500);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left Logo Section */}
      <div className="w-full md:w-[40%] lg:w-[35%] bg-black flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gray-200 rounded-lg flex items-center justify-center p-3 sm:p-4">
          <img
            src={logo}
            alt="Community Fix Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-[60%] lg:w-[65%] p-4 sm:p-6 md:p-8 lg:p-10 flex items-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12">
            Forgot Password
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Email Input */}
            <div>
              <label className="block text-base sm:text-lg md:text-xl font-medium mb-1 sm:mb-2">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
              {emailError && <p className="mt-1 text-red-500 text-sm">{emailError}</p>}
            </div>

            {/* Success Message */}
            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                {successMessage}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex flex-col items-center pt-2 sm:pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer bg-black text-white px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>

              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
                Remember your password?{" "}
                <Link to="/auth/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

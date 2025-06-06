"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom" // Import useNavigate for navigation
import logo from "../../assets/logo.png"

export default function OtpVerification() {
  // State for the 4 OTP digits
  const [otp, setOtp] = useState(["", "", "", ""])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [resendMessage, setResendMessage] = useState("") // New state for Resend OTP message

  const navigate = useNavigate() // Initialize useNavigate

  // Create refs for each input to enable focus management
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

  // Handle input change
  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return

    // Update the OTP array
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // If value is entered and not the last input, focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current.focus()
    }
  }

  // Handle key press
  const handleKeyDown = (index, e) => {
    // If backspace is pressed and current input is empty, focus previous input
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus()
    }
  }

  // Handle paste event
  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Check if pasted content is a 4-digit number
    if (/^\d{4}$/.test(pastedData)) {
      const newOtp = pastedData.split("")
      setOtp(newOtp)

      // Focus the last input
      inputRefs[3].current.focus()
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    // Check if OTP is complete
    if (otp.some((digit) => digit === "")) {
      setError("Please enter the complete OTP")
      return
    }

    // Simulate API call
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSuccess(true)

      // Wait for 2 seconds before navigating to reset password page
      setTimeout(() => {
        navigate("/auth/NewPassword")
      }, 2000) // Redirect after 2 seconds
    }, 1500)
  }

  // Handle Resend OTP
  const handleResendOtp = () => {
    // Simulate resend OTP API call
    setResendMessage("Password reset code has been Resent to your email")

    // Optionally, clear OTP and focus the first input again
    setOtp(["", "", "", ""])
    inputRefs[0].current.focus()

    // Hide the resend message after 4 seconds
    setTimeout(() => {
      setResendMessage("")
    }, 4000)
  }

  // Focus first input on component mount
  useEffect(() => {
    inputRefs[0].current.focus()
  }, [])

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left sidebar with logo */}
      <div className="w-full md:w-[40%] lg:w-[35%] bg-black flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gray-200 rounded-lg flex items-center justify-center p-3 sm:p-4">
          <img
            src={logo}
            alt="Community Fix Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right side with OTP form */}
      <div className="w-full md:w-[60%] lg:w-[65%] p-4 sm:p-6 md:p-8 lg:p-10 flex items-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12">
            Verify Your OTP
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-10">
            <div>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">Enter OTP we have sent to your Email</p>

              {/* OTP Input Fields */}
              <div className="flex justify-between gap-2 sm:gap-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : null}
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-center text-xl sm:text-2xl md:text-3xl bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    aria-label={`OTP digit ${index + 1}`}
                  />
                ))}
              </div>

              {/* Error Message */}
              {error && <p className="mt-2 text-red-500 text-sm sm:text-base">{error}</p>}

              {/* Success Message */}
              {success && (
                <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                  OTP verified successfully! Redirecting to reset password...
                </div>
              )}

              {/* Resend OTP Message */}
              {resendMessage && (
                <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                  {resendMessage}
                </div>
              )}
            </div>

            {/* Confirm Button */}
            <div className="flex flex-col items-center">
              <button
                type="submit"
                disabled={isSubmitting || success}
                className="cursor-pointer bg-black text-white px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto disabled:opacity-70"
              >
                {isSubmitting ? "Verifying..." : "Confirm"}
              </button>

              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
                Didn't receive the code?{" "}
                <button
                  type="button"
                  onClick={handleResendOtp} // Trigger Resend OTP logic
                  className="cursor-pointer text-blue-600 hover:underline"
                >
                  Resend OTP
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

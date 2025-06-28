
// "use client"

// import { useState, useRef, useEffect } from "react"
// import { useNavigate, useLocation } from "react-router-dom"
// import axios from 'axios';
// import logo from "../../assets/logo.png"


// export default function OtpVerification() {
//   // State for the 4 OTP digits
//   const [otp, setOtp] = useState(["", "", "", ""])
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [error, setError] = useState("")
//   const [success, setSuccess] = useState(false)
//   const [resendMessage, setResendMessage] = useState("")

//   const navigate = useNavigate()
//   const location = useLocation()
//   const queryParams = new URLSearchParams(location.search);
//   // const context = queryParams.get("context");
//   const context = queryParams.get("context") || "forgot-password";
//   let email = location.state?.email || "" // Get email from navigation state
//   if (context === "signup" && !email) {
//     const signupData = JSON.parse(sessionStorage.getItem("signupFormData"));
//     email = signupData?.email || "";
//   }

//   // Create refs for each input
//   const inputRefs = [
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null)
//   ]

//   // Handle input change
//   const handleChange = (index, value) => {
//     if (value && !/^\d+$/.test(value)) return

//     const newOtp = [...otp]
//     newOtp[index] = value
//     setOtp(newOtp)

//     if (value && index < 3) {
//       inputRefs[index + 1].current.focus()
//     }
//   }

//   // Handle key press
//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs[index - 1].current.focus()
//     }
//   }

//   // Handle paste event
//   const handlePaste = (e) => {
//     e.preventDefault()
//     const pastedData = e.clipboardData.getData("text/plain").trim()
//     if (/^\d{4}$/.test(pastedData)) {
//       const newOtp = pastedData.split("")
//       setOtp(newOtp)
//       inputRefs[3].current.focus()
//     }
//   }


//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError("")

//     // Validate OTP is complete
//     if (otp.some(digit => digit === "")) {
//       setError("Please enter the complete 4-digit code")
//       return
//     }

//     setIsSubmitting(true)

//     try {
//       const endpoint =
//   context === "signup"
//     ? "http://localhost:5000/api/users/verify-signup-otp"
//     : "http://localhost:5000/api/auth/verify-otp";

//     const response = await axios.post(endpoint, {
//   email,
//   otp: otp.join(""), // assuming otp is array of 4 digits
// });
      

//       if (response.data.success) {
//         if (context === "signup") {
//           const signupData = JSON.parse(sessionStorage.getItem("signupFormData"));
//           try {
//             const res = await axios.post("http://localhost:5000/api/users/signup", signupData);
//             if (res.status === 201) {
//               setSuccess(true);
//               setTimeout(() => {
//                 sessionStorage.removeItem("signupFormData");
//                 navigate("/auth/login");
//               }, 2000);
//             } else {
//               setError("Signup failed after OTP verification");
//             }
//           } catch (err) {
//             setError("Signup failed: " + (err.response?.data?.message || err.message));
//           }
//         } else {
//           setSuccess(true);
//           setTimeout(() => {
//             navigate("/auth/NewPassword", { state: { email } });
//           }, 1500);
//         }
//       }

//     } catch (error) {
//       console.error("OTP verification error:", error)
//       setError(error.response?.data?.message ||
//         error.message ||
//         "Failed to verify OTP. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }






//   // Handle resend OTP
//   const handleResendOtp = async () => {
//     setError("")
//     setResendMessage("")

//     try {
//       const response = await axios.post('http://localhost:5000/api/users/forgot-password', { email })

//       if (response.data.success) {
//         setResendMessage("New OTP sent to your email")
//         setOtp(["", "", "", ""])
//         inputRefs[0].current.focus()
//       } else {
//         setError(response.data.message || "Failed to resend OTP")
//       }
//     } catch (error) {
//       setError(error.response?.data?.message ||
//         "Failed to resend OTP. Please try again.")
//     }
//   }

//   // Focus first input on mount
//   useEffect(() => {
//     if (!email) {
//       // Redirect if no email is found (direct access to this page)
//       navigate("/auth/forgot-password")
//     } else {
//       inputRefs[0].current.focus()
//     }
//   }, [])

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen w-full">
//       {/* Left sidebar with logo */}
//       <div className="w-full md:w-[40%] lg:w-[35%] bg-black flex items-center justify-center p-4 sm:p-6 md:p-10">
//         <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gray-200 rounded-lg flex items-center justify-center p-3 sm:p-4">
//           <img
//             src={logo}
//             alt="Community Fix Logo"
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </div>

//       {/* Right side with OTP form */}
//       <div className="w-full md:w-[60%] lg:w-[65%] p-4 sm:p-6 md:p-8 lg:p-10 flex items-center">
//         <div className="max-w-md mx-auto w-full">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12">
//             Verify Your OTP
//           </h1>

//           <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-10">
//             <div>
//               <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
//                 Enter OTP sent to {email}
//               </p>

//               {/* OTP Input Fields */}
//               <div className="flex justify-between gap-2 sm:gap-4">
//                 {[0, 1, 2, 3].map((index) => (
//                   <input
//                     key={index}
//                     ref={inputRefs[index]}
//                     type="text"
//                     inputMode="numeric"
//                     pattern="[0-9]*"
//                     maxLength={1}
//                     value={otp[index]}
//                     onChange={(e) => handleChange(index, e.target.value)}
//                     onKeyDown={(e) => handleKeyDown(index, e)}
//                     onPaste={index === 0 ? handlePaste : undefined}
//                     className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-center text-xl sm:text-2xl md:text-3xl bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//                     aria-label={`OTP digit ${index + 1}`}
//                     disabled={isSubmitting || success}
//                   />
//                 ))}
//               </div>

//               {/* Error Message */}
//               {error && (
//                 <p className="mt-2 text-red-500 text-sm sm:text-base">
//                   {error}
//                 </p>
//               )}

//               {/* Success Message */}
//               {success && (
//                 <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
//                   OTP verified successfully! Redirecting...
//                 </div>
//               )}

//               {/* Resend Message */}
//               {resendMessage && (
//                 <div className="mt-4 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-md">
//                   {resendMessage}
//                 </div>
//               )}
//             </div>

//             {/* Confirm Button */}
//             <div className="flex flex-col items-center">
//               <button
//                 type="submit"
//                 disabled={isSubmitting || success}
//                 className="cursor-pointer bg-black text-white px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto disabled:opacity-70"
//               >
//                 {isSubmitting ? "Verifying..." : "Verify OTP"}
//               </button>

//               <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
//                 Didn't receive the code?{" "}
//                 <button
//                   type="button"
//                   onClick={handleResendOtp}
//                   disabled={isSubmitting}
//                   className="cursor-pointer text-blue-600 hover:underline disabled:text-gray-400"
//                 >
//                   Resend OTP
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }















"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios';
import logo from "../../assets/logo.png"

export default function OtpVerification() {
  const [otp, setOtp] = useState(["", "", "", ""])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [resendMessage, setResendMessage] = useState("")
  const [resendDisabled, setResendDisabled] = useState(false)
  const [countdown, setCountdown] = useState(60)

  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const context = queryParams.get("context") || "forgot-password"
  let email = location.state?.email || ""
  
  if (context === "signup" && !email) {
    const signupData = JSON.parse(sessionStorage.getItem("signupFormData"))
    email = signupData?.email || ""
  }

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]

  // Handle input change
  const handleChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < 3) {
      inputRefs[index + 1].current.focus()
    }
  }

  // Handle key press
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus()
    }
  }

  // Handle paste event
  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()
    if (/^\d{4}$/.test(pastedData)) {
      const newOtp = pastedData.split("")
      setOtp(newOtp)
      inputRefs[3].current.focus()
    }
  }

  // Handle OTP submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (otp.some(digit => digit === "")) {
      setError("Please enter the complete 4-digit code")
      return
    }

    setIsSubmitting(true)

    try {
      const endpoint = context === "signup"
        ? "/api/users/verify-signup-otp"
        : "/api/users/verify-otp"

      const response = await axios.post(endpoint, {
        email,
        otp: otp.join(""),
      })

      if (response.data.success) {
        setSuccess(true)
        
        if (context === "signup") {
          const signupData = JSON.parse(sessionStorage.getItem("signupFormData"))
          try {
            const res = await axios.post("/api/users/signup", signupData)
            if (res.status === 201) {
              setTimeout(() => {
                sessionStorage.removeItem("signupFormData")
                navigate("/auth/login")
              }, 2000)
            }
          } catch (err) {
            setError(err.response?.data?.message || "Signup failed after OTP verification")
          }
        } else {
          setTimeout(() => {
            navigate("/auth/NewPassword", { state: { email } })
          }, 1500)
        }
      }
    } catch (error) {
      console.error("OTP verification error:", error)
      setError(error.response?.data?.message || 
        error.message || 
        "Failed to verify OTP. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle resend OTP
  const handleResendOtp = async () => {
    setError("")
    setResendMessage("")
    setResendDisabled(true)
    setCountdown(60)

    try {
      const endpoint = context === "signup"
        ? "/api/users/send-signup-otp"
        : "/api/users/forgot-password"

      const response = await axios.post(endpoint, { email })

      if (response.data.success) {
        setResendMessage("New OTP sent to your email")
        setOtp(["", "", "", ""])
        inputRefs[0].current.focus()
      }
    } catch (error) {
      setError(error.response?.data?.message ||
        "Failed to resend OTP. Please try again.")
    }
  }

  // Countdown timer for resend OTP
  useEffect(() => {
    let timer
    if (resendDisabled && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    } else if (countdown === 0) {
      setResendDisabled(false)
    }
    return () => clearTimeout(timer)
  }, [resendDisabled, countdown])

  // Focus first input on mount
  useEffect(() => {
    if (!email) {
      navigate("/auth/forgot-password")
    } else {
      inputRefs[0].current.focus()
    }
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
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                Enter OTP sent to {email}
              </p>

              {/* OTP Input Fields */}
              <div className="flex justify-between gap-2 sm:gap-4">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-center text-xl sm:text-2xl md:text-3xl bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    aria-label={`OTP digit ${index + 1}`}
                    disabled={isSubmitting || success}
                  />
                ))}
              </div>

              {/* Error Message */}
              {error && (
                <p className="mt-2 text-red-500 text-sm sm:text-base">
                  {error}
                </p>
              )}

              {/* Success Message */}
              {success && (
                <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                  OTP verified successfully! Redirecting...
                </div>
              )}

              {/* Resend Message */}
              {resendMessage && (
                <div className="mt-4 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-md">
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
                {isSubmitting ? "Verifying..." : "Verify OTP"}
              </button>

              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
                Didn't receive the code?{" "}
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendDisabled}
                  className="cursor-pointer text-blue-600 hover:underline disabled:text-gray-400"
                >
                  {resendDisabled ? `Resend in ${countdown}s` : "Resend OTP"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
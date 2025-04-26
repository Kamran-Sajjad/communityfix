// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import logo from "../../assets/logo.png"

// export default function NewPassword() {
//   const navigate = useNavigate(); // useNavigate for routing in React
//   const [formData, setFormData] = useState({
//     newPassword: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({
//     newPassword: "",
//     confirmPassword: "",
//     general: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showPassword, setShowPassword] = useState({
//     newPassword: false,
//     confirmPassword: false,
//   });

//   // Password validation criteria
//   const validatePassword = (password) => {
//     if (password.length < 8) {
//       return "Password must be at least 8 characters long";
//     }
//     if (!/[A-Z]/.test(password)) {
//       return "Password must contain at least one uppercase letter";
//     }
//     if (!/[a-z]/.test(password)) {
//       return "Password must contain at least one lowercase letter";
//     }
//     if (!/[0-9]/.test(password)) {
//       return "Password must contain at least one number";
//     }
//     if (!/[^A-Za-z0-9]/.test(password)) {
//       return "Password must contain at least one special character";
//     }
//     return "";
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     // Clear errors when typing
//     setErrors({
//       ...errors,
//       [name]: "",
//       general: "",
//     });
//   };

//   const togglePasswordVisibility = (field) => {
//     setShowPassword({
//       ...showPassword,
//       [field]: !showPassword[field],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Reset errors
//     const newErrors = {
//       newPassword: "",
//       confirmPassword: "",
//       general: "",
//     };

//     // Validate new password
//     const passwordError = validatePassword(formData.newPassword);
//     if (passwordError) {
//       newErrors.newPassword = passwordError;
//     }

//     // Check if passwords match
//     if (formData.newPassword !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     // If there are errors, display them and stop submission
//     if (newErrors.newPassword || newErrors.confirmPassword) {
//       setErrors(newErrors);
//       return;
//     }

//     // Submit the form
//     setIsSubmitting(true);

//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       // In a real app, you would make an API call to update the password
//       // and handle success/error accordingly

//       // Redirect to login page on success
//       navigate("/login"); // useNavigate to redirect in React
//     }, 1500);
//   };

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

//       {/* Right side with form */}
//       <div className="w-full md:w-[60%] lg:w-[65%] p-4 sm:p-6 md:p-8 lg:p-10 flex items-center">
//         <div className="max-w-md mx-auto w-full">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12">Set a new Password</h1>

//           <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
//             {/* New Password */}
//             <div>
//               <label htmlFor="newPassword" className="block text-lg sm:text-xl font-medium mb-2">
//                 New password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword.newPassword ? "text" : "password"}
//                   id="newPassword"
//                   name="newPassword"
//                   value={formData.newPassword}
//                   onChange={handleChange}
//                   placeholder="Enter your new password"
//                   className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => togglePasswordVisibility("newPassword")}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
//                 >
//                   {showPassword.newPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//               {errors.newPassword && <p className="mt-1 text-red-500 text-sm">{errors.newPassword}</p>}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label htmlFor="confirmPassword" className="block text-lg sm:text-xl font-medium mb-2">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword.confirmPassword ? "text" : "password"}
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   placeholder="Confirm your password"
//                   className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => togglePasswordVisibility("confirmPassword")}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
//                 >
//                   {showPassword.confirmPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//               {errors.confirmPassword && <p className="mt-1 text-red-500 text-sm">{errors.confirmPassword}</p>}
//             </div>

//             {/* General Error */}
//             {errors.general && (
//               <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">{errors.general}</div>
//             )}

//             {/* Submit Button */}
//             <div className="flex flex-col items-center pt-4">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="cursor-pointer bg-black text-white px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto disabled:opacity-70"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit"}
//               </button>

//               <div className="mt-4 text-xs sm:text-sm text-gray-600">
//                 Remember your password?{" "}
//                 <Link to="/auth/login" className="text-blue-600 hover:underline">
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../assets/logo.png"

export default function NewPassword() {
  const navigate = useNavigate(); // useNavigate for routing in React
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
    general: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Password validation criteria
  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return "Password must contain at least one special character";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when typing
    setErrors({
      ...errors,
      [name]: "",
      general: "",
    });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    const newErrors = {
      newPassword: "",
      confirmPassword: "",
      general: "",
    };

    // Validate new password
    const passwordError = validatePassword(formData.newPassword);
    if (passwordError) {
      newErrors.newPassword = passwordError;
    }

    // Check if passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // If there are errors, display them and stop submission
    if (newErrors.newPassword || newErrors.confirmPassword) {
      setErrors(newErrors);
      return;
    }

    // Submit the form
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("New Password has been set successfully and you are being redirected towards the Login page.");

      // Redirect to login page after the success message
      setTimeout(() => {
        navigate("/auth/login"); // Redirect to login page
      }, 2000); // Wait for 2 seconds before redirecting
    }, 1500);
  };

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

      {/* Right side with form */}
      <div className="w-full md:w-[60%] lg:w-[65%] p-4 sm:p-6 md:p-8 lg:p-10 flex items-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12">Set a new Password</h1>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-lg sm:text-xl font-medium mb-2">
                New password
              </label>
              <div className="relative">
                <input
                  type={showPassword.newPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter your new password"
                  className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("newPassword")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword.newPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.newPassword && <p className="mt-1 text-red-500 text-sm">{errors.newPassword}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-lg sm:text-xl font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword.confirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword.confirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>

            {/* General Error */}
            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">{errors.general}</div>
            )}

            {/* Success Message */}
            {successMessage && (
              <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                {successMessage}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex flex-col items-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer bg-black text-white px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              <div className="mt-4 text-xs sm:text-sm text-gray-600">
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

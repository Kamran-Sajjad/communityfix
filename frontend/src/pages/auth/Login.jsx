// "use client";

// import { useState } from "react";
// import InputField from "../../components/Form/InputField";
// import FormActions from "../../components/Form/FormActions";
// import ForgotPasswordLink from "../../components/Form/ForgotPasswordLink";
// import { toast, ToastContainer } from "react-toastify";
// import logo from "../../assets/logo.png"

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("Login form submitted:", formData);
//   //   // Add your login logic here
//   // };


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(
//       (u) => u.email === formData.email && u.password === formData.password
//     );

//     if (user) {
//       toast.success("Login successful! Redirecting...");
//       localStorage.setItem("loggedInUser", JSON.stringify(user));

//       setTimeout(() => {
//         window.location.href = "/"; // or wherever your home page is
//       }, 2000);
//     } else {
//       toast.error("Invalid email or password!");
//     }
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
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12">Welcome back</h1>

//           <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
//             {/* Email */}
//             <InputField
//               label="Your Email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter your email"
//               required
//             />

//             {/* Password */}
//             <InputField
//               label="Your Password"
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               placeholder="Enter your Password"
//               required
//             />

//             {/* Forgot Password Link */}
//             <ForgotPasswordLink />

//             {/* Form Actions (Login Button and Sign Up Link) */}
//             <FormActions isLoginPage={true} />
//           </form>
//         </div>
//         <ToastContainer
//           position="top-center"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="colored"
//         />

//       </div>
//     </div>
//   );
// }

















"use client";

import { useState } from "react";
import InputField from "../../components/Form/InputField";
import FormActions from "../../components/Form/FormActions";
import ForgotPasswordLink from "../../components/Form/ForgotPasswordLink";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../assets/logo.png";
// import { useRouter } from "next/navigation";
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const router = useRouter();
  const navigate = useNavigate();

  // Hardcoded user credentials
  const hardcodedUsers = [
    {
      email: "resident123@gmail.com",
      password: "Resident123",
      role: "resident",
      name: "John Resident"
    },
    {
      email: "serviceteam123@gmail.com",
      password: "Serviceteam123",
      role: "service Team",
      name: "Service Team Member"
    },
    {
      email: "admin123@gmail.com",
      password: "Admin123",
      role: "admin",
      name: "System Admin"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check against hardcoded users first
    const hardcodedUser = hardcodedUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (hardcodedUser) {
      toast.success(`Login successful as ${hardcodedUser.role}! Redirecting...`);
      localStorage.setItem("loggedInUser", JSON.stringify(hardcodedUser));

      setTimeout(() => {
        // Redirect based on role
        switch(hardcodedUser.role) {
          case 'resident':
            navigate('/residents/dashboard');
            break;
          case 'service':
            navigate('/serviceTeam/mechanicDashboard');
            break;
          case 'admin':
            navigate('/admin/Admindb');
            break;
          default:
            navigate('/auth/login');
        }
      }, 2000);
      return;
    }

    // Fallback to localStorage users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      toast.success("Login successful! Redirecting...");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } else {
      toast.error("Invalid email or password!");
    }
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12">Welcome back</h1>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Email */}
            <InputField
              label="Your Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />

            {/* Password */}
            <InputField
              label="Your Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your Password"
              required
            />

            {/* Forgot Password Link */}
            <ForgotPasswordLink />

            {/* Form Actions (Login Button and Sign Up Link) */}
            <FormActions isLoginPage={true} />
          </form>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}
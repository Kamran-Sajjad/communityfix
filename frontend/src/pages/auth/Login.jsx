

"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
// import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";
import { showSuccessToast, showErrorToast,showWarningToast } from "../../../../backend/utils/toastUtils";

import InputField from "../../components/Form/InputField";
import FormActions from "../../components/Form/FormActions";
import ForgotPasswordLink from "../../components/Form/ForgotPasswordLink";
import logo from "../../assets/logo.png";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("status", data.status);

        showSuccessToast(`Welcome back, ${data.fullName}! Redirecting...`);
        // const userStatus = localStorage.getItem("status");

        if (data.status === "suspended") {
          showWarningToast("Your account is suspended. You cannot perform any action.");
          
        }
        
        }
      else {
        throw new Error(data.message || "Login failed");
      }
    

      // Dispatch login success action
      dispatch(loginSuccess(data));

      // Store in localStorage if needed
      localStorage.setItem("loggedInUser", JSON.stringify(data));

      // toast.success(`Welcome back, ${data.fullName}! Redirecting...`);

      setTimeout(() => {
        switch (data.accountType) {
          case "resident":
            navigate("/residents/dashboard");
            break;
          case "serviceTeam":
            navigate("/serviceTeam/MechanicDashboard");
            break;
          case "admin":
            navigate("/admin/admindb");
            break;
          default:
            navigate("/");
        }
      }, 3100);
    } catch (error) {
      showErrorToast(error.message || "Invalid email or password");
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12">
            Welcome back
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <InputField
              label="Your Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 font-medium">
                Your Password
              </label>
              <div className="relative">
                <input
                  type={showPassword.password ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your Password"
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("password")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword.password ? <FiEyeOff /> : <FiEye />}

                </button>
              </div>
            </div>

            <ForgotPasswordLink />
            <FormActions isLoginPage={true} />
          </form>
        </div>
      
      </div>
    </div>
  );
}

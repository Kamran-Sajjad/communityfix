

"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import InputField from "./Form/InputField";
import AccountTypeSelector from "./Form/AccountTypeSelector";
import ServiceTeamFields from "./Form/ServiceTeamFields";
import TermsAndConditions from "./Form/TermsAndConditions";
import FormActions from "./Form/FormActions";

export default function SignUpForm() {
  const [accountType, setAccountType] = useState("resident");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    houseNo: "",
    password: "",
    phoneNumber: "",
    cnic: "",
    serviceCategory: "",
    serviceLocation: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
    if (type === "resident") {
      setFormData({
        ...formData,
        serviceCategory: "",
        serviceLocation: "",
      });
    }
  };

 
const handleSubmit = async (e) => {
  e.preventDefault();

  const requiredFields = ["fullName", "email", "address", "houseNo", "password", "phoneNumber", "cnic"];
  for (let field of requiredFields) {
    if (!formData[field]) {
      toast.error(`Please fill in ${field}`);
      return;
    }
  }

  if (!formData.agreeToTerms) {
    toast.error("You must agree to the terms and conditions");
    return;
  }

  try {
    // ✅ Send OTP for signup (NOT forgot password)
    const otpRes = await fetch("http://localhost:5000/api/users/send-signup-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: formData.email }),
    });

    const otpData = await otpRes.json();
    if (!otpData.success) throw new Error(otpData.message);

    sessionStorage.setItem("signupFormData", JSON.stringify({ ...formData, accountType }));
    window.location.href = "/auth/verify-otp?context=signup";

  } catch (err) {
    toast.error(err.message || "Failed to send OTP");
  }
};

  const inputFields = [
    { label: "FULL NAME", type: "text", name: "fullName", placeholder: "Enter your Full name", required: true },
    { label: "EMAIL", type: "email", name: "email", placeholder: "Enter your email", required: true },
    { label: "ADDRESS", type: "text", name: "address", placeholder: "Enter your address", required: true },
    { label: "HOUSE NO.", type: "text", name: "houseNo", placeholder: "Enter your house number", required: true },
    { label: "PASSWORD", type: "password", name: "password", placeholder: "Enter your password", required: true },
    { label: "PHONE NUMBER", type: "tel", name: "phoneNumber", placeholder: "Enter your phone number", required: true },
    { label: "CNIC", type: "text", name: "cnic", placeholder: "Enter your CNIC", required: true },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {inputFields.map((field) => (
          <InputField
            key={field.name}
            label={field.label}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        ))}
      </div>

      <AccountTypeSelector
        accountType={accountType}
        handleAccountTypeChange={handleAccountTypeChange}
      />

      {accountType === "serviceTeam" && (
        <ServiceTeamFields formData={formData} handleInputChange={handleInputChange} />
      )}

      <TermsAndConditions
        agreeToTerms={formData.agreeToTerms}
        handleInputChange={handleInputChange}
      />

      <FormActions isLoginPage={false} />
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </form>
  );
}

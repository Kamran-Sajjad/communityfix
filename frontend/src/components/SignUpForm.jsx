


// "use client";

// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import InputField from "./Form/InputField";
// import AccountTypeSelector from "./Form/AccountTypeSelector";
// import ServiceTeamFields from "./Form/ServiceTeamFields";
// import TermsAndConditions from "./Form/TermsAndConditions";
// import FormActions from "./Form/FormActions";

// export default function SignUpForm() {
//   const [accountType, setAccountType] = useState("resident");
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     address: "",
//     houseNo: "",
//     password: "",
//     phoneNumber: "",
//     cnic: "",
//     serviceCategory: "",
//     serviceLocation: "",
//     agreeToTerms: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleAccountTypeChange = (type) => {
//     setAccountType(type);
//     if (type === "resident") {
//       setFormData({
//         ...formData,
//         serviceCategory: "",
//         serviceLocation: "",
//       });
//     }
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("Form submitted:", formData);
//   //   // Add form submission logic here
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Validate terms agreement
//     if (!formData.agreeToTerms) {
//       toast.error("You must agree to the terms and conditions");
//       return;
//     }
  
//     try {
//       const response = await fetch("http://localhost:5000/api/users/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           accountType: accountType,
//         }),
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         throw new Error(data.message || "Signup failed");
//       }
  
//       // On successful signup
//       toast.success("Signup successful! Redirecting to login...");
//       setTimeout(() => {
//         window.location.href = "/auth/login";
//       }, 2000);
  
//     } catch (error) {
//       toast.error(error.message || "An error occurred during signup");
//       console.error("Signup Error:", error);
//     }
//   };



//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   const users = JSON.parse(localStorage.getItem("users")) || [];
//   //   const emailExists = users.some((u) => u.email === formData.email);

//   //   if (emailExists) {
//   //     toast.error("Email already registered!");
//   //     return;
//   //   }

//   //   users.push(formData);
//   //   localStorage.setItem("users", JSON.stringify(users));
//   //   toast.success("Signup successful! Redirecting to login...");

//   //   setTimeout(() => {
//   //     window.location.href = "/auth/login";
//   //   }, 2000);
//   // };


//   // Helper function to generate input fields
//   const renderInputFields = (fields) => {
//     return fields.map((field) => (
//       <InputField
//         key={field.name}
//         label={field.label}
//         type={field.type}
//         name={field.name}
//         value={formData[field.name]}
//         onChange={handleInputChange}
//         placeholder={field.placeholder}
//         required={field.required}
//       />
//     ));
//   };

//   // Define input fields for the form
//   const inputFields = [
//     { label: "FULL NAME", type: "text", name: "fullName", placeholder: "Enter your Full name", required: true },
//     { label: "EMAIL", type: "email", name: "email", placeholder: "Enter your email", required: true },
//     { label: "ADDRESS", type: "text", name: "address", placeholder: "Enter your address", required: true },
//     { label: "HOUSE NO.", type: "text", name: "houseNo", placeholder: "Enter your house number", required: true },
//     { label: "PASSWORD", type: "password", name: "password", placeholder: "Enter your password", required: true },
//     { label: "PHONE NUMBER", type: "tel", name: "phoneNumber", placeholder: "Enter your phone number", required: true },
//     { label: "CNIC", type: "text", name: "cnic", placeholder: "Enter your CNIC", required: true },
//   ];

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//       {/* Render input fields in a grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//         {renderInputFields(inputFields)}
//       </div>

//       {/* Account Type Selector */}
//       <AccountTypeSelector
//         accountType={accountType}
//         handleAccountTypeChange={handleAccountTypeChange}
//       />

//       {/* Service Team Fields (conditionally rendered) */}
//       {accountType === "serviceTeam" && (
//         <ServiceTeamFields formData={formData} handleInputChange={handleInputChange} />
//       )}

//       {/* Terms and Conditions */}
//       <TermsAndConditions
//         agreeToTerms={formData.agreeToTerms}
//         handleInputChange={handleInputChange}
//       />

//       {/* Form Actions (Submit button and Login link) */}
//       <FormActions isLoginPage={false} />
//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />

//     </form>

//   );
// }








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
    
    if (!formData.agreeToTerms) {
      toast.error("You must agree to the terms and conditions");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          accountType: accountType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      toast.success("Signup successful! Redirecting to login...");
      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 2000);

    } catch (error) {
      toast.error(error.message || "An error occurred during signup");
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
    </form>
  );
}
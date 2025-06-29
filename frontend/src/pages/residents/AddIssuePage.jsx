


// "use client";

// import { useState, useRef } from "react";
// import { toast } from 'react-toastify';
// import { showSuccessToast, showWarningToast, showErrorToast } from "../../../../backend/utils/toastUtils";
// import 'react-toastify/dist/ReactToastify.css';
// import Sidebar from "../../components/Rdashboard/Sidebar";
// import Header from "../../components/Rdashboard/Header";
// import FormInput from "../../components/Rdashboard/FormInput";
// import FormRadioGroup from "../../components/Rdashboard/FormRadioGroup";
// import FormTextArea from "../../components/Rdashboard/FormTextArea";
// import FileUpload from "../../components/Rdashboard/FileUpload";
// import useMobileMenu from "../../hooks/useMobileMenu";
// import useForm from "../../hooks/useForm";
// import { issueCategories } from "../../components/data/issueTypes";

// export default function AddIssuePage() {
//   const fileUploadRef = useRef();
//   const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
//   const [isExpanded, setIsExpanded] = useState(false);

//   const { formData, handleChange, handleRadioChange, handleFileChange, setFormData } =
//     useForm({
//       name: "",
//       address: "",
//       contact: "",
//       issueType: "societal",
//       issueDetails: "",
//       issueCategory: "",
//       attachment: null,
//     });
//   const isSocietal = formData.issueType === "societal";

//   const formBoxColor = isSocietal ? "bg-gray-200" : "bg-gray-300";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const { name, address, contact, issueType, issueDetails, issueCategory, attachments } = formData;
  
//     if (
//       !name.trim() ||
//       !address.trim() ||
//       !contact.trim() ||
//       !issueType ||
//       !issueDetails.trim() ||
//       !issueCategory
//     ) {
//       showErrorToast("Please fill out all required fields before submitting!");
//       return;
//     }
  
//     if (attachments.length > 3) {
//       showErrorToast("You can upload a maximum of 3 images.");
//       return;
//     }
  
//     const totalSize = attachments.reduce((acc, file) => acc + file.size, 0);
//     if (totalSize > 10 * 1024 * 1024) {
//       showErrorToast("Total size of images must not exceed 10 MB.");
//       return;
//     }
  
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append("title", issueCategory);
//       formDataToSend.append("name", name);
//       formDataToSend.append("description", issueDetails);
//       formDataToSend.append("issueCategory", issueCategory);
//       formDataToSend.append("address", address);
//       formDataToSend.append("contact", contact);
//       formDataToSend.append("issueType", issueType);
  
//       attachments.forEach((file, index) => {
//         formDataToSend.append("attachments", file);
//       });
  
//       const token = localStorage.getItem("token");
//       const userStatus = localStorage.getItem("status");

//       if (userStatus === "suspended") {
//         showWarningToast("Your account is suspended. You cannot perform this action.");
//         return;
//       }
      
//       const response = await fetch("http://localhost:5000/api/issues/report", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formDataToSend,
//       });
  
//       const result = await response.json();
  
//       if (response.ok) {
//         showSuccessToast("Issue has been reported successfully!");
  
//         setFormData({
//           name: "",
//           address: "",
//           contact: "",
//           issueType: "societal",
//           issueDetails: "",
//           issueCategory: "",
//           attachments: [],
//         });
  
//         if (fileUploadRef.current) {
//           fileUploadRef.current.resetFileInput();
//         }
//       } else {
//         showErrorToast(result.message || "Something went wrong");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       showErrorToast("Server error occurred!");
//     }
//   };

//   const handleSpeechToText = (transcript) => {
//     setFormData((prev) => ({
//       ...prev,
//       issueDetails: prev.issueDetails ? `${prev.issueDetails} ${transcript}` : transcript,
//     }));
//   };

//   const handleConciseText = () => {
//     const text = formData.issueDetails;
//     if (!text.trim()) {
//       showWarningToast("No text to concise!");
//       return;
//     }

//     // Basic client-side summarization logic
//     const sentences = text.split(/[.!?]+/).filter((s) => s.trim());
//     const summary = sentences
//       .slice(0, Math.ceil(sentences.length / 2))
//       .join(". ")
//       .trim();
    
//     if (summary) {
//       setFormData((prev) => ({
//         ...prev,
//         issueDetails: summary + (summary.endsWith('.') ? '' : '.'),
//       }));
//       showSuccessToast("Text has been concised!");
//     } else {
//       showErrorToast("Could not concise the text!");
//     }
//   };

//   return (
//     <div className={`flex-1 flex-col md:flex-row min-h-screen w-full`}>
//       <Sidebar
//         mobileMenuOpen={mobileMenuOpen}
//         setMobileMenuOpen={setMobileMenuOpen}
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//       />
//       <Header
//         setMobileMenuOpen={setMobileMenuOpen}
//         mobileMenuOpen={mobileMenuOpen}
//       />

//       <form onSubmit={handleSubmit} className="flex-1 p-4 md:p-6 overflow-auto">
//         <div className={`max-w-5xl mx-auto ${formBoxColor} rounded-xl shadow-md p-4 md:p-8`}>
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//             <h1 className="text-2xl md:text-2xl font-bold mb-4 md:mb-0">
//               Report issue
//             </h1>
//             <div className="flex items-center space-x-2">
//               <span className="text font-medium">Issue Type:</span>
//               <button
//                 type="button"
//                 className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${
//                   isSocietal
//                     ? "bg-black text-white"
//                     : "bg-white text-black border border-black"
//                 }`}
//                 onClick={() => handleRadioChange("issueType", "societal")}
//               >
//                 Societal
//               </button>
//               <button
//                 type="button"
//                 className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${
//                   !isSocietal
//                     ? "bg-black text-white"
//                     : "bg-white text-black border border-black"
//                 }`}
//                 onClick={() => handleRadioChange("issueType", "household")}
//               >
//                 Household
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
//             <FormInput
//               placeholder="Your name here..."
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <FormInput
//               placeholder="Your issue address.."
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//             />
//             <FormInput
//               placeholder="Your contact info here.."
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="grid grid-cols gap-6 mb-6">
//             <FormRadioGroup
//               title="Issue Category"
//               name="issueCategory"
//               options={issueCategories}
//               selectedValue={formData.issueCategory}
//               onChange={(value) => handleRadioChange("issueCategory", value)}
//               wrapperClassName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
//             />

//             <div>
//               <h2 className="text-lg md:text-xl font-semibold mb-3">
//                 Issue Details
//               </h2>
//               <FormTextArea
//                 placeholder="Describe Your issue in detail..."
//                 name="issueDetails"
//                 value={formData.issueDetails}
//                 onChange={handleChange}
//                 onSpeechToText={handleSpeechToText}
//                 onConciseText={handleConciseText}
//               />
//             </div>
//           </div>

//           <div className="mb-6">
//             <h2 className="text-lg md:text-xl font-semibold mb-3">
//               Attachments
//             </h2>
//             <FileUpload
//               ref={fileUploadRef}
//               onChange={(files) => handleFileChange("attachments", files)}
//             />
//           </div>

//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
//             <p className="text-red-500 text-sm md:text-base mb-4 md:mb-0">
//               NOTE: Uploading any illegal material can lead to legal proceedings
//             </p>
//             <button
//               type="submit"
//               className="bg-black text-white px-8 py-2 rounded-full text-sm md:text-base hover:bg-gray-800 transition-colors"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }




















"use client";

import { useState, useRef } from "react";
import { toast } from 'react-toastify';
import { showSuccessToast, showWarningToast, showErrorToast } from "../../../../backend/utils/toastUtils";
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "../../components/Rdashboard/Sidebar";
import Header from "../../components/Rdashboard/Header";
import FormInput from "../../components/Rdashboard/FormInput";
import FormRadioGroup from "../../components/Rdashboard/FormRadioGroup";
import FormTextArea from "../../components/Rdashboard/FormTextArea";
import FileUpload from "../../components/Rdashboard/FileUpload";
import useMobileMenu from "../../hooks/useMobileMenu";
import useForm from "../../hooks/useForm";
import { issueCategories } from "../../components/data/issueTypes";

export default function AddIssuePage() {
  const fileUploadRef = useRef();
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission

  const { formData, handleChange, handleRadioChange, handleFileChange, setFormData } =
    useForm({
      name: "",
      address: "",
      contact: "",
      issueType: "societal",
      issueDetails: "",
      issueCategory: "",
      attachment: null,
    });
  const isSocietal = formData.issueType === "societal";

  const formBoxColor = isSocietal ? "bg-gray-200" : "bg-gray-300";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if already submitting
    if (isSubmitting) return;

    setIsSubmitting(true); // Set submitting state to true

    const { name, address, contact, issueType, issueDetails, issueCategory, attachments } = formData;

    if (
      !name.trim() ||
      !address.trim() ||
      !contact.trim() ||
      !issueType ||
      !issueDetails.trim() ||
      !issueCategory
    ) {
      showErrorToast("Please fill out all required fields before submitting!");
      setIsSubmitting(false); // Reset the submitting state
      return;
    }

    if (attachments.length > 3) {
      showErrorToast("You can upload a maximum of 3 images.");
      setIsSubmitting(false); // Reset the submitting state
      return;
    }

    const totalSize = attachments.reduce((acc, file) => acc + file.size, 0);
    if (totalSize > 10 * 1024 * 1024) {
      showErrorToast("Total size of images must not exceed 10 MB.");
      setIsSubmitting(false); // Reset the submitting state
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", issueCategory);
      formDataToSend.append("name", name);
      formDataToSend.append("description", issueDetails);
      formDataToSend.append("issueCategory", issueCategory);
      formDataToSend.append("address", address);
      formDataToSend.append("contact", contact);
      formDataToSend.append("issueType", issueType);

      attachments.forEach((file, index) => {
        formDataToSend.append("attachments", file);
      });

      const token = localStorage.getItem("token");
      const userStatus = localStorage.getItem("status");

      if (userStatus === "suspended") {
        showWarningToast("Your account is suspended. You cannot perform this action.");
        setIsSubmitting(false); // Reset the submitting state
        return;
      }

      const response = await fetch("http://localhost:5000/api/issues/report", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        showSuccessToast("Issue has been reported successfully!");

        setFormData({
          name: "",
          address: "",
          contact: "",
          issueType: "societal",
          issueDetails: "",
          issueCategory: "",
          attachments: [],
        });

        if (fileUploadRef.current) {
          fileUploadRef.current.resetFileInput();
        }
      } else {
        showErrorToast(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Submission error:", error);
      showErrorToast("Server error occurred!");
    } finally {
      setIsSubmitting(false); // Reset the submitting state after process
    }
  };

  const handleSpeechToText = (transcript) => {
    setFormData((prev) => ({
      ...prev,
      issueDetails: prev.issueDetails ? `${prev.issueDetails} ${transcript}` : transcript,
    }));
  };

  const handleConciseText = () => {
    const text = formData.issueDetails;
    if (!text.trim()) {
      showWarningToast("No text to concise!");
      return;
    }

    // Basic client-side summarization logic
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim());
    const summary = sentences
      .slice(0, Math.ceil(sentences.length / 2))
      .join(". ")
      .trim();
    
    if (summary) {
      setFormData((prev) => ({
        ...prev,
        issueDetails: summary + (summary.endsWith('.') ? '' : '.'),
      }));
      showSuccessToast("Text has been concised!");
    } else {
      showErrorToast("Could not concise the text!");
    }
  };

  return (
    <div className={`flex-1 flex-col md:flex-row min-h-screen w-full`}>
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      <Header
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />

      <form onSubmit={handleSubmit} className="flex-1 p-4 md:p-6 overflow-auto">
        <div className={`max-w-5xl mx-auto ${formBoxColor} rounded-xl shadow-md p-4 md:p-8`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-2xl md:text-2xl font-bold mb-4 md:mb-0">
              Report issue
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text font-medium">Issue Type:</span>
              <button
                type="button"
                className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${isSocietal ? "bg-black text-white" : "bg-white text-black border border-black"}`}
                onClick={() => handleRadioChange("issueType", "societal")}
              >
                Societal
              </button>
              <button
                type="button"
                className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${!isSocietal ? "bg-black text-white" : "bg-white text-black border border-black"}`}
                onClick={() => handleRadioChange("issueType", "household")}
              >
                Household
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            <FormInput
              placeholder="Your name here..."
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <FormInput
              placeholder="Your issue address.."
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <FormInput
              placeholder="Your contact info here.."
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols gap-6 mb-6">
            <FormRadioGroup
              title="Issue Category"
              name="issueCategory"
              options={issueCategories}
              selectedValue={formData.issueCategory}
              onChange={(value) => handleRadioChange("issueCategory", value)}
              wrapperClassName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            />

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-3">
                Issue Details
              </h2>
              <FormTextArea
                placeholder="Describe Your issue in detail..."
                name="issueDetails"
                value={formData.issueDetails}
                onChange={handleChange}
                onSpeechToText={handleSpeechToText}
                onConciseText={handleConciseText}
              />
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-3">
              Attachments
            </h2>
            <FileUpload
              ref={fileUploadRef}
              onChange={(files) => handleFileChange("attachments", files)}
            />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <p className="text-red-500 text-sm md:text-base mb-4 md:mb-0">
              NOTE: Uploading any illegal material can lead to legal proceedings
            </p>
            <button
              type="submit"
              disabled={isSubmitting} // Disable button while submitting
              className={`bg-black text-white px-8 py-2 rounded-full text-sm md:text-base ${isSubmitting ? "cursor-not-allowed bg-gray-500" : "hover:bg-gray-800"} transition-colors`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

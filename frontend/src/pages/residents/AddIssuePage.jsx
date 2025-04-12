"use client";

import { useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "../../components/Rdashboard/Sidebar";
import Header from "../../components/Rdashboard/Header";
// import PageHeader from "../components/Rdashboard/HeaderAddIssue";
import FormInput from "../../components/Rdashboard/FormInput";
import FormRadioGroup from "../../components/Rdashboard/FormRadioGroup";
import FormTextArea from "../../components/Rdashboard/FormTextArea";
import FileUpload from "../../components/Rdashboard/FileUpload";
import useMobileMenu from "../../hooks/useMobileMenu";
import useForm from "../../hooks/useForm";
import { issueCategories } from "../../components/data/issueTypes";
// import HeaderAddIssue from "../../components/Rdashboard/HeaderAddIssue";

export default function AddIssuePage() {
  const fileUploadRef = useRef();
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  const [isExpanded, setIsExpanded] = useState(false);

  const { formData, handleChange, handleRadioChange, handleFileChange , setFormData} =
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

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { name, address, contact, issueType, issueDetails, issueCategory } = formData;
  
    if (
      !name.trim() ||
      !address.trim() ||
      !contact.trim() ||
      !issueType ||
      !issueDetails.trim() ||
      !issueCategory
    ) {
      toast.error("Please fill out all required fields before submitting!", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
      });
      return;
    }
  
    // Success message
    toast.success("Issue has been reported successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  
    // Reset form data
    setFormData({
      name: "",
      address: "",
      contact: "",
      issueType: "",
      issueDetails: "",
      issueCategory: "",
      attachment: null,
    });
    if (fileUploadRef.current) {
      fileUploadRef.current.resetFileInput();
    }
  };
  
  
  

  return (
    <div
      className={`flex-1 flex-col md:flex-row min-h-screen w-full `}
    >
      {/* Sidebar */}
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

    
      {/* Form Container */}
      <form onSubmit={handleSubmit} className="flex-1 p-4 md:p-6 overflow-auto">
        <div className={`max-w-5xl mx-auto ${formBoxColor} rounded-xl shadow-md p-4 md:p-8`}>

          {/* Report Issue Heading and Issue Type Toggle */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-2xl md:text-2xl font-bold mb-4 md:mb-0">
              Report issue
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text font-medium">Issue Type:</span>
              <button
                type="button"
                className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${
                  isSocietal
                    ? "bg-black text-white"
                    : "bg-white text-black border border-black"
                }`}
                onClick={() => handleRadioChange("issueType", "societal")}
              >
                Societal
              </button>
              <button
                type="button"
                className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${
                  !isSocietal
                    ? "bg-black text-white"
                    : "bg-white text-black border border-black"
                }`}
                onClick={() => handleRadioChange("issueType", "household")}
              >
                Household
              </button>
            </div>
          </div>

          {/* Form Fields */}
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

          {/* Two Column Layout for Details and Select */}
          <div className="grid grid-cols gap-6 mb-6">
          
            <FormRadioGroup
              title="Issue Category"
              name="issueCategory"
              options={issueCategories}
              selectedValue={formData.issueCategory}
              onChange={(value) => handleRadioChange("issueCategory", value)}
              wrapperClassName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            />

            {/* Issue Details */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-3">
                Issue Details
              </h2>
              <FormTextArea
                placeholder="Describe Your issue in detail..."
                name="issueDetails"
                value={formData.issueDetails}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Attachments */}
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-3">
              Attachments
            </h2>
            <FileUpload
            ref={fileUploadRef}
              onChange={(file) => handleFileChange("attachment", file)}
            />
          </div>

          {/* Warning and Submit */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <p className="text-red-500 text-sm md:text-base mb-4 md:mb-0">
              NOTE: Uploading any illegal material can lead to legal proceedings
            </p>
            <button
              type="submit"
              className="bg-black text-white px-8 py-2 rounded-full text-sm md:text-base hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
      {/* </div> */}
    </div>
  );
}

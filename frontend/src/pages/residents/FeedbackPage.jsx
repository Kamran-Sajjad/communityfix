



"use client";

import { useState } from "react";
import Header from "../../components/Rdashboard/Header";
import Sidebar from "../../components/Rdashboard/Sidebar";
import FeedbackForm from "../../components/Dashboard/FeedbackForm";

export default function FeedbackPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex flex-col min-h-screen w-full bg-white overflow-hidden">
      {/* Sidebar and Header */}
      <Sidebar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      {/* <Header onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} /> */}
      <Header
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 flex justify-center p-4 md:p-6 overflow-auto">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Feedback Form</h1>
            <FeedbackForm />
          </div>
        </div>
      </div>
    </div>
  );
}

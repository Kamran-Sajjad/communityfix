"use client"

import { useState } from "react"
import {
  Rocket,
  Lightbulb,
  RotateCw,
} from "lucide-react"
import Sidebar from "../../components/Dashboard/Sidebar" // Adjust the import path as needed
import Header from "../../components/Dashboard/Header" // Import the Header component

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* New Sidebar Component */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:block`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header - Replaced with new Header component */}
        <Header onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
        
        {/* Desktop Title - Added below the header */}
        <div className="hidden ml-18 md:block p-4 border-b">
          <h1 className="text-xl font-bold">About Us</h1>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 md:p-6 lg:p-10 overflow-auto">
          <div className="max-w-6xl mx-auto">
            {/* Page Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 text-center mb-8 md:mb-12">
              WHO WE ARE
            </h1>

            {/* Top Divider */}
            <div className="w-full h-px bg-gray-300 mb-8 md:mb-12"></div>

            {/* Three Columns Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-12">
              {/* Mission */}
              <div className="flex flex-col items-center text-center">
                <div className="text-red-600 mb-4">
                  <Rocket className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <h2 className="text-lg md:text-xl font-bold mb-3">Our Mission</h2>
                <p className="text-sm md:text-base">
                  We aim to uplift local communities by providing fast, reliable, and affordable home and facility
                  repair services. Through innovation and teamwork, we're creating a better future one fix at a time.
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col items-center text-center">
                <div className="text-red-600 mb-4">
                  <Lightbulb className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <h2 className="text-lg md:text-xl font-bold mb-3">Our Vision</h2>
                <p className="text-sm md:text-base">
                  To be the leading platform that empowers neighborhoods with smart solutions, skilled service teams,
                  and modern tools transforming how people experience repair and maintenance.
                </p>
              </div>

              {/* Approach */}
              <div className="flex flex-col items-center text-center">
                <div className="text-red-600 mb-4">
                  <RotateCw className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <h2 className="text-lg md:text-xl font-bold mb-3">Our Approach</h2>
                <p className="text-sm md:text-base">
                  With a 360° customer-focused strategy, we ensure complete satisfaction from request to resolution. Our
                  tech-driven workflow, transparent updates, and continuous support set us apart.
                </p>
              </div>
            </div>

            {/* Bottom Divider */}
            <div className="w-full h-px bg-gray-300 mb-8 md:mb-12"></div>

            {/* Social Media Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 md:space-x-20">
              <a href="#" className="flex items-center text-sm md:text-base hover:text-blue-600 transition-colors">
                <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center mr-2">
                  <span className="font-bold">f</span>
                </div>
                Facebook
              </a>

              <a href="#" className="flex items-center text-sm md:text-base hover:text-pink-600 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded flex items-center justify-center mr-2">
                  <span className="font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <circle cx="12" cy="12" r="3"></circle>
                      <circle cx="17.5" cy="6.5" r="1.5"></circle>
                    </svg>
                  </span>
                </div>
                Instagram
              </a>

              <a href="#" className="flex items-center text-sm md:text-base hover:text-red-600 transition-colors">
                <div className="w-8 h-8 bg-red-600 text-white rounded flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </div>
                Youtube
              </a>
            </div>

            {/* Final Divider */}
            <div className="w-full h-px bg-gray-300 mt-8 md:mt-12"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
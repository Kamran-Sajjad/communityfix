"use client"

import { useState } from "react"
import { toast } from "react-hot-toast"
import Header from "../../components/Rdashboard/Header"
import Sidebar from "../../components/Rdashboard/Sidebar"
import ProfileHeader from "../../components/Dashboard/ProfileHeader"
import EditableField from "../../components/Dashboard/EditableField"
import SaveButton from "../../components/Dashboard/SaveButton"
import { SettingsIcon } from "lucide-react"

export default function SettingsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "Kamran Sajjad",
    email: "Kami32@gmail.com",
    address: "",
    contact: "",
    currentPassword: "",
    newPassword: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    console.log("Saved data:", formData)
    toast.success("Data has been updated successfully!")
  }

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {/* {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20"
          onClick={() => setMobileMenuOpen(false)}
        />
      )} */}

      {/* Sidebar - Always visible */}
      {/* <div className={`fixed sm:static z-30 h-full ${mobileMenuOpen ? 'block' : 'visible'} sm:block`}> */}
      <div >
      <Sidebar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden ">
        <Header
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />

        {/* Settings Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="max-w-4xl mx-auto">
            {/* Settings Title */}
            <div className="flex items-center mb-4 sm:mb-6">
              <SettingsIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              <h1 className="text-xl sm:text-2xl font-bold">Settings</h1>
            </div>

            {/* Profile Section */}
            <div className="bg-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
              <ProfileHeader 
                name={formData.fullName}
                email={formData.email}
                onEdit={() => console.log("Edit clicked")}
              />
            </div>

            {/* Form Fields */}
            <div className="bg-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <EditableField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="your name here..."
                />

                <EditableField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your email here..."
                />

                <EditableField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="your full address here..."
                />

                <EditableField
                  label="Contact"
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="your Phone number here..."
                />

                <EditableField
                  label="Current Password"
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Type your Current password.."
                />

                <EditableField
                  label="New Password"
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Type your new password.."
                />
              </div>

              <SaveButton onClick={handleSave} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
"use client"
import { LogOut } from "lucide-react";
import logo from "../../assets/logo.png";
export default function ProfileHeader({ name, email, onEdit }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6">
        <img src={logo} alt="Profile" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-xl md:text-2xl font-bold">{name}</h2>
        <p className="text-gray-600 text-sm md:text-base">{email}</p>
      </div>

      {/* <button 
        onClick={onEdit}
        className="mt-4 sm:mt-0 bg-black text-white px-6 py-2 rounded-full text-sm"
      >
        Edit
      </button> */}
    </div>
  )
}
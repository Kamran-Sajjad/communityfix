
"use client";
import { Bell, Menu } from "lucide-react";
import logo from "../../assets/logo.png";

const Header = ({ onMenuToggle }) => {
  return (
    <div className="bg-black text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
       
      </div>
      <div className="flex items-center">
        <div className="relative mr-4">
          <Bell className="w-5 h-5" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
        <img src={logo} alt="User" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Header;
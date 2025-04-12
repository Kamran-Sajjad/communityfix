import {
    Home,
    User,
    ShoppingCart,
    MessageCircle,
    FileText,
    Settings,
    LogOut,
  } from "lucide-react";
  import logo from "../../assets/logo.png";
  export default function Sidebar({ mobileMenuOpen }) {
    return (
      <div
        className={`${mobileMenuOpen ? "block" : "hidden"} md:block w-full md:w-[90px] bg-black flex-shrink-0 md:flex md:flex-col md:items-center py-6 absolute md:relative z-10 h-screen`}
      >
        {/* <div className="w-16 h-18 bg-white rounded-lg mb-10 flex items-center justify-center overflow-hidden mx-auto"> */}
          <img src={logo} alt="Community Fix Logo" className="w-14 h-14  rounded-lg mb-10 " />
        {/* </div> */}
  
        <div className="flex flex-col items-center space-y-8 flex-1">
          <button className="w-10 h-10 flex items-center justify-center text-white">
            <Home className="w-6 h-6" />
          </button>
  
          <button className="w-10 h-10 flex items-center justify-center text-white relative">
            <User className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">
              1
            </div>
          </button>
  
          <button className="w-10 h-10 flex items-center justify-center text-white">
            <ShoppingCart className="w-6 h-6" />
          </button>
  
          <button className="w-10 h-10 flex items-center justify-center text-white">
            <MessageCircle className="w-6 h-6" />
          </button>
  
          <button className="w-10 h-10 flex items-center justify-center text-white">
            <FileText className="w-6 h-6" />
          </button>
  
          <button className="w-10 h-10 flex items-center justify-center text-white">
            <Settings className="w-6 h-6" />
          </button>
  
          <button className="w-10 h-10 flex items-center justify-center text-red-500 mt-auto">
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }
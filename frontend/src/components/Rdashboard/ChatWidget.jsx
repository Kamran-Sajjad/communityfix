export default function ChatWidget() {
    return (
      <div className="bg-gray-100 rounded-lg p-3 md:p-4 relative">
        <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">What's up?</h3>
        <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">Wanna chat with our help department?</p>
  
        <button className="bg-black text-white px-4 py-1.5 md:px-6 md:py-2 rounded-md text-sm md:text-base">
          Chat
        </button>
  
        <div className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M10,50 A40,40 0 1,1 90,50 L50,90 Z" fill="black" />
          </svg>
        </div>
      </div>
    );
  }
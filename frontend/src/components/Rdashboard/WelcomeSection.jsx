// import illustration from "../../assets/illustration.png"
// export default function WelcomeSection() {
  //     return (
    //       <div className="bg-gray-100 rounded-lg p-4 md:p-6 flex justify-between items-center h-32 md:h-40">
//         <div>
//           <h1 className="text-2xl md:text-3xl font-bold mb-1">Hello Kamran!</h1>
//           <p className="text-sm md:text-base text-gray-600">It's good to see you again.</p>
//         </div>
//         <div className="w-20 h-20 md:w-32 md:h-32 flex-shrink-0">
//           {/* <svg viewBox="0 0 200 200" className="w-full h-full">
//             <circle cx="100" cy="70" r="40" fill="black" />
//             <rect x="60" y="70" width="80" height="100" fill="black" />
//             <circle cx="80" cy="60" r="10" fill="white" stroke="black" strokeWidth="2" />
//             <circle cx="120" cy="60" r="10" fill="white" stroke="black" strokeWidth="2" />
//             <circle cx="80" cy="60" r="4" fill="black" />
//             <circle cx="120" cy="60" r="4" fill="black" />
//             <path d="M70 90 Q100 110 130 90" fill="none" stroke="white" strokeWidth="3" />
//             <path d="M60 40 Q50 20 40 30 Q30 40 50 50" fill="black" />
//             <path d="M50 100 L30 150" stroke="black" strokeWidth="10" />
//           </svg> */}
//         <img src={illustration} alt="Wecome image" />
//         </div>
//       </div>
//     );
//   }



import illustration from "../../assets/illustration.png";
  // Get current time for dynamic greeting
  const currentHour = new Date().getHours();
  let greeting = "Welcome";
  
  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
export default function WelcomeSection({firstName="User"}) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 md:p-6 h-full">
      <div className="flex flex-col lg:flex-row items-center justify-between h-full">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{greeting}, {firstName}!</h1>
          <p className="text-sm md:text-base text-gray-600 mt-1 md:mt-2">
            Here's what's happening with your complaints today.
          </p>
        </div>
        
        {/* Illustration - hidden on screens smaller than lg (1024px) */}
        <div className="hidden lg:flex items-center justify-center ml-6">
          <img 
            src={illustration} 
            alt="Welcome illustration" 
            className="w-32 h-32 xl:w-40 xl:h-40 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
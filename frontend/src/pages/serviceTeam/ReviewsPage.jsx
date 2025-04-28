// "use client"

// import { Bell, CircleDashed, History, LogOut, MessageSquare, RefreshCw, Users } from "lucide-react"

// export default function ReviewsPage() {
//   return (
//     <div className="flex h-screen w-full bg-white">
//       {/* Sidebar */}
//       <div className="w-[250px] bg-black flex flex-col">
//         <div className="h-20"></div> {/* Spacer to align with header */}
//         <div className="flex flex-col space-y-6 px-6 py-8">
//           <div className="flex items-center space-x-3 text-white">
//             <div className="flex items-center justify-center w-8 h-8">
//               <div className="w-5 h-5 bg-white"></div>
//               <div className="w-5 h-5 bg-gray-500 absolute ml-2 mt-2"></div>
//             </div>
//             <span className="text-lg font-medium">Dashboard</span>
//           </div>

//           <div className="flex items-center space-x-3 text-white">
//             <Users className="w-6 h-6" />
//             <span className="text-lg font-medium">Assigned Issues</span>
//           </div>

//           <div className="flex items-center space-x-3 text-white">
//             <RefreshCw className="w-6 h-6" />
//             <span className="text-lg font-medium">Update</span>
//           </div>

//           <div className="flex items-center space-x-3 text-white">
//             <History className="w-6 h-6" />
//             <span className="text-lg font-medium">History</span>
//           </div>

//           <div className="flex items-center space-x-3 text-white">
//             <MessageSquare className="w-6 h-6" />
//             <span className="text-lg font-medium">Reviews</span>
//           </div>

//           <div className="flex items-center space-x-3 text-white">
//             <CircleDashed className="w-6 h-6" />
//             <span className="text-lg font-medium">Reports</span>
//           </div>

//           <div className="mt-auto flex items-center space-x-3 text-white">
//             <LogOut className="w-6 h-6" />
//             <span className="text-lg font-medium">Logout</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <div className="h-20 bg-black flex items-center justify-between px-6">
//           <h1 className="text-white text-xl">Welcome Back, Mr. Arslan</h1>
//           <div className="w-10 h-10 bg-gray-600 rounded-md flex items-center justify-center relative">
//             <Bell className="w-5 h-5 text-white" />
//             <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
//           </div>
//         </div>

//         <div className="flex-1 p-6 overflow-auto">
//           {/* Page Title */}
//           <div className="flex items-center mb-8">
//             <MessageSquare className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Reviews</h2>
//           </div>

//           {/* Reviews Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Review Card 1 */}
//             <div className="bg-gray-200 rounded-lg p-6">
//               <div className="text-5xl text-gray-500 mb-2">❝</div>
//               <h3 className="text-lg font-bold mb-2">Pipe leaks</h3>
//               <p className="mb-6 text-gray-700">
//                 Excellent service! The team responded quickly and fixed the pipe leak efficiently. Professional,
//                 courteous, and left everything clean.
//               </p>
//               <div className="flex justify-between items-center">
//                 <span className="font-bold text-lg">Kamran</span>
//                 <div className="flex">
//                   <StarFilled />
//                   <StarFilled />
//                   <StarFilled />
//                   <StarFilled />
//                   <StarEmpty />
//                 </div>
//               </div>
//             </div>

//             {/* Review Card 2 */}
//             <div className="bg-gray-200 rounded-lg p-6">
//               <div className="text-5xl text-gray-500 mb-2">❝</div>
//               <h3 className="text-lg font-bold mb-2">Solar installation</h3>
//               <p className="mb-6 text-gray-700">
//                 Fantastic service! The team installed the solar system efficiently and professionally. Everything works
//                 perfectly, and they ensured a smooth setup.
//               </p>
//               <div className="flex justify-between items-center">
//                 <span className="font-bold text-lg">Nizam</span>
//                 <div className="flex">
//                   <StarFilled />
//                   <StarFilled />
//                   <StarFilled />
//                   <StarFilled />
//                   <StarFilled />
//                 </div>
//               </div>
//             </div>

//             {/* Review Card 3 */}
//             <div className="bg-gray-200 rounded-lg p-6">
//               <div className="text-5xl text-gray-500 mb-2">❝</div>
//               <h3 className="text-lg font-bold mb-2">Poor ventilation</h3>
//               <p className="mb-6 text-gray-700">
//                 Great job resolving our ventilation issue! The team was professional, efficient, and ensured proper
//                 airflow. The difference is noticeable, and we're very satisfied
//               </p>
//               <div className="flex justify-between items-center">
//                 <span className="font-bold text-lg">Hammad</span>
//                 <div className="flex">
//                   <StarFilled />
//                   <StarFilled />
//                   <StarFilled />
//                   <StarFilled />
//                   <StarFilled />
//                 </div>
//               </div>
//             </div>

//             {/* Review Card 4 */}
//             <div className="bg-gray-200 rounded-lg p-6">
//               <div className="text-5xl text-gray-500 mb-2">❝</div>
//               <h3 className="text-lg font-bold mb-2">Water Leaks</h3>
//               <p className="mb-6 text-gray-700">
//                 The team fixed the water leak, but it took longer than expected. The issue is resolved, but there's room
//                 for improvement in response time. Overall, a decent service.
//               </p>
//               <div className="flex justify-between items-center">
//                 <span className="font-bold text-lg">Hamza</span>
//                 <div className="flex">
//                   <StarFilled />
//                   <StarFilled />
//                   <StarFilled />
//                   <StarEmpty />
//                   <StarEmpty />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Star components
// function StarFilled() {
//   return (
//     <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//     </svg>
//   )
// }

// function StarEmpty() {
//   return (
//     <svg
//       className="w-5 h-5 text-gray-400"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//       />
//     </svg>
//   )
// }





"use client";

import { Bell, MessageSquare } from "lucide-react";
import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import ReviewCard from "../../components/STdashboard/ReviewCard";

export default function ReviewsPage() {
  const reviews = [
    {
      quote: "❝",
      title: "Pipe leaks",
      description:
        "Excellent service! The team responded quickly and fixed the pipe leak efficiently. Professional, courteous, and left everything clean.",
      author: "Kamran",
      rating: 4,
    },
    {
      quote: "❝",
      title: "Solar installation",
      description:
        "Fantastic service! The team installed the solar system efficiently and professionally. Everything works perfectly, and they ensured a smooth setup.",
      author: "Nizam",
      rating: 5,
    },
    {
      quote: "❝",
      title: "Poor ventilation",
      description:
        "Great job resolving our ventilation issue! The team was professional, efficient, and ensured proper airflow. The difference is noticeable, and we're very satisfied.",
      author: "Hammad",
      rating: 5,
    },
    {
      quote: "❝",
      title: "Water Leaks",
      description:
        "The team fixed the water leak, but it took longer than expected. The issue is resolved, but there's room for improvement in response time. Overall, a decent service.",
      author: "Hamza",
      rating: 3,
    },
  ];

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        {/* <Header userName="Mr. Arslan" /> */}
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <Header title="Welcome back Arslan" />
        </div>

        {/* Page Content */}
        <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
          {/* Page Title */}
          <div className="flex items-center mb-8">
            <MessageSquare className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">Reviews</h2>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                quote={review.quote}
                title={review.title}
                description={review.description}
                author={review.author}
                rating={review.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
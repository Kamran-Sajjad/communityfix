
// // === src/pages/serviceTeam/ReviewsPage.jsx ===
// "use client";

// import { useEffect, useState } from "react";
// import { MessageSquare } from "lucide-react";
// import Sidebar from "../../components/STdashboard/Sidebar";
// import Header from "../../components/STdashboard/Header";
// import ReviewCard from "../../components/STdashboard/ReviewCard";
// import axios from "axios";

// export default function ReviewsPage() {
//   const [withImages, setWithImages] = useState([]);
//   const [withoutImages, setWithoutImages] = useState([]);

//   useEffect(() => {
//     const fetchFeedback = async () => {
//       try {
//         const res = await axios.get("/api/feedback");
//         const allFeedback = res.data;

//         const withImg = allFeedback.filter((f) => f.imageUrl);
//         const withoutImg = allFeedback.filter((f) => !f.imageUrl);

//         setWithImages(withImg);
//         setWithoutImages(withoutImg);
//       } catch (err) {
//         console.error("Failed to fetch feedback", err);
//       }
//     };

//     fetchFeedback();
//   }, []);

//   return (
//     <div className="flex h-screen w-full bg-white">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
//           <Header title="Welcome back Arslan" />
//         </div>

//         {/* Page Content */}
//         <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
//           <div className="flex items-center mb-8">
//             <MessageSquare className="w-6 h-6 mr-2" />
//             <h2 className="text-xl font-bold">Reviews</h2>
//           </div>

//           {/* Two Column Layout */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Left: With Images */}
//             <div className="space-y-6">
//               {withImages.map((review, index) => (
//                 <ReviewCard
//                   key={index}
//                   title={review.issueType}
//                   description={review.comment}
//                   author={review.name}
//                   rating={review.rating}
//                   imageUrl={review.imageUrl}
//                 />
//               ))}
//             </div>

//             {/* Right: Without Images */}
//             <div className="space-y-6">
//               {withoutImages.map((review, index) => (
//                 <ReviewCard
//                   key={index}
//                   title={review.issueType}
//                   description={review.comment}
//                   author={review.name}
//                   rating={review.rating}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




















"use client";

import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";
import Sidebar from "../../components/STdashboard/Sidebar";
import Header from "../../components/STdashboard/Header";
import ReviewCard from "../../components/STdashboard/ReviewCard";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ReviewsPage() {
  const [withImages, setWithImages] = useState([]);
  const [withoutImages, setWithoutImages] = useState([]);

  // ✅ Get user and firstName from Redux
  const { user } = useSelector((state) => state.auth);
  const firstName = user?.fullName?.split(" ")[0] || "Technician";

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get("/api/feedback");
        const allFeedback = res.data;

        const withImg = allFeedback.filter((f) => f.imageUrl);
        const withoutImg = allFeedback.filter((f) => !f.imageUrl);

        setWithImages(withImg);
        setWithoutImages(withoutImg);
      } catch (err) {
        console.error("Failed to fetch feedback", err);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <Header title={`Welcome back ${firstName}`} firstName={firstName} />
        </div>

        {/* Page Content */}
        <div className="flex-1 lg:ml-[250px] p-6 overflow-auto">
          <div className="flex items-center mb-8">
            <MessageSquare className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">Reviews</h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: With Images */}
            <div className="space-y-6">
              {withImages.map((review, index) => (
                <ReviewCard
                  key={index}
                  title={review.issueType}
                  description={review.comment}
                  author={review.name}
                  rating={review.rating}
                  imageUrl={review.imageUrl}
                />
              ))}
            </div>

            {/* Right: Without Images */}
            <div className="space-y-6">
              {withoutImages.map((review, index) => (
                <ReviewCard
                  key={index}
                  title={review.issueType}
                  description={review.comment}
                  author={review.name}
                  rating={review.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

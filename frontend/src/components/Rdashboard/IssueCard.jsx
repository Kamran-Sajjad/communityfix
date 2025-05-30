// import { Flame, MessageCircle } from "lucide-react";
// import { Link } from "react-router-dom";
// import IssueStatusBadge from "./IssueStatusBadge";

// export default function IssueCard({ issue }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200">
//       <div className="flex flex-col md:flex-row">
//         {/* Issue Image */}
//         <div className={`md:w-1/3 h-48 ${issue.imageBgColor} flex items-center justify-center p-4`}>
//           <img
//             src={issue.image || "/placeholder-issue.jpg"}
//             alt={issue.title}
//             className="h-full w-full object-contain"
//           />
//         </div>

//         {/* Issue Content */}
//         <div className="p-4 md:p-6 md:w-2/3">
//           <div className="flex justify-between items-start mb-2">
//             <h2 className="text-xl font-bold text-gray-800">{issue.title}</h2>
//             <IssueStatusBadge status={issue.status} />
//           </div>

//           <p className="text-gray-600 mb-4">{issue.description}</p>

//           <div className="flex flex-wrap gap-2 mb-4">
//             {issue.tags.map((tag, index) => (
//               <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Issue Footer */}
//       <div className="bg-gray-50 px-4 py-3 flex justify-between items-center border-t border-gray-200">
//         <div className="flex items-center space-x-4">
//           <div className="flex items-center text-gray-600">
//             <Flame className="w-4 h-4 mr-1 text-orange-500" />
//             <span className="text-sm">{issue.upvotes} upvotes</span>
//           </div>
//           <div className="flex items-center text-gray-600">
//             <MessageCircle className="w-4 h-4 mr-1 text-blue-500" />
//             <span className="text-sm">{issue.comments} comments</span>
//           </div>
//         </div>

//         <Link
//           to="/residents/ReviewsAndComments"
//           className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
//         >
//           View Details →
//         </Link>
//       </div>
//     </div>
//   );
// }









import { Flame, MessageCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import IssueStatusBadge from "./IssueStatusBadge";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef, useEffect } from "react";

export default function IssueCard({ issue }) {
  const hasImages = issue.attachments && issue.attachments.length > 0;
  const images = hasImages ? issue.attachments : [];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/3 h-60 bg-gray-200 relative">
          {hasImages ? (
            <>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                className="w-full h-full "
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img.url}
                      alt={`Attachment ${idx + 1}`}
                      className="object-contain w-full h-full rounded-md"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

             </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 text-sm">
              <Users className="w-10 h-10 mb-1" />
              <p>No Image Provided</p>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-6 md:w-2/3">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-bold text-gray-800">{issue.title}</h2>
            <IssueStatusBadge status={issue.status} />
          </div>
          <p className="text-gray-600 mb-4 line-clamp-3">{issue.description}</p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 px-4 py-3 flex justify-between items-center border-t border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-600">
            <Flame className="w-4 h-4 mr-1 text-orange-500" />
            <span className="text-sm">{issue.upvotes} upvotes</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MessageCircle className="w-4 h-4 mr-1 text-blue-500" />
            <span className="text-sm">{issue.comments?.length || 0} comments</span>
          </div>
        </div>

        <Link
          to="/residents/ReviewsAndComments"
          className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

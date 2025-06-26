// // frontend/src/pages/admin/FeedbackHistory.jsx
// import React, { useEffect, useState } from "react";
// import AdSideBare from "../../components/Dashboard/AdSideBare";
// import FeedbackCard from "../../components/Dashboard/FeedbackCard";
// import { AdHeader } from "../../components/Dashboard/AdHeader";
// import axios from "axios";

// const FeedbackHistory = () => {
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
//   const [feedback, setFeedback] = useState([]);

//   const toggleSidebar = () => {
//     setIsSidebarExpanded(!isSidebarExpanded);
//   };

//   const fetchFeedback = async () => {
//     try {
//       const { data } = await axios.get("/api/feedback");
//       setFeedback(data);
//     } catch (error) {
//       console.error("Error fetching feedback:", error);
//     }
//   };

//   useEffect(() => {
//     fetchFeedback();
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <div
//         className={`fixed md:relative transition-all duration-300 bg-black ${isSidebarExpanded ? "w-64" : "w-16"
//           }`}
//       >
//         <AdSideBare isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
//       </div>

//       <div
//         className={`flex-1 p-4 sm:p-6 md:p-8 transition-all duration-300 ${isSidebarExpanded ? "ml-14" : "ml-6"
//           }`}
//       >
//         <AdHeader title="Feedback History" />
//         <div className="space-y-4 max-w-full md:max-w-5xl mx-auto">
//           {feedback.length > 0 ? (
//             feedback.map((item) => (
//               <FeedbackCard
//                 key={item._id}
//                 feedback={{
//                   ...item,
//                   imageUrl: item.imageUrl?.startsWith("http")
//                     ? item.imageUrl
//                     : item.imageUrl
//                       ? `http://localhost:5000/uploads/${item.imageUrl}`
//                       : "",
//                 }}
//               />
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No feedback submitted yet.</p>
//           )}

         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedbackHistory;

import React, { useEffect, useState } from "react";
import AdSideBare from "../../components/Dashboard/AdSideBare";
import FeedbackCard from "../../components/Dashboard/FeedbackCard";
import { AdHeader } from "../../components/Dashboard/AdHeader";
import axios from "axios";

const FeedbackHistory = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [feedback, setFeedback] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const fetchFeedback = async () => {
    try {
      const { data } = await axios.get("/api/feedback");
      setFeedback(data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="flex bg-gray-100 w-full h-auto">
      <div
        className={`fixed md:relative transition-all duration-300 bg-black ${
          isSidebarExpanded ? "w-64" : "w-16"
        }`}
      >
        <AdSideBare isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      </div>

<<<<<<< ST/basit
      <div
        className={`flex-1 p-4 sm:p-6 md:p-8 transition-all duration-300 ${
          isSidebarExpanded ? "ml-14" : "ml-6"
        } h-auto`}
=======
      {/* <div
        className={`flex-1 p-4 sm:p-6 md:p-8 transition-all duration-300 ${isSidebarExpanded ? "ml-14" : "ml-6"
          }`}
      > */}
      <div
        className={`flex-1 p-2 transition-all duration-300 ${isSidebarExpanded ? "ml-14" : "ml-0"
          }`}
>>>>>>> admin/kamran
      >
        <AdHeader title="Feedback History" />
        <div className="space-y-4 max-w-full md:max-w-5xl mx-auto h-auto">
          {feedback.length > 0 ? (
            feedback.map((item) => (
              <FeedbackCard
                key={item._id}
                feedback={{
                  ...item,
                  imageUrl: item.imageUrl?.startsWith("http")
                    ? item.imageUrl
                    : item.imageUrl
                    ? `http://localhost:5000/uploads/${item.imageUrl}`
                    : "",
                }}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No feedback submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackHistory;

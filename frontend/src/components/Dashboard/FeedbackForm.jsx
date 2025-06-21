// "use client";

// import { useState, useEffect } from "react";
// import RatingStars from "./RatingStars";
// import FileUpload from "./FileUpload";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import "react-toastify/dist/ReactToastify.css";
// import Issue from "../../../../backend/models/Issue";


// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     issue: "plumbing",
//     comment: "",
//   });

//   const [userIssues, setUserIssues] = useState([]);

//   // useEffect(() => {
//   //   const fetchUserIssues = async () => {
//   //     try {
//   //       const response = await fetch("/api/issues/my-issues", {
//   //         headers: {
//   //           Authorization: `Bearer ${user.token}`, // ✅ Make sure token exists
//   //         },
//   //       });
  
//   //       const data = await response.json();
  
//   //       if (!response.ok) {
//   //         console.error("Error fetching issues:", data.message);
//   //         setUserIssues([]); // Fallback to empty array
//   //       } else {
//   //         setUserIssues(Array.isArray(data) ? data : []); // Defensive check
//   //       }
//   //     } catch (error) {
//   //       console.error("Network error:", error);
//   //       setUserIssues([]); // Prevent crash
//   //     }
//   //   };
  
//   //   fetchUserIssues();
//   // }, []);







//   useEffect(() => {
//     const fetchUserIssues = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch("/api/issues/myissues", {
//           method:"GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
  
//         const data = await response.json();
  
//         if (!response.ok) {
//           console.error("Error fetching issues:", data.message);
//           setUserIssues([]);
//         } else {
//           setUserIssues(Array.isArray(data) ? data : []);
//         }
//       } catch (error) {
//         console.error("Network error:", error);
//         setUserIssues([]);
//       }
//     };
  
//     fetchUserIssues();
//   }, []);
  
  




//   // useEffect(() => {
//   //   const fetchUserIssues = async () => {
//   //     try {
//   //       // const token = getTokenFromLocalStorage(); // Extract token if needed
//   //       const token = localStorage.getItem("token"); // Extract token if needed

//   //       const res = await fetch("/api/issues/my-issues", {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       });
//   //       const data = await res.json();
//   //       setUserIssues(data);
//   //     } catch (error) {
//   //       console.error("Failed to load user issues", error);
//   //     }
//   //   };

//   //   fetchUserIssues();
//   // }, []);

//   const [rating, setRating] = useState(3);
//   const [selectedFile, setSelectedFile] = useState(null);

//   // const handleChange = (e) => {
//   //   const { id, value } = e.target;
//   //   setFormData({ ...formData, [id]: value });
//   // };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
  

//   const handleFileChange = (file) => {
//     setSelectedFile(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, address, comment } = formData;

//     if (!name.trim() || !address.trim() || !comment.trim()) {
//       // if (!name || !address || !comment) {
//       toast.error("Please fill in all required fields.");
//       return;
//     }

//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("address", formData.address);
//       data.append("issue", formData.issue);
//       data.append("comment", formData.comment);
//       data.append("rating", rating);
//       if (selectedFile) {
//         data.append("file", selectedFile);
//       }
//       console.log("Selected file:", selectedFile);

//       // const res = await fetch("/api/feedback/submit", {
//       const res = await fetch("http://localhost:5000/api/feedback/submit", {
//         method: "POST",
//         body: data,
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         throw new Error(result.message || "Failed to submit feedback.");
//       }

//       toast.success("Feedback submitted successfully!");
//       console.log(result);

//       // Reset form
//       setFormData({
//         name: "",
//         address: "",
//         issue: "plumbing",
//         comment: "",
//       });
//       setRating(3);
//       setSelectedFile(null);
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       className="bg-gray-200 rounded-xl p-6 md:p-8 max-w-4xl mx-auto"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* First Row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div>
//           <label htmlFor="name" className="block text-lg font-semibold mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Write your name..."
//             className="w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
//           />
//         </div>

//         <div>
//           <label htmlFor="address" className="block text-lg font-semibold mb-2">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             value={formData.address}
//             onChange={handleChange}
//             placeholder="Write your address..."
//             className="w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
//           />
//         </div>
//       </div>

//       {/* Second Row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div>
//           <label htmlFor="issue" className="block text-lg font-semibold mb-2">
//             Issue
//           </label>
//           {/* <select
//             id="issue"
//             value={formData.issue}
//             onChange={handleChange}
//             className="w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black bg-white"
//           >
//             <option value="plumbing">Plumbing</option>
//             <option value="electrical">Electrical</option>
//             <option value="renovation">Renovation</option>
//             <option value="cleaning">Cleaning</option>
//             <option value="construction">Construction</option>
//           </select> */}
//           <select
//             id="issue"
//             name="issue"
//             value={formData.issue}
//             onChange={handleChange}
//             className="w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black bg-white"
//           >
//             <option value="">-- Select Issue --</option>

//             {/* {userIssues.map((issue) => ( */}
//             {Array.isArray(userIssues) && userIssues.map(issue => (
//               <option key={issue._id} value={issue.title}>
//                 {issue.title}
//               </option>
//             ))}
//           </select>
//         </div>

//         <FileUpload
//           selectedFile={selectedFile}
//           onFileChange={handleFileChange}
//         />
//       </div>

//       {/* Rating */}
//       <RatingStars rating={rating} onRatingChange={setRating} />

//       {/* Comment */}
//       <div className="mb-6">
//         <textarea
//           id="comment"
//           value={formData.comment}
//           onChange={handleChange}
//           placeholder="Write your comment..."
//           rows="5"
//           className="w-full p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
//         />
//       </div>

//       {/* Submit Button */}
//       <div className="flex justify-end">
//         <button
//           type="submit"
//           className="bg-black text-white px-8 py-3 rounded-full text-sm md:text-base hover:bg-gray-900 transition"
//         >
//           Submit Feedback
//         </button>
//       </div>
//     </motion.form>
//   );
// };

// export default FeedbackForm;













"use client";

import { useState, useEffect } from "react";
import RatingStars from "./RatingStars";
import FileUpload from "./FileUpload";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { showSuccessToast,showWarningToast, showErrorToast } from "../../../../backend/utils/toastUtils";

import "react-toastify/dist/ReactToastify.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    issue: "",
    comment: "",
  });

  const [rating, setRating] = useState(3);
  const [selectedFile, setSelectedFile] = useState(null);
  const [userIssues, setUserIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch issues reported by logged-in user
  useEffect(() => {
    const fetchUserIssues = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/issues/myissues", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          console.error("Error fetching issues:", data.message);
          setUserIssues([]);
        } else {
          setUserIssues(data.issues || []);
        }
      } catch (error) {
        console.error("Network error:", error);
        setUserIssues([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUserIssues();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, address, comment, issue } = formData;

    if (!name.trim() || !address.trim() || !comment.trim() || !issue) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const data = new FormData();
      data.append("name", name);
      data.append("address", address);
      data.append("issue", issue);
      data.append("comment", comment);
      data.append("rating", rating);
      if (selectedFile) {
        data.append("attachment", selectedFile);
      }
      const userStatus = localStorage.getItem("status");

      if (userStatus === "suspended") {
        showWarningToast("Your account is suspended. You cannot perform this action.");
        return;
      }
        const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
          headers: {
    Authorization: `Bearer ${token}`, // ✅ required for protected route
  },
        body: data,
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Failed to submit feedback.");

      toast.success("Feedback submitted successfully!");
      setFormData({ name: "", address: "", issue: "", comment: "" });
      setRating(3);
      setSelectedFile(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-gray-200 rounded-xl p-6 md:p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Write your name..."
            className="w-full p-3 rounded-md border border-black focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-lg font-semibold mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Write your address..."
            className="w-full p-3 rounded-md border border-black focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="issue" className="block text-lg font-semibold mb-2">
            Issue
          </label>
          <select
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            className="w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black bg-white"
          >
            <option value="">-- Select Issue --</option>
            {userIssues.map((issue) => (
              <option key={issue._id} value={issue.title}>
                {issue.title}
              </option>
            ))}
          </select>
        </div>

        <FileUpload selectedFile={selectedFile} onFileChange={handleFileChange} />
      </div>

      <RatingStars rating={rating} onRatingChange={setRating} />

      <div className="mb-6">
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Write your comment..."
          rows="5"
          className="w-full p-4 rounded-md border border-black focus:outline-none focus:ring-1 focus:ring-black"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-black text-white px-8 py-3 rounded-full text-sm md:text-base hover:bg-gray-900 transition"
        >
          Submit Feedback
        </button>
      </div>
    </motion.form>
  );
};

export default FeedbackForm;

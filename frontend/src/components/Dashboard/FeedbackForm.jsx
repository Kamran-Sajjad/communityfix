// "use client";
// import { useState } from "react";
// import RatingStars from "./RatingStars";
// import FileUpload from "./FileUpload";

// const FeedbackForm = () => {
//   const [rating, setRating] = useState(3);
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (file) => {
//     setSelectedFile(file);
//   };

//   return (
//     <div className="bg-gray-200 rounded-xl p-6 md:p-8 max-w-4xl">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {/* Name Field */}
//         <div>
//           <label htmlFor="name" className="block text-lg font-semibold mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Write your name..."
//             className="w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
//           />
//         </div>

//         {/* Address Field */}
//         <div>
//           <label htmlFor="address" className="block text-lg font-semibold mb-2">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             placeholder="Write your address..."
//             className="w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {/* Issue Dropdown */}
//         <div>
//           <label htmlFor="issue" className="block text-lg font-semibold mb-2">
//             Issue
//           </label>
//           <select
//             id="issue"
//             className="w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black appearance-none bg-white"
//             defaultValue="plumbing"
//           >
//             <option value="plumbing">Plumbing</option>
//             <option value="electrical">Electrical</option>
//             <option value="renovation">Renovation</option>
//             <option value="cleaning">Cleaning</option>
//             <option value="construction">Construction</option>
//           </select>
//         </div>

//         {/* File Upload */}
//         <FileUpload selectedFile={selectedFile} onFileChange={handleFileChange} />
//       </div>

//       {/* Rating */}
//       <RatingStars rating={rating} onRatingChange={setRating} />

//       {/* Comment Box */}
//       <div className="mb-6">
//         <textarea
//           placeholder="Write your comment..."
//           rows="5"
//           className="w-full p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
//         ></textarea>
//       </div>

//       {/* Submit Button */}
//       <div className="flex justify-end">
//         <button className="bg-black text-white px-8 py-3 rounded-full text-sm md:text-base">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FeedbackForm;


"use client";

import { useState } from "react";
import RatingStars from "./RatingStars";
import FileUpload from "./FileUpload";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    issue: "plumbing",
    comment: ""
  });

  const [rating, setRating] = useState(3);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, address, comment } = formData;

    if (!name || !address || !comment) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Simulate sending feedback
    console.log("Submitted feedback:", { ...formData, rating, selectedFile });

    toast.success("Feedback submitted successfully!");

    // Reset form
    setFormData({
      name: "",
      address: "",
      issue: "plumbing",
      comment: ""
    });
    setRating(3);
    setSelectedFile(null);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-gray-200 rounded-xl p-6 md:p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Write your name..."
            className="w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-lg font-semibold mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Write your address..."
            className="w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="issue" className="block text-lg font-semibold mb-2">
            Issue
          </label>
          <select
            id="issue"
            value={formData.issue}
            onChange={handleChange}
            className="w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black bg-white"
          >
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="renovation">Renovation</option>
            <option value="cleaning">Cleaning</option>
            <option value="construction">Construction</option>
          </select>
        </div>

        <FileUpload selectedFile={selectedFile} onFileChange={handleFileChange} />
      </div>

      {/* Rating */}
      <RatingStars rating={rating} onRatingChange={setRating} />

      {/* Comment */}
      <div className="mb-6">
        <textarea
          id="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Write your comment..."
          rows="5"
          className="w-full p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-black text-white px-8 py-3 rounded-full text-sm md:text-base hover:bg-gray-900 transition"
        >
          Submit
        </button>
      </div>
    </motion.form>
  );
};

export default FeedbackForm;

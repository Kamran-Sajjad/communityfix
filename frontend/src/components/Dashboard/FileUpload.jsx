// "use client";

// const FileUpload = ({ selectedFile, onFileChange }) => {
//   const handleChange = (e) => {
//     onFileChange(e.target.files[0]);
//   };
//   return (
//     <div>
//       <label className="block text-lg font-semibold mb-2">
//         Attachments (if any)
//       </label>
//       <div className="flex items-center">
//         <label className="bg-white px-4 py-2 rounded-md border border-gray-300 cursor-pointer mr-3 text-sm">
//           Choose File
//           <input
//             type="file"
//             className="hidden"
//             accept="image/*" 
//             onChange={handleChange}
//             // onChange={(e) => onFileChange(e.target.files[0])}
//           />
//           {/* <input type="file" accept="image/*" onChange={handleChange} /> */}
//         </label>
//         <span className="text-sm text-gray-500">
//           {selectedFile ? selectedFile.name : "No file chosen..."}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default FileUpload;




"use client";

const FileUpload = ({ selectedFile, onFileChange }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) onFileChange(file);
  };

  return (
    <div>
      <label className="block text-lg font-semibold mb-2">
        Attachments (if any)
      </label>
      <div className="flex items-center">
        <label htmlFor="file-upload" className="bg-white px-4 py-2 rounded-md border border-gray-300 cursor-pointer mr-3 text-sm">
          Choose File
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
        <span className="text-sm text-gray-500">
          {selectedFile ? selectedFile.name : "No file chosen..."}
        </span>
      </div>
    </div>
  );
};

export default FileUpload;

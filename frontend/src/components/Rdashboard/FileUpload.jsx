// import { useState } from "react";

// export default function FileUpload({ onChange , name="attachment"}) {
//   const [fileName, setFileName] = useState(null);

//   const handleFileChange = (e) => {
//     if (e.target.files.length > 0) {
//       const file = e.target.files[0];
//       setFileName(file.name);
//       onChange(file);
//     } else {
//       setFileName(null);
//       onChange(null);
//     }
//   };

//   return (
//     <div className="flex items-center">
//       <label className="bg-white px-4 py-2 rounded-md border border-gray-300 cursor-pointer mr-3 text-sm md:text-base">
//         Choose File
//         <input type="file" className="hidden" onChange={handleFileChange} />
//       </label>
//       <span className="text-sm md:text-base text-gray-500">
//         {fileName || "No file chosen..."}
//       </span>
//     </div>
//   );
// }


// export default function FileUpload({ onChange, name = "attachment" }) {
//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     onChange(name, files); // ⬅️ Pass array of files
//   };

//   return (
//     <input
//       type="file"
//       name={name}
//       multiple                     // <-- allow multiple files
//       onChange={handleFileChange}
//       className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
//     />
//   );
// }


// import { useRef } from "react";

// export default function FileUpload({ onChange }) {
//   const fileInputRef = useRef();

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     onChange(file);
//   };

//   // Function to reset file input manually
//   const resetFileInput = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   return (
//     <div>
//       <input
//         ref={fileInputRef}
//         type="file"
//         onChange={handleFileChange}
//         // className="w-full border rounded-md p-2"
//         className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
            
//       />
//     </div>
//   );
// }

// ----------------------------------------


// import { useRef, forwardRef, useImperativeHandle } from "react";

// const FileUpload = forwardRef(({ onChange }, ref) => {
//   const fileInputRef = useRef();

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     onChange(file);
//   };

//   // Expose resetFileInput method to parent using forwarded ref
//   useImperativeHandle(ref, () => ({
//     resetFileInput: () => {
//       if (fileInputRef.current) {
//         fileInputRef.current.value = "";
//       }
//     }
//   }));

//   return (
//     <div>
//       <input
//         ref={fileInputRef}
//         type="file"
//         onChange={handleFileChange}
//         className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
//       />
//     </div>
//   );
// });

// export default FileUpload;















import { useRef, forwardRef, useImperativeHandle } from "react";

const FileUpload = forwardRef(({ onChange }, ref) => {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    onChange(files);
  };

  // Expose resetFileInput method to parent using forwarded ref
  useImperativeHandle(ref, () => ({
    resetFileInput: () => {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }));

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
      />
    </div>
  );
});

export default FileUpload;

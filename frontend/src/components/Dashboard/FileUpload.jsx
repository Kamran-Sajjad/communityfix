"use client";

const FileUpload = ({ selectedFile, onFileChange }) => {
  return (
    <div>
      <label className="block text-lg font-semibold mb-2">
        Attachments (if any)
      </label>
      <div className="flex items-center">
        <label className="bg-white px-4 py-2 rounded-md border border-gray-300 cursor-pointer mr-3 text-sm">
          Choose File
          <input
            type="file"
            className="hidden"
            onChange={(e) => onFileChange(e.target.files[0]?.name)}
          />
        </label>
        <span className="text-sm text-gray-500">
          {selectedFile ? selectedFile : "No file chosen..."}
        </span>
      </div>
    </div>
  );
};

export default FileUpload;
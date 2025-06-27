



// "use client";
// import { LogOut, Camera } from "lucide-react";
// import logo from "../../assets/logo.png"
// export default function ProfileHeader({
//   name,
//   email,
//   onEdit,
//   accountType,
//   profileImage,
//   onImageChange,
// }) {
//   return (
//     <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
//       <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6">
//         <img
//           src={logo || profileImage} // fallback image
//           // src={profileImage || "/default-profile.png"} // fallback image
//           alt="Profile"
//           className="w-full h-full object-cover"
//         />

//         <input
//           type="file"
//           accept="image/*"
//           className="absolute inset-0 opacity-0 cursor-pointer"
//           onChange={onImageChange}
//           title="Change Profile Picture"
//         />

//         <div className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow">
//           <Camera size={16} className="text-black" />
//         </div>
//       </div>

//       <div className="flex-1 text-center sm:text-left">
//         <h2 className="text-xl md:text-2xl font-bold">{name}</h2>
//         <p className="text-gray-600 text-sm md:text-base">{email}</p>
//         <button
//           onClick={onEdit}
//           className="mt-2 bg-black text-white px-2 py-2 rounded-full text-sm"
//         >
//           Change password
//         </button>
//       </div>

//       <h2 className="text-gray-600 text-xl font-bold md:text-base">
//         {accountType}
//       </h2>
//     </div>
//   );
// }













"use client";
import { useEffect, useState } from "react";

export default function ProfileHeader({
  name = "User",
  email,
  onEdit,
  accountType,
}) {
  const [firstLetter, setFirstLetter] = useState("U");

  useEffect(() => {
    const initial = name?.trim()?.charAt(0)?.toUpperCase() || "U";
    setFirstLetter(initial);
  }, [name]);

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
      {/* Avatar with larger size */}
      <div className="w-28 h-28 rounded-full bg-gray-300 text-black flex items-center justify-center text-5xl font-bold mb-4 sm:mb-0 sm:mr-6">
        {firstLetter}
      </div>

      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-xl md:text-2xl font-bold">{name}</h2>
        <p className="text-gray-600 text-sm md:text-base">{email}</p>
        <button
          onClick={onEdit}
          className="mt-2 bg-black text-white px-2 py-2 rounded-full text-sm"
        >
          Change password
        </button>
      </div>

      <h2 className="text-gray-600 text-xl font-bold md:text-base">
        {accountType}
      </h2>
    </div>
  );
}

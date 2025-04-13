// "use client"

// import { toast } from "react-hot-toast"

// export default function SaveButton({ onClick }) {
//   const handleClick = () => {
//     onClick()
//     toast.success("Data has been updated successfully!")
//   }

//   return (
//     <div className="flex justify-center mt-8">
//       <button 
//         onClick={handleClick}
//         className="bg-black text-white px-8 py-3 rounded-full text-sm md:text-base"
//       >
//         Save
//       </button>
//     </div>
//   )
// }

"use client"

import { toast } from "react-hot-toast"

export default function SaveButton({ onClick }) {
  const handleClick = () => {
    onClick()
    toast.success("Data has been updated successfully!")
  }

  return (
    <div className="flex justify-center mt-6 sm:mt-8">
      <button 
        onClick={handleClick}
        className="bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm md:text-base hover:bg-gray-800 transition-colors"
      >
        Save
      </button>
    </div>
  )
}
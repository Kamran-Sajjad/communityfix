// import {Link} from "react-router-dom";


// export default function FormActions({ isLoginPage = true }) {
//   return (
//     <div className="flex flex-col items-center pt-2 sm:pt-4">
//       <button
//         type="submit"
//         className="bg-black text-white px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto"
//       >
//         {isLoginPage ? "LOGIN" : "SIGN UP"}
//       </button>

//       <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
//         {isLoginPage ? "Don't have an account?" : "Already have an account?"}{" "}
//         <Link href={isLoginPage ? "/signup" : "/login"} className="text-blue-600 hover:underline">
//           {isLoginPage ? "Sign Up" : "Login"}
//         </Link>
//       </div>
//     </div>
//   );
// }

import {Link} from "react-router-dom";

export default function FormActions({ isLoginPage = true, showButton = true }) {
  return (
    <div className="flex flex-col items-center pt-2 sm:pt-4">
      {showButton && (
        <button
          type="submit"
          className="bg-black text-white px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto"
        >
          {isLoginPage ? "LOGIN" : "SIGN UP"}
        </button>
      )}

      <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
        {isLoginPage ? "Don't have an account?" : "Already have an account?"}{" "}
        <Link to={isLoginPage ? "/auth/signup" : "/auth/login"} className="text-blue-600 hover:underline">
          {isLoginPage ? "Sign Up" : "Login"}
        </Link>
      </div>
    </div>
  );
}
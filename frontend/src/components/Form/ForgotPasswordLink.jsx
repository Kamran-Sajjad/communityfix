import {Link} from "react-router-dom";
// import ForgotPassword from "../../pages/auth/ForgotPassword";

export default function ForgotPasswordLink() {
  return (
    <div className="text-center">
      <Link to="/auth/ForgotPassword" className="text-blue-600 hover:underline text-sm sm:text-base">
        Forgot Password?
      </Link>
    </div>
  );
}
import {Link} from "react-router-dom";

export default function ForgotPasswordLink() {
  return (
    <div className="text-center">
      <Link href="/forgot-password" className="text-blue-600 hover:underline text-sm sm:text-base">
        Forgot Password?
      </Link>
    </div>
  );
}
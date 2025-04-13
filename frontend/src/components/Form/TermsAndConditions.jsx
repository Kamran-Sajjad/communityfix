import {Link} from "react-router-dom";

export default function TermsAndConditions({ agreeToTerms, handleInputChange }) {
  return (
    <div className="flex items-start sm:items-center">
      <input
        type="checkbox"
        id="terms"
        name="agreeToTerms"
        checked={agreeToTerms}
        onChange={handleInputChange}
        className="mr-2 mt-1 sm:mt-0 h-4 w-4"
        required
      />
      <label htmlFor="terms" className="text-xs sm:text-sm">
        By creating an account, you agree to our{" "}
        <Link href="/terms" className="text-gray-600 hover:underline">
          terms and conditions
        </Link>
      </label>
    </div>
  );
}
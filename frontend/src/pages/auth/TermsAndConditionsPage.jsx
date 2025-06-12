import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
// import { Button } from "@/components/ui/button"

export default function TermsAndConditionsPage() {
  const navigate = useNavigate()
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false)
  const termsContainerRef = useRef(null)

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target
    if (scrollHeight - scrollTop <= clientHeight + 5) {
      setHasScrolledToBottom(true)
    }
  }

  const handleAgree = () => {
    console.log("User agreed to terms")
    navigate("/auth/SignUp")
  }

  const handleCancel = () => {
    navigate("/auth/SignUp")
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Terms and conditions</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-bold">Your Agreement</h2>
        <p className="text-gray-500">Last Updated: April 15, 2025</p>
      </div>

      <div
        ref={termsContainerRef}
        onScroll={handleScroll}
        className="mb-6 max-h-[400px] overflow-y-auto rounded-md border border-gray-200 p-4 md:p-6"
      >
        <p className="mb-6">
          Welcome to CommunityFix. These Terms and Conditions outline the rules and regulations for the use of our
          platform. By accessing this site or using our services, you agree to comply with and be bound by the following
          terms.
        </p>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">1. Acceptance of Terms</h3>
          <p>
            By using CommunityFix, you confirm that you have read, understood, and agree to be bound by these Terms and
            Conditions. If you do not agree with any part of these terms, you must not use the platform.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">2. Use of the Platform</h3>
          <p>
            You agree to use CommunityFix only for lawful purposes. You are responsible for any activity that occurs
            under your account, and you agree not to share your login information with others.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">3. Account Responsibilities</h3>
          <p>
            You must provide accurate information when creating an account. You are responsible for maintaining the
            confidentiality of your account credentials and for all activities that occur under your account.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">4. User Content</h3>
          <p>
            Any content you post or share through our platform must not violate any applicable laws or infringe on the
            rights of others. We reserve the right to remove any content that violates these terms.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">5. Intellectual Property</h3>
          <p>
            All content, features, and functionality of the CommunityFix platform, including but not limited to text,
            graphics, logos, and software, are owned by CommunityFix and are protected by copyright, trademark, and
            other intellectual property laws.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">6. Privacy Policy</h3>
          <p>
            Your use of CommunityFix is also governed by our Privacy Policy, which outlines how we collect, use, and
            protect your personal information.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">7. Limitation of Liability</h3>
          <p>
            CommunityFix shall not be liable for any indirect, incidental, special, consequential, or punitive damages
            resulting from your use of or inability to use the platform.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">8. Modifications to Terms</h3>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any significant changes.
            Continued use of the platform after such modifications constitutes acceptance of the updated terms.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">9. Termination</h3>
          <p>
            We reserve the right to terminate or suspend your account and access to the platform at our sole discretion,
            without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third
            parties.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">10. Governing Law</h3>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
            CommunityFix is established, without regard to its conflict of law provisions.
          </p>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          variant="outline"
          onClick={handleCancel}
          className="cursor-pointer rounded-md px-6 py-2 text-base font-medium hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleAgree}
        //   disabled={!hasScrolledToBottom}
          className="cursor-pointer rounded-md bg-gray-200 px-6 py-2 text-base font-medium text-black hover:bg-gray-300"
        >
          Agree
        </button>
      </div>
    </div>
  )
}

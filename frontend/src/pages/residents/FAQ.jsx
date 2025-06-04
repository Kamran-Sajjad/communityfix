import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Rdashboard/Sidebar";
import Header from "../../components/Rdashboard/Header";
import useMobileMenu from "../../hooks/useMobileMenu";

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "What is CommunityFix?",
      answer:
        "CommunityFix is a platform that connects residents with local service providers to address and resolve community issues. Our mission is to create safer, cleaner, and more functional neighborhoods by streamlining the process of reporting and fixing common problems like road maintenance, waste management, and facility repairs.",
    },

    {
      question: "How do I create an account?",
      answer:
        "Creating an account is simple. Click on the 'Sign Up' button on our homepage, fill in your personal details including name, email, address, and contact information. Choose whether you're registering as a resident or service provider, agree to our terms and conditions, and submit the form. You'll receive a verification email to activate your account.",
    },
    {
      question: "How do I report an issue?",
      answer:
        "To report an issue, log into your account and click on the 'Add Issue' button from your dashboard. Fill out the issue form with details including the type of issue, location, description, and attach photos if available. Select the priority level and submit. You'll receive updates as your issue is processed and assigned to a service provider.",
    },
    {
      question: "Can I Cancel an issue I reported?",
      answer:
        "Yes, you can cancel an issue you've reported as long as it hasn't been assigned to a service provider yet. Go to your dashboard, find the issue under 'My Issues', click on it, and select the 'Cancel Issue' option. If the issue has already been assigned, you'll need to contact our support team to request cancellation.",
    },
    {
      question: "Are the service team professionals verified?",
      answer:
        "Yes, all service providers on our platform undergo a thorough verification process. We check their professional credentials, work history, and conduct background checks. We also collect and verify their identification documents, business licenses, and insurance certificates where applicable. Our team regularly reviews their performance through user feedback.",
    },
    {
      question: "How can I become a service provider?",
      answer:
        "To become a service provider, click on 'Join as Provider' on our homepage. Complete the application form with your professional details, service categories, areas of operation, and upload required documents (ID, certifications, insurance). Our team will review your application, conduct verification checks, and notify you of approval. Once approved, you can set up your profile and start receiving service requests.",
    },
    {
      question: "What if I am not satisfied with a service?",
      answer:
        "If you're not satisfied with a service, you can report it through our feedback system. Go to 'My Issues', select the completed issue, and click on 'Report a Problem'. Provide details about your concerns, and our customer service team will investigate. Depending on the situation, we may arrange for the service to be redone or offer appropriate compensation according to our service guarantee policy.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page. Enter the email address associated with your account and submit. You'll receive an email with a password reset link. Click on the link, enter your new password, confirm it, and submit. Your password will be updated, and you can log in with your new credentials.",
    },
  ];

  const toggleItem = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />

        <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-10 max-w-5xl mx-auto shadow-lg rounded-lg mt-6">
          <h1 className="text-4xl font-bold mb-10 text-center text-blue-700 border-b-4 border-blue-600 pb-4">
            Frequently Asked Questions
          </h1>

          <div className="space-y-5">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center py-4 px-5 text-left bg-blue-50 hover:bg-blue-100 rounded-t-lg transition-colors duration-300"
                  aria-expanded={expandedIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-800">
                    {item.question}
                  </span>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  )}
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out px-5 text-gray-700 text-base ${
                    expandedIndex === index ? "max-h-96 pb-4 pt-2" : "max-h-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={handleGoBack}
              className="flex items-center text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md shadow"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

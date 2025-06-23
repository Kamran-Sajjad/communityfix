// "use client";
// import { useState, useEffect } from "react";
// import SuccessMessage from "./SuccessMessage";
// import PriorityRadioGroup from "./PriorityRadioGroup";
// import useAuthApi from "../../hooks/useAuthApi";
// import { useNavigate } from "react-router-dom";
// import { showSuccessToast,showWarningToast, showErrorToast } from "../../../../backend/utils/toastUtils";

// export default function VoteCard({
//   title = "Road Maintenance",
//   imageSrc,
//   description = "This is a description of the issue.",
//   initialVotes = 0,
//   issueId,
//   token, // Token can be passed directly from parent or retrieved using context
//   currentUserId, // Make sure to pass current user's ID from context or props
// }) {
//   const { fetchWithAuth } = useAuthApi();
//   const [priority, setPriority] = useState(null);
//   const [voteCount, setVoteCount] = useState(initialVotes);
//   const [voteSuccessMessage, setVoteSuccessMessage] = useState("");
//   const [hasVoted, setHasVoted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [issue, setIssue] = useState(null); // To store the issue data
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Check if the current user has already voted when the component loads
//   useEffect(() => {
//     const votedStatus = localStorage.getItem(
//       `voted_${issueId}_${currentUserId}`
//     );
//     if (votedStatus === "true") {
//       setHasVoted(true); // If the user has voted, disable the button
//     }

//     const fetchIssueDetails = async () => {
//       try {
//         const res = await fetchWithAuth(`/api/issues/${issueId}`, "GET");
//         setIssue(res.issue);
//         if (res.issue.voters.includes(currentUserId)) {
//           setHasVoted(true); // If the user is in the voters list, mark as voted
//           // Save to localStorage that the user has voted
//           localStorage.setItem(`voted_${issueId}_${currentUserId}`, "true");
//         }
//       } catch (error) {
//         console.error("Error fetching issue details:", error);
//       }
//     };

//     fetchIssueDetails();
//   }, [issueId, currentUserId]);

//   const handleVote = async () => {
//     if (!priority) {
//       alert("Please select a priority level");
//       return;
//     }

//     if (hasVoted) {
//       alert("You have already voted for this issue.");
//       return;
//     }

//     setLoading(true);
//     const userStatus = localStorage.getItem("status");

//     if (userStatus === "suspended") {
//       showWarningToast("Your account is suspended. You cannot perform any action.");
//       return;
//     }
    
//     try {
//       // Assuming the backend expects 'priority' in the body
//       const data = await fetchWithAuth(
//         `/api/issues/${issueId}/upvote`,
//         "POST",
//         { priority }
//       );

//       setVoteCount(voteCount + 1);
//       setHasVoted(true); // After successful vote, mark as voted
//       setVoteSuccessMessage(`Successfully voted with ${priority} priority!`);

//       // Save to localStorage that the user has voted
//       localStorage.setItem(`voted_${issueId}_${currentUserId}`, "true");

//       setTimeout(() => {
//         setVoteSuccessMessage("");
//       }, 3000);
//     } catch (error) {
//       console.error("Vote failed:", error);
//       alert("Something went wrong");
//     }

//     setLoading(false);
//   };
//   const navigate = useNavigate();
//   const handleCancel = () => {
//     navigate(-1);
//   };


//     // Toggle description visibility
//     const toggleDescription = () => {
//       setIsExpanded(!isExpanded);
//     };
//   return (
//     <div className="w-full bg-gray-200 rounded-lg p-4 md:p-6">
//       <h2 className="text-lg md:text-xl font-bold mb-4">Vote an issue</h2>

//       <div className="bg-gray-300 rounded-lg overflow-hidden mb-6">
//         <div className="flex flex-col sm:flex-row">
//           <div className="p-4 sm:w-1/2">
           
//           <h3 className="text-lg md:text-xl font-bold">{title}</h3>
//             {/* Add the description below the title */}
//             {description && (
//               <p
//                 className={`text-sm md:text-base text-gray-600 mt-2 ${
//                   !isExpanded && "line-clamp-3"
//                 }`}
//               >
//                 {description}
//               </p>
//             )}
//             {description.length > 60 && (
//               <button
//                 onClick={toggleDescription}
//                 className="text-blue-500 text-sm"
//               >
//                 {isExpanded ? "Read Less" : "Read More"}
//               </button>
//             )}
//           </div>

//           {imageSrc && (
//             <div className="sm:w-1/2 h-40 sm:h-auto bg-teal-100 flex items-center justify-center">
//               <img
//                 src={imageSrc}
//                 alt={title}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       <PriorityRadioGroup
//         priority={priority}
//         setPriority={setPriority}
//         voteCount={voteCount}
//         hasVoted={hasVoted}
//       />

//       {voteSuccessMessage && <SuccessMessage message={voteSuccessMessage} />}

//       <div className="flex justify-end gap-4">
//         <button
//           onClick={handleCancel}
//           className="bg-black text-white px-6 py-2 rounded-full text-sm md:text-base transition-opacity duration-200 hover:bg-gray-700"
//         >
//           Back
//         </button>
//         <button
//           onClick={handleVote}
//           disabled={hasVoted || loading} // Disable the button if the user has already voted
//           className={`bg-black text-white px-6 py-2 rounded-full text-sm md:text-base transition-opacity duration-200 ${
//             hasVoted || loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {hasVoted ? "Voted" : loading ? "Voting..." : "Vote"}
//         </button>
//       </div>
//     </div>
//   );
// }

















"use client";
import { useState, useEffect } from "react";
import SuccessMessage from "./SuccessMessage";
import PriorityRadioGroup from "./PriorityRadioGroup";
import useAuthApi from "../../hooks/useAuthApi";
import { useNavigate } from "react-router-dom";
import { showSuccessToast,showWarningToast, showErrorToast } from "../../../../backend/utils/toastUtils";

export default function VoteCard({
  title = "Road Maintenance",
  imageSrc,
  description = "This is a description of the issue.",
  initialVotes = 0,
  issueId,
  token, // Token can be passed directly from parent or retrieved using context
  currentUserId, // Make sure to pass current user's ID from context or props
}) {
  const { fetchWithAuth } = useAuthApi();
  const [priority, setPriority] = useState(null);
  const [voteCount, setVoteCount] = useState(initialVotes);
  const [voteSuccessMessage, setVoteSuccessMessage] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [issue, setIssue] = useState(null); // To store the issue data
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if the current user has already voted when the component loads
  useEffect(() => {
    const votedStatus = localStorage.getItem(
      `voted_${issueId}_${currentUserId}`
    );
    if (votedStatus === "true") {
      setHasVoted(true); // If the user has voted, disable the button
    }

    const fetchIssueDetails = async () => {
      try {
        const res = await fetchWithAuth(`/api/issues/${issueId}`, "GET");
        setIssue(res.issue);
        if (res.issue.voters.includes(currentUserId)) {
          setHasVoted(true); // If the user is in the voters list, mark as voted
          // Save to localStorage that the user has voted
          localStorage.setItem(`voted_${issueId}_${currentUserId}`, "true");
        }
      } catch (error) {
        console.error("Error fetching issue details:", error);
      }
    };

    fetchIssueDetails();
  }, [issueId, currentUserId]);

  const handleVote = async () => {
    if (!priority) {
      alert("Please select a priority level");
      return;
    }

    if (hasVoted) {
      alert("You have already voted for this issue.");
      return;
    }

    setLoading(true);
    const userStatus = localStorage.getItem("status");

    if (userStatus === "suspended") {
      showWarningToast("Your account is suspended. You cannot perform any action.");
      return;
    }
    
    try {
      // Assuming the backend expects 'priority' in the body
      const data = await fetchWithAuth(
        `/api/issues/${issueId}/upvote`,
        "POST",
        { priority }
      );

      setVoteCount(voteCount + 1);
      setHasVoted(true); // After successful vote, mark as voted
      setVoteSuccessMessage(`Successfully voted with ${priority} priority!`);
          await axios.post(
      `/api/issues/${issueId}/vote`,
      { priority },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

      // Save to localStorage that the user has voted
      localStorage.setItem(`voted_${issueId}_${currentUserId}`, "true");

      setTimeout(() => {
        setVoteSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Vote failed:", error);
      alert("Something went wrong");
    }

    setLoading(false);
  };
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };


    // Toggle description visibility
    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className="w-full bg-gray-200 rounded-lg p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-bold mb-4">Vote an issue</h2>

      <div className="bg-gray-300 rounded-lg overflow-hidden mb-6">
        <div className="flex flex-col sm:flex-row">
          <div className="p-4 sm:w-1/2">
           
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
            {/* Add the description below the title */}
            {description && (
              <p
                className={`text-sm md:text-base text-gray-600 mt-2 ${
                  !isExpanded && "line-clamp-3"
                }`}
              >
                {description}
              </p>
            )}
            {description.length > 60 && (
              <button
                onClick={toggleDescription}
                className="text-blue-500 text-sm"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>

          {imageSrc && (
            <div className="sm:w-1/2 h-40 sm:h-auto bg-teal-100 flex items-center justify-center">
              <img
                src={imageSrc}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>

      <PriorityRadioGroup
        priority={priority}
        setPriority={setPriority}
        voteCount={voteCount}
        hasVoted={hasVoted}
      />

      {voteSuccessMessage && <SuccessMessage message={voteSuccessMessage} />}

      <div className="flex justify-end gap-4">
        <button
          onClick={handleCancel}
          className="bg-black text-white px-6 py-2 rounded-full text-sm md:text-base transition-opacity duration-200 hover:bg-gray-700"
        >
          Back
        </button>
        <button
          onClick={handleVote}
          disabled={hasVoted || loading} // Disable the button if the user has already voted
          className={`bg-black text-white px-6 py-2 rounded-full text-sm md:text-base transition-opacity duration-200 ${
            hasVoted || loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {hasVoted ? "Voted" : loading ? "Voting..." : "Vote"}
        </button>
      </div>
    </div>
  );
}

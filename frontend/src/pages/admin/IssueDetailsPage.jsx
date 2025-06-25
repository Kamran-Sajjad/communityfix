// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const IssueDetailsPage = () => {
//     const { issueId } = useParams();
//     const [issue, setIssue] = useState(null);

//     useEffect(() => {
//         const fetchIssueDetails = async () => {
//             try {
//                 const { data } = await axios.get(`http://localhost:5000/api/issues/${issueId}`, {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     },
//                 });
//                 setIssue(data.issue);
//             } catch (error) {
//                 console.error("Error fetching issue details:", error);
//             }
//         };
//         fetchIssueDetails();
//     }, [issueId]);

//     if (!issue) {
//         return <div className="p-6">Loading...</div>;
//     }

//     return (
//         <div className="p-6">
//             <h1 className="text-xl font-bold">{issue.title}</h1>
//             <p className="text-sm text-gray-600">{issue.issueDescription}</p>

//             <div className="mt-4">
//                 <h2 className="text-lg font-semibold">Votes</h2>
//                 <ul>
//                     {issue.voters.map((voter, index) => (
//                         <li key={index}>
//                             {voter.userId.fullName} voted {voter.priority} priority
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <div className="mt-4">
//                 <h2 className="text-lg font-semibold">Comments</h2>
//                 <ul>
//                     {issue.comments.map((comment, index) => (
//                         <li key={index}>
//                             <strong>{comment.user.fullName}</strong>: {comment.text}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default IssueDetailsPage;












// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const IssueDetailsPage = () => {
//     const { issueId } = useParams();
//     const [issue, setIssue] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchIssueDetails = async () => {
//             try {
//                 const { data } = await axios.get(`http://localhost:5000/api/issues/${issueId}`, {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     },
//                 });
//                 setIssue(data.issue);
//                  console.log("Fetched issue details:", data.issue);
//             } catch (error) {
//                 console.error("Error fetching issue details:", error);
//             }
//         };
//         fetchIssueDetails();
//     }, [issueId]);

//     const handleBackClick = () => {
//         navigate(-1); // Go back to the previous page
//     };

//     if (!issue) {
//         return <div className="p-6">Loading...</div>;
//     }

//     return (
//         <div className="p-6">
//             <h1 className="text-xl font-bold mb-4">{issue.title}</h1>
//             {/* Main container */}
//             <div className="flex flex-col lg:flex-row gap-8">

//                 {/* Left Section: Votes */}
//                 <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">

//                     <h2 className="text-lg font-semibold mb-4">Votes</h2>
//                     <ul className="space-y-2">
//                         {/* {issue.voters.map((voter, index) => (
//                             <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
//                                 <span>{voter.userId.fullName}:</span>
//                                 <span className="font-medium">{voter.priority} priority</span>
//                             </li>
//                         ))} */}




//                         {/* {issue.voters.map((voter, index) => (
//                             <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
//                                 <span>{voter.userId ? voter.userId.fullName : "Unknown User"}:</span>
//                                 <span className="font-medium">{voter.priority} priority</span>
//                             </li>
//                         ))} */}
// {issue.voters.map((voter, index) => {
//     console.log("Voter data:", voter);  // Log each voter to check if userId and fullName are available
//     console.log("VoterId data:", voter.userId);  // Log each voter to check if userId and fullName are available
//     return (
//         <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
//             <span>{voter.userId ? voter.userId.fullName : "Unknown User"}:</span>
//             <span className="font-medium">{voter.priority} priority</span>
//         </li>
//     );
// })}



//                     </ul>
//                 </div>

//                 {/* Right Section: Comments */}
//                 <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//                     <h2 className="text-lg font-semibold mb-4">Comments</h2>
//                     <ul className="space-y-4">
//                         {issue.comments.map((comment, index) => (
//                             <li key={index} className="text-sm text-gray-600">
//                                 <strong className="font-bold">{comment.user.fullName}</strong>: {comment.text}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             {/* Back Button */}
//             <button
//                 onClick={handleBackClick}
//                 className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors absolute bottom-6 right-6"
//             >
//                 Back
//             </button>
//         </div>
//     );
// };

// export default IssueDetailsPage;













// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const IssueDetailsPage = () => {
//     const { issueId } = useParams();
//     const [issue, setIssue] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchIssueDetails = async () => {
//             try {
//                 const { data } = await axios.get(`http://localhost:5000/api/issues/${issueId}`, {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     },
//                 });
//                 setIssue(data.issue);
//                 console.log("Fetched issue details:", data.issue); // Check the data structure
//             } catch (error) {
//                 console.error("Error fetching issue details:", error);
//             }
//         };
//         fetchIssueDetails();
//     }, [issueId]);

//     const handleBackClick = () => {
//         navigate(-1); // Go back to the previous page
//     };

//     if (!issue) {
//         return <div className="p-6">Loading...</div>;
//     }

//     return (
//         <div className="p-6">
//             <h1 className="text-xl font-bold mb-4">{issue.title}</h1>
//             {/* Main container */}
//             <div className="flex flex-col lg:flex-row gap-8">

//                 {/* Left Section: Votes */}
//                 <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//                     <h2 className="text-lg font-semibold mb-4">Votes</h2>
//                     <ul className="space-y-2">
//                         {issue.voters.map((voter, index) => (
//                             <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
//                                 <span>{voter.userId ? voter.userId.fullName : "Unknown User"}:</span>
//                                 <span className="font-medium">{voter.priority} priority</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Right Section: Comments */}
//                 <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//                     <h2 className="text-lg font-semibold mb-4">Comments</h2>
//                     <ul className="space-y-4">
//                         {issue.comments.map((comment, index) => (
//                             <li key={index} className="text-sm text-gray-600">
//                                 <strong className="font-bold">{comment.user.fullName}</strong>: {comment.text}
//                             </li>
//                         ))}
//                     </ul>
//                      <button
//                 onClick={handleBackClick}
//                 className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//             >
//                 Back
//             </button>
//                 </div>
//             </div>

//             {/* Back Button */}
           
//             {/* <button
//                 onClick={handleBackClick}
//                 className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors absolute bottom-6 right-6"
//             >
//                 Back
//             </button> */}
//         </div>
//     );
// };

// export default IssueDetailsPage;















import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const IssueDetailsPage = () => {
    const { issueId } = useParams();
    const [issue, setIssue] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchIssueDetails = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/api/issues/${issueId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setIssue(data.issue);
                console.log("Fetched issue details:", data.issue); // Check the data structure
            } catch (error) {
                console.error("Error fetching issue details:", error);
            }
        };
        fetchIssueDetails();
    }, [issueId]);

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    if (!issue) {
        return <div className="p-6">Loading...</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">{issue.title}</h1>
            {/* Main container */}
            <div className="flex flex-col lg:flex-row gap-8">

                {/* Left Section: Votes */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-lg font-semibold mb-4">Votes</h2>
                    <ul className="space-y-2">
                        {issue.voters.map((voter, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                                <span>{voter.userId ? voter.userId.fullName : "Unknown User"}:</span>
                                <span className="font-medium">{voter.priority} priority</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section: Comments */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-lg font-semibold mb-4">Comments</h2>
                    <ul className="space-y-4">
                        {issue.comments.map((comment, index) => (
                            <li key={index} className="text-sm text-gray-600">
                                <strong className="font-bold">{comment.user.fullName}</strong>: {comment.text}
                            </li>
                        ))}
                    </ul>
                </div>
                
              
            </div>
              {/* Back Button - Outside the comment section, below the right section */}
                <div className="w-full text-center mt-6">
                    <button
                        onClick={handleBackClick}
                        className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700  transition-colors fixed right-6"
                    >
                        Back
                    </button>
                </div>
        </div>
    );
};

export default IssueDetailsPage;

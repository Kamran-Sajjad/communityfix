// "use client"
// import { useState , useEffect} from "react"
// import Sidebar from "../../components/Rdashboard/Sidebar";
// import Header from "../../components/Rdashboard/Header";
// import VoteCard from "../../components/Rdashboard/VoteCard"
// import CommentSection from "../../components/Rdashboard/CommentSection"
// import logo from "../../assets/logo.png"
// import { useParams } from "react-router-dom";
// import axios from "axios";



// export default function ReviewsAndComments() {
//   const { issueId } = useParams();
//   const [issue, setIssue] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [isExpanded, setIsExpanded] = useState(false)


//   useEffect(() => {
//     const fetchIssueDetails = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/issues/${issueId}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         setIssue(res.data.issue);
//         setComments(res.data.issue.comments || []);
//       } catch (error) {
//         console.error("Error fetching issue details:", error);
//       }
//     };
//     fetchIssueDetails();
//   }, [issueId]);

//   if (!issue) {
//     return <div className="p-6">Loading...</div>;
//   }


//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar 
//         mobileMenuOpen={mobileMenuOpen}
//         setMobileMenuOpen={setMobileMenuOpen}
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//       />

//       <div className="flex-1 md:ml-[80px]">
//         <Header 
//           setMobileMenuOpen={setMobileMenuOpen} 
//           mobileMenuOpen={mobileMenuOpen} 
//         />

//         <div className="p-4 md:p-6">
//           <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
//             {/* <VoteCard 
//               title="Road Maintenance"
//               imageSrc={logo}
//               initialVotes={0}
//             /> */}
//                <VoteCard
//               title={issue.title}
//               imageSrc={issue.attachments?.[0]?.url || ""}
//               initialVotes={issue.upvotes}
//             />
            
//             <CommentSection initialComments={comments} issueId={issueId} />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }










"use client"
import { useState, useEffect } from "react";
import Sidebar from "../../components/Rdashboard/Sidebar";
import Header from "../../components/Rdashboard/Header";
import VoteCard from "../../components/Rdashboard/VoteCard";
import CommentSection from "../../components/Rdashboard/CommentSection";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ReviewsAndComments() {
  const { issueId } = useParams();
  const [issue, setIssue] = useState(null);
  const [comments, setComments] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchIssueDetails = async () => {
      try {
        const res = await axios.get(`/api/issues/${issueId}`, {
        // const res = await axios.get(`http://localhost:5000/api/issues/${issueId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setIssue(res.data.issue);
        setComments(res.data.issue.comments || []);
      } catch (error) {
        console.error("Error fetching issue details:", error);
      }
    };
    fetchIssueDetails();
  }, [issueId]);

  if (!issue) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <div className="flex-1 ">
        <Header 
          setMobileMenuOpen={setMobileMenuOpen} 
          mobileMenuOpen={mobileMenuOpen} 
        />

        <div className="p-4 md:p-6 md:ml-[80px]">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            <VoteCard
              title={issue.title}
              description={issue.description}
              issueId={issueId} 
              imageSrc={issue.attachments?.[0]?.url || ""}
              initialVotes={issue.upvotes}
            />
            <CommentSection 
              initialComments={comments} 
              issueId={issueId} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
